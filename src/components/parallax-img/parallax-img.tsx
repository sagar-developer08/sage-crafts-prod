'use client';
import { useState,useEffect } from "react";
import {ApiResponse} from '../../types/homeData'
import Image from "next/image";
import gallery_img from "@/assets/imgs/gallery/image-7.webp";
type ParallaxImgProps = {
  parallax_img: any;
};
export default function ParallaxImg({parallax_img}:ParallaxImgProps ) {
  // const [data, setData] = useState<ApiResponse | null>(null);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch('process.env.frontend_api_url')
  //       const jsonResponse = await response.json()
  //       setData(jsonResponse)
  //       console.log(jsonResponse)
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [])
  // const parallax_img = data?.home?.parallaxImage?? [];
  // console.log(parallax_img)
  return (
    <div className="image-wrapper parallax-view">
      {parallax_img && 'imageUrl' in parallax_img ? (
        <Image
          className="w-100"
          src={parallax_img.imageUrl}
          alt={parallax_img.alt || "image"}
          width={1200}     // required
          height={800} 
          data-speed="0.1"
          style={{ height: "auto", width: "100%" }}
        />
      ) : null}
    </div>
  );
}
