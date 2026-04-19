"use client";

import React, { useState, useEffect } from "react";
import PageLoader from "./page-loader";

interface GlobalLoaderProps {
  children: React.ReactNode;
}

/**
 * Global loader that shows on initial page load
 * Displays for 3-4 seconds when the user first visits the site
 */
export default function GlobalLoader({ children }: GlobalLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the first load in this session
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    
    if (!hasLoadedBefore) {
      // First time loading in this session
      sessionStorage.setItem('hasLoadedBefore', 'true');
      
      // Show loader for 3.5 seconds on first load
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 100);
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      // Not the first load, show content immediately
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  if (isLoading) {
    return <PageLoader fullScreen={true} />;
  }

  return (
    <div style={{ 
      display: showContent ? 'block' : 'none',
      opacity: showContent ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
      minHeight: '100vh'
    }}>
      {children}
    </div>
  );
}