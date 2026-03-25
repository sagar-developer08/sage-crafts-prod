import type { StaticImageData } from "next/image";

export const FALLBACK_CLIENT_LOGO_URL =
  "https://res.cloudinary.com/doihobmas/image/upload/v1767030680/Gemini_Generated_Image_u5qyjcu5qyjcu5qy_kse7i3.png";

export function resolveClientImageSrc(src: unknown): string | StaticImageData {
  if (typeof src === "object" && src !== null && "src" in src) {
    return src as StaticImageData;
  }

  if (typeof src !== "string") {
    return FALLBACK_CLIENT_LOGO_URL;
  }

  const value = src.trim();
  if (!value) {
    return FALLBACK_CLIENT_LOGO_URL;
  }

  if (value.startsWith("/")) {
    return value;
  }

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return value;
    }
  } catch {
    // Fall through to fallback when URL parsing fails.
  }

  return FALLBACK_CLIENT_LOGO_URL;
}
