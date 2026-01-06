import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import AboutPageContent from "./_components/about-page-content";

/**
 * Generate dynamic SEO metadata for the About page
 * Fetches SEO data from the backend API and maps it to Next.js Metadata
 * Falls back to defaults if the API is unavailable
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("about", {
    // Page-specific fallback defaults (used if API fails)
    title: "About Us – Sage Craft",
    description: "Learn about Sage Craft, a creative agency specializing in branding and UI/UX since 2012",
    canonicalUrl: "https://sagecraft.com/about",
  });
}

/**
 * About Page - Server Component
 * Renders the client-side AboutPageContent component
 * SEO metadata is handled by generateMetadata() above
 */
export default function AboutPage() {
  return <AboutPageContent />;
}
