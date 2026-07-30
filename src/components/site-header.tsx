import Link from "next/link";
import { Menu, Shield } from "lucide-react";
import { primaryNavigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Campaign Evolved Guide home">
          <span className="brand-mark" aria-hidden="true">
            <Shield size={18} strokeWidth={1.8} />
          </span>
          <span>
            <strong>CAMPAIGN EVOLVED</strong>
            <small>INDEPENDENT FIELD GUIDE</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={21} />
          </summary>
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

