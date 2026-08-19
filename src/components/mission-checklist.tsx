"use client";

import Link from "next/link";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

type ChecklistMission = {
  slug: string;
  title: string;
  order: number;
  arc: string;
};

type MissionChecklistProps = {
  missions: ChecklistMission[];
};

const storageKey = "halo-campaign-evolved-mission-progress";

export function MissionChecklist({ missions }: MissionChecklistProps) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    let savedProgress: string[] = [];

    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
      if (Array.isArray(saved)) {
        const validSlugs = new Set(missions.map((mission) => mission.slug));
        savedProgress = saved.filter(
          (slug): slug is string => typeof slug === "string" && validSlugs.has(slug),
        );
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }

    const frame = window.requestAnimationFrame(() => {
      setCompleted(savedProgress);
      setStorageReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [missions]);

  useEffect(() => {
    if (storageReady) {
      window.localStorage.setItem(storageKey, JSON.stringify(completed));
    }
  }, [completed, storageReady]);

  function toggleMission(slug: string) {
    setCompleted((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }

  function clearProgress() {
    setCompleted([]);
  }

  const completionPercent = Math.round((completed.length / missions.length) * 100);

  return (
    <section className="mission-checklist" aria-labelledby="mission-checklist-title">
      <div className="mission-checklist-header">
        <div>
          <p className="mission-checklist-kicker">Local campaign checklist</p>
          <h3 id="mission-checklist-title">Track your completed missions</h3>
          <p>
            Mark chapters as you finish them. Progress stays in this browser and is
            never uploaded or tied to an account.
          </p>
        </div>
        <div className="mission-progress-summary">
          <strong>{completed.length} of {missions.length} complete</strong>
          <div
            className="mission-progress-track"
            role="progressbar"
            aria-label="Campaign completion"
            aria-valuemin={0}
            aria-valuemax={missions.length}
            aria-valuenow={completed.length}
          >
            <span style={{ width: `${completionPercent}%` }} />
          </div>
          <button type="button" onClick={clearProgress} disabled={completed.length === 0}>
            <RotateCcw size={15} aria-hidden="true" />
            Clear progress
          </button>
        </div>
      </div>

      <ol className="mission-checklist-list">
        {missions.map((mission) => {
          const isComplete = completed.includes(mission.slug);
          return (
            <li className={isComplete ? "is-complete" : undefined} key={mission.slug}>
              <label>
                <input
                  type="checkbox"
                  checked={isComplete}
                  onChange={() => toggleMission(mission.slug)}
                />
                <span className="mission-checkbox" aria-hidden="true">
                  <Check size={15} />
                </span>
                <span className="mission-checklist-copy">
                  <small>Mission {mission.order} / {mission.arc}</small>
                  <strong>{mission.title}</strong>
                </span>
              </label>
              <Link
                href={`/missions/${mission.slug}`}
                aria-label={`Open ${mission.title} mission guide`}
                title={`Open ${mission.title} guide`}
              >
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
