// import type { Metadata } from "next";
// import { DM_Sans, Instrument_Sans } from "next/font/google";
// import localFont from "next/font/local";
// import "swiper/css/bundle";
// import "@/assets/vendor/effect-slicer.min.css";
// import "@/assets/vendor/fontawesome.min.css";
// import "@/assets/vendor/spacing.css";
// import "@/assets/vendor/meanmenu.min.css";
// import "bootstrap/scss/bootstrap.scss";
// import "./globals.scss";

// /* ---------------- Fonts ---------------- */

// const dm_sans = DM_Sans({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font_dmsans",
// });

// const instrument_sans = Instrument_Sans({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   variable: "--font_instrumentsans",
// });

// const bdogrotesk = localFont({
//   src: [
//     { path: "../../public/assets/fonts/BDOGrotesk-DemiBold.ttf", weight: "600" },
//     { path: "../../public/assets/fonts/BDOGrotesk-Medium.ttf", weight: "500" },
//     { path: "../../public/assets/fonts/BDOGrotesk-Regular.ttf", weight: "400" },
//   ],
//   variable: "--font_bdogrotesk",
// });

// const tartufffo_trial = localFont({
//   src: [
//     { path: "../../public/assets/fonts/Tartuffo_Trial-Thin.otf", weight: "100" },
//     {
//       path: "../../public/assets/fonts/Tartuffo_Trial-LightItalic.otf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "../../public/assets/fonts/Tartuffo_Trial-Light.otf",
//       weight: "300",
//     },
//   ],
//   variable: "--font_tartuffotrial",
// });

// const tartuffo = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/Tartuffo_Trial-MediumItalic.otf",
//       weight: "500",
//       style: "italic",
//     },
//   ],
//   variable: "--font-tartuffo",
// });

// const times_now = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/TimesNow-SemiLightItalic.ttf",
//       weight: "400",
//     },
//   ],
//   variable: "--font_timesnow",
// });

// const thunder = localFont({
//   src: [
//     { path: "../../public/assets/fonts/Thunder-BoldLC.ttf", weight: "700" },
//     { path: "../../public/assets/fonts/Thunder-SemiBoldLC.ttf", weight: "600" },
//     { path: "../../public/assets/fonts/Thunder-MediumLC.ttf", weight: "500" },
//     { path: "../../public/assets/fonts/Thunder-LC.ttf", weight: "400" },
//   ],
//   variable: "--font_thunder",
// });

// const Sequel_sans_roman = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/Sequel Sans Roman Body.otf",
//       weight: "310",
//     },
//   ],
//   variable: "--font_sequelsansromanbody",
// });

// const Sequel_sans_medium = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/Sequel Sans Roman Body.otf",
//       weight: "315",
//     },
//   ],
//   variable: "--font_sequelsansmediumbody",
// });

// /* ---------------- SEO METADATA ---------------- */

// export const metadata: Metadata = {
//   title: {
//     default: "Sage Craft - Creative Agency & Portfolio",
//     template: "%s | Sage Craft",
//   },

//   description:
//     "Sage Craft is a modern creative agency and portfolio template built with Next.js, designed to showcase design, development, and digital experiences.",

//   keywords: [
//     "creative agency",
//     "portfolio",
//     "next.js agency template",
//     "web design",
//     "branding",
//     "digital studio",
//   ],

//   authors: [{ name: "Sage Craft" }],
//   creator: "Sage Craft",
//   publisher: "Sage Craft",

//   metadataBase: new URL("https://sagecraft.com"),

//   alternates: {
//     canonical: "/",
//   },

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://sagecraft.com",
//     siteName: "Sage Craft",
//     title: "Sage Craft - Creative Agency & Portfolio",
//     description:
//       "Showcase your creative work with Sage Craft – a high-performance Next.js portfolio and agency template.",
//     images: [
//       {
//         url: "/assets/imgs/logo/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Sage Craft Logo",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Sage Craft - Creative Agency",
//     description:
//       "A modern Next.js creative agency & portfolio template built for performance and SEO.",
//     images: ["/assets/imgs/logo/logo.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   verification: {
//     google: "your-google-verification-code",
//     // bing: "your-bing-verification-code",
//     // yandex: "your-yandex-verification-code",
//   },
// };

// /* ---------------- VIEWPORT ---------------- */

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
//   themeColor: "#000000",
// };

