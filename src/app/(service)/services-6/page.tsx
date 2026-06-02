import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import ServiceWrapper from "./_components/service-6-wrapper";
import ClientAreaFour from "@/components/client/client-area-4";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import CapabilitiesAreaTwo from "@/components/capabilities/capability-area-2";

/**
 * Generate dynamic SEO metadata for the Services 6 page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services-6", {
    title: "Our Services – SageCrafts",
    description: "Discover our expertise in branding, UI/UX design, web development, and creative solutions.",
    canonicalUrl: "https://sagecrafts.in/services-6",
  });
}

export default function ServiceSixPage() {
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
            <section className="service-area-service-page">
              <div className="service-area-service-page-inner">
                <CapabilitiesAreaTwo
                  sec_spacing=""
                  sec_wrapper_cls="mt-0 mb-0"
                  show_explore={false}
                />
                <div className="container large">
                  <ServiceContentWrapper />
                </div>
              </div>
            </section>
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
