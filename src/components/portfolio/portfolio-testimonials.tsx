"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortfolioItem, ProjectItem } from "@/types/homeData";

const MAX_CARDS = 18;

type TestimonialSlide = {
  key: string;
  quote: string;
  name: string;
  role: string;
  href?: string;
  projectTitle?: string;
};

const FALLBACK: Omit<TestimonialSlide, "key">[] = [
  {
    quote:
      "Sage Craft delivered a thoughtful product experience, clear communication, and reliable engineering support from kickoff to launch.",
    name: "Product leadership",
    role: "SaaS & mobile delivery",
  },
  {
    quote:
      "The team moved fast without sacrificing quality—design, build, and iteration felt structured and easy to follow.",
    name: "Engineering partner",
    role: "Platform modernization",
  },
  {
    quote:
      "We finally had one partner who could connect strategy, UX, and development under one roof.",
    name: "Founder",
    role: "Startup growth",
  },
];

function flattenProjects(portfolio: PortfolioItem[] | undefined): ProjectItem[] {
  if (!portfolio?.length) return [];
  return portfolio.flatMap((p) => p.projects || []);
}

function buildQuote(p: ProjectItem): string {
  const direct = p.overviewText?.trim();
  if (direct) return direct;
  const cat = (p.category || "").toLowerCase();
  const client = p.client?.trim() || "the client";
  if (cat.includes("mobile") || cat.includes("app")) {
    return `${client} needed a mobile experience that was fast, reliable, and easy to scale—we shipped a focused product roadmap and polished execution.`;
  }
  if (cat.includes("learn") || cat.includes("education") || cat.includes("e-learning")) {
    return `${client} wanted an engaging learning experience with clear content structure—we helped design and build a platform students and admins could trust.`;
  }
  if (cat.includes("bank") || cat.includes("fintech") || cat.includes("finance")) {
    return `${client} required secure, compliant mobile workflows with a premium UX—we delivered a stable release process and a confident user experience.`;
  }
  if (cat.includes("vendor") || cat.includes("crm") || cat.includes("cms")) {
    return `${client} needed vendor operations to be simple and trackable with strong admin tooling—we built CRM and CMS capabilities that keep teams aligned.`;
  }
  if (cat.includes("ai") || cat.includes("ml") || cat.includes("machine")) {
    return `${client} wanted practical AI/ML value—not demos—we built product workflows that make teams faster with measurable outcomes.`;
  }
  return `Working with ${client} on ${p.title} was a strong partnership: clear goals, fast iteration, and a launch-ready delivery.`;
}

function buildAttribution(p: ProjectItem): { name: string; role: string } {
  const name = p.client?.trim() || p.title.split("—")[0].trim() || "Client partner";
  const role = [p.category, p.year].filter(Boolean).join(" · ");
  return { name, role: role || "Project" };
}

type Props = {
  portfolio?: PortfolioItem[];
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

export default function PortfolioTestimonials({ portfolio }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const projectItems = useMemo(() => {
    const raw = flattenProjects(portfolio);
    const seen = new Set<string>();
    const deduped: ProjectItem[] = [];
    for (const p of raw) {
      const key = p.slug || p._id;
      if (seen.has(key)) continue;
      seen.add(key);
      deduped.push(p);
    }
    return deduped
      .filter((p) => p?.title)
      .sort((a, b) => (b.year || 0) - (a.year || 0))
      .slice(0, MAX_CARDS);
  }, [portfolio]);

  const slides: TestimonialSlide[] = useMemo(() => {
    if (projectItems.length > 0) {
      return projectItems.map((p) => {
        const { name, role } = buildAttribution(p);
        const href = p.slug ? `/portfolio-details/${p.slug}` : undefined;
        return {
          key: p._id,
          quote: buildQuote(p),
          name,
          role,
          href,
          projectTitle: p.title,
        };
      });
    }
    return FALLBACK.map((f, i) => ({
      key: `fallback-${i}`,
      ...f,
    }));
  }, [projectItems]);

  const jsonLd = useMemo(() => {
    if (projectItems.length === 0) return null;
    const site =
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) || "https://sagecrafts.in";
    const list = projectItems.map((p) => {
      const { name, role } = buildAttribution(p);
      return {
        "@type": "Review",
        name: p.title,
        reviewBody: buildQuote(p),
        author: { "@type": "Person", name },
        itemReviewed: { "@type": "CreativeWork", name: p.title },
        about: role,
        url: p.slug ? `${String(site).replace(/\/$/, "")}/portfolio-details/${p.slug}` : undefined,
      };
    });
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Client feedback — selected projects",
      itemListElement: list.map((review, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: review,
      })),
    };
  }, [projectItems]);

  const hasMultiple = slides.length > 1;
  const showNav = hasMultiple;
  const autoplayEnabled = hasMultiple && !prefersReducedMotion;

  return (
    <section
      className="portfolio-testimonials"
      aria-labelledby="portfolio-testimonials-heading"
    >
      {jsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <div className="container large">
        <div className="portfolio-testimonials__header fade-anim">
          <p className="portfolio-testimonials__eyebrow">Testimonials</p>
          <h2
            className="portfolio-testimonials__title font-sequelsans-romanbody"
            id="portfolio-testimonials-heading"
          >
            What clients say about working with us
          </h2>
          <p className="portfolio-testimonials__intro">
            Real project stories and category-informed highlights. Open a case study for full detail, or browse{" "}
            <Link href="/portfolio">all portfolio work</Link>.
          </p>
        </div>

        <div
          className="portfolio-testimonials__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <Swiper
            className="portfolio-testimonials__swiper"
            modules={[Autoplay, Pagination, Navigation]}
            speed={prefersReducedMotion ? 200 : 560}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            loop={false}
            rewind={hasMultiple}
            watchSlidesProgress
            autoplay={
              autoplayEnabled
                ? {
                    delay: 7200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            pagination={{
              clickable: true,
              dynamicBullets: slides.length > 8,
              dynamicMainBullets: 3,
            }}
            navigation={showNav}
            grabCursor
          >
            {slides.map((s) => (
              <SwiperSlide key={s.key} className="portfolio-testimonials__slide">
                <article
                  className="portfolio-testimonials__card"
                  aria-label={s.projectTitle ? `Testimonial: ${s.projectTitle}` : `Testimonial from ${s.name}`}
                >
                  <p className="portfolio-testimonials__quote">{s.quote}</p>
                  <div className="portfolio-testimonials__meta">
                    <span className="portfolio-testimonials__name">{s.name}</span>
                    <span className="portfolio-testimonials__role">{s.role}</span>
                    {s.href && s.projectTitle ? (
                      <Link href={s.href} className="portfolio-testimonials__project-link">
                        View case: {s.projectTitle} →
                      </Link>
                    ) : null}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
