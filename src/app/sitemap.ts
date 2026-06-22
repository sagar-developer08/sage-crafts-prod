import { MetadataRoute } from "next";
import {
  getPublicApiBaseUrl,
  isSeoProductionReadyFallback,
} from "@/utils/seoEnv";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const DEFAULT_SITE_URL = "https://www.sagecrafts.in";

const STATIC_PAGES: Array<{
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  { path: "/about", changeFrequency: "weekly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

type SitemapApiPage = {
  url: string;
  lastmod?: string;
  changefreq?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

function buildStaticSitemap(siteUrl: string): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();

  return STATIC_PAGES.map((page) => ({
    url: page.path === "/" ? `${base}/` : `${base}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

function mapApiPages(pages: SitemapApiPage[]): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: page.url,
    lastModified: page.lastmod ? new Date(page.lastmod) : new Date(),
    changeFrequency: page.changefreq || "weekly",
    priority: page.priority ?? 0.5,
  }));
}

async function fetchRobotsStatus(
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

async function fetchSitemapPages(
  apiUrl: string
): Promise<{ productionReady: boolean; siteUrl: string; pages: SitemapApiPage[] } | null> {
  const response = await fetch(`${apiUrl}/seo/sitemap-data`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  const contentType = response.headers.get("content-type");
  const text = await response.text();

  if (!contentType?.includes("application/json")) {
    if (
      text.trim().startsWith("<!DOCTYPE") ||
      text.trim().startsWith("<html")
    ) {
      return null;
    }
  }

  try {
    const data = JSON.parse(text);
    return {
      productionReady: data.productionReady ?? false,
      siteUrl: data.siteUrl || DEFAULT_SITE_URL,
      pages: Array.isArray(data.pages) ? data.pages : [],
    };
  } catch {
    return null;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const apiUrl = getPublicApiBaseUrl();

  if (!apiUrl) {
    if (isSeoProductionReadyFallback()) {
      return buildStaticSitemap(DEFAULT_SITE_URL);
    }
    return [];
  }

  try {
    const sitemapData = await fetchSitemapPages(apiUrl);

    if (sitemapData?.productionReady && sitemapData.pages.length > 0) {
      return mapApiPages(sitemapData.pages);
    }

    if (sitemapData?.productionReady && sitemapData.pages.length === 0) {
      return buildStaticSitemap(sitemapData.siteUrl);
    }

    const robotsStatus = await fetchRobotsStatus(apiUrl);

    if (robotsStatus?.productionReady) {
      return buildStaticSitemap(robotsStatus.siteUrl);
    }

    if (isSeoProductionReadyFallback()) {
      return buildStaticSitemap(
        sitemapData?.siteUrl || robotsStatus?.siteUrl || DEFAULT_SITE_URL
      );
    }

    return [];
  } catch (error) {
    console.error("sitemap: error building sitemap", error);

    if (isSeoProductionReadyFallback()) {
      return buildStaticSitemap(DEFAULT_SITE_URL);
    }

    return [];
  }
}
