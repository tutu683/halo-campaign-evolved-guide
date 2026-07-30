import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Gamepad2,
  Monitor,
  ShieldCheck,
  Users,
} from "lucide-react";
import { guideCards, siteConfig } from "@/lib/site";

const homeFaq = [
  {
    question: "What is Halo: Campaign Evolved?",
    answer:
      "It is a rebuilt and expanded remake of the Halo: Combat Evolved campaign, developed by Halo Studios and published by Xbox Game Studios.",
  },
  {
    question: "When did Halo: Campaign Evolved release?",
    answer:
      "Halo: Campaign Evolved released on July 28, 2026 for Xbox Series X|S, PC, and PlayStation 5.",
  },
  {
    question: "Does it include multiplayer?",
    answer:
      "The release is campaign-focused. It supports up to four-player online campaign co-op with cross-play and cross-progression, plus two-player split-screen on consoles.",
  },
  {
    question: "How many campaign missions are included?",
    answer:
      "The game includes 13 campaign missions: ten rebuilt missions from the original campaign and three new Operation: METEORITE missions.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero">
        <Image
          src="/media/halo-hero.jpg"
          alt="Master Chief in Halo Campaign Evolved official key art"
          fill
          priority
          sizes="100vw"
        />
        <div className="media-shade" />
        <div className="shell hero-content">
          <p className="status-line">
            <span className="status-dot" aria-hidden="true" />
            Released July 28, 2026 / Guide online
          </p>
          <h1>
            Halo: <span>Campaign Evolved</span>
          </h1>
          <p className="hero-lead">
            A focused, spoiler-aware field guide to all 13 missions, the expanded
            weapon sandbox, official PC requirements, co-op, editions, and the new
            Operation: METEORITE story.
          </p>
          <div className="button-row">
            <Link className="button-primary" href="/missions">
              Explore missions <ArrowRight size={17} />
            </Link>
            <a
              className="button-secondary"
              href={siteConfig.officialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Official game page <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="intel-band" aria-label="Game facts">
        <div className="shell intel-grid">
          <div className="intel-item">
            <p className="intel-value">13 missions</p>
            <p className="stat-label">Complete campaign</p>
          </div>
          <div className="intel-item">
            <p className="intel-value">4-player</p>
            <p className="stat-label">Online co-op</p>
          </div>
          <div className="intel-item">
            <p className="intel-value">3 platforms</p>
            <p className="stat-label">Xbox / PC / PS5</p>
          </div>
          <div className="intel-item">
            <p className="intel-value">100 GB</p>
            <p className="stat-label">PC storage required</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="section-kicker">Choose your briefing</p>
              <h2 className="section-title">The useful answers, without the filler.</h2>
            </div>
            <p className="section-summary">
              Every guide page targets one player question and separates confirmed
              details from interpretation. Start with the area blocking your next run.
            </p>
          </div>

          <div className="guide-grid">
            {guideCards.map((card) => (
              <Link className="guide-card" href={card.href} key={card.href}>
                <div>
                  <p className="card-kicker">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <span className="card-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-media">
          <Image
            src="/media/operation-meteorite.jpg"
            alt="Master Chief and Sergeant Johnson in Operation Meteorite"
            fill
            sizes="(max-width: 860px) 100vw, 55vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">New campaign / Operation: METEORITE</p>
          <h2>Three missions before the ring.</h2>
          <p>
            Set one year before Halo: Combat Evolved, Operation: METEORITE pairs
            Master Chief with Sergeant Avery Johnson aboard a Covenant agricultural
            ship above the glassed colony of Promise.
          </p>
          <ul className="fact-list">
            <li>
              <Check size={17} /> Three original missions with new spaces and enemies
            </li>
            <li>
              <Check size={17} /> A self-contained prequel to the Alpha Halo campaign
            </li>
            <li>
              <Check size={17} /> Included in the complete 13-mission package
            </li>
          </ul>
          <div className="button-row">
            <Link className="button-secondary" href="/missions">
              View mission order <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="section-kicker">What changed</p>
              <h2 className="section-title">A faithful campaign with a larger sandbox.</h2>
            </div>
            <p className="section-summary">
              The remake keeps the original story structure while rebuilding visuals,
              cinematics, sound, controls, vehicles, and replay modifiers for current hardware.
            </p>
          </div>
          <div className="guide-grid">
            <div className="guide-card">
              <div>
                <p className="card-kicker">Combat</p>
                <h3>Expanded arsenal</h3>
                <p>
                  Every original campaign weapon returns, joined by nine weapons from
                  across the series, including the Energy Sword and Battle Rifle.
                </p>
              </div>
              <Gamepad2 className="text-[var(--green-strong)]" size={27} />
            </div>
            <div className="guide-card">
              <div>
                <p className="card-kicker">Squad</p>
                <h3>Cross-platform co-op</h3>
                <p>
                  Four players can team up online across Xbox, PC, and PS5 with shared
                  progression. Console versions also support two-player split-screen.
                </p>
              </div>
              <Users className="text-[var(--cyan)]" size={27} />
            </div>
            <div className="guide-card">
              <div>
                <p className="card-kicker">Replay</p>
                <h3>Campaign Remix</h3>
                <p>
                  Skulls and remix options can alter weapons, enemy combinations,
                  visual effects, and the rules of a familiar mission.
                </p>
              </div>
              <ShieldCheck className="text-[var(--amber)]" size={27} />
            </div>
            <div className="guide-card">
              <div>
                <p className="card-kicker">Hardware</p>
                <h3>Built for current systems</h3>
                <p>
                  PC players need Windows 11, 16 GB RAM at minimum, and 100 GB of
                  free storage. Check the full GPU and CPU table before installing.
                </p>
              </div>
              <Monitor className="text-[var(--green-strong)]" size={27} />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-copy">
          <p className="eyebrow">Source policy</p>
          <h2>Verified first. Updated fast.</h2>
          <p>
            Core facts are checked against Halo Waypoint, Xbox, PlayStation, and Steam.
            We label unknown details instead of filling gaps with generated claims, and
            every major guide displays its last review date.
          </p>
          <div className="button-row">
            <Link className="button-secondary" href="/about">
              How this guide works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="feature-media">
          <Image
            src="/media/coop.jpg"
            alt="Halo Campaign Evolved four-player cooperative campaign"
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="content-section" id="faq">
        <div className="shell section-header">
          <div>
            <p className="section-kicker">Quick answers</p>
            <h2 className="section-title">Halo: Campaign Evolved FAQ</h2>
          </div>
          <p className="section-summary">Reviewed {siteConfig.updated}.</p>
        </div>
        <div className="shell faq-list">
          {homeFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
