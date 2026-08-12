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
        <p className="eyebrow">Privacy policy / August 12, 2026</p>
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
            This site uses Vercel Web Analytics and Speed Insights to understand aggregate
            page traffic, referral sources, device and browser categories, and site
            performance. These services help identify useful guides and technical issues.
            We do not use analytics to collect names, email addresses, payment details, or
            account credentials.
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
            <a href="mailto:contact@halo-campaign-evolved.online">
              contact@halo-campaign-evolved.online
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
