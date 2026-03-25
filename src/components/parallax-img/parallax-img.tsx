// 'use client';
// import { useState,useEffect } from "react";
// import {ApiResponse} from '../../types/homeData'
// import Image from "next/image";
// import gallery_img from "@/assets/imgs/gallery/image-7.webp";
// type ParallaxImgProps = {
//   parallax_img: any;
// };
// export default function ParallaxImg({parallax_img}:ParallaxImgProps ) {
//   return (
//     <div className="image-wrapper parallax-view">
//       {parallax_img && 'imageUrl' in parallax_img ? (
//         <Image
//           className="w-100"
//           src={parallax_img.imageUrl}
//           alt={parallax_img.alt || "image"}
//           width={1200}     // required
//           height={800} 
//           data-speed="0.1"
//           style={{ height: "auto", width: "100%" }}
//         />
//       ) : null}
//     </div>
//   );
// }

'use client';

type ParallaxImgProps = {
  parallax_img: any;
};

export default function ParallaxImg({ parallax_img }: ParallaxImgProps) {
  return (
    <div 
      className="image-wrapper parallax-view"
      style={{
        backgroundImage: parallax_img && 'imageUrl' in parallax_img ? `url(${parallax_img.imageUrl})` : 'none',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 0
      }} 
    >
      {/* Image component removed in favor of CSS background for fixed effect */}
    </div>
  );
}