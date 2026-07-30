import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/missions",
    "/weapons",
    "/system-requirements",
    "/release-date",
    "/about",
    "/contact",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/privacy") ? 0.2 : 0.8,
  }));
}

