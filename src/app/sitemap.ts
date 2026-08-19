import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { missions } from "@/lib/missions";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const originalDate = new Date("2026-08-11");
  const currentDate = new Date(siteConfig.updatedIso);
  const routeUpdateDates = new Map([
    ["/missions", new Date("2026-08-19")],
    ["/weapons", new Date("2026-08-19")],
    ["/guides/split-screen", new Date("2026-08-19")],
  ]);
  const updatedRoutes = new Set([
    "",
    "/missions",
    "/guides",
    "/guides/split-screen",
    "/guides/sergeant-johnson-missions",
  ]);
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
    lastModified: routeUpdateDates.get(route) ?? (updatedRoutes.has(route) ? currentDate : originalDate),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/privacy") ? 0.2 : route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
