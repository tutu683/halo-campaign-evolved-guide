import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SourceNote } from "@/components/source-note";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halo Campaign Evolved Weapons & Expanded Arsenal",
  description:
    "A practical Halo: Campaign Evolved weapons guide covering the classic Combat Evolved arsenal and confirmed additions such as the Energy Sword and Battle Rifle.",
  alternates: { canonical: "/weapons" },
};

const classicWeapons = [
  ["M6D Pistol", "Precision sidearm", "Accurate headshots and controlled mid-range fire"],
  ["MA5B Assault Rifle", "Automatic rifle", "Close-range pressure and shield stripping"],
  ["Shotgun", "Close-quarters power", "Flood forms and aggressive Elites at short range"],
  ["Sniper Rifle", "Long-range precision", "Unshielded targets and exposed Elite headshots"],
  ["Rocket Launcher", "Heavy explosive", "Vehicles, Hunters, and dense enemy groups"],
  ["Plasma Pistol", "Shield control", "Charged shots followed by a precision headshot"],
  ["Plasma Rifle", "Energy automatic", "Fast shield damage at close to medium range"],
  ["Needler", "Tracking projectile", "Supercombine bursts against mobile targets"],
];

export default function WeaponsPage() {
  return (
    <>
      <PageHero
        eyebrow="Combat reference / Arsenal"
        title="Halo: Campaign Evolved weapons guide"
        description="The complete original sandbox returns with nine additional weapons from across the Halo series. This page separates confirmed additions from the classic kit."
        image="/media/arsenal.jpg"
        imageAlt="Master Chief using the expanded Halo Campaign Evolved arsenal"
        meta={`Last reviewed ${siteConfig.updated}`}
      />
      <div className="shell article-shell">
        <article className="article">
          <h2 id="overview">What changed in the weapon sandbox?</h2>
          <p>
            Halo Studios says Campaign Evolved includes every iconic weapon from the
            original Halo: Combat Evolved campaign plus <strong>nine additional weapons</strong>
            from across the series. The goal is a broader combat sandbox without removing
            the distinct roles that made the original arsenal readable.
          </p>

          <h2 id="confirmed-additions">Confirmed additional weapons</h2>
          <p>
            Official Halo Waypoint material specifically names the following weapons as
            additions to the Combat Evolved campaign. This list remains deliberately
            conservative until every variant is documented in play.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Weapon</th>
                <th>Role</th>
                <th>Practical use</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Energy Sword</td><td>Melee power weapon</td><td>Closing distance and eliminating priority targets</td></tr>
              <tr><td>Battle Rifle</td><td>Burst precision rifle</td><td>Reliable medium-range precision and headshots</td></tr>
              <tr><td>Needle Rifle</td><td>Precision crystal weapon</td><td>Tracking fire with precision finishing potential</td></tr>
              <tr><td>Brute Plasma Rifle</td><td>High-output energy rifle</td><td>Rapid shield pressure at the cost of heat management</td></tr>
            </tbody>
          </table>

          <h2 id="classic-weapons">Returning Combat Evolved weapons</h2>
          <table className="data-table">
            <thead>
              <tr><th>Weapon</th><th>Class</th><th>Best use</th></tr>
            </thead>
            <tbody>
              {classicWeapons.map(([name, weaponClass, use]) => (
                <tr key={name}><td>{name}</td><td>{weaponClass}</td><td>{use}</td></tr>
              ))}
            </tbody>
          </table>

          <h2 id="combat-basics">Three combat rules that still matter</h2>
          <h3>Match damage type to the target</h3>
          <p>
            Plasma remains useful for removing energy shields, while precision ballistic
            weapons finish exposed enemies efficiently. Carrying two weapons with
            complementary roles is generally stronger than doubling up on similar rifles.
          </p>
          <h3>Use the environment before spending heavy ammo</h3>
          <p>
            Grenades, dropped Covenant weapons, mounted positions, and vehicles can solve
            an encounter without exhausting rockets or sniper rounds needed later.
          </p>
          <h3>Expect Remix rules to disrupt a fixed loadout</h3>
          <p>
            Campaign Remix can randomize weapons and enemy combinations. Treat weapon
            knowledge as a set of roles rather than relying on one memorized pickup route.
          </p>

          <SourceNote sources={[{ label: "Halo Waypoint", href: siteConfig.officialUrl }]} />
        </article>
        <aside className="article-sidebar">
          <strong>On this page</strong>
          <nav>
            <a href="#overview">Sandbox changes</a>
            <a href="#confirmed-additions">Confirmed additions</a>
            <a href="#classic-weapons">Classic arsenal</a>
            <a href="#combat-basics">Combat rules</a>
          </nav>
        </aside>
      </div>
    </>
  );
}

