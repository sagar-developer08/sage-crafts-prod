"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import logo from "@/assets/imgs/logo/sagecrafts-logo.png";

export const DEFAULT_PRODUCT_LABELS = [
  "API Builder",
  "Webly",
  "POS System",
  "Design System",
  "Cloud Sync",
  "Analytics Hub",
  "Zuno Platform",
];

type PortfolioProductMarqueeProps = {
  /** When provided (e.g. from CMS later), replaces default product list */
  products?: string[];
};

export default function PortfolioProductMarquee({
  products,
}: PortfolioProductMarqueeProps) {
  const labels = useMemo(() => {
    const list =
      products && products.length > 0 ? products : DEFAULT_PRODUCT_LABELS;
    return [...list, ...list];
  }, [products]);

  return (
    <section
      className="portfolio-product-marquee"
      aria-label="Product and platform highlights"
    >
      <div className="container large">
        <div className="portfolio-product-marquee__inner">
          <div className="portfolio-product-marquee__logo">
            <Link href="/" className="portfolio-product-marquee__logo-link">
              <Image
                src={logo}
                alt="Sage Crafts"
                width={220}
                height={80}
                className="portfolio-product-marquee__logo-img"
                style={{ width: "auto", height: "auto", maxHeight: 72 }}
                priority={false}
              />
            </Link>
          </div>

          <div className="portfolio-product-marquee__track">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              loop
              loopAdditionalSlides={4}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={4500}
              spaceBetween={18}
              allowTouchMove
              className="portfolio-product-marquee__swiper"
            >
              {labels.map((label, idx) => (
                <SwiperSlide
                  key={`${label}-${idx}`}
                  className="portfolio-product-marquee__slide"
                  style={{ width: "auto" }}
                >
                  <span className="portfolio-product-marquee__pill">
                    {label}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
