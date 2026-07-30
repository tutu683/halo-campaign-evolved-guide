import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halo Campaign Evolved Release Date, Platforms & Price",
  description:
    "Halo: Campaign Evolved released July 28, 2026. Compare Xbox, PC, and PS5 availability, editions, co-op support, and official store links.",
  alternates: { canonical: "/release-date" },
};

export default function ReleaseDatePage() {
  return (
    <>
      <PageHero
        eyebrow="Launch briefing / Available now"
        title="Halo: Campaign Evolved release date and platforms"
        description="The campaign remake launched on July 28, 2026 for Xbox Series X|S, PC, and PlayStation 5, with standard and premium digital editions."
        image="/media/halo-hero.jpg"
        imageAlt="Halo Campaign Evolved release key art featuring Master Chief"
        meta={`Availability checked ${siteConfig.updated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2 id="date">When did Halo: Campaign Evolved release?</h2>
          <p>
            <strong>Halo: Campaign Evolved released on July 28, 2026.</strong> It is a
            campaign-only remake and expansion of Halo: Combat Evolved, rebuilt for current
            hardware by Halo Studios and published by Xbox Game Studios.
          </p>

          <h2 id="platforms">Supported platforms</h2>
          <table className="data-table">
            <thead><tr><th>Platform</th><th>Availability</th><th>Co-op</th></tr></thead>
            <tbody>
              <tr><td>Xbox Series X|S</td><td>Available now</td><td>4-player online and 2-player split-screen</td></tr>
              <tr><td>Windows PC</td><td>Xbox app and Steam</td><td>4-player online</td></tr>
              <tr><td>PlayStation 5</td><td>Available now</td><td>4-player online and 2-player split-screen</td></tr>
            </tbody>
          </table>
          <p>
            Online co-op supports cross-play between all three platforms and shared
            cross-progression. Steam lists an Xbox Network account as required.
          </p>

          <h2 id="editions">Standard and Premium editions</h2>
          <p>
            Steam lists the Standard Edition at <strong>$49.99 USD</strong> and the Premium
            Edition at <strong>$69.99 USD</strong>. Regional prices vary. The Premium package
            adds the Alpha Halo Armory Pack, digital art book, digital short story, and a
            digital game manual; it does not add separate campaign missions.
          </p>

          <h2 id="buy">Official store links</h2>
          <div className="button-row">
            <a className="button-secondary" href={siteConfig.xboxUrl} target="_blank" rel="noreferrer">Xbox <ExternalLink size={15} /></a>
            <a className="button-secondary" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ExternalLink size={15} /></a>
            <a className="button-secondary" href={siteConfig.playstationUrl} target="_blank" rel="noreferrer">PlayStation <ExternalLink size={15} /></a>
          </div>

          <div className="callout">
            <p>
              This site does not host game files. Download or purchase only through official
              platform stores and Halo Waypoint links.
            </p>
          </div>

          <SourceNote
            sources={[
              { label: "Halo Waypoint", href: siteConfig.officialUrl },
              { label: "Steam", href: siteConfig.steamUrl },
              { label: "Xbox", href: siteConfig.xboxUrl },
              { label: "PlayStation", href: siteConfig.playstationUrl },
            ]}
          />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#date">Release date</a>
            <a href="#platforms">Platforms</a>
            <a href="#editions">Editions and price</a>
            <a href="#buy">Official stores</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
