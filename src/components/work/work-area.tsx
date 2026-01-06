'use client';
import { useState,useEffect } from "react";
import {ApiResponse} from '../../types/homeData'
import Image from "next/image";
import Link from "next/link";
type WorkAreaProps = {
  allProjects: Array<any>;
  portfolioItem: any;
  recentWork: any;
};


const WorkArea = ({allProjects,portfolioItem,recentWork}:WorkAreaProps) => {
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

  // Extract all projects from portfolio array
  // const allProjects = data?.portfolio?.flatMap(portfolioItem => portfolioItem.projects) ?? [];
  
  // // Get the first portfolio item for section header (recentWork)
  // const portfolioItem = data?.portfolio?.[0];
  // const recentWork = portfolioItem?.recentWork;
  console.log("allProjects in work area", allProjects);

  return (
    <div className="container large">
      <div className="work-area-inner">
        <div className="section-header fade-anim">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h2 className="section-title font-instrumentsans-medium">
                {recentWork?.heading ?? "Featured Work"}
              </h2>
            </div>
          </div>
          <div className="text-wrapper">
            <p className="text">{recentWork?.subheading ?? "Excellency in creative designs"}</p>
          </div>
          <div className="total-count">
            <span className="number">({allProjects.length})</span>
          </div>
        </div>
        <div className="works-wrapper-box">
          <div className="works-wrapper-1 fade-anim">
            {allProjects.length > 0 ? (
              allProjects.map((project) => {
                const href = project?.slug
                  ? `/portfolio-details/${project.slug}`
                  : "/portfolio-details";

                return (
                  <div key={project._id} className="work-box">
                    <div className="thumb">
                      <div className="image scale" data-cursor-text="View Project">
                        <Link href={href} style={{ display: 'block', width: '100%' }}>
                          {project.imageUrl ? (
                            <div style={{ 
                              position: 'relative', 
                              width: '100%', 
                              aspectRatio: '840/580',
                              overflow: 'hidden'
                            }}>
                              <Image
                                src={project.imageUrl}
                                alt={project.title ?? 'project image'}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          ) : (
                            <div
                              className="image-placeholder"
                              style={{ width: '100%', aspectRatio: '840/580', background: '#f3f3f3' }}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <Link href={href}>{project.title}</Link>
                      </h3>
                      <div className="meta">
                        <span className="tag">{project.category}</span>
                        <span className="date">{project.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No projects available</div>
            )}
          </div>
        </div>
        <div className="all-btn-wrapper fade-anim">
          <Link href="/portfolio" className="rr-btn btn-border hover-bg-theme">
            <span className="btn-wrap">
              <span className="text-one">View All Work</span>
              <span className="text-two">View All Work</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
