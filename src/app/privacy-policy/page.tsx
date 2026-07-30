import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Campaign Evolved Guide.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <section className="simple-page">
      <div className="shell">
        <p className="eyebrow">Privacy policy / July 30, 2026</p>
        <h1>A content site with minimal data collection.</h1>
        <div className="simple-copy">
          <h2>Information collected</h2>
          <p>
            The current site does not create user accounts, accept payments, or collect
            form submissions. Hosting infrastructure may process routine request data such
            as IP address, browser type, requested page, and error logs for security and
            reliability.
          </p>
          <h2>Analytics and cookies</h2>
          <p>
            Privacy-conscious aggregate analytics may be added to understand page traffic.
            This policy will be updated before advertising or additional tracking is enabled.
          </p>
          <h2>External links</h2>
          <p>
            Links to Halo Waypoint, Xbox, Steam, PlayStation, and other third-party sites
            are governed by those services&apos; privacy policies. This site does not control
            their data practices.
          </p>
          <h2>Contact</h2>
          <p>
            Privacy and rights-holder questions can be sent to{" "}
            <a href="mailto:contact@halocampaignevolvedguide.com">
              contact@halocampaignevolvedguide.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

