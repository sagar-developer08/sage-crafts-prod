import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "rrdevs.net",
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "nftcalendar.io",
      },
      {
        protocol: 'https',
        hostname: "yourcdn.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
  sassOptions:{
    quietDeps: true,
  }
};

export default nextConfig;
