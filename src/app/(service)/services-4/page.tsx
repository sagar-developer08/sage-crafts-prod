import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import ServiceFourWrapper from "./_components/service-4-wrapper";
import ClientAreaFour from "@/components/client/client-area-4";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import ServiceAreaFour from "@/components/services/service-area-4";

/**
 * Generate dynamic SEO metadata for the Services 4 page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services-4", {
    title: "Our Services – Sage Craft",
    description: "Discover our expertise in branding, UI/UX design, web development, and creative solutions.",
    canonicalUrl: "https://sagecraft.com/services-4",
  });
}

export default function ServicesFourPage() {
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
        <ServiceFourWrapper>
          <main>
            {/* page title area start */}
            <PageTitle title="Expertise" />
            {/* page title area end */}

            {/* services area start */}
            <section className="service-area-service-page">
              <div className="service-area-service-page-inner">
                <div className="container large">
                  <div className="section-header fade-anim">
                    <div className="section-title-wrapper">
                      <div className="subtitle-wrapper">
                        <span className="section-subtitle">Capabilities</span>
                      </div>
                      <div className="title-wrapper">
                        <h2 className="section-title font-sequelsans-romanbody">
                          We think out of the box when it comes to creative
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* service 4 area */}
                <ServiceAreaFour wrapperCls="mt-0" />
                {/* service 4 area */}
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
        </ServiceFourWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
