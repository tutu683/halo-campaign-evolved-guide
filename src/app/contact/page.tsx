import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Corrections",
  description: "Report a factual correction or source issue to Campaign Evolved Guide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="simple-page">
      <div className="shell">
        <p className="eyebrow">Contact and corrections</p>
        <h1>Found a factual error or a stronger source?</h1>
        <div className="simple-copy">
          <p>
            Send the page URL, the statement that needs review, and a public source that
            supports the correction to{" "}
            <a href="mailto:contact@halocampaignevolvedguide.com">
              contact@halocampaignevolvedguide.com
            </a>.
          </p>
          <p>
            This inbox is intended for editorial corrections and rights-holder requests.
            It does not provide Microsoft account, purchase, installation, or in-game
            technical support.
          </p>
        </div>
      </div>
    </section>
  );
}

