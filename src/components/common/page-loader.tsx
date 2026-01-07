"use client";

import React from "react";

interface PageLoaderProps {
  fullScreen?: boolean;
}

/**
 * Unique morphing blob loader with gradient effects
 * Modern, visually appealing loader that matches the creative agency aesthetic
 */
export default function PageLoader({ fullScreen = true }: PageLoaderProps) {
  return (
    <div className={`page-loader ${fullScreen ? "page-loader--fullscreen" : ""}`}>
      <div className="page-loader__container">
        {/* Main morphing blob */}
        <div className="page-loader__blob">
          <div className="page-loader__blob-inner"></div>
        </div>
        
        {/* Orbiting particles */}
        <div className="page-loader__orbit">
          <div className="page-loader__particle page-loader__particle--1"></div>
          <div className="page-loader__particle page-loader__particle--2"></div>
          <div className="page-loader__particle page-loader__particle--3"></div>
        </div>
        
        {/* Loading text */}
        <div className="page-loader__text">
          <span className="page-loader__text-char">L</span>
          <span className="page-loader__text-char">O</span>
          <span className="page-loader__text-char">A</span>
          <span className="page-loader__text-char">D</span>
          <span className="page-loader__text-char">I</span>
          <span className="page-loader__text-char">N</span>
          <span className="page-loader__text-char">G</span>
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
          background: #0a0a0a;
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

        /* Morphing blob */
        .page-loader__blob {
          position: absolute;
          width: 120px;
          height: 120px;
          filter: blur(40px);
          animation: morph 8s ease-in-out infinite;
        }

        .page-loader__blob-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.6) 100%
          );
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph-shape 8s ease-in-out infinite;
        }

        /* Orbiting particles */
        .page-loader__orbit {
          position: absolute;
          width: 160px;
          height: 160px;
          animation: rotate 4s linear infinite;
        }

        .page-loader__particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .page-loader__particle--1 {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .page-loader__particle--2 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .page-loader__particle--3 {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }

        /* Loading text */
        .page-loader__text {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
          font-family: var(--font_dmsans, sans-serif);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.8);
        }

        .page-loader__text-char {
          display: inline-block;
          animation: text-bounce 1.4s ease-in-out infinite;
        }

        .page-loader__text-char:nth-child(1) { animation-delay: 0s; }
        .page-loader__text-char:nth-child(2) { animation-delay: 0.1s; }
        .page-loader__text-char:nth-child(3) { animation-delay: 0.2s; }
        .page-loader__text-char:nth-child(4) { animation-delay: 0.3s; }
        .page-loader__text-char:nth-child(5) { animation-delay: 0.4s; }
        .page-loader__text-char:nth-child(6) { animation-delay: 0.5s; }
        .page-loader__text-char:nth-child(7) { animation-delay: 0.6s; }

        /* Animations */
        @keyframes morph {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
            border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%;
          }
          75% {
            transform: translate(10px, 10px) scale(1.05);
            border-radius: 40% 60% 30% 60% / 60% 30% 60% 40%;
          }
        }

        @keyframes morph-shape {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%;
          }
          75% {
            border-radius: 40% 60% 30% 60% / 60% 30% 60% 40%;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes text-bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .page-loader__container {
            width: 150px;
            height: 150px;
          }

          .page-loader__blob {
            width: 90px;
            height: 90px;
            filter: blur(30px);
          }

          .page-loader__orbit {
            width: 120px;
            height: 120px;
          }

          .page-loader__text {
            font-size: 12px;
            bottom: -35px;
          }
        }
      `}</style>
    </div>
  );
}
