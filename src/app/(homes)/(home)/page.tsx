import { Metadata } from 'next';
import { getSeoMetadata } from '@/utils/seo';
import { getSeoSettings } from '@/utils/seoSettings';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/utils/structured-data';
import StructuredData from '@/components/seo/StructuredData';
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
    canonicalUrl: 'https://sagecrafts.in',
  });
}

/**
 * Home Page - Server Component
 * Renders the client-side HomePage component
 * SEO metadata is handled by generateMetadata() above
 */
export default async function Home() {
  // Fetch SEO settings for structured data
  const seoSettings = await getSeoSettings();
  
  // Generate Organization Schema
  const organizationSchema = generateOrganizationSchema({
    name: 'Sage Craft',
    url: seoSettings.siteUrl,
    logo: `${seoSettings.siteUrl}/assets/imgs/logo/sagecrafts-logo.png`,
    description: 'Creative agency specializing in branding and UI/UX',
  });

  // Generate Website Schema
  const websiteSchema = generateWebsiteSchema({
    name: 'Sage Craft',
    url: seoSettings.siteUrl,
    description: 'Creative agency and portfolio website',
    publisherName: 'Sage Craft',
  });

  return (
    <>
      <StructuredData data={organizationSchema} id="organization-schema" />
      <StructuredData data={websiteSchema} id="website-schema" />
      <HomePage />
    </>
  );
}
