import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { StructuredData } from "@/components/structured-data";
import { missions } from "@/lib/missions";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Halo Campaign Evolved Missions List & Order" },
  description:
    "See all 13 Halo: Campaign Evolved missions in order and open spoiler-light walkthroughs for the Alpha Halo and Operation: METEORITE chapters.",
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
];

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
        name: "Halo Campaign Evolved Missions List & Order",
        description: metadata.description,
        url: pageUrl,
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
        meta={`Last reviewed ${siteConfig.updated}`}
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
            guide. The first ten chapters cover Alpha Halo, followed by the three-part
            Operation: METEORITE group.
          </p>

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
