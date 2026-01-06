'use client';
import Link from "next/link";
import { useState,useEffect } from "react";
// import {ApiResponse} from '../../types/homeData'
import { AboutData } from "@/types/homeData";

type AboutProps = {
  about: AboutData;
};


export default function AboutOne({about}: {about?: any}) {
  // const [data, setData] = useState<ApiResponse | null>(null);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch('process.env.frontend_api_url')
  //       const jsonResponse = await response.json()
  //       setData(jsonResponse)
        
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [])
  // console.log(data)
  return (
    <section className="about-area">
      <div className="container large">
        <div className="about-area-inner section-spacing">
          <div className="section-content">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
            <div className="shape-4"></div>
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                {/* <h2 className="section-title font-instrumentsans-medium">Sage Craft</h2> */}
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">{about?.bodyText ?? "We’re a dynamic startup agency specializing in innovative solutions for businesses looking to elevate their brand presence."}</p>
            </div>
            <div className="btn-wrapper ">
              <Link href="/contact" className="rr-btn  btn-text-fli hover-bg-theme">
                <span className="btn-wrap">
                  <span className="text-one">Learn More</span>
                  <span className="text-two">Learn More</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
