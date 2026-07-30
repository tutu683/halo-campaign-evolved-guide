import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halo Campaign Evolved Missions List & Order",
  description:
    "See all 13 Halo: Campaign Evolved missions in order, including the ten rebuilt Alpha Halo chapters and three Operation: METEORITE missions.",
  alternates: { canonical: "/missions" },
};

const alphaHaloMissions = [
  "The Pillar of Autumn",
  "Halo",
  "The Truth and Reconciliation",
  "The Silent Cartographer",
  "Assault on the Control Room",
  "343 Guilty Spark",
  "The Library",
  "Two Betrayals",
  "Keyes",
  "The Maw",
];

const meteoriteMissions = [
  "Boarding Action",
  "The Most Dangerous Game",
  "Heavy Burden",
];

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campaign index / Spoiler-light"
        title="Halo: Campaign Evolved missions in order"
        description="The complete 13-mission structure: ten rebuilt chapters on Alpha Halo and a new three-part prequel starring Master Chief and Sergeant Johnson."
        image="/media/operation-meteorite.jpg"
        imageAlt="Master Chief and Sergeant Johnson during Operation Meteorite"
        meta={`Last reviewed ${siteConfig.updated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2 id="overview">How many missions are there?</h2>
          <p>
            <strong>Halo: Campaign Evolved contains 13 campaign missions.</strong> Ten
            missions rebuild the full Halo: Combat Evolved story, while three additional
            chapters form Operation: METEORITE. The remake keeps the familiar Alpha Halo
            arc but updates level design, controls, cinematics, sound, enemy encounters,
            vehicle interaction, and replay modifiers.
          </p>

          <div className="callout">
            <p>
              This page lists mission titles and broad placement only. Story outcomes and
              encounter-specific spoilers are intentionally omitted.
            </p>
          </div>

          <h2 id="original-campaign">Alpha Halo campaign order</h2>
          <p>
            The main campaign follows Master Chief and Cortana from the Pillar of Autumn
            to the discovery of the ring&apos;s true purpose. The order below matches the
            original ten-chapter campaign rebuilt for Campaign Evolved.
          </p>
          <ol className="mission-list">
            {alphaHaloMissions.map((mission) => (
              <li key={mission}>
                <strong>{mission}</strong>
              </li>
            ))}
          </ol>

          <h2 id="operation-meteorite">Operation: METEORITE mission order</h2>
          <p>
            Operation: METEORITE takes place one year before Halo: Combat Evolved. Master
            Chief and Sergeant Avery Johnson infiltrate a Covenant agricultural vessel
            above the glassed human colony of Promise while searching for intelligence
            that may point toward High Charity.
          </p>
          <ol className="mission-list">
            {meteoriteMissions.map((mission) => (
              <li key={mission}>
                <strong>{mission}</strong>
              </li>
            ))}
          </ol>

          <h2 id="coop">Can every mission be played in co-op?</h2>
          <p>
            The complete campaign supports solo play or up to four players online. Online
            co-op works across Xbox Series X|S, PC, and PlayStation 5 with cross-play and
            cross-progression. Console versions also support two-player split-screen.
          </p>

          <h2 id="replay">Campaign Remix and Skulls</h2>
          <p>
            Campaign Remix lets players return to missions with combinations of altered
            enemies, weapons, visual effects, and Skulls. These modifiers are designed to
            change how encounters play rather than simply raising enemy health, making a
            second run structurally different from the first.
          </p>

          <SourceNote
            sources={[
              { label: "Halo Waypoint", href: siteConfig.officialUrl },
              { label: "Steam store", href: siteConfig.steamUrl },
            ]}
          />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#overview">Mission count</a>
            <a href="#original-campaign">Alpha Halo order</a>
            <a href="#operation-meteorite">Operation: METEORITE</a>
            <a href="#coop">Co-op support</a>
            <a href="#replay">Replay modifiers</a>
          </nav>
        </aside>
      </div>
    </>
  );
}

