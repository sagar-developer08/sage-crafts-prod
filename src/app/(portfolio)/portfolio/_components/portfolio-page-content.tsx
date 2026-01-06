"use client";

import { useEffect, useState } from "react";
import { ApiResponse } from "@/types/homeData";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import PortfolioWrapper from "./portfolio-wrapper";
import PageTitle from "@/components/common/page-title";
import WorkAreaEight from "@/components/work/work-area-8";
import CustomCursor from "@/components/common/custom-cursor";
import PageLoader from "@/components/common/page-loader";

export default function PortfolioPageContent() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

        if (!apiUrl) {
          throw new Error("API_URL is not defined");
        }
        const response = await fetch(`${apiUrl}/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonResponse: ApiResponse = await response.json();
        setData(jsonResponse);
      } catch (err) {
        console.error(err);
        setError("Failed to load Portfolio page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <CustomCursor />
        <PageLoader />
      </>
    );
  }

  if (error || !data) {
    return (
      <>
        <CustomCursor />
        <section className="page-title-area">
          <div className="container large section-spacing-top">
            <p>{error || "No data found."}</p>
          </div>
        </section>
      </>
    );
  }

  const portfolioItems = data.portfolio;

  return (
    <>
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

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
        <PortfolioWrapper>
          <main>
            {/* page title area start */}
            <PageTitle title="Portfolio" />
            {/* page title area end */}

            {/* portfolio area start */}
            <WorkAreaEight portfolio={portfolioItems} />
            {/* portfolio area end */}
          </main>

          {/* Footer area start */}
          <FooterInner />
          {/* Footer area end */}
        </PortfolioWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