// /* ---------------- ROOT LAYOUT ---------------- */

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={[
//           dm_sans.variable,
//           instrument_sans.variable,
//           bdogrotesk.variable,
//           tartuffo.variable,
//           tartufffo_trial.variable,
//           times_now.variable,
//           thunder.variable,
//           Sequel_sans_roman.variable,
//           Sequel_sans_medium.variable,
//         ].join(" ")}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { DM_Sans,Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "swiper/css/bundle";
import "@/assets/vendor/effect-slicer.min.css";
import "@/assets/vendor/fontawesome.min.css";
import "@/assets/vendor/spacing.css";
import "@/assets/vendor/meanmenu.min.css";
import "bootstrap/scss/bootstrap.scss";
import "./globals.scss";

const dm_sans = DM_Sans({
  weight: ["400","500", "600", "700","800"],
  subsets: ["latin"],
  variable: "--font_dmsans",
});

const instrument_sans = Instrument_Sans({
  weight: ["400","500", "600", "700"],
  subsets: ["latin"],
  variable: "--font_instrumentsans",
});

const bdogrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BDOGrotesk-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BDOGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BDOGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font_bdogrotesk",
});

const tartufffo_trial = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Tartuffo_Trial-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Tartuffo_Trial-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/Tartuffo_Trial-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font_tartuffotrial",
});

const tartuffo = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Tartuffo_Trial-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-tartuffo",
});


const times_now = localFont({
  src: [
    {
      path: "../../public/assets/fonts/TimesNow-SemiLightItalic.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font_timesnow",
});
const thunder = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Thunder-BoldLC.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Thunder-SemiBoldLC.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Thunder-MediumLC.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Thunder-LC.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font_thunder",
});
const Sequel_sans_roman = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Sequel Sans Roman Body.otf",
      weight: "310",
      style: "normal",
    },
  ],
  variable: "--font_sequelsansromanbody",
});
const Sequel_sans_medium = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Sequel Sans Roman Body.otf",
      weight: "315",
      style: "normal",
    },
  ],
  variable: "--font_sequelsansmediumbody",
});

import { getSeoSettings } from '@/utils/seoSettings';
import AppProviders from '@/components/common/app-providers';

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await getSeoSettings();

  return {
  title: {
    default: "Sage Craft - Creative Agency & Portfolio",
    template: "%s | Sage Craft",
  },
  description:
    "Sage Craft is a modern creative agency and portfolio template built with Next.js, designed to showcase design, development, and digital experiences.",
  keywords: [
    "creative agency",
    "portfolio",
    "next.js agency template",
    "web design",
    "branding",
    "digital studio",
  ],
  authors: [{ name: "Sage Craft" }],
  creator: "Sage Craft",
  publisher: "Sage Craft",
  metadataBase: new URL(seoSettings.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoSettings.siteUrl,
    siteName: "Sage Craft",
    title: "Sage Craft - Creative Agency & Portfolio",
    description:
      "Showcase your creative work with Sage Craft – a high-performance Next.js portfolio and agency template.",
    images: [
      {
        url: seoSettings.defaultOgImage || "/assets/imgs/logo/sagecrafts-logo.png",
        width: 1200,
        height: 630,
        alt: "Sage Craft Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage Craft - Creative Agency",
    description:
      "A modern Next.js creative agency & portfolio template built for performance and SEO.",
    images: [seoSettings.defaultOgImage || "/assets/imgs/logo/sagecrafts-logo.png"],
  },
  robots: {
    index: seoSettings.productionReady,
    follow: seoSettings.productionReady,
    googleBot: {
      index: seoSettings.productionReady,
      follow: seoSettings.productionReady,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(seoSettings.googleVerificationCode && {
      google: seoSettings.googleVerificationCode,
    }),
    ...(seoSettings.bingVerificationCode && {
      bing: seoSettings.bingVerificationCode,
    }),
  },
  icons: {
    icon: [
      { url: "/assets/imgs/logo/favicon.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/assets/imgs/logo/sagecrafts-logo.png", sizes: "180x180" },
    ],
  },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm_sans.variable} ${instrument_sans.variable} ${bdogrotesk.variable} ${tartuffo.variable} ${tartufffo_trial.variable} ${times_now.variable} ${thunder.variable} ${Sequel_sans_roman.variable} ${Sequel_sans_medium.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
