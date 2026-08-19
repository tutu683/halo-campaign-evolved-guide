import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Halo Campaign Evolved Weapons List & New Guns" },
  description:
    "See the Halo: Campaign Evolved weapons list, returning Combat Evolved guns, and confirmed new additions including the Energy Sword and Battle Rifle.",
  alternates: { canonical: "/weapons" },
};

const weaponsUpdated = "August 19, 2026";
const weaponsUpdatedIso = "2026-08-19";

const weaponsFaq = [
  {
    question: "How many additional weapons are in Halo: Campaign Evolved?",
    answer:
      "Halo Studios says the expanded campaign includes nine additional weapons from across the Halo series alongside the returning Combat Evolved arsenal.",
  },
  {
    question: "Which new weapons are confirmed for Halo: Campaign Evolved?",
    answer:
      "Official Halo material specifically names the Energy Sword, Battle Rifle, Needle Rifle, and Brute Plasma Rifle among the additions.",
  },
  {
    question: "Does Halo: Campaign Evolved keep the original weapon sandbox?",
    answer:
      "Yes. Official descriptions say the iconic Combat Evolved weapons return while the campaign adds nine weapons from later Halo games.",
  },
];

const classicWeapons = [
  ["M6D Pistol", "Precision sidearm", "Accurate headshots and controlled mid-range fire"],
  ["MA5B Assault Rifle", "Automatic rifle", "Close-range pressure and shield stripping"],
  ["Shotgun", "Close-quarters power", "Flood forms and aggressive Elites at short range"],
  ["Sniper Rifle", "Long-range precision", "Unshielded targets and exposed Elite headshots"],
  ["Rocket Launcher", "Heavy explosive", "Vehicles, Hunters, and dense enemy groups"],
  ["Plasma Pistol", "Shield control", "Charged shots followed by a precision headshot"],
  ["Plasma Rifle", "Energy automatic", "Fast shield damage at close to medium range"],
  ["Needler", "Tracking projectile", "Supercombine bursts against mobile targets"],
];

export default function WeaponsPage() {
  const pageUrl = `${siteConfig.url}/weapons`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Halo Campaign Evolved Weapons List & New Guns",
        description: metadata.description,
        image: `${siteConfig.url}/media/arsenal.jpg`,
        datePublished: "2026-08-11",
        dateModified: weaponsUpdatedIso,
        mainEntityOfPage: pageUrl,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Weapons", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: weaponsFaq.map((item) => ({
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
        eyebrow="Combat reference / Arsenal"
        title="Halo: Campaign Evolved weapons guide"
        description="The complete original sandbox returns with nine additional weapons from across the Halo series. This page separates confirmed additions from the classic kit."
        image="/media/arsenal.jpg"
        imageAlt="Master Chief using the expanded Halo Campaign Evolved arsenal"
        meta={`Last reviewed ${weaponsUpdated}`}
      />
      <div className="shell breadcrumbs-shell">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Weapons" }]} />
      </div>
      <div className="shell article-shell">
        <article className="article">
          <div className="quick-answer">
            <strong>Quick answer</strong>
            <p>
              The classic Combat Evolved arsenal returns with nine additional weapons.
              Confirmed additions include the Energy Sword, Battle Rifle, Needle Rifle,
              and Brute Plasma Rifle.
            </p>
          </div>

          <h2 id="overview">What changed in the weapon sandbox?</h2>
          <p>
            Halo Studios says Campaign Evolved includes every iconic weapon from the
            original Halo: Combat Evolved campaign plus <strong>nine additional weapons</strong>
            from across the series. The goal is a broader combat sandbox without removing
            the distinct roles that made the original arsenal readable.
          </p>

          <h2 id="confirmed-additions">Confirmed additional weapons</h2>
          <p>
            Official Halo Waypoint material specifically names the following weapons as
            additions to the Combat Evolved campaign. This list remains deliberately
            conservative until every variant is documented in play.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Weapon</th>
                <th>Role</th>
                <th>Practical use</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Energy Sword</td><td>Melee power weapon</td><td>Closing distance and eliminating priority targets</td></tr>
              <tr><td>Battle Rifle</td><td>Burst precision rifle</td><td>Reliable medium-range precision and headshots</td></tr>
              <tr><td>Needle Rifle</td><td>Precision crystal weapon</td><td>Tracking fire with precision finishing potential</td></tr>
              <tr><td>Brute Plasma Rifle</td><td>High-output energy rifle</td><td>Rapid shield pressure at the cost of heat management</td></tr>
            </tbody>
          </table>

          <h2 id="classic-weapons">Returning Combat Evolved weapons</h2>
          <table className="data-table">
            <thead>
              <tr><th>Weapon</th><th>Class</th><th>Best use</th></tr>
            </thead>
            <tbody>
              {classicWeapons.map(([name, weaponClass, use]) => (
                <tr key={name}><td>{name}</td><td>{weaponClass}</td><td>{use}</td></tr>
              ))}
            </tbody>
          </table>

          <h2 id="combat-basics">Three combat rules that still matter</h2>
          <h3>Match damage type to the target</h3>
          <p>
            Plasma remains useful for removing energy shields, while precision ballistic
            weapons finish exposed enemies efficiently. Carrying two weapons with
            complementary roles is generally stronger than doubling up on similar rifles.
          </p>
          <h3>Use the environment before spending heavy ammo</h3>
          <p>
            Grenades, dropped Covenant weapons, mounted positions, and vehicles can solve
            an encounter without exhausting rockets or sniper rounds needed later.
          </p>
          <h3>Expect Remix rules to disrupt a fixed loadout</h3>
          <p>
            Campaign Remix can randomize weapons and enemy combinations. Treat weapon
            knowledge as a set of roles rather than relying on one memorized pickup route.
          </p>

          <h2 id="faq">Halo: Campaign Evolved weapons FAQ</h2>
          <div className="faq-list">
            {weaponsFaq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <h2 id="related">Use the arsenal in the campaign</h2>
          <div className="related-links">
            <Link href="/missions">Open the complete mission list <ArrowRight size={15} /></Link>
            <Link href="/guides/legendary-difficulty">Prepare for Legendary difficulty <ArrowRight size={15} /></Link>
            <Link href="/guides/skulls-and-campaign-remix">Understand Campaign Remix <ArrowRight size={15} /></Link>
          </div>

          <SourceNote sources={[{ label: "Halo Waypoint", href: siteConfig.officialUrl }]} />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#overview">Sandbox changes</a>
            <a href="#confirmed-additions">Confirmed additions</a>
            <a href="#classic-weapons">Classic arsenal</a>
            <a href="#combat-basics">Combat rules</a>
            <a href="#faq">FAQ</a>
            <a href="#related">Related guides</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
