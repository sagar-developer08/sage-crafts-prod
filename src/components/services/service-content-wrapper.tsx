import React from "react";
import Image from "next/image";
import { ServiceInfo } from "../../types/homeData";

type ServiceContentWrapperProps = {
  serviceInfo?: ServiceInfo;
};

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/doihobmas/image/upload/v1766052950/image-not-found_0221202211372462137974b6c1a_uceest.png";

const isExternalFallback = (src?: string) =>
  src === FALLBACK_IMAGE;


const defaultLeftImage = {
  src: "/assets/imgs/gallery/image-10.webp",
  alt: "Service info visual",
  width: 250,
  height: 320,
  speed: "0.9",
};

const defaultRightImage = {
  src: "/assets/imgs/gallery/image-11.webp",
  alt: "Service related",
  width: 740,
  height: 930,
  speed: "0.8",
};

const defaultParagraphs = [
  "A practical guide explaining how and why Redox should be part of every project to ensure its high quality and seamless user experience.",
  "If you already understand ask to continue scrolling; otherwise, click the link below to explore more.",
];

const getSafeImageSrc = (src?: string) => {
  if (!src || typeof src !== "string") return FALLBACK_IMAGE;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return src;
  return FALLBACK_IMAGE;
};

export default function ServiceContentWrapper({
  serviceInfo,
}: ServiceContentWrapperProps) {
  const leftImage = serviceInfo?.leftImage ?? defaultLeftImage;
  const rightImage = serviceInfo?.rightImage ?? defaultRightImage;

  const paragraphs =
    serviceInfo?.paragraphs && serviceInfo.paragraphs.length > 0
      ? serviceInfo.paragraphs
      : defaultParagraphs;

  return (
    <div className="service-content-wrapper section-spacing-top">
      <div className="service-content">
        <div
          className="section-info-wrapper fade-anim"
          data-direction="left"
        >
          <div className="thumb parallax-view">
            <Image
  src={getSafeImageSrc(leftImage.src)}
  alt={leftImage.alt}
  data-speed={leftImage.speed}
  width={leftImage.width ?? 100}
  height={leftImage.height ?? 100}
  style={{ height: "auto" }}
  unoptimized={isExternalFallback(getSafeImageSrc(leftImage.src))}
/>

          </div>

          <div className="text-wrapper">
            {paragraphs.map((p, idx) => (
              <p className="text text-invert-scroll" key={idx}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div
          className="section-thumb-wrapper fade-anim"
          data-delay="0.45"
          data-direction="right"
        >
          <div className="thumb parallax-view">
            <Image
              src={getSafeImageSrc(rightImage.src)}
              alt={rightImage.alt}
              data-speed={rightImage.speed}
              width={rightImage.width ?? 740}
              height={rightImage.height ?? 930}
              style={{ height: "auto" }}
              unoptimized={isExternalFallback(getSafeImageSrc(rightImage.src))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
