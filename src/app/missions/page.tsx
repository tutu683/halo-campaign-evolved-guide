import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MissionChecklist } from "@/components/mission-checklist";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { StructuredData } from "@/components/structured-data";
import { missions } from "@/lib/missions";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Halo Campaign Evolved Missions: All 13 in Order" },
  description:
    "Find all 13 Halo: Campaign Evolved missions in order, including 10 Alpha Halo chapters and 3 Operation: METEORITE levels. Track progress and open guides.",
  alternates: { canonical: "/missions" },
};

const missionFaq = [
  {
    question: "How many missions are in Halo: Campaign Evolved?",
    answer: "Halo: Campaign Evolved has 13 campaign missions: ten rebuilt Alpha Halo missions and three Operation: METEORITE missions.",
  },
  {
    question: "What are the three Sergeant Johnson missions?",
    answer: "The three Operation: METEORITE missions featuring Sergeant Johnson are Boarding Action, The Most Dangerous Game, and Heavy Burden.",
  },
  {
    question: "Does Halo: Campaign Evolved support local co-op?",
    answer: "Console versions support two-player local split-screen campaign co-op. Online co-op supports up to four players.",
  },
  {
    question: "What order should I play the Halo: Campaign Evolved missions?",
    answer: "Follow the ten rebuilt Alpha Halo missions from The Pillar of Autumn through The Maw, followed by the three Operation: METEORITE missions listed in this guide.",
  },
  {
    question: "Are missions, chapters, and levels the same in Halo: Campaign Evolved?",
    answer: "Players often use missions, chapters, and levels interchangeably when referring to the 13 playable campaign entries. This guide uses mission as the primary term.",
  },
];

const missionsUpdated = "August 19, 2026";
const missionsUpdatedIso = "2026-08-19";

const alphaHaloMissions = missions.filter((mission) => mission.arc === "Alpha Halo");
const meteoriteMissions = missions.filter((mission) => mission.arc === "Operation: METEORITE");

function MissionDirectory({ items }: { items: typeof missions }) {
  return (
    <ol className="mission-directory">
      {items.map((mission) => (
        <li key={mission.slug}>
          <Link href={`/missions/${mission.slug}`}>
            <span className="mission-number">{String(mission.order).padStart(2, "0")}</span>
            <span>
              <small>{mission.arc}</small>
              <strong>{mission.title}</strong>
              <p>{mission.description}</p>
            </span>
            <ArrowRight size={17} />
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function MissionsPage() {
  const pageUrl = `${siteConfig.url}/missions`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Halo Campaign Evolved Missions: All 13 in Order",
        description: metadata.description,
        url: pageUrl,
        dateModified: missionsUpdatedIso,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": `${pageUrl}/#mission-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#mission-list`,
        numberOfItems: missions.length,
        itemListElement: missions.map((mission) => ({
          "@type": "ListItem",
          position: mission.order,
          name: mission.title,
          url: `${pageUrl}/${mission.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: missionFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <StructuredData data={schema} />
      <PageHero
        eyebrow="Campaign index / Spoiler-light"
        title="Halo: Campaign Evolved missions in order"
        description="The complete 13-mission structure: ten rebuilt chapters on Alpha Halo and a new three-part prequel starring Master Chief and Sergeant Johnson."
        image="/media/operation-meteorite.jpg"
        imageAlt="Master Chief and Sergeant Johnson during Operation Meteorite"
        meta={`Last reviewed ${missionsUpdated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2 id="overview">How many missions are there?</h2>
          <p>
            <strong>Halo: Campaign Evolved contains 13 campaign missions.</strong> Ten
            missions rebuild the full Halo: Combat Evolved story, while three additional
            chapters form Operation: METEORITE.
          </p>
          <div className="callout">
            <p>
              Open any mission for spoiler-light objectives, loadout planning, and combat
              advice. Unverified collectible or boss locations are not included.
            </p>
          </div>

          <h2 id="mission-order">Halo: Campaign Evolved mission order</h2>
          <p>
            The numbered list below is the complete mission order used throughout this
            guide. Players also search for these entries as chapters or levels. The first
            ten cover Alpha Halo, followed by the three-part Operation: METEORITE group.
          </p>

          <h2 id="progress">Campaign mission checklist</h2>
          <p>
            Use the local checklist to keep your place without creating an account. Each
            mission name also opens its spoiler-light objectives and combat guide.
          </p>
          <MissionChecklist
            missions={missions.map(({ slug, title, order, arc }) => ({ slug, title, order, arc }))}
          />

          <h2 id="original-campaign">Alpha Halo campaign order</h2>
          <p>
            The main campaign follows Master Chief and Cortana from the Pillar of Autumn
            through the original ten-chapter story rebuilt for Campaign Evolved.
          </p>
          <MissionDirectory items={alphaHaloMissions} />

          <h2 id="operation-meteorite">Operation: METEORITE mission order</h2>
          <p>
            Operation: METEORITE takes place one year before Halo: Combat Evolved and
            follows Master Chief and Sergeant Avery Johnson on a new three-mission operation.
            See the{" "}
            <Link href="/guides/sergeant-johnson-missions">
              Sergeant Johnson missions guide
            </Link>{" "}
            for the full order and confirmed story placement.
          </p>
          <MissionDirectory items={meteoriteMissions} />

          <h2 id="faq">Mission order FAQ</h2>
          <div className="faq-list">
            {missionFaq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <h2 id="more-guides">Plan the rest of your run</h2>
          <div className="related-links">
            <Link href="/guides/campaign-length">Estimate campaign length <ArrowRight size={15} /></Link>
            <Link href="/guides/sergeant-johnson-missions">See the Sergeant Johnson missions <ArrowRight size={15} /></Link>
            <Link href="/guides/split-screen">Check local co-op support <ArrowRight size={15} /></Link>
            <Link href="/guides/coop-crossplay">Set up online co-op <ArrowRight size={15} /></Link>
            <Link href="/guides/legendary-difficulty">Prepare for Legendary <ArrowRight size={15} /></Link>
          </div>

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
            <a href="#mission-order">Complete order</a>
            <a href="#progress">Progress checklist</a>
            <a href="#original-campaign">Alpha Halo order</a>
            <a href="#operation-meteorite">Operation: METEORITE</a>
            <a href="#faq">FAQ</a>
            <a href="#more-guides">More guides</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
