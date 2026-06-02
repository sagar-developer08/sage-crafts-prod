import { MetadataRoute } from "next";
import {
  getPublicApiBaseUrl,
  isSeoProductionReadyFallback,
} from "@/utils/seoEnv";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const DEFAULT_SITE_URL = "https://sagecrafts.in";

function blockAll(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}

function allowAll(siteUrl: string): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}

async function fetchProductionReady(
  apiUrl: string
): Promise<{ productionReady: boolean; siteUrl: string } | null> {
  const response = await fetch(`${apiUrl}/seo-settings/robots-status`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  const data = await response.json();
  return {
    productionReady: data.productionReady ?? false,
    siteUrl: data.siteUrl || DEFAULT_SITE_URL,
  };
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const apiUrl = getPublicApiBaseUrl();

  if (!apiUrl) {
    console.warn(
      "robots.txt: NEXT_PUBLIC_FRONTEND_API_URL is missing on the frontend host"
    );
    if (isSeoProductionReadyFallback()) {
      return allowAll(DEFAULT_SITE_URL);
    }
    return blockAll();
  }

  try {
    const status = await fetchProductionReady(apiUrl);

    if (!status) {
      console.warn("robots.txt: API robots-status request failed");
      if (isSeoProductionReadyFallback()) {
        return allowAll(DEFAULT_SITE_URL);
      }
      return blockAll();
    }

    if (!status.productionReady) {
      return blockAll();
    }

    return allowAll(status.siteUrl);
  } catch (error) {
    console.error("robots.txt: error fetching robots status", error);
    if (isSeoProductionReadyFallback()) {
      return allowAll(DEFAULT_SITE_URL);
    }
    return blockAll();
  }
}
