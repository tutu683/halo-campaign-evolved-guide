import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { StructuredData } from "@/components/structured-data";
import { getMission, missions } from "@/lib/missions";
import { siteConfig } from "@/lib/site";

type MissionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return missions.map((mission) => ({ slug: mission.slug }));
}

export async function generateMetadata({ params }: MissionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mission = getMission(slug);

  if (!mission) {
    return {};
  }

  const path = `/missions/${mission.slug}`;
  return {
    title: `${mission.title} Walkthrough & Mission Guide`,
    description: mission.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${mission.title} Walkthrough`,
      description: mission.description,
      images: [{ url: mission.image, width: 1920, height: 1080, alt: mission.imageAlt }],
    },
  };
}

export default async function MissionPage({ params }: MissionPageProps) {
  const { slug } = await params;
  const mission = getMission(slug);

  if (!mission) {
    notFound();
  }

  const index = missions.findIndex((item) => item.slug === mission.slug);
  const previousMission = missions[index - 1];
  const nextMission = missions[index + 1];
  const faq = [
    {
      question: `What number mission is ${mission.title}?`,
      answer: `${mission.title} is mission ${mission.order} of 13 in Halo: Campaign Evolved and belongs to the ${mission.arc} arc.`,
    },
    {
      question: `What loadout should I use for ${mission.title}?`,
      answer: mission.loadout,
    },
  ];
  const pageUrl = `${siteConfig.url}/missions/${mission.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${mission.title} Walkthrough & Mission Guide`,
        description: mission.description,
        image: `${siteConfig.url}${mission.image}`,
        datePublished: "2026-08-11",
        dateModified: siteConfig.updatedIso,
        mainEntityOfPage: pageUrl,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Missions", item: `${siteConfig.url}/missions` },
          { "@type": "ListItem", position: 3, name: mission.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
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
        eyebrow={`${mission.arc} / Mission ${mission.order} of 13`}
        title={`${mission.title} walkthrough`}
        description={mission.description}
        image={mission.image}
        imageAlt={mission.imageAlt}
        meta={`Last reviewed ${siteConfig.updated}`}
      />
      <div className="shell breadcrumbs-shell">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/missions", label: "Missions" },
            { label: mission.title },
          ]}
        />
      </div>
      <div className="shell article-shell">
        <article className="article">
          <h2 id="overview">Mission overview</h2>
          <p>{mission.overview}</p>

          <div className="callout">
            <p>
              <strong>Recommended loadout:</strong> {mission.loadout}
            </p>
          </div>

          <h2 id="objectives">Objective priorities</h2>
          <ol>
            {mission.priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ol>

          <h2 id="tips">Combat and difficulty tips</h2>
          <ul>
            {mission.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <h2 id="verification">What this guide confirms</h2>
          <p>
            Mission order and campaign placement are checked against the current campaign
            index and official product material. Encounter-specific advice is kept separate
            from confirmed story facts, and the page does not claim unverified collectible,
            checkpoint, or boss locations.
          </p>

          <h2 id="faq">Frequently asked questions</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <h2 id="related">Related campaign guides</h2>
          <div className="related-links">
            <Link href="/missions">See all 13 missions in order <ArrowRight size={15} /></Link>
            {mission.arc === "Operation: METEORITE" ? (
              <Link href="/guides/sergeant-johnson-missions">Sergeant Johnson missions guide <ArrowRight size={15} /></Link>
            ) : (
              <Link href="/guides/campaign-length">Campaign length guide <ArrowRight size={15} /></Link>
            )}
            <Link href="/guides/split-screen">Local co-op and split-screen <ArrowRight size={15} /></Link>
          </div>

          <nav className="article-pagination" aria-label="Mission guide navigation">
            {previousMission ? (
              <Link href={`/missions/${previousMission.slug}`}>
                <ArrowLeft size={16} />
                <span><small>Previous mission</small>{previousMission.title}</span>
              </Link>
            ) : <span />}
            {nextMission ? (
              <Link href={`/missions/${nextMission.slug}`}>
                <span><small>Next mission</small>{nextMission.title}</span>
                <ArrowRight size={16} />
              </Link>
            ) : <Link href="/guides"><span><small>Next</small>Browse player guides</span><ArrowRight size={16} /></Link>}
          </nav>

          <SourceNote
            sources={[
              { label: "Halo Waypoint", href: siteConfig.officialUrl },
              { label: "Mission index", href: `${siteConfig.url}/missions` },
            ]}
          />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#overview">Overview</a>
            <a href="#objectives">Objective priorities</a>
            <a href="#tips">Combat tips</a>
            <a href="#verification">Verification</a>
            <a href="#faq">FAQ</a>
            <a href="#related">Related guides</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
