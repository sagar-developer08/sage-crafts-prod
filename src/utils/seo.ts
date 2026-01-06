import { Metadata } from 'next';

// SEO API response types
export interface SeoRobots {
  index: boolean;
  follow: boolean;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  robots: SeoRobots;
}

export interface SeoApiResponse {
  success: boolean;
  data: SeoData;
}

// Default SEO configuration
const DEFAULT_SEO: SeoData = {
  title: 'Sage Craft – Creative Agency',
  description: 'Creative agency and portfolio website',
  keywords: ['creative agency', 'branding', 'ui ux', 'portfolio'],
  ogImage: '/assets/imgs/og/default.png',
  canonicalUrl: 'https://sagecraft.com',
  robots: {
    index: true,
    follow: true,
  },
};

// Site-wide defaults
const SITE_NAME = 'Sage Craft';
const DEFAULT_OG_IMAGE = '/assets/imgs/og/default.png';

/**
 * Fetches SEO data from the backend API for a specific page
 * @param page - The page key (e.g., 'home', 'about', 'services', 'contact')
 * @returns SEO data or null if fetch fails
 */
export async function fetchSeoData(page: string): Promise<SeoData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_FRONTEND_API_URL is not defined');
      return null;
    }

    const response = await fetch(`${apiUrl}/seo/${page}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds, adjust as needed
    });

    if (!response.ok) {
      console.warn(`SEO API returned ${response.status} for page: ${page}`);
      return null;
    }

    const result: SeoApiResponse = await response.json();

    if (!result.success || !result.data) {
      console.warn(`SEO API returned unsuccessful response for page: ${page}`);
      return null;
    }

    return result.data;
  } catch (error) {
    console.error(`Failed to fetch SEO data for page: ${page}`, error);
    return null;
  }
}

/**
 * Generates Next.js Metadata object from SEO data
 * Uses fallback defaults if SEO data is not available
 * @param seoData - SEO data from the API (can be null)
 * @param pageDefaults - Optional page-specific default overrides
 * @returns Next.js Metadata object
 */
export function generateSeoMetadata(
  seoData: SeoData | null,
  pageDefaults?: Partial<SeoData>
): Metadata {
  // Merge with defaults: API data > page defaults > global defaults
  const seo: SeoData = {
    ...DEFAULT_SEO,
    ...pageDefaults,
    ...(seoData || {}),
  };

  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    // Canonical URL
    alternates: {
      canonical: seo.canonicalUrl,
    },

    // Robots directives
    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
      googleBot: {
        index: seo.robots?.index ?? true,
        follow: seo.robots?.follow ?? true,
      },
    },

    // Open Graph metadata
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

/**
 * Convenience function that fetches SEO data and generates metadata in one call
 * @param page - The page key for the SEO API
 * @param pageDefaults - Optional page-specific default overrides
 * @returns Next.js Metadata object
 */
export async function getSeoMetadata(
  page: string,
  pageDefaults?: Partial<SeoData>
): Promise<Metadata> {
  const seoData = await fetchSeoData(page);
  return generateSeoMetadata(seoData, pageDefaults);
}
