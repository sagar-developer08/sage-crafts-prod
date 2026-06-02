import { Metadata } from "next";
import { getSeoMetadata } from "@/utils/seo";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import ContactWrapper from "./_components/contact-wrapper";
import ContactArea from "./_components/contact-area";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";

/**
 * Generate dynamic SEO metadata for the Contact page
 */
export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("contact", {
    title: "Contact Us | Start Your Project with SageCrafts",
    description: "Ready to elevate your digital presence? Contact SageCrafts today for a free consultation on branding, design, or development.",
    canonicalUrl: "https://sagecrafts.in/contact",
  });
}

export default function ContactPage() {
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
        <ContactWrapper>
          <main>
            {/* page title area start */}
            <PageTitle title="Contact" />
            {/* page title area end */}

            {/* contact area start */}
            <ContactArea />
            {/* contact area end */}
          </main>

          {/* Footer area start */}
          <Footer />
          {/* Footer area end */}
        </ContactWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
