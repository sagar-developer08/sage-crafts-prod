"use client";

import React from "react";

interface PageLoaderProps {
  fullScreen?: boolean;
}

/**
 * Tech-inspired loader with hexagonal circuit patterns
 * Modern, sophisticated loader matching SageCrafts' tech company aesthetic
 */
export default function PageLoader({ fullScreen = true }: PageLoaderProps) {
  return (
    <div className={`page-loader ${fullScreen ? "page-loader--fullscreen" : ""}`}>
      <div className="page-loader__container">
        {/* Central hexagon with circuit pattern */}
        <div className="page-loader__hexagon">
          <div className="page-loader__hexagon-inner">
            <div className="page-loader__circuit"></div>
            <div className="page-loader__core"></div>
          </div>
        </div>
        
        {/* Rotating rings */}
        <div className="page-loader__ring page-loader__ring--outer"></div>
        <div className="page-loader__ring page-loader__ring--inner"></div>
        
        {/* Data streams */}
        <div className="page-loader__stream page-loader__stream--1"></div>
        <div className="page-loader__stream page-loader__stream--2"></div>
        <div className="page-loader__stream page-loader__stream--3"></div>
        <div className="page-loader__stream page-loader__stream--4"></div>
        
        {/* Loading text */}
        <div className="page-loader__text">
          <span className="page-loader__brand">SAGE</span>
          <span className="page-loader__status">LOADING...</span>
        </div>
      </div>
      
      <style jsx>{`
        .page-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          overflow: hidden;
        }

        .page-loader--fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #111111 0%, #171717 50%, #111111 100%);
          z-index: 9999;
        }

        .page-loader__container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Central Hexagon */
        .page-loader__hexagon {
          position: absolute;
          width: 80px;
          height: 80px;
          z-index: 3;
        }

        .page-loader__hexagon-inner {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(135deg, #385852, #2a4339);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          box-shadow: 
            0 0 20px rgba(56, 88, 82, 0.5),
            inset 0 0 20px rgba(56, 88, 82, 0.2);
          animation: hexagon-pulse 2s ease-in-out infinite;
        }

        .page-loader__circuit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, #385852 2px, transparent 2px);
          background-size: 8px 8px;
          opacity: 0.6;
          animation: circuit-glow 1.5s ease-in-out infinite alternate;
        }

        .page-loader__core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #385852;
          animation: core-pulse 1s ease-in-out infinite;
        }

        /* Rotating Rings */
        .page-loader__ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          animation: rotate 3s linear infinite;
        }

        .page-loader__ring--outer {
          width: 140px;
          height: 140px;
          border-top: 2px solid #385852;
          border-right: 2px solid rgba(56, 88, 82, 0.3);
          animation-duration: 4s;
        }

        .page-loader__ring--inner {
          width: 100px;
          height: 100px;
          border-left: 2px solid #385852;
          border-bottom: 2px solid rgba(56, 88, 82, 0.5);
          animation-duration: 2s;
          animation-direction: reverse;
        }

        /* Data Streams */
        .page-loader__stream {
          position: absolute;
          background: linear-gradient(90deg, transparent, #385852, transparent);
          border-radius: 2px;
          animation: data-flow 2s ease-in-out infinite;
        }

        .page-loader__stream--1 {
          width: 60px;
          height: 2px;
          top: 30%;
          left: -30px;
          animation-delay: 0s;
        }

        .page-loader__stream--2 {
          width: 40px;
          height: 2px;
          top: 70%;
          right: -20px;
          animation-delay: 0.5s;
        }

        .page-loader__stream--3 {
          width: 2px;
          height: 50px;
          left: 20%;
          top: -25px;
          animation-delay: 1s;
        }

        .page-loader__stream--4 {
          width: 2px;
          height: 35px;
          right: 25%;
          bottom: -17px;
          animation-delay: 1.5s;
        }

        /* Loading Text */
        .page-loader__text {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .page-loader__brand {
          display: block;
          font-family: var(--font_dmsans, sans-serif);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 3px;
          color: #385852;
          margin-bottom: 8px;
          animation: brand-glow 2s ease-in-out infinite alternate;
        }

        .page-loader__status {
          display: block;
          font-family: var(--font_dmsans, sans-serif);
          font-weight: 400;
          font-size: 12px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.6);
          animation: status-dots 1.5s ease-in-out infinite;
        }

        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hexagon-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 
              0 0 20px rgba(56, 88, 82, 0.5),
              inset 0 0 20px rgba(56, 88, 82, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 
              0 0 30px rgba(56, 88, 82, 0.8),
              inset 0 0 30px rgba(56, 88, 82, 0.3);
          }
        }

        @keyframes circuit-glow {
          0% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }

        @keyframes core-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 10px #385852;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            box-shadow: 0 0 20px #385852, 0 0 40px rgba(56, 88, 82, 0.5);
          }
        }

        @keyframes data-flow {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        @keyframes brand-glow {
          0% {
            text-shadow: 0 0 5px rgba(56, 88, 82, 0.5);
          }
          100% {
            text-shadow: 
              0 0 10px rgba(56, 88, 82, 0.8),
              0 0 20px rgba(56, 88, 82, 0.4);
          }
        }

        @keyframes status-dots {
          0%, 20% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          80%, 100% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .page-loader__container {
            width: 150px;
            height: 150px;
          }

          .page-loader__hexagon {
            width: 60px;
            height: 60px;
          }

          .page-loader__ring--outer {
            width: 110px;
            height: 110px;
          }

          .page-loader__ring--inner {
            width: 80px;
            height: 80px;
          }

          .page-loader__brand {
            font-size: 16px;
            letter-spacing: 2px;
          }

          .page-loader__status {
            font-size: 11px;
          }

          .page-loader__text {
            bottom: -50px;
          }
        }
      `}</style>
    </div>
  );
}
