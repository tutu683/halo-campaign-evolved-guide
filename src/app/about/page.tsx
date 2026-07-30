import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About This Independent Halo Guide",
  description:
    "Learn how Campaign Evolved Guide verifies sources, handles updates, and separates confirmed facts from interpretation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="simple-page">
      <div className="shell">
        <p className="eyebrow">About the site</p>
        <h1>An independent field guide built around verifiable answers.</h1>
        <div className="simple-copy">
          <p>
            Campaign Evolved Guide is an unofficial editorial resource for Halo: Campaign
            Evolved. It organizes mission, weapon, platform, co-op, and PC information into
            focused pages that are easy to scan while playing.
          </p>
          <h2>Source policy</h2>
          <p>
            Release facts and product specifications are checked against Halo Waypoint,
            Xbox, PlayStation, and Steam. Gameplay observations may also use released-game
            evidence. Unknown details are labeled rather than completed with assumptions.
          </p>
          <h2>Update policy</h2>
          <p>
            Important pages display a review date. Corrections take priority over content
            volume, and one search intent is assigned to one primary page to avoid thin or
            duplicated coverage. Site-wide facts were last reviewed {siteConfig.updated}.
          </p>
          <h2>Independence</h2>
          <p>
            This site is not affiliated with Microsoft, Xbox, Halo Studios, or 343
            Industries. Halo names, marks, and official media remain the property of their
            respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}

