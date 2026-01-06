"use client";

import React from "react";

interface PageLoaderProps {
  fullScreen?: boolean;
}

/**
 * Minimalistic page loader with CSS-only animations
 * Does not interfere with GSAP animations as it uses pure CSS
 */
export default function PageLoader({ fullScreen = true }: PageLoaderProps) {
  return (
    <div className={`page-loader ${fullScreen ? "page-loader--fullscreen" : ""}`}>
      <div className="page-loader__spinner">
        <div className="page-loader__dot"></div>
        <div className="page-loader__dot"></div>
        <div className="page-loader__dot"></div>
      </div>
      <style jsx>{`
        .page-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
        }

        .page-loader--fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-color, #0a0a0a);
          z-index: 9999;
        }

        .page-loader__spinner {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .page-loader__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--white-color, #ffffff);
          opacity: 0.3;
          animation: pulse 1.4s ease-in-out infinite;
        }

        .page-loader__dot:nth-child(1) {
          animation-delay: 0s;
        }

        .page-loader__dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .page-loader__dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes pulse {
          0%,
          80%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
