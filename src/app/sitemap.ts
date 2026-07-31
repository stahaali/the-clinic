import type { MetadataRoute } from "next";

const BASE = "https://elitemedicalservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/specialties",
    "/pricing",
    "/contact",
    "/faq",
    "/free-audit",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
