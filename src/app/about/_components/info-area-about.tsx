
// export default function InfoAreaAbout() {
//   return (
//     <section className="info-area-page-about">
//       <div className="container large">
//         <div className="info-area-page-about-inner section-spacing-top">

//           <div className="section-header fade-anim">
//             <div className="section-title-wrapper">
//               <div className="subtitle-wrapper">
//                 <span className="section-subtitle">Who are we?</span>
//               </div>
//               <div className="title-wrapper">
//                 <h2 className="section-title font-sequelsans-romanbody">We deliver creative
//                   ideas to a crowded world.</h2>
//               </div>
//             </div>
//           </div>
//           <div className="counter-wrapper-box fade-anim">
//             <div className="counter-wrapper">
//               <div className="funfact-item">
//                 <p className="text">35+ Google reviews</p>
//                 <h3 className="number t-counter">4.9</h3>
//               </div>
//               <div className="funfact-item">
//                 <p className="text">Clients world-wide</p>
//                 <h3 className="number t-counter">170+</h3>
//               </div>
//               <div className="funfact-item">
//                 <p className="text">Completed projects</p>
//                 <h3 className="number t-counter">1.7k</h3>
//               </div>
//               <div className="funfact-item">
//                 <p className="text">Client satisfaction</p>
//                 <h3 className="number t-counter">95%</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// app/about/_components/info-area-about.tsx
import { AboutData } from "../../../types/homeData";

type InfoAreaAboutProps = {
  infoSection: AboutData["infoSection"];
};

const defaultSubtitle = "Who are we?";
const defaultHeading = "We deliver creative ideas to a crowded world.";

// This matches InfoStatItem: { label: string; value: string }
const defaultStats: AboutData["infoSection"]["stats"] = [
  { label: "35+ Google reviews", value: "4.9" },
  { label: "Clients world-wide", value: "170+" },
  { label: "Completed projects", value: "1.7k" },
  { label: "Client satisfaction", value: "95%" },
];

export default function InfoAreaAbout({ infoSection }: InfoAreaAboutProps) {
  const subtitle = infoSection?.subtitle || defaultSubtitle;
  const heading = infoSection?.heading || defaultHeading;

  const stats =
    infoSection?.stats && infoSection.stats.length > 0
      ? infoSection.stats
      : defaultStats;

  return (
    <section className="info-area-page-about">
      <div className="container large">
        <div className="info-area-page-about-inner">
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

          <div className="counter-wrapper-box fade-anim">
            <div className="counter-wrapper">
              {stats.map((stat, idx) => (
                <div className="funfact-item" key={idx}>
                  <p className="text">{stat.label}</p>
                  <h3 className="number t-counter">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}