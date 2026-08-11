import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { missions } from "@/lib/missions";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/missions",
    "/guides",
    "/weapons",
    "/system-requirements",
    "/release-date",
    "/about",
    "/contact",
    "/privacy-policy",
  ];

  const contentRoutes = [
    ...missions.map((mission) => `/missions/${mission.slug}`),
    ...guides.map((guide) => `/guides/${guide.slug}`),
  ];

  return [...routes, ...contentRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-08-11"),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/privacy") ? 0.2 : route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
