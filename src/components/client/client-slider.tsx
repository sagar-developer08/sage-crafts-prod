"use client";
import React, { useMemo } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import client_1 from "@/assets/imgs/client/client-1.webp";
import client_2 from "@/assets/imgs/client/client-2.webp";
import client_3 from "@/assets/imgs/client/client-3.webp";
import client_4 from "@/assets/imgs/client/client-4.webp";
import client_5 from "@/assets/imgs/client/client-5.webp";
import client_6 from "@/assets/imgs/client/client-6.webp";
import client_7 from "@/assets/imgs/client/client-7.webp";
import client_8 from "@/assets/imgs/client/client-8.webp";
import { resolveClientImageSrc } from "./image-src";

const defaultClientImages = [
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
  client_8,
];

type ClientSliderProps = {
  companyNames?: string[];
};

export default function ClientSlider({ companyNames }: ClientSliderProps) {
  // Use companyNames from API if provided, otherwise use default images
  const clientImages = useMemo(() => {
    if (companyNames && companyNames.length > 0) {
      // Duplicate the array for seamless loop
      return [...companyNames, ...companyNames];
    }
    // Duplicate default images for seamless loop
    return [...defaultClientImages, ...defaultClientImages];
  }, [companyNames]);

  return (
    <Swiper
      slidesPerView="auto"
      loop={true}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      spaceBetween={0}
      speed={5000}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="client-slider-active"
    >
      {clientImages.map((src, idx) => (
        <SwiperSlide key={idx} style={{ width: "auto" }}>
          <div className="client-box">
            <Image 
              src={resolveClientImageSrc(src)} 
              alt="client" 
              width={170}
              height={170}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain"
              }} 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
