/** Trim and normalize the public API base URL (no trailing slash). */
export function getPublicApiBaseUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  if (!raw?.trim()) return null;
  return raw.trim().replace(/\/$/, "");
}

/**
 * Google Search Console gives either the token or `google-site-verification=TOKEN`.
 * Next.js metadata.verification.google expects the token only.
 */
export function normalizeGoogleVerificationCode(code?: string | null): string {
  if (!code?.trim()) return "";
  return code.trim().replace(/^google-site-verification=/i, "");
}

/** Optional Vercel env fallback when runtime API fetch fails for robots/sitemap. */
export function isSeoProductionReadyFallback(): boolean {
  return process.env.NEXT_PUBLIC_SEO_PRODUCTION_READY === "true";
}
