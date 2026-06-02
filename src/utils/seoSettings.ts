/**
 * Fetches SEO settings from backend
 * Used for root layout metadata
 */
import {
  getPublicApiBaseUrl,
  normalizeGoogleVerificationCode,
} from "./seoEnv";

function normalizeSeoSettings(data: Record<string, unknown> | null | undefined) {
  const base = {
    productionReady: false,
    siteUrl: "https://sagecrafts.in",
    googleVerificationCode: "",
    bingVerificationCode: "",
    googleAnalyticsId: "",
    googleTagManagerId: "",
    defaultOgImage: "/assets/imgs/logo/sagecrafts-logo.png",
  };

  if (!data) return base;

  return {
    ...base,
    ...data,
    googleVerificationCode: normalizeGoogleVerificationCode(
      String(data.googleVerificationCode || "")
    ),
  };
}

export async function getSeoSettings() {
  const apiUrl = getPublicApiBaseUrl();

  if (!apiUrl) {
    return normalizeSeoSettings(null);
  }

  try {
    const response = await fetch(`${apiUrl}/seo-settings`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return normalizeSeoSettings(null);
    }

    // Check if response is JSON before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      // If response starts with HTML, it's an error page
      if (
        text.trim().startsWith("<!DOCTYPE") ||
        text.trim().startsWith("<html")
      ) {
        console.warn("API returned HTML instead of JSON for SEO settings");
        return normalizeSeoSettings(null);
      }
      // Try to parse as JSON anyway if it's not HTML
      try {
        const result = JSON.parse(text);
        return normalizeSeoSettings(result.data);
      } catch {
        return normalizeSeoSettings(null);
      }
    }

    const result = await response.json();
    return normalizeSeoSettings(result.data);
  } catch (error) {
    console.error("Error fetching SEO settings:", error);
    return normalizeSeoSettings(null);
  }
}

