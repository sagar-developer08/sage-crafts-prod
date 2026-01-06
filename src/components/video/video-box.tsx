'use client';
import { useState,useEffect } from "react";
import Image from "next/image";
// import {ApiResponse} from '../../types/homeData'
// import {video} from '@/types/homeData'
type VideoProps = {
  videoUrl: string;
};

export default function VideoBox({videoUrl}: {videoUrl?: any}) {
  // const [data, setData] = useState<ApiResponse | null>(null);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch('process.env.frontend_api_url')
  //       const jsonResponse = await response.json()
  //       setData(jsonResponse)
  //       // console.log('Video URL:', jsonResponse?.home?.video?.videoUrl)
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [])
  
  // const videoUrl = data?.home?.video?.videoUrl ?? "https://rrdevs.net/project-video/group-meeting.mp4";
  
  // Check if the URL is a GIF file
  const isGif = videoUrl && (videoUrl.toLowerCase().endsWith('.gif') || videoUrl.toLowerCase().includes('.gif'));
  
  if (isGif) {
    return (
      <div className="video-box">
        <Image
          src={videoUrl}
          alt="Video content"
          className="video-area"
          width={1920}
          height={1080}
          unoptimized
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }
  
  return (
    <div className="video-box">
      <video 
        key={videoUrl}
        className="video-area" 
        loop={true} 
        muted 
        autoPlay 
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
