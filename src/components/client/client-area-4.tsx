// import ClientCapsules from './client-capsules';

// export default function ClientAreaFour() {
//   return (
//     <section className="client-area-service-page">
//       <div className="container large">
//         <div className="client-area-inner section-spacing-top">
//           <div className="section-content fade-anim">
//             <div className="section-title-wrapper">
//               <div className="title-wrapper">
//                 <h2 className="section-title font-sequelsans-romanbody">
//                   <span>Client:</span> Helping brands to grow and say
//                   their success stories to the world.
//                 </h2>
//               </div>
//             </div>
//             <div className="text-wrapper">
//               <p className="text">
//                 We’re a great team of creatives with a strongest
//                 capabilities to helping progressive fields achieve their
//                 goals. With the best talent on every project done
//                 successfully
//               </p>
//             </div>
//           </div>
//           <ClientCapsules />
//           <div className="lines-wrapper">
//             {Array(8)
//               .fill(null)
//               .map((_, index) => (
//                 <div key={index} className="line"></div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// components/client/client-area-4.tsx
import ClientCapsules from "./client-capsules";
import { HomeData } from "../../types/homeData"; // adjust path if needed

type ClientAreaFourProps = {
  clientSection?: HomeData["clientSection"];
};

const defaultHeading =
  "Client: Helping brands to grow and say their success stories to the world.";

const defaultDescription =
  "We’re a great team of creatives with a strongest capabilities to helping progressive fields achieve their goals. With the best talent on every project done successfully";

export default function ClientAreaFour({ clientSection }: ClientAreaFourProps) {
  const heading = defaultHeading; // no heading in schema yet, keep static
  const description = clientSection?.descriptionText || defaultDescription;

  return (
    <section className="client-area-service-page">
      <div className="container large">
        <div className="client-area-inner section-spacing-top">
          <div className="section-content fade-anim">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  <span>Client:</span> {heading.replace("Client: ", "")}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">{description}</p>
            </div>
          </div>

          {/* Client capsules (still uses its own existing logic) */}
          <ClientCapsules />

          <div className="lines-wrapper">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="line"></div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
