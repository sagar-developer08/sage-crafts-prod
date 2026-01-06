'use client';

import { useState, useEffect } from 'react';
import { ApiResponse } from '@/types/homeData';
import AboutOne from "@/components/about/about-one";
import ClientArea from "@/components/client/client-area";
import CtaArea from "@/components/cta/cta-area";
import FunFactArea from "@/components/fun-fact/fun-fact-area";
import HeroOne from "@/components/hero/hero-one";
import ParallaxImg from "@/components/parallax-img/parallax-img";
import ProductivityArea from "@/components/productivity/productivity-area";
import ServiceArea from "@/components/services/service-area";
import TextSlider from "@/components/text-slider/text-slider";
import VideoBox from "@/components/video/video-box";
import WorkArea from "@/components/work/work-area";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import Header from "@/layout/header/header-one";
import DigitalAgencyWrapper from "./digital-agency-wrapper";
import CustomCursor from "@/components/common/custom-cursor";

export default function HomePage() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

        if (!apiUrl) {
          throw new Error("API_URL is not defined");
        }
        const response = await fetch(`${apiUrl}/all`);
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          // If response starts with HTML, it's an error page
          if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
            console.error('API returned HTML instead of JSON');
            throw new Error('API returned HTML error page');
          }
          // Try to parse as JSON anyway if it's not HTML
          const jsonResponse = JSON.parse(text);
          setData(jsonResponse);
          return;
        }

        const jsonResponse = await response.json();
        setData(jsonResponse);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return null; // or a loading spinner
  }

  const heroData = data?.home?.hero;
  const aboutData = data?.home?.about;
  const videoUrl = data?.home?.video?.videoUrl ?? "https://rrdevs.net/project-video/group-meeting.mp4";
  
  // Extract all projects from portfolio array
  console.log("data in home page", data?.portfolio);
  const allProjects = data?.portfolio?.flatMap(portfolioItem => portfolioItem.projects) ?? [];

  // Get the first portfolio item for section header (recentWork)
  const portfolioItem = data?.portfolio?.[0];
  const recentWork = portfolioItem?.recentWork;

  const services = data?.home?.serviceSection?.services ?? [];
  const serviceSection = data?.home?.serviceSection;

  const funFactSection = data?.home?.funFactSection;
  const funFactItems = funFactSection?.items ?? [];

  const clientSection = data?.home?.clientSection;
  console.log("clientSection", clientSection);

  const parallax_img = data?.home?.parallaxImage ?? [];

  return (
    <>
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

      {/* Header area start */}
      <Header />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper bodyCls={['body-wrapper', 'body-digital-agency', 'font-heading-instrumentsans-medium']}>
        <DigitalAgencyWrapper>
          <main>
            {/* Hero area start */}
            {heroData && <HeroOne hero={heroData} />}
            {/* Hero area end */}

            {/* About area start */}
            {aboutData && <AboutOne about={aboutData} />}
            {/* About area end */}

            {/* Video area start */}
            <VideoBox videoUrl={videoUrl} />
            {/* Video area end */}

            {/* Work area start */}
            <section className="work-area">
              {/* Text slider start */}
              <TextSlider />
              {/* Text slider end */}

              {/* Work area start */}
              <WorkArea allProjects={allProjects} portfolioItem={portfolioItem} recentWork={recentWork} />
              {/* Work area end */}
            </section>
            {/* Work area end */}

            {/* Service area start */}
            <ServiceArea services={services} serviceSection={serviceSection} />
            {/* Service area end */}

            {/* Fun fact area start */}
            <FunFactArea funFactSection={funFactSection} funFactItems={funFactItems} />
            {/* Fun fact area end */}

            {/* Client area start */}
            <ClientArea isHome={true} clientSection={clientSection} />
            {/* Client area end */}

            {/* Cta area start */}
            <CtaArea />
            {/* Cta area end */}

            {/* Productivity area start */}
            <ProductivityArea />
            {/* Productivity area end */}

            {/* Parallax image start */}
            <ParallaxImg parallax_img={parallax_img} />
            {/* Parallax image end */}
          </main>

          {/* Footer area start */}
          <Footer />
          {/* Footer area end */}
        </DigitalAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
