import Image from "next/image";
import Link from "next/link";
import { AboutData } from "@/types/homeData";

type AboutAreaDetailsProps = {
  aboutArea?: AboutData["aboutArea"];
};

const defaultInfoList = {
  items: ["Art Direction", "Capability", "Sustainability"],
};

const defaultParagraphs = [
  "Sage Craft is the first and only creative agency for your real exploration. It's one private place to save everything you can realize about digital beautifully design.",
  "As a global creative agency, we understand the importance of staying ahead of the game. That's why we partner with some of the world's best talent to bring fresh ideas.",
];

export default function AboutAreaDetails({ aboutArea }: AboutAreaDetailsProps) {
  const infoList = aboutArea?.infoList?.items || defaultInfoList.items;
  const paragraphs = aboutArea?.paragraphs || defaultParagraphs;
  const galleryImages = aboutArea?.galleryImages || [];

  return (
    <section className="about-area-details">
      <div className="container large">
        <div className="about-area-details-inner">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">About studio</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Crafting digital products with a unique — vision of making
                  user experience better.
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content-wrapper fade-anim">
            <div className="info-list">
              <ul>
                {infoList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="section-content">
              <div className="text-wrapper" data-direction="right">
                {paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="btn-wrapper" data-direction="right">
                <Link href="/about" className="rr-btn">
                  <span className="btn-wrap">
                    <span className="text-one">Explore Services</span>
                    <span className="text-two">Explore Services</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {galleryImages.length > 0 && (
        <div className="moving-gallery fade-anim">
          <ul className="wrapper-gallery">
            {[...galleryImages, ...galleryImages].map((galleryImage, i) => (
              <li key={i}>
                <Image
                  src={galleryImage.imageUrl}
                  alt={galleryImage.alt || `image-${i}`}
                  width={400}
                  height={300}
                  style={{ height: "auto" }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
