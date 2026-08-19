export type PlayerGuide = {
  slug: string;
  title: string;
  seoTitle?: string;
  eyebrow: string;
  description: string;
  quickAnswer: string;
  image: string;
  imageAlt: string;
  updated?: string;
  updatedIso?: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const guides: PlayerGuide[] = [
  {
    slug: "campaign-length",
    title: "How Long Is Halo: Campaign Evolved?",
    eyebrow: "Campaign length",
    description:
      "Estimate how long Halo: Campaign Evolved takes to finish based on its 13-mission structure, difficulty, co-op, and optional replay modes.",
    quickAnswer:
      "There is no single reliable completion time for every player. The campaign has 13 missions: ten rebuilt Alpha Halo chapters and three Operation: METEORITE missions. Difficulty, co-op coordination, exploration, and retries will determine the final time.",
    image: "/media/campaign.jpg",
    imageAlt: "Halo Campaign Evolved campaign environment",
    sections: [
      {
        id: "mission-count",
        heading: "What determines campaign length?",
        paragraphs: [
          "Mission count is confirmed, but a mission total alone cannot produce an exact hour estimate. Some chapters combine large outdoor spaces with interior encounters, while others are more linear.",
        ],
        bullets: [
          "Higher difficulties add retries and slower encounter planning.",
          "Co-op can speed up combat but may add time for regrouping and exploration.",
          "Campaign Remix and Skulls are replay features, not required for a first completion.",
        ],
      },
      {
        id: "planning",
        heading: "Plan a first playthrough",
        paragraphs: [
          "Use the mission index as a progress tracker and treat each chapter as a separate session if you are playing in short blocks. The three Operation: METEORITE missions follow the ten rebuilt Alpha Halo chapters in this guide's campaign order.",
          "For a clean first run, choose a comfortable difficulty and avoid completionist detours until reliable collectible routes are available.",
        ],
      },
      {
        id: "replay",
        heading: "Why replay time varies",
        paragraphs: [
          "Campaign Remix changes encounters with combinations of enemies, weapons, visual effects, and Skulls. Those optional runs can extend playtime far beyond one story completion, so they should be considered separately from campaign length.",
        ],
      },
    ],
    faq: [
      {
        question: "How many missions are in Halo: Campaign Evolved?",
        answer: "The campaign contains 13 missions: ten rebuilt Alpha Halo missions and three Operation: METEORITE missions.",
      },
      {
        question: "Does Campaign Remix count toward the story length?",
        answer: "No. Campaign Remix is an optional replay mode and is not required to complete the 13-mission story.",
      },
    ],
    related: [
      { href: "/missions", label: "See all 13 missions in order" },
      { href: "/guides/legendary-difficulty", label: "Prepare for Legendary difficulty" },
    ],
  },
  {
    slug: "coop-crossplay",
    title: "Halo: Campaign Evolved Co-op & Cross-play Guide",
    eyebrow: "Online co-op",
    description:
      "Learn how Halo: Campaign Evolved online co-op, cross-play, cross-progression, and platform support work across Xbox, PC, and PS5.",
    quickAnswer:
      "Halo: Campaign Evolved supports up to four players in online campaign co-op across Xbox Series X|S, PC, and PlayStation 5. Official product information also lists cross-play and cross-progression.",
    image: "/media/coop.jpg",
    imageAlt: "Halo Campaign Evolved cooperative campaign",
    sections: [
      {
        id: "players",
        heading: "How many players can play online?",
        paragraphs: [
          "The complete campaign can be played solo or with up to four players online. Cross-play connects the supported console and PC platforms, while cross-progression is listed for players moving between platforms.",
        ],
      },
      {
        id: "setup",
        heading: "Before starting a co-op session",
        paragraphs: [
          "Platform account, online-service, and privacy requirements can change. Check the sign-in prompts on your platform and the current official support page before troubleshooting a connection.",
        ],
        bullets: [
          "Confirm every player has installed the same game update.",
          "Check that cross-network play is allowed in console privacy settings.",
          "Use the mission index to agree on a starting chapter before forming the group.",
        ],
      },
      {
        id: "teamplay",
        heading: "Practical co-op roles",
        paragraphs: [
          "A balanced squad should distribute precision, plasma, close-range, and heavy weapons instead of having every player compete for the same ammunition. Leave one teammate in a recoverable position during difficult pushes.",
          "These role suggestions are general combat advice, not an official matchmaking requirement.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Halo: Campaign Evolved have cross-play?",
        answer: "Yes. Official product information lists online cross-play across Xbox Series X|S, PC, and PlayStation 5.",
      },
      {
        question: "Is the whole campaign playable in co-op?",
        answer: "The complete 13-mission campaign is listed as supporting solo play and online co-op for up to four players.",
      },
    ],
    related: [
      { href: "/guides/split-screen", label: "Check local split-screen support" },
      { href: "/missions", label: "Choose a campaign mission" },
    ],
  },
  {
    slug: "split-screen",
    title: "Halo: Campaign Evolved Local Co-op & Split-Screen Guide",
    seoTitle: "Does Halo Campaign Evolved Have Split-Screen Co-op?",
    eyebrow: "Local co-op",
    description:
      "Yes. Halo: Campaign Evolved supports 2-player split-screen co-op on consoles. See player limits, PC availability, setup, and online co-op differences.",
    quickAnswer:
      "Console versions of Halo: Campaign Evolved support two-player split-screen campaign co-op. Online co-op supports up to four players, so local and online player limits are different.",
    image: "/media/coop.jpg",
    imageAlt: "Two players in Halo Campaign Evolved co-op",
    updated: "August 19, 2026",
    updatedIso: "2026-08-19",
    sections: [
      {
        id: "support",
        heading: "Does Halo: Campaign Evolved have local co-op?",
        paragraphs: [
          "Yes. Official product information identifies two-player local split-screen campaign co-op for console versions. Two people can play on the same console and display, but the four-player online limit does not apply to one console.",
          "PC storefront wording should be checked separately because local split-screen support is not interchangeable with online co-op support.",
        ],
      },
      {
        id: "difference",
        heading: "Split-screen vs. online co-op",
        paragraphs: [
          "Split-screen places two local players on one console and display. Online co-op supports a larger group across supported platforms and requires each remote player to meet their platform's online requirements.",
        ],
      },
      {
        id: "setup",
        heading: "Local setup checklist",
        paragraphs: [
          "Connect and sign in both controllers before opening the campaign lobby. If the second player does not appear, confirm that the controller is assigned to a separate local profile and review the current console support instructions.",
        ],
        bullets: [
          "Use a display mode that keeps HUD text readable for both players.",
          "Agree on vehicle and weapon roles before crowded encounters.",
          "Test checkpoints in an early mission before beginning a long session.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Halo: Campaign Evolved have local co-op?",
        answer: "Yes. Console versions support two-player local split-screen campaign co-op.",
      },
      {
        question: "How many players can use split-screen?",
        answer: "Console versions support two-player split-screen campaign co-op.",
      },
      {
        question: "Is four-player split-screen supported?",
        answer: "The confirmed four-player limit applies to online co-op. Confirmed local split-screen support is for two players on console.",
      },
    ],
    related: [
      { href: "/guides/coop-crossplay", label: "Compare online co-op and cross-play" },
      { href: "/missions", label: "Choose a mission for local co-op" },
      { href: "/system-requirements", label: "Review PC requirements" },
    ],
  },
  {
    slug: "sergeant-johnson-missions",
    title: "Sergeant Johnson Missions in Halo: Campaign Evolved",
    seoTitle: "Halo Campaign Evolved Sergeant Johnson Missions",
    eyebrow: "Johnson missions",
    description:
      "See the three Halo: Campaign Evolved Sergeant Johnson missions in order and learn where Operation: METEORITE fits into the 13-mission campaign.",
    quickAnswer:
      "Sergeant Avery Johnson joins Master Chief in the three-mission Operation: METEORITE prequel: Boarding Action, The Most Dangerous Game, and Heavy Burden. They are missions 11 through 13 in the complete campaign order used by this guide.",
    image: "/media/operation-meteorite.jpg",
    imageAlt: "Master Chief and Sergeant Johnson in Operation Meteorite",
    sections: [
      {
        id: "mission-list",
        heading: "Sergeant Johnson missions in order",
        paragraphs: [
          "Operation: METEORITE is a three-part story featuring Master Chief and Sergeant Avery Johnson. In the complete 13-mission sequence, the prequel chapters follow the ten rebuilt Alpha Halo missions.",
        ],
        bullets: [
          "Mission 11: Boarding Action",
          "Mission 12: The Most Dangerous Game",
          "Mission 13: Heavy Burden",
        ],
      },
      {
        id: "campaign-order",
        heading: "Where Operation: METEORITE fits",
        paragraphs: [
          "The Operation: METEORITE story is set one year before Halo: Combat Evolved. The guide lists it after the rebuilt Alpha Halo campaign so the main story order remains easy to follow while the three new missions stay grouped together.",
          "Players who prefer story chronology can treat METEORITE as a prequel. Players following the in-game campaign index can use the full mission directory to confirm the available order.",
        ],
      },
      {
        id: "confirmed-details",
        heading: "What is confirmed about Johnson's role?",
        paragraphs: [
          "Official product material pairs Sergeant Johnson with Master Chief in Operation: METEORITE. That confirms his story role in the three-mission arc, but it should not be used to invent mission objectives, dialogue, collectibles, or playable-character options.",
          "The linked mission pages separate confirmed campaign placement from practical, spoiler-light preparation. Encounter details are only added when they can be checked against the released game or an official source.",
        ],
      },
    ],
    faq: [
      {
        question: "Which Halo: Campaign Evolved missions feature Sergeant Johnson?",
        answer: "Sergeant Johnson appears in the three Operation: METEORITE missions: Boarding Action, The Most Dangerous Game, and Heavy Burden.",
      },
      {
        question: "How many Sergeant Johnson missions are there?",
        answer: "There are three missions in the Operation: METEORITE arc.",
      },
      {
        question: "Are the Johnson missions part of the original Alpha Halo campaign?",
        answer: "No. Operation: METEORITE is a new prequel arc set one year before Halo: Combat Evolved and is separate from the ten rebuilt Alpha Halo missions.",
      },
    ],
    related: [
      { href: "/missions", label: "See the complete mission order" },
      { href: "/missions/boarding-action", label: "Open the Boarding Action guide" },
      { href: "/missions/the-most-dangerous-game", label: "Open The Most Dangerous Game guide" },
      { href: "/missions/heavy-burden", label: "Open the Heavy Burden guide" },
    ],
  },
  {
    slug: "legendary-difficulty",
    title: "Halo: Campaign Evolved Legendary Difficulty Guide",
    eyebrow: "Difficulty guide",
    description:
      "Use practical shield, weapon, positioning, and co-op tactics to prepare for Halo: Campaign Evolved on Legendary difficulty.",
    quickAnswer:
      "Legendary rewards controlled fights, complementary damage types, and consistent retreat routes. Strip shields with plasma, finish exposed targets with precision damage, and avoid advancing until the current firing lane is stable.",
    image: "/media/arsenal.jpg",
    imageAlt: "Weapons used in Halo Campaign Evolved combat",
    sections: [
      {
        id: "fundamentals",
        heading: "Build around shield control",
        paragraphs: [
          "Carry complementary weapons. Plasma is useful for removing shields, while precision damage is efficient after a target is exposed. A second weapon should solve a different problem rather than duplicate the first.",
        ],
        bullets: [
          "Break line of sight before waiting for shields to recharge.",
          "Remove exposed priority targets before pushing ordinary infantry.",
          "Keep grenades for groups, doorways, or forced movement.",
        ],
      },
      {
        id: "positioning",
        heading: "Use repeatable positions",
        paragraphs: [
          "Enter a new space with a known fallback route. Doorways, elevation changes, and terrain can limit how many enemies attack simultaneously. Do not retreat into a room that has not been cleared.",
          "This is general tactical advice. Exact enemy placement may change with Campaign Remix modifiers.",
        ],
      },
      {
        id: "coop",
        heading: "Legendary co-op discipline",
        paragraphs: [
          "In co-op, avoid having the entire team enter the same exposed area. One player in a recoverable position can preserve progress while others pressure priority targets. Call out power ammunition and vehicle damage before committing to the next arena.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the best general Legendary loadout?",
        answer: "A plasma shield-breaking option paired with a dependable precision weapon is the most flexible starting point, though mission pickups will require adjustments.",
      },
      {
        question: "Should I use Campaign Remix for a first Legendary run?",
        answer: "A standard campaign run is easier to learn because Campaign Remix can alter enemies, weapons, effects, and Skulls.",
      },
    ],
    related: [
      { href: "/weapons", label: "Review weapon roles" },
      { href: "/missions/the-pillar-of-autumn", label: "Start the mission walkthrough" },
    ],
  },
  {
    slug: "skulls-and-campaign-remix",
    title: "Halo: Campaign Evolved Skulls & Campaign Remix",
    eyebrow: "Replay modes",
    description:
      "Understand how Skulls and Campaign Remix change Halo: Campaign Evolved replays without relying on unverified unlock or location claims.",
    quickAnswer:
      "Campaign Remix is an optional replay system that can combine altered enemies, weapons, visual effects, and Skulls. The result is a changed encounter setup rather than a required part of the main story.",
    image: "/media/campaign.jpg",
    imageAlt: "Halo Campaign Evolved replay environment",
    sections: [
      {
        id: "remix",
        heading: "What Campaign Remix changes",
        paragraphs: [
          "Official descriptions frame Campaign Remix as a way to revisit campaign missions with different combinations of enemies, weapons, effects, and Skulls. It expands replay variety after the standard campaign structure is understood.",
          "Because combinations can change the pressure in an encounter, advice written for an unmodified mission may not transfer directly to every Remix run.",
        ],
      },
      {
        id: "skulls",
        heading: "How to approach Skull modifiers",
        paragraphs: [
          "Skulls are modifiers that alter the rules or challenge of a run. Check the in-game description before activating one and change one variable at a time when learning its effect.",
        ],
        bullets: [
          "Establish a baseline by clearing the mission without modifiers.",
          "Choose weapons after seeing the active enemy and sandbox changes.",
          "Do not use unverified launch-window lists as proof of an unlock location.",
        ],
      },
      {
        id: "verification",
        heading: "What this page does not claim",
        paragraphs: [
          "This guide does not publish Skull locations, unlock conditions, or a complete modifier list unless those details are confirmed from the live game or an official source. That keeps search-friendly summaries separate from unsupported claims.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Campaign Remix required to finish the campaign?",
        answer: "No. It is an optional replay feature separate from completing the standard 13-mission story.",
      },
      {
        question: "Does Campaign Remix only increase enemy health?",
        answer: "Official descriptions indicate broader changes involving enemies, weapons, visual effects, and Skulls rather than only a health increase.",
      },
    ],
    related: [
      { href: "/missions", label: "Choose a mission to replay" },
      { href: "/guides/legendary-difficulty", label: "Read the Legendary guide" },
    ],
  },
  {
    slug: "editions-and-price",
    title: "Halo: Campaign Evolved Editions, Price & Platforms",
    eyebrow: "Buying guide",
    description:
      "Compare Halo: Campaign Evolved platforms and official storefronts, and verify current edition and price details before buying.",
    quickAnswer:
      "Halo: Campaign Evolved is available for Xbox Series X|S, PC, and PlayStation 5. Prices, discounts, subscriptions, and edition availability can vary by region and date, so the current official storefront is the reliable source at checkout.",
    image: "/media/halo-hero.jpg",
    imageAlt: "Halo Campaign Evolved official key art",
    sections: [
      {
        id: "platforms",
        heading: "Confirmed platforms",
        paragraphs: [
          "The supported platforms are Xbox Series X|S, PC, and PlayStation 5. Store availability and account requirements differ by platform, so use the storefront for the hardware where you intend to play.",
        ],
      },
      {
        id: "price",
        heading: "How to verify the current price",
        paragraphs: [
          "A price displayed in one country may not match another region after currency conversion, tax, or a temporary promotion. This guide therefore links to official stores instead of freezing a potentially outdated checkout price in the article.",
        ],
        bullets: [
          "Check whether the displayed amount includes local tax.",
          "Confirm that any subscription access applies to your platform and region.",
          "Review the edition contents on the final store page before paying.",
        ],
      },
      {
        id: "choose",
        heading: "Choose the right version",
        paragraphs: [
          "PC players should compare their hardware with the official requirements before purchase. Console players deciding between local and online co-op should note that confirmed split-screen is two players, while online campaign co-op supports up to four.",
        ],
      },
    ],
    faq: [
      {
        question: "Which platforms have Halo: Campaign Evolved?",
        answer: "The game is available on Xbox Series X|S, PC, and PlayStation 5.",
      },
      {
        question: "Why does the price differ between stores?",
        answer: "Regional pricing, currency, tax, promotions, subscriptions, and edition availability can change the amount shown at checkout.",
      },
    ],
    related: [
      { href: "/release-date", label: "See release and store details" },
      { href: "/system-requirements", label: "Check PC system requirements" },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
