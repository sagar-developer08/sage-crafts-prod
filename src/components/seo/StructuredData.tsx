'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: any;
  id?: string;
}

/**
 * Component to inject structured data (JSON-LD) into the page
 */
export default function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing script if it exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script tag
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null;
}

