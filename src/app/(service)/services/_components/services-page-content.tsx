"use client";

import { useEffect, useState } from "react";
import { ApiResponse } from "@/types/homeData";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import PageTitle from "@/components/common/page-title";
import ServiceAreaSix from "@/components/services/service-area-6";
import ClientAreaFour from "@/components/client/client-area-4";
import ServiceWrapper from "./service-wrapper";
import PageLoader from "@/components/common/page-loader";

export default function ServicesPageContent() {
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

        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          // If response starts with HTML, it's an error page
          if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
            throw new Error("API returned HTML error page");
          }
          // Try to parse as JSON anyway if it's not HTML
          const jsonResponse: ApiResponse = JSON.parse(text);
          setData(jsonResponse);
          return;
        }

        const jsonResponse: ApiResponse = await response.json();
        setData(jsonResponse);
      } catch (err) {
        console.error(err);
        setError("Failed to load Services page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  if (error || !data) {
    return (
      <section className="page-title-area">
        <div className="container large section-spacing-top">
          <p>{error || "No data found."}</p>
        </div>
      </section>
    );
  }

  const serviceInfo =
    data.services && data.services.length > 0 ? data.services[0] : undefined;

  const serviceSection = data?.home?.serviceSection;
  const clientSection = data?.home?.clientSection;

  return (
    <>
      <HeaderTwo />

      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <ServiceWrapper>
          <main>
            <PageTitle title="Expertise" />

            <ServiceAreaSix
              serviceInfo={serviceInfo}
              serviceSection={serviceSection}
            />

            <ClientAreaFour clientSection={clientSection} />
          </main>

          <Footer />
        </ServiceWrapper>
      </MainWrapper>
    </>
  );
}
