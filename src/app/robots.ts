import { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  
  if (!apiUrl) {
    // Fallback: disallow all if API URL is not configured
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  try {
    // Fetch production ready status from backend
    const response = await fetch(`${apiUrl}/seo-settings/robots-status`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      // If API fails, disallow all for safety
      return {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
      };
    }

    // Check if response is JSON before parsing
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      // If response starts with HTML, it's an error page
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
        console.warn('API returned HTML instead of JSON for robots status');
        return {
          rules: {
            userAgent: '*',
            disallow: '/',
          },
        };
      }
      // Try to parse as JSON anyway if it's not HTML
      try {
        const data = JSON.parse(text);
        const productionReady = data.productionReady ?? false;
        const siteUrl = data.siteUrl || 'https://sagecrafts.in';

        if (!productionReady) {
          return {
            rules: {
              userAgent: '*',
              disallow: '/',
            },
          };
        }

        return {
          rules: {
            userAgent: '*',
            allow: '/',
          },
          sitemap: `${siteUrl}/sitemap.xml`,
        };
      } catch {
        return {
          rules: {
            userAgent: '*',
            disallow: '/',
          },
        };
      }
    }

    const data = await response.json();
    const productionReady = data.productionReady ?? false;
    const siteUrl = data.siteUrl || 'https://sagecrafts.in';

    if (!productionReady) {
      // Site is not ready for production - disallow all crawlers
      return {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
      };
    }

    // Site is ready for production - allow all crawlers
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  } catch (error) {
    console.error('Error fetching robots status:', error);
    // On error, disallow all for safety
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }
}

