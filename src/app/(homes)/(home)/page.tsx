import { Metadata } from 'next';
import { getSeoMetadata } from '@/utils/seo';
import HomePage from './_components/home-page';

/**
 * Generate dynamic SEO metadata for the Home page
 * Fetches SEO data from the backend API and maps it to Next.js Metadata
 * Falls back to defaults if the API is unavailable
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata('home', {
    // Page-specific fallback defaults (used if API fails)
    title: 'Sage Craft – Creative Agency',
    description: 'Creative agency specializing in branding and UI/UX',
    canonicalUrl: 'https://sagecraft.com',
  });
}

/**
 * Home Page - Server Component
 * Renders the client-side HomePage component
 * SEO metadata is handled by generateMetadata() above
 */
export default function Home() {
  return <HomePage />;
}
