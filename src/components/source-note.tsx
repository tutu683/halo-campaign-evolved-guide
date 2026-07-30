import { ExternalLink } from "lucide-react";

type Source = { label: string; href: string };

export function SourceNote({ sources }: { sources: Source[] }) {
  return (
    <aside className="source-note" aria-label="Sources">
      <strong>Sources checked</strong>
      <div>
        {sources.map((source) => (
          <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
            {source.label} <ExternalLink size={13} />
          </a>
        ))}
      </div>
    </aside>
  );
}

