/**
 * Home `serviceSection.services` can include internal “product” lines you do not want on
 * the marketing site. Filter those out and renumber labels for display.
 */
export const EXCLUDED_HOME_SERVICE_TITLES = new Set(
  [
    "BI Dashboard",
    "Web Builder with CRM (integrated)",
    "POS System",
    "E-Learning Platform",
    "API Builder",
    "Data Management System",
  ].map((t) => t.toLowerCase())
);

export function filterPublicHomeServices<T extends { title: string }>(services: T[]): T[] {
  return services.filter((s) => !EXCLUDED_HOME_SERVICE_TITLES.has((s.title || "").toLowerCase().trim()));
}

export function renumberHomeServices<T extends { number?: string; title: string }>(
  services: T[]
): (T & { number: string })[] {
  return services.map((s, i) => ({
    ...s,
    number: `(${String(i + 1).padStart(2, "0")})`,
  }));
}

export function getPublicHomeServicesList<T extends { title: string }>(services: T[] | undefined) {
  const raw = services ?? [];
  return renumberHomeServices(filterPublicHomeServices(raw));
}
