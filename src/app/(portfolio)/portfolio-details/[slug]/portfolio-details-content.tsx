"use client";

import { useEffect, useState } from "react";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterInner from "@/layout/footer/footer-inner";
import PortfolioDetailsWrapper from "../_components/portfolio-details-wrapper";
import PortfolioDetailsArea from "../_components/portfolio-details-area";
import PageLoader from "@/components/common/page-loader";

type DetailSection = {
  title: string;
  text: string;
};

type Project = {
  _id: string;
  title: string;
  slug?: string;
  year: number;
  category: string;
  imageUrl: string;
  serviceLabel?: string;
  client?: string;
  detailDate?: string;
  technologies?: string[];
  overviewTitle?: string;
  overviewText?: string;
  featureList?: string[];
  galleryImages?: string[];
  detailSections?: DetailSection[];
  finalImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
};

interface PortfolioDetailsContentProps {
  slug: string;
}

export default function PortfolioDetailsContent({ slug }: PortfolioDetailsContentProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setProject(null);
      setError(null);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiBaseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

        if (!apiBaseUrl) {
          throw new Error("NEXT_PUBLIC_FRONTEND_API_URL is not defined");
        }

        const encodedSlug = encodeURIComponent(slug);

        const res = await fetch(
          `${apiBaseUrl}/portfolio/projects/slug/${encodedSlug}`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data: Project = await res.json();
        setProject(data);
      } catch (err: any) {
        console.error("Error fetching project:", err);
        setError(err.message || "Failed to fetch project.");
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error or no project
  if (!project || error) {
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
          <PortfolioDetailsWrapper>
            <main>
              <section className="page-title-area">
                <div className="container large section-spacing-top">
                  <h2>Project not available</h2>
                  <p>{error || "No project data found for this slug."}</p>
                </div>
              </section>
            </main>
            <FooterInner />
          </PortfolioDetailsWrapper>
        </MainWrapper>
      </>
    );
  }

  // Success – render details
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
        <PortfolioDetailsWrapper>
          <main>
            <PortfolioDetailsArea project={project} />
          </main>
          <FooterInner />
        </PortfolioDetailsWrapper>
      </MainWrapper>
    </>
  );
}
