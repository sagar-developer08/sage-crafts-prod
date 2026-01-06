/**
 * Fetches SEO settings from backend
 * Used for root layout metadata
 */
export async function getSeoSettings() {
  const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  
  if (!apiUrl) {
    return {
      productionReady: false,
      siteUrl: 'https://sagecrafts.in',
      googleVerificationCode: '',
      bingVerificationCode: '',
      googleAnalyticsId: '',
      googleTagManagerId: '',
      defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
    };
  }

  try {
    const response = await fetch(`${apiUrl}/seo-settings`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return {
        productionReady: false,
        siteUrl: 'https://sagecrafts.in',
        googleVerificationCode: '',
        bingVerificationCode: '',
        googleAnalyticsId: '',
        googleTagManagerId: '',
        defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
      };
    }

    // Check if response is JSON before parsing
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      // If response starts with HTML, it's an error page
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
        console.warn('API returned HTML instead of JSON for SEO settings');
        return {
          productionReady: false,
          siteUrl: 'https://sagecrafts.in',
          googleVerificationCode: '',
          bingVerificationCode: '',
          googleAnalyticsId: '',
          googleTagManagerId: '',
          defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
        };
      }
      // Try to parse as JSON anyway if it's not HTML
      try {
        const result = JSON.parse(text);
        return result.data || {
          productionReady: false,
          siteUrl: 'https://sagecrafts.in',
          googleVerificationCode: '',
          bingVerificationCode: '',
          googleAnalyticsId: '',
          googleTagManagerId: '',
          defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
        };
      } catch {
        return {
          productionReady: false,
          siteUrl: 'https://sagecrafts.in',
          googleVerificationCode: '',
          bingVerificationCode: '',
          googleAnalyticsId: '',
          googleTagManagerId: '',
          defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
        };
      }
    }

    const result = await response.json();
    return result.data || {
      productionReady: false,
      siteUrl: 'https://sagecrafts.in',
      googleVerificationCode: '',
      bingVerificationCode: '',
      googleAnalyticsId: '',
      googleTagManagerId: '',
      defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
    };
  } catch (error) {
    console.error('Error fetching SEO settings:', error);
    return {
      productionReady: false,
      siteUrl: 'https://sagecrafts.in',
      googleVerificationCode: '',
      bingVerificationCode: '',
      googleAnalyticsId: '',
      googleTagManagerId: '',
      defaultOgImage: '/assets/imgs/logo/sagecrafts-logo.png',
    };
  }
}

