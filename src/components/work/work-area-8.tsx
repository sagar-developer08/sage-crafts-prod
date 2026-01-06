// // components/work/work-area-8.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { PortfolioItem } from "../../types/homeData"; // adjust path if needed

// type WorkItem = {
//   title: string;
//   image: string;
//   date: string;
//   tag: string;
// };

// const defaultWorksData: WorkItem[] = [
//   {
//     title: "Harash Denmark",
//     image: "/assets/imgs/project/image-19.webp",
//     date: "2010",
//     tag: "Branding",
//   },
//   {
//     title: "Saudi Lime Green",
//     image: "/assets/imgs/project/image-20.webp",
//     date: "2010",
//     tag: "Marketing",
//   },
//   {
//     title: "Saudi Venture Capital",
//     image: "/assets/imgs/project/image-21.webp",
//     date: "2010",
//     tag: "Marketing",
//   },
//   {
//     title: "Nilachal Network",
//     image: "/assets/imgs/project/image-22.webp",
//     date: "2010",
//     tag: "Marketing",
//   },
//   {
//     title: "Royal Cash App",
//     image: "/assets/imgs/project/image-23.webp",
//     date: "2010",
//     tag: "Design",
//   },
//   {
//     title: "Mashup Gradient",
//     image: "/assets/imgs/project/image-24.webp",
//     date: "2010",
//     tag: "Design",
//   },
//   {
//     title: "House of Shapes",
//     image: "/assets/imgs/project/image-25.webp",
//     date: "2010",
//     tag: "Marketing",
//   },
//   {
//     title: "Ocean Harmony",
//     image: "/assets/imgs/project/image-26.webp",
//     date: "2010",
//     tag: "Branding",
//   },
//   {
//     title: "Wave Coxsheet",
//     image: "/assets/imgs/project/image-27.webp",
//     date: "2010",
//     tag: "Design",
//   },
//   {
//     title: "Padro Alex Garoat",
//     image: "/assets/imgs/project/image-28.webp",
//     date: "2010",
//     tag: "Branding",
//   },
// ];

// type WorkAreaEightProps = {
//   portfolio?: PortfolioItem[];
// };

// const defaultInfoList = ["Design", "Development", "Marketing", "Writing"];

// const defaultDescription =
//   "We take a comprehensive approach to the creation and development of brands. We help local companies and services enter the market, and well-known brands expand an audience.";

// const WorkAreaEight = ({ portfolio }: WorkAreaEightProps) => {
//   // Info list: from first portfolio.recentWork.services if available, else fallback
//   const infoList =
//     portfolio &&
//     portfolio.length > 0 &&
//     portfolio[0].recentWork?.services &&
//     portfolio[0].recentWork.services.length > 0
//       ? portfolio[0].recentWork.services
//       : defaultInfoList;

//   const description = defaultDescription; // no description field in schema yet, so keep static

//   // Build works list from all projects in portfolio
//   const worksFromApi: WorkItem[] =
//     portfolio && portfolio.length > 0
//       ? portfolio.flatMap((p) =>
//           p.projects.map((proj) => ({
//             title: proj.title,
//             image: proj.imageUrl,
//             date: proj.year.toString(),
//             tag: proj.category,
//           }))
//         )
//       : [];

//   const worksToRender =
//     worksFromApi.length > 0 ? worksFromApi : defaultWorksData;

//   return (
//     <section className="work-area-work-page">
//       <div className="work-area-work-page-inner">
//         <div className="container large">
//           {/* Section Header */}
//           <div className="section-header fade-anim">
//             <div className="section-title-wrapper">
//               <div className="subtitle-wrapper">
//                 <span className="section-subtitle">Recent work</span>
//               </div>
//               <div className="title-wrapper">
//                 <h2 className="section-title font-sequelsans-romanbody">
//                   Creative works
//                   <br /> with our incredible
//                   <br /> people.
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* Section Content */}
//           <div className="section-content-wrapper fade-anim">
//             <div className="info-list">
//               <ul>
//                 {infoList.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="section-content">
//               <div className="text-wrapper" data-direction="right">
//                 <p className="text">{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Works Grid */}
//         <div className="works-wrapper-box">
//           <div className="container large">
//             <div className="works-wrapper-8">
//               {worksToRender.map((work, index) => (
//                 <div className="work-box" key={index}>
//                   <div className="thumb">
//                     <div
//                       className="image scale"
//                       data-cursor-text="View Project"
//                     >
//                       <Link href="/portfolio-details">
//                         <Image
//                           src={work.image}
//                           alt={work.title}
//                           width={900}
//                           height={630}
//                           style={{ height: "auto" }}
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="content">
//                     <h3 className="title">
//                       <Link href="/portfolio-details">{work.title}</Link>
//                     </h3>
//                     <div className="meta">
//                       <span className="date">{work.date}</span>
//                       <span className="tag">{work.tag}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkAreaEight;


