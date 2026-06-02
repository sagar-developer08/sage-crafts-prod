import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import ServicesPageContent from "./_components/services-page-content";

/**
 * Generate dynamic SEO metadata for the Services page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services", {
    title: "Our Services – SageCrafts",
    description: "Discover our expertise in branding, UI/UX design, web development, and creative solutions.",
    canonicalUrl: "https://sagecrafts.in/services",
  });
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
