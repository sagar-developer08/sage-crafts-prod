import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import PortfolioPageContent from "./_components/portfolio-page-content";

/**
 * Generate dynamic SEO metadata for the Portfolio page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("portfolio", {
    title: "Portfolio – Sage Craft",
    description: "Explore our creative portfolio showcasing branding, UI/UX, and web design projects.",
    canonicalUrl: "https://sagecraft.com/portfolio",
  });
}

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
