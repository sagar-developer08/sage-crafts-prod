import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import FAQArea from "@/components/faq/faq-area";
import ServiceDetailsWrapper from "./_components/service-details-wrapper";
import ServiceDetailsHero from "./_components/service-details-hero";
import ServiceDetailsApproach from "./_components/service-details-approach";
import ServiceDetailsFeature from "./_components/service-details-feature";
import ServiceDetailsValueArea from "./_components/service-details-value-area";

/**
 * Generate dynamic SEO metadata for the Service Details page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("service-details", {
    title: "Service Details – SageCrafts",
    description: "Learn more about our specialized services and how we can help your business grow.",
    canonicalUrl: "https://sagecrafts.in/service-details",
  });
}

export default function ServiceDetailsPage() {
  return (
    <>
      {/* Header area start */}
      <HeaderTwo />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <ServiceDetailsWrapper>
          <main>
            {/* service details hero area start */}
            <ServiceDetailsHero />
            {/* service details hero area end */}

            {/* service details approach area start */}
            <ServiceDetailsApproach />
            {/* service details approach area end */}

            {/* service details feature area start */}
            <ServiceDetailsFeature />
            {/* service details feature area end */}

            {/* service details value area start */}
            <ServiceDetailsValueArea />
            {/* service details value area end */}

            {/* service details faq area start */}
            <FAQArea />
            {/* service details faq area end */}
          </main>

          {/* Footer area start */}
          <Footer />
          {/* Footer area end */}
        </ServiceDetailsWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
