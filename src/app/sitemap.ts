import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  
  if (!apiUrl) {
    // Fallback: return empty sitemap if API URL is not configured
    return [];
  }

  try {
    // Fetch sitemap data from backend
    const response = await fetch(`${apiUrl}/seo/sitemap-data`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return [];
    }

    // Check if response is JSON before parsing
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      // If response starts with HTML, it's an error page
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
        console.warn('API returned HTML instead of JSON for sitemap data');
        return [];
      }
      // Try to parse as JSON anyway if it's not HTML
      try {
        const data = JSON.parse(text);
        if (!data.productionReady || !data.pages || !Array.isArray(data.pages)) {
          return [];
        }
        return data.pages.map((page: any) => ({
          url: page.url,
          lastModified: new Date(page.lastmod),
          changeFrequency: page.changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
          priority: page.priority || 0.5,
        }));
      } catch {
        return [];
      }
    }

    const data = await response.json();
    
    // If not production ready, return empty sitemap
    if (!data.productionReady || !data.pages || !Array.isArray(data.pages)) {
      return [];
    }

    // Convert pages to sitemap format
    return data.pages.map((page: any) => ({
      url: page.url,
      lastModified: new Date(page.lastmod),
      changeFrequency: page.changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
      priority: page.priority || 0.5,
    }));
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    return [];
  }
}

