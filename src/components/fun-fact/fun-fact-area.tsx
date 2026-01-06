'use client';
import { useState,useEffect } from "react";
import {ApiResponse} from '../../types/homeData'
import React from "react";
type FunFactAreaProps = {
  funFactSection: any;
  funFactItems: Array<any>;
};
export default function FunFactArea({funFactSection,funFactItems}: FunFactAreaProps) {
  // const [data, setData] = useState<ApiResponse | null>(null);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch('process.env.frontend_api_url')
  //       const jsonResponse = await response.json()
  //       setData(jsonResponse)
  //       // console.log(jsonResponse)
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [])

  // Get fun fact section data from API
  // const funFactSection = data?.home?.funFactSection;
  // const funFactItems = funFactSection?.items ?? [];

  // Format title - split "Perfect —activity" into two lines
  const formatTitle = (title: string | undefined) => {
    if (!title) return <>Perfect <br /> —activity</>;
    // Check if title contains " —" or similar pattern
    if (title.includes(' —')) {
      const parts = title.split(' —');
      return <>{parts[0]} <br /> —{parts[1]}</>;
    }
    // If it's two words, split them
    const words = title.split(' ');
    if (words.length === 2) {
      return <>{words[0]} <br /> {words[1]}</>;
    }
    return title;
  };

  return (
    <section className="funfact-area fade-anim">
      <div className="container large">
        <div className="funfact-area-inner pin-area">
          <div className="section-header section-spacing-top pin-element">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-instrumentsans-medium word-anim">
                  {formatTitle(funFactSection?.title)}
                </h2>
              </div>
            </div>
          </div>
          <div className="funfact-wrapper-box section-spacing">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
            <div className="funfact-wrapper">
              {funFactItems.length > 0 ? (
                funFactItems.map((item, index) => (
                  <div key={`funfact-${item.value}-${index}`} className="funfact-item go-visible">
                    <span className="number">{item.value}</span>
                    <p className="text">{item.text}</p>
                  </div>
                ))
              ) : (
                // Fallback items if no data available
                <>
                  <div className="funfact-item go-visible">
                    <span className="number">1.8M</span>
                    <p className="text">We helped to get companies with $200M+ funding.</p>
                  </div>
                  <div className="funfact-item go-visible">
                    <span className="number">260+</span>
                    <p className="text">Crafted responsive, user-centered website & app.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