// components/work/work-area-8.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { PortfolioItem } from "../../types/homeData"; // adjust path if needed

// type WorkItem = {
//   title: string;
//   image: string;
//   date: string;
//   tag: string;
//   slug?: string;
// };

// const defaultWorksData: WorkItem[] = [
//   {
//     title: "Harash Denmark",
//     image: "/assets/imgs/project/image-19.webp",
//     date: "2010",
//     tag: "Branding",
//     slug: "harash-denmark",
//   },
//   {
//     title: "Saudi Lime Green",
//     image: "/assets/imgs/project/image-20.webp",
//     date: "2010",
//     tag: "Marketing",
//     slug: "saudi-lime-green",
//   },
//   {
//     title: "Saudi Venture Capital",
//     image: "/assets/imgs/project/image-21.webp",
//     date: "2010",
//     tag: "Marketing",
//     slug: "saudi-venture-capital",
//   },
//   {
//     title: "Nilachal Network",
//     image: "/assets/imgs/project/image-22.webp",
//     date: "2010",
//     tag: "Marketing",
//     slug: "nilachal-network",
//   },
//   {
//     title: "Royal Cash App",
//     image: "/assets/imgs/project/image-23.webp",
//     date: "2010",
//     tag: "Design",
//     slug: "royal-cash-app",
//   },
//   {
//     title: "Mashup Gradient",
//     image: "/assets/imgs/project/image-24.webp",
//     date: "2010",
//     tag: "Design",
//     slug: "mashup-gradient",
//   },
//   {
//     title: "House of Shapes",
//     image: "/assets/imgs/project/image-25.webp",
//     date: "2010",
//     tag: "Marketing",
//     slug: "house-of-shapes",
//   },
//   {
//     title: "Ocean Harmony",
//     image: "/assets/imgs/project/image-26.webp",
//     date: "2010",
//     tag: "Branding",
//     slug: "ocean-harmony",
//   },
//   {
//     title: "Wave Coxsheet",
//     image: "/assets/imgs/project/image-27.webp",
//     date: "2010",
//     tag: "Design",
//     slug: "wave-coxsheet",
//   },
//   {
//     title: "Padro Alex Garoat",
//     image: "/assets/imgs/project/image-28.webp",
//     date: "2010",
//     tag: "Branding",
//     slug: "padro-alex-garoat",
//   },
// ];

// type WorkAreaEightProps = {
//   portfolio?: PortfolioItem[];
// };

// const defaultInfoList = ["Design", "Development", "Marketing", "Writing"];

// const defaultDescription =
//   "We take a comprehensive approach to the creation and development of brands. We help local companies and services enter the market, and well-known brands expand an audience.";

// const WorkAreaEight = ({ portfolio }: WorkAreaEightProps) => {
//   // Info list: from first portfolio.recentWork.services if available, else fallback
//   const infoList =
//     portfolio &&
//     portfolio.length > 0 &&
//     portfolio[0].recentWork?.services &&
//     portfolio[0].recentWork.services.length > 0
//       ? portfolio[0].recentWork.services
//       : defaultInfoList;

//   const description = defaultDescription; // no description field in schema yet, so keep static

//   // Build works list from all projects in portfolio
//   const worksFromApi: WorkItem[] =
//     portfolio && portfolio.length > 0
//       ? portfolio.flatMap((p) =>
//           p.projects.map((proj) => ({
//             title: proj.title,
//             image: proj.imageUrl,
//             date: proj.year.toString(),
//             tag: proj.category,
//             slug: proj.slug, // <-- important
//           }))
//         )
//       : [];

//   const worksToRender =
//     worksFromApi.length > 0 ? worksFromApi : defaultWorksData;

