import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">CAMPAIGN EVOLVED GUIDE</p>
          <p className="footer-copy">
            Independent, source-led coverage for players returning to Alpha Halo.
          </p>
        </div>
        <div className="footer-links" aria-label="Site information">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <a href={siteConfig.officialUrl} target="_blank" rel="noreferrer">
            Official site <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className="shell legal-line">
        <p>
          This unofficial fan guide is not affiliated with Microsoft, Xbox, Halo
          Studios, or 343 Industries. Halo and related marks belong to Microsoft.
        </p>
        <p>Official media used for editorial identification and commentary.</p>
      </div>
    </footer>
  );
}

