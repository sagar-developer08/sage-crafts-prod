import { Metadata } from "next";
import { getSeoMetadata, fetchSeoData, generateSeoMetadata } from "@/utils/seo";
import PortfolioDetailsContent from "./portfolio-details-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate dynamic SEO metadata for individual portfolio project pages
 * Fetches SEO data from backend using project slug
 * Backend stores project SEO with page key format: "project:{slug}"
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Fetch project-specific SEO from backend
  // Backend uses "project:{slug}" format for individual project SEO
  const seoData = await fetchSeoData(`project:${slug}`);
  
  if (seoData) {
    return generateSeoMetadata(seoData);
  }
  
  // Fallback to generic portfolio details SEO
  return getSeoMetadata("portfolio-details", {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} – SageCrafts`,
    description: "View detailed case study of our creative project.",
    canonicalUrl: `https://sagecrafts.in/portfolio-details/${slug}`,
  });
}

export default async function PortfolioDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  
  return <PortfolioDetailsContent slug={slug} />;
}
