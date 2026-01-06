import Image from "next/image";
import shape from "@/assets/imgs/shape/shape-13.webp";
import { AboutData } from "@/types/homeData";

type ApproachAboutAreaProps = {
  approachSection?: AboutData["approachSection"];
};

const defaultSubtitle = "Approach";
const defaultHeading = "Method of making better result";

const defaultApproaches: AboutData["approachSection"]["approaches"] = [
  {
    title: "Problem discovery",
    showShape: true,
    items: [
      "Usability Studies",
      "User Interviews",
      "Stakeholder Interviews",
      "Competitive Research",
      "Insights Report",
      "User Journey",
    ],
  },
  {
    title: "Design system ready",
    showShape: true,
    items: [
      "Thinking Workshops",
      "Sitemaps",
      "Concepts",
      "Designs",
      "Prototypes",
      "Usability Studies",
    ],
  },
  {
    title: "Design implementation",
    showShape: false,
    items: [
      "Design",
      "Use Cases",
      "User Flows",
      "Various User Types",
      "Annotations",
      "Interactions",
    ],
  },
];

export default function ApproachAboutArea({
  approachSection,
}: ApproachAboutAreaProps) {
  const subtitle = approachSection?.subtitle || defaultSubtitle;
  const heading = approachSection?.heading || defaultHeading;
  const approaches =
    approachSection?.approaches && approachSection.approaches.length > 0
      ? approachSection.approaches
      : defaultApproaches;

  return (
    <section className="approach-area-about-page">
      <div className="container large">
        <div className="approach-area-about-page-inner">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  {heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="approach-wrapper-box">
            <div className="approach-wrapper fade-anim">
              {approaches.map((approach, idx) => {
                // Split title by "&" or "and" to create line breaks
                const titleParts = approach.title.split(/\s*&\s*|\s+and\s+/i);
                return (
                  <div key={idx} className="approach-box">
                    <h2 className="title">
                      {titleParts.length > 1 ? (
                        <>
                          {titleParts[0]}
                          <br />
                          {titleParts.slice(1).join(" & ")}
                        </>
                      ) : (
                        // If no "&" or "and", try to split by first space after 2-3 words
                        (() => {
                          const words = approach.title.split(" ");
                          if (words.length > 3) {
                            const midPoint = Math.ceil(words.length / 2);
                            return (
                              <>
                                {words.slice(0, midPoint).join(" ")}
                                <br />
                                {words.slice(midPoint).join(" ")}
                              </>
                            );
                          }
                          return approach.title;
                        })()
                      )}{" "}
                      {approach.showShape && (
                        <Image src={shape} alt="image" />
                      )}
                    </h2>
                    <div className="approach-list">
                      <ul>
                        {approach.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
