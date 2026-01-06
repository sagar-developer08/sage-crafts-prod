/* eslint-disable @next/next/no-img-element */
'use client';
import { useState,useEffect } from "react";
import {ApiResponse} from '../../types/homeData'
import Link from "next/link";
import React from "react";
type ServiceAreaProps = {
  services: Array<any>;
  serviceSection: any;
};

const ServiceArea = ({services,serviceSection}:ServiceAreaProps) => {

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

  // Get services from API
  // const services = data?.home?.serviceSection?.services ?? [];
  // const serviceSection = data?.home?.serviceSection;

  return (
    <section className="service-area">
      <div className="container large">
        <div className="service-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="title-wrapper">
                <h2 className="section-title font-instrumentsans-medium word-anim">
                  {serviceSection?.heading ? (
                    (() => {
                      const words = serviceSection.heading.split(' ');
                      if (words.length === 2) {
                        return <>{words[0]} <br /> {words[1]}</>;
                      }
                      return serviceSection.heading;
                    })()
                  ) : (
                    <>Complex <br /> proficiency</>
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="services-wrapper-box">
            <div className="services-wrapper-1">
              {services.length > 0 ? (
                services.map((service, index) => (
                  <div key={`service-${service.title}-${index}`} className="service-box fade-anim">
                    <div className="count">
                      <span className="number">{service.number}</span>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <Link href={service.detailsUrl || "/service-details"}>{service.title}</Link>
                      </h3>
                      <ul className="service-list">
                        {service.list.map((item: string, i: number) => (
                          <li key={`${service.title}-item-${i}`}>
                            <Link href={service.detailsUrl || "/service-details"}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="thumb">
                      <img className="grow" src={service.imageUrl} alt={service.title} />
                      {/* <Image className="grow" src={service.imageUrl} alt={service.title} width={545} height={265} style={{ height: "auto" }} /> */}
                    </div>
                  </div>
                ))
              ) : (
                <div>No services available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

