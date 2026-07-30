import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halo Campaign Evolved System Requirements for PC",
  description:
    "Check the official Halo: Campaign Evolved minimum and recommended PC requirements, including CPU, GPU, RAM, Windows version, and storage.",
  alternates: { canonical: "/system-requirements" },
};

const requirements = [
  ["Operating system", "Windows 11, 64-bit", "Windows 11, 64-bit"],
  ["Processor", "AMD Ryzen 5 3600 or Intel Core i7-10700K", "AMD Ryzen 7 7700 or Intel Core i7-12700K"],
  ["Memory", "16 GB RAM", "32 GB RAM"],
  ["Graphics", "AMD RX 6600, Intel Arc A580, or Nvidia RTX 2060 Super", "AMD RX 9070 or Nvidia RTX 3080 Ti"],
  ["Storage", "100 GB available", "100 GB available"],
];

export default function SystemRequirementsPage() {
  return (
    <>
      <PageHero
        eyebrow="PC deployment check"
        title="Halo: Campaign Evolved system requirements"
        description="The official minimum and recommended PC specifications published for the Steam release, with a short readiness checklist before you install."
        image="/media/campaign.jpg"
        imageAlt="Halo Campaign Evolved rebuilt campaign environment"
        meta={`Official specifications checked ${siteConfig.updated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2 id="specs">Official PC requirements</h2>
          <table className="data-table">
            <thead>
              <tr><th>Component</th><th>Minimum</th><th>Recommended</th></tr>
            </thead>
            <tbody>
              {requirements.map(([component, minimum, recommended]) => (
                <tr key={component}><td><strong>{component}</strong></td><td>{minimum}</td><td>{recommended}</td></tr>
              ))}
            </tbody>
          </table>

          <div className="callout">
            <p>
              Steam notes that downloads and updates can require significant additional
              bandwidth and temporary storage. Keep more than the listed 100 GB free when possible.
            </p>
          </div>

          <h2 id="minimum">What the minimum specification means</h2>
          <p>
            The minimum tier is built around a six-core Ryzen 5 3600 or an eight-core
            Core i7-10700K, 16 GB of memory, and a modern entry-level GPU with hardware
            support expected by a current-generation release. Windows 10 is not listed;
            the official requirement is Windows 11.
          </p>

          <h2 id="recommended">What the recommended specification means</h2>
          <p>
            The recommended tier makes a substantial jump to 32 GB RAM and high-end
            graphics hardware. The listed RTX 3080 Ti remains capable but has 12 GB of
            VRAM, while the Radeon RX 9070 provides a newer architecture. Final resolution,
            quality settings, and frame-rate targets can change real-world performance.
          </p>

          <h2 id="checklist">Before installing</h2>
          <ul>
            <li>Update Windows 11 and install the latest stable GPU driver.</li>
            <li>Confirm at least 100 GB of free space, preferably on an SSD.</li>
            <li>Expect a Microsoft/Xbox Network account requirement on Steam.</li>
            <li>Use a wired connection when downloading or playing four-player co-op.</li>
          </ul>

          <SourceNote sources={[{ label: "Steam PC specifications", href: siteConfig.steamUrl }]} />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#specs">Requirements table</a>
            <a href="#minimum">Minimum tier</a>
            <a href="#recommended">Recommended tier</a>
            <a href="#checklist">Install checklist</a>
          </nav>
        </aside>
      </div>
    </>
  );
}

