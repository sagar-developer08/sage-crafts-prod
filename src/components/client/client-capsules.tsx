'use client';
import { useMemo } from "react";
import Image from "next/image";
import client_9 from "@/assets/imgs/client/client-9.webp";
import client_10 from "@/assets/imgs/client/client-10.webp";
import client_11 from "@/assets/imgs/client/client-11.webp";
import client_12 from "@/assets/imgs/client/client-12.webp";
import client_13 from "@/assets/imgs/client/client-13.webp";
import client_14 from "@/assets/imgs/client/client-14.webp";
import client_15 from "@/assets/imgs/client/client-15.webp";
import client_16 from "@/assets/imgs/client/client-16.webp";
import client_17 from "@/assets/imgs/client/client-17.webp";
import client_18 from "@/assets/imgs/client/client-18.webp";
import client_19 from "@/assets/imgs/client/client-19.webp";
import client_20 from "@/assets/imgs/client/client-20.webp";
import client_21 from "@/assets/imgs/client/client-21.webp";
import client_22 from "@/assets/imgs/client/client-22.webp";

type Props = {
  isHome?: boolean;
  companyNames?: string[];
}
export default function ClientCapsules({isHome, companyNames}: Props) {
  // Use useMemo to prevent recreation of clients array on every render
  const defaultClients = useMemo(() => [
    { id: 'client-9', src: client_9, bgTheme: isHome ? true : false },
    { id: 'client-10', src: client_10, bgTheme: false },
    { id: 'client-11', src: client_11, bgTheme: false },
    { id: 'client-12', src: client_12, bgTheme: isHome ? true : false },
    { id: 'client-13', src: client_13, bgTheme: false },
    { id: 'client-14', src: client_14, bgTheme: false },
    { id: 'client-15', src: client_15, bgTheme: isHome ? true : false },
    { id: 'client-16', src: client_16, bgTheme: isHome ? true : false },
    { id: 'client-17', src: client_17, bgTheme: false },
    { id: 'client-18', src: client_18, bgTheme: isHome ? true : false },
    { id: 'client-19', src: client_19, bgTheme: false },
    { id: 'client-20', src: client_20, bgTheme: isHome ? true : false },
    { id: 'client-21', src: client_21, bgTheme: false },
    { id: 'client-22', src: client_22, bgTheme: false },
  ], [isHome]);

  // Use companyNames if provided, otherwise use default clients
  const clients = useMemo(() => {
    if (companyNames && companyNames.length > 0) {
      return companyNames.map((url, index) => ({
        id: `company-${index}`,
        src: url,
        bgTheme: isHome ? true : false,
      }));
    }
    return defaultClients;
  }, [companyNames, defaultClients, isHome]);

  return (
    <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
      <div className="client-capsule-wrapper">
        {clients.map((client) => (
          <p key={client.id} data-t-throwable-el="">
            <span className={`client-box ${client.bgTheme ? "bg-theme" : ""}`}>
              <Image 
                src={client.src} 
                alt="company logo" 
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }} 
              />
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