//   return (
//     <section className="work-area-work-page">
//       <div className="work-area-work-page-inner">
//         <div className="container large">
//           {/* Section Header */}
//           <div className="section-header fade-anim">
//             <div className="section-title-wrapper">
//               <div className="subtitle-wrapper">
//                 <span className="section-subtitle">Recent work</span>
//               </div>
//               <div className="title-wrapper">
//                 <h2 className="section-title font-sequelsans-romanbody">
//                   Creative works
//                   <br /> with our incredible
//                   <br /> people.
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* Section Content */}
//           <div className="section-content-wrapper fade-anim">
//             <div className="info-list">
//               <ul>
//                 {infoList.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="section-content">
//               <div className="text-wrapper" data-direction="right">
//                 <p className="text">{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Works Grid */}
//         <div className="works-wrapper-box">
//           <div className="container large">
//             <div className="works-wrapper-8">
//               {worksToRender.map((work, index) => {
//                 const href = work.slug
//                   ? `/portfolio-details/${work.slug}`
//                   : "/portfolio-details";

//                 return (
//                   <div className="work-box" key={index}>
//                     <div className="thumb">
//                       <div
//                         className="image scale"
//                         data-cursor-text="View Project"
//                       >
//                         <Link href={href}>
//                           <Image
//                             src={work.image}
//                             alt={work.title}
//                             width={900}
//                             height={630}
//                             style={{ height: "auto" }}
//                           />
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="content">
//                       <h3 className="title">
//                         <Link href={href}>{work.title}</Link>
//                       </h3>
//                       <div className="meta">
//                         <span className="date">{work.date}</span>
//                         <span className="tag">{work.tag}</span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkAreaEight;



// components/work/work-area-8.tsx
import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "../../types/homeData";

type WorkItem = {
  title: string;
  image: string;
  date: string;
  tag: string;
  slug?: string;
};

const defaultWorksData: WorkItem[] = [
  {
    title: "Harash Denmark",
    image: "/assets/imgs/project/image-19.webp",
    date: "2010",
    tag: "Branding",
    slug: "harash-denmark",
  },
  {
    title: "Saudi Lime Green",
    image: "/assets/imgs/project/image-20.webp",
    date: "2010",
    tag: "Marketing",
    slug: "saudi-lime-green",
  },
  {
    title: "Saudi Venture Capital",
    image: "/assets/imgs/project/image-21.webp",
    date: "2010",
    tag: "Marketing",
    slug: "saudi-venture-capital",
  },
  // ...rest
];

type WorkAreaEightProps = {
  portfolio?: PortfolioItem[];
};

const defaultInfoList = ["Design", "Development", "Marketing", "Writing"];

const defaultDescription =
  "We take a comprehensive approach to the creation and development of brands. We help local companies and services enter the market, and well-known brands expand an audience.";

const WorkAreaEight = ({ portfolio }: WorkAreaEightProps) => {
  const infoList =
    portfolio &&
    portfolio.length > 0 &&
    portfolio[0].recentWork?.services &&
    portfolio[0].recentWork.services.length > 0
      ? portfolio[0].recentWork.services
      : defaultInfoList;

  const description = defaultDescription;

  const worksFromApi: WorkItem[] =
    portfolio && portfolio.length > 0
      ? portfolio.flatMap((p) =>
          p.projects.map((proj) => ({
            title: proj.title,
            image: proj.imageUrl,
            date: proj.year.toString(),
            tag: proj.category,
            slug: proj.slug, // <-- from API
          }))
        )
      : [];

  const worksToRender =
    worksFromApi.length > 0 ? worksFromApi : defaultWorksData;

  return (
    <section className="work-area-work-page">
      <div className="work-area-work-page-inner">
        <div className="container large">
          {/* Section Header */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Recent work</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Creative works
                  <br /> with our incredible
                  <br /> people.
                </h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="section-content-wrapper fade-anim">
            <div className="info-list">
              <ul>
                {infoList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="section-content">
              <div className="text-wrapper" data-direction="right">
                <p className="text">{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Works Grid */}
        <div className="works-wrapper-box">
          <div className="container large">
            <div className="works-wrapper-8">
              {worksToRender.map((work, index) => {
                const href = work.slug
                  ? `/portfolio-details/${work.slug}`
                  : "/portfolio-details";

                return (
                  <div className="work-box" key={index}>
                    <div className="thumb">
                      <div
                        className="image scale"
                        data-cursor-text="View Project"
                      >
                        <Link href={href}>
                          {work.image ? (
                            <Image
                              src={work.image}
                              alt={work.title ?? 'project image'}
                              width={900}
                              height={630}
                              style={{ height: "auto" }}
                            />
                          ) : (
                            <div
                              className="image-placeholder"
                              style={{ width: 900, height: 630, background: '#f3f3f3' }}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <Link href={href}>{work.title}</Link>
                      </h3>
                      <div className="meta">
                        <span className="date">{work.date}</span>
                        <span className="tag">{work.tag}</span>
                      </div>
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
};

export default WorkAreaEight;
