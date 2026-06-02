import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import ServiceWrapper from "./_components/service-2-wrapper";
import ClientAreaFour from "@/components/client/client-area-4";
import ServiceAreaSeven from "@/components/services/service-area-7";

/**
 * Generate dynamic SEO metadata for the Services 2 page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services-2", {
    title: "Our Services – SageCrafts",
    description: "Discover our expertise in branding, UI/UX design, web development, and creative solutions.",
    canonicalUrl: "https://sagecrafts.in/services-2",
  });
}

export default function ServicesTwoPage() {
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
        <ServiceWrapper>
          <main>
            {/* page title area start */}
            <PageTitle title="Expertise" />
            {/* page title area end */}

            {/* services area start */}
            <ServiceAreaSeven />
            {/* services area end */}

            {/* client area start  */}
            <ClientAreaFour />
            {/* client area end  */}
          </main>

          {/* Footer area start */}
          <Footer />
          {/* Footer area end */}
        </ServiceWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
