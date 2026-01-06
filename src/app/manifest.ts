import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  
  let siteName = 'Sage Craft';
  let siteUrl = 'https://sagecrafts.in';
  let description = 'Creative agency and portfolio website';

  // Try to fetch company settings for dynamic manifest
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/company-settings`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
      });

      if (response.ok) {
        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const settings = await response.json();
          siteName = settings.companyName || siteName;
          siteUrl = settings.website || siteUrl;
        } else {
          const text = await response.text();
          // If response starts with HTML, skip parsing
          if (!text.trim().startsWith('<!DOCTYPE') && !text.trim().startsWith('<html')) {
            try {
              const settings = JSON.parse(text);
              siteName = settings.companyName || siteName;
              siteUrl = settings.website || siteUrl;
            } catch {
              // Ignore parse errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Error fetching company settings for manifest:', error);
    }
  }

  return {
    name: siteName,
    short_name: siteName,
    description: description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/imgs/logo/sagecrafts-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/assets/imgs/logo/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}

