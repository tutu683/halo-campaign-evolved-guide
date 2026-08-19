import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { StructuredData } from "@/components/structured-data";
import { getGuide, guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

type GuidePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};

  const path = `/guides/${guide.slug}`;
  return {
    title: guide.seoTitle ? { absolute: guide.seoTitle } : guide.title,
    description: guide.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: guide.seoTitle ?? guide.title,
      description: guide.description,
      images: [{ url: guide.image, width: 1920, height: 1080, alt: guide.imageAlt }],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  const pageUrl = `${siteConfig.url}/guides/${guide.slug}`;
  const updated = guide.updated ?? siteConfig.updated;
  const updatedIso = guide.updatedIso ?? siteConfig.updatedIso;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        image: `${siteConfig.url}${guide.image}`,
        datePublished: "2026-08-11",
        dateModified: updatedIso,
        mainEntityOfPage: pageUrl,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
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
        eyebrow={guide.eyebrow}
        title={guide.title}
        description={guide.description}
        image={guide.image}
        imageAlt={guide.imageAlt}
        meta={`Last reviewed ${updated}`}
      />
      <div className="shell breadcrumbs-shell">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/guides", label: "Guides" }, { label: guide.title }]} />
      </div>
      <div className="shell article-shell">
        <article className="article">
          <div className="quick-answer">
            <strong>Quick answer</strong>
            <p>{guide.quickAnswer}</p>
          </div>

          {guide.sections.map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}

          <h2 id="faq">Frequently asked questions</h2>
          <div className="faq-list">
            {guide.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <h2 id="related">Related guides</h2>
          <div className="related-links">
            {guide.related.map((item) => (
              <Link href={item.href} key={item.href}>{item.label} <ArrowRight size={15} /></Link>
            ))}
          </div>

          <SourceNote
            sources={[
              { label: "Halo Waypoint", href: siteConfig.officialUrl },
              { label: "Xbox", href: siteConfig.xboxUrl },
              { label: "Steam", href: siteConfig.steamUrl },
            ]}
          />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#faq">FAQ</a>
            <a href="#related">Related guides</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
