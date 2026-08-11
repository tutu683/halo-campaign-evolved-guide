import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halo Campaign Evolved Guides: Co-op, Length & Tips",
  description:
    "Browse Halo: Campaign Evolved player guides for campaign length, co-op, split-screen, Legendary difficulty, Campaign Remix, editions, and price.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Player guides / Quick answers"
        title="Halo: Campaign Evolved player guides"
        description="Focused answers for setup, co-op, difficulty, replay modes, campaign planning, and buying decisions. Confirmed product details stay separate from practical advice."
        image="/media/coop.jpg"
        imageAlt="Halo Campaign Evolved cooperative campaign"
        meta={`Last reviewed ${siteConfig.updated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2>Choose a guide</h2>
          <p>
            Each page answers one specific search question and links to the relevant
            mission, weapon, platform, or system information.
          </p>
          <div className="directory-grid">
            {guides.map((guide) => (
              <Link className="directory-card" href={`/guides/${guide.slug}`} key={guide.slug}>
                <span>{guide.eyebrow}</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <strong>Read guide <ArrowRight size={15} /></strong>
              </Link>
            ))}
          </div>

          <h2 id="method">How these guides are checked</h2>
          <p>
            Product features are reviewed against official Halo, Xbox, PlayStation, and
            Steam pages. Tactical recommendations are labeled as practical advice, and
            unknown unlock conditions or locations are not filled with generated claims.
          </p>
          <SourceNote
            sources={[
              { label: "Halo Waypoint", href: siteConfig.officialUrl },
              { label: "Xbox", href: siteConfig.xboxUrl },
              { label: "Steam", href: siteConfig.steamUrl },
            ]}
          />
        </article>
        <aside className="article-sidebar">
          <strong>Guide directory</strong>
          <nav>
            {guides.map((guide) => (
              <Link href={`/guides/${guide.slug}`} key={guide.slug}>{guide.eyebrow}</Link>
            ))}
            <a href="#method">Editorial method</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
