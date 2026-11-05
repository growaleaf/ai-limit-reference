// AI LIMIT — Weapon & Seal Stat-Priority Reference
// Game: AI LIMIT (M2 Dot Studio / Beijing CE-Asia), Steam AppID 2407270.
// All six sources below were fetched live this session (2026-11-05) and read in full before any
// row was written — none of this is reused from the orchestrator's transcribed descriptions
// (Principle XXII). Every fetched page was checked for recognizable in-game nouns (Sync Gauge,
// Seals, Blader, Branch, Memory, Sewer Town, Outer-Wall Ruins, Hagios Patir, Necros, Nuclei,
// Crystals) before its content was trusted, because "AI LIMIT" collides in search results with an
// Eversoul character guide ("Miriam (Afterimage)"), an Otherworld Legends Fandom item
// ("Afterimage Mirror"), and generic "AI limit" essays about artificial-intelligence rate limits.
// All six pages confirmed genuine.
(function () {
  "use strict";

  var root = (typeof window !== "undefined") ? window : (typeof global !== "undefined" ? global : {});

  var FETCHED = "2026-11-05";

  var SOURCES = [
    { key: "deltias-upgrades", name: "Deltias Gaming — “AI Limit: Best Upgrades To Have” (Ananya Giri, Apr 8 2025)", url: "https://deltiasgaming.com/ai-limit-best-upgrades-to-have/" },
    { key: "deltias-seals", name: "Deltias Gaming — “AI Limit: Best Early-Game Seals You Need To Know” (Abhinaba Sengupta, Apr 5 2025)", url: "https://deltiasgaming.com/ai-limit-best-early-game-seals-you-need-to-know/" },
    { key: "deltias-weapons", name: "Deltias Gaming — “AI Limit: Best Early Game Weapons You Need To Pick Up” (Kaif Ali, Apr 4 2025)", url: "https://deltiasgaming.com/ai-limit-best-early-game-weapons-you-need-to-pick-up/" },
    { key: "sportskeeda", name: "Sportskeeda — “Best beginner guide for AI Limit” (Rishi Pallav, Mar 28 2025)", url: "https://www.sportskeeda.com/esports/best-beginner-guide-ai-limit" },
    { key: "steam-thread", name: "Steam Community discussion — “Which weapon type would you recommend?” (AI Limit General Discussions, started Apr 1 2025)", url: "https://steamcommunity.com/app/2407270/discussions/0/601900568252777625" },
    { key: "ludoguide", name: "Ludo.guide — “Weapons: Energy Blades & Pulse Rifles” (community-verified guide page, no numeric stats)", url: "https://www.ludo.guide/guide/ai-limit/items-equipment/weapons-energy-blades-pulse-rifles" }
  ];

  // ───────────────────────────────── 1. Stat Priority Guide
  // deltias-upgrades discusses all 5 stats in this order (Life, Vitality, Strength, Technique,
  // Spirit) under the heading "The best upgrades to have in AI Limit are:" — an implied ranking.
  // sportskeeda explicitly ranks only Life and Strength as early priorities and groups everything
  // else, Vitality included, as "other stats" not worth early investment. That is a genuine
  // disagreement over Vitality's early priority, disclosed per-stat below rather than resolved.
  var STATS = [
    {
      name: "Life",
      notes: [
        { source: "deltias-upgrades", text: "Proves valuable when enemies hit hard. Each level adds to your overall health pool, with a significant boost up to level 40. Also raises a hidden stat called Stability, which affects how much Sync Gauge you lose when hit — more Stability means more consistency in damage potential." },
        { source: "sportskeeda", text: "“The best thing to do is upgrade Life and Strength early. Life is slightly overpowered, because more HP allows you to live longer, be more aggressive, and learn from mistakes... Life is the optimal investment straight off the bat.”" }
      ],
      agreement: "agree — both sources name Life as a top early-game priority."
    },
    {
      name: "Vitality",
      notes: [
        { source: "deltias-upgrades", text: "Becomes important once you've gained confidence with basic combat. Improves how quickly the Sync Gauge refills and slows how much is lost when hit — crucial once you lean on magic or ranged attacks, which all draw from the Sync Gauge." },
        { source: "sportskeeda", text: "Not named individually; grouped under “Other stats don't hold much weight in the early game unless you aim to meet specific weapon or spell requirements, so sinking points into them too soon will just slow down your progression.”" }
      ],
      agreement: "disagree — deltias-upgrades lists Vitality second among its five stats (an implied early priority once past basic combat); sportskeeda does not single Vitality out and implicitly files it under the stats it says are not worth early investment. Shown as-is, not resolved."
    },
    {
      name: "Strength",
      notes: [
        { source: "deltias-upgrades", text: "Two roles: lets you wield heavier weapons that hit harder and stagger enemies, and improves damage with weapons that scale with it (usually the big, weighty ones). Also adds a slight boost to defense/resistance and helps break guards." },
        { source: "sportskeeda", text: "“Immediately after [Life], Strength needs to be upgraded, because most of the best early weapons scale with it. Higher Strength means better damage output, which speeds up fights and makes enemies less of a threat.”" }
      ],
      agreement: "agree — both sources name Strength as a top-two early priority, right after Life."
    },
    {
      name: "Technique",
      notes: [
        { source: "deltias-upgrades", text: "Supports faster weapon types — dual blades, lightweight swords, quick-strike tools. Some mid/late-game weapons require a Technique investment even if they scale with other stats, so a few points here eventually pay off. Also gives minor boosts to defense, resistance, and stability." },
        { source: "sportskeeda", text: "Not named individually; grouped under the “other stats don't hold much weight in the early game” guidance." }
      ],
      agreement: "no direct conflict — sportskeeda's blanket deprioritization covers Technique too, which deltias-upgrades does not contradict (it frames Technique as a later, not early, investment)."
    },
    {
      name: "Spirit",
      notes: [
        { source: "deltias-upgrades", text: "Tends to confuse new players — few early weapons use it, and it feels like a backup stat. Shines with ranged magic: increases damage for players staying at distance or using elemental tools, but offers no early-game comfort." },
        { source: "sportskeeda", text: "Not named individually; grouped under the “other stats don't hold much weight in the early game” guidance." }
      ],
      agreement: "no direct conflict — both sources treat Spirit as a non-early-priority stat."
    }
  ];

  // ───────────────────────────────── 2. Seal Reference
  // deltias-seals names 5 Seals; sportskeeda independently names 3, one of which (Seal of
  // Pilgrim) overlaps and cross-verifies almost word-for-word against deltias-seals.
  var SEALS = [
    {
      name: "Jade Form", category: "Normal Seal",
      effect: "Adds +30 to all defense stats, including both physical and elemental attacks.",
      howToGet: "Talk to the Memory before facing the boss in the Aetherium Mansion portion of the game.",
      sources: ["deltias-seals"], crossVerified: false
    },
    {
      name: "Conversion", category: "Normal Seal",
      effect: "Raises the Sync Rate energy level of your equipped Main Seal from 1 to 2, for better buffs via Sync Gauge management.",
      howToGet: "Talk to the Memory in the Mural Terrace section of the Underground Parish Branch.",
      sources: ["deltias-seals"], crossVerified: false
    },
    {
      name: "Seal of Pilgrim", category: "Main Seal",
      effect: "+70 Stability; poison, infection, and piercing damage reduced by 15%; if afflicted by a status ailment, all defenses boosted by 50 points.",
      howToGet: "Speak to Shirley at the Temporary Campsite (deltias-seals says talk to her twice; sportskeeda says talk to her three times — both sources agree the Seal doesn't drop on the first conversation).",
      sources: ["deltias-seals", "sportskeeda"], crossVerified: true,
      crossVerifyNote: "sportskeeda reports the identical effect block (+70 Stability / 15% less Poison, Piercing, Infection damage / +50 All Defense when afflicted) independently — genuine two-source agreement on this Seal's effects, not a mirror."
    },
    {
      name: "Scattered Stars", category: "Normal Seal",
      effect: "Eliminates the Sync Rate cost for using Counter Field, for players who like to parry constantly.",
      howToGet: "Interact with the Memory in the Living Pond portion of the Underground Parish.",
      sources: ["deltias-seals"], crossVerified: false
    },
    {
      name: "Standard Seal of Bladers", category: "Main Seal",
      effect: "+30% Stability; if Sync Gauge is above 70%, Conversion increases by 24%; if Sync Gauge is above 70%, Stability increases by a further 40%.",
      howToGet: "Find and talk to Feylia, near the Lounge area in the Sunken City Overground location.",
      sources: ["deltias-seals"], crossVerified: false
    },
    {
      name: "Metastability", category: "Normal Seal",
      effect: "+50 Stability.",
      howToGet: "Found near the Before Upward Elevator Branch in Sewer Town.",
      sources: ["sportskeeda"], crossVerified: false
    },
    {
      name: "Hardened Skin", category: "Normal Seal",
      effect: "+50 Physical Defense.",
      howToGet: "Located next to a massive tree between the Abandoned Houses and Cemetery Branches in the Outer-Wall Ruins.",
      sources: ["sportskeeda"], crossVerified: false
    }
  ];

  // ───────────────────────────────── 3. Weapon Type Reference
  // ludo.guide names weapon items with zero quantified stats ("different attack speeds and
  // damage outputs," nothing else). deltias-weapons and sportskeeda give specific named-weapon
  // stat blocks (from the sources, not invented). The Steam thread gives first-hand qualitative
  // play experience per weapon type. Every entry below is attributed to the source it came from;
  // no entry averages multiple sources into one invented verdict.
  var WEAPON_TYPES = [
    {
      type: "Greatsword",
      entries: [
        { source: "deltias-weapons", item: "Corrupted Blader Greatsword", text: "“The first major upgrade to a Greatsword in the game... amazing stats, especially in the early game context.” Stats reported: 142 physical damage (+17 Piercing); scaling Strength 13 (C), Technique 10 (E). Location: Outer Walls Ruins — Slums Branch to Abandoned Houses." },
        { source: "sportskeeda", item: "Blader Greatsword", text: "Starter weapon choice. Stats reported: 160 physical damage; scaling Strength (C), Technique (E); requirements 12 Strength, 10 Technique." },
        { source: "sportskeeda", item: "Corrupted Blader Greatsword", text: "Stats reported: 142 physical damage (+17 Piercing); scaling Strength (C), Technique (E); requirements 15 Strength, 10 Technique. Dropped by a corrupted Blader on the road between Abandoned Houses and Cemetery.", discrepancyNote: "Strength requirement disagrees with deltias-weapons for the same item (13 vs. 15) — both numbers are reported as-is from their source, not reconciled here." },
        { source: "steam-thread", poster: "Akameka", text: "“Usually fast enough and with enough range to get a hit in before the enemy, especially with running attack, then the raw damage allow for easy stunlock... Big cleaves on attacks and skills will make dealing with several enemies at once an annoyance at most. The blade you can choose from the start is really good.”" },
        { source: "ludoguide", item: "Blader Greatsword", text: "Listed among Energy Blades; no numeric stats given — “these melee-focused weapons offer different attack speeds and damage outputs.”" }
      ]
    },
    {
      type: "Longsword",
      entries: [
        { source: "deltias-weapons", item: "Envenomed Blade", text: "“Offers Poison damage to enemies. This status effect is not usually available in the game unless players are using spells or ranged weapons. This makes this Longsword even more useful.” Stats reported: 125 physical damage (+15 Poison); scaling Strength 12 (C), Technique 12 (D). Location: Sunken City Overground — Rooftop Street Branch to Lounge." },
        { source: "ludoguide", item: "Blader Longsword", text: "Listed among Energy Blades; no numeric stats given." }
      ]
    },
    {
      type: "Dual Blades / Sais",
      entries: [
        { source: "deltias-weapons", item: "Opossum's Sais", text: "“The second elemental damage-based weapon on the list... inflict Fire damage on the enemies. They also bring a little variety to your play because they are dual blades, which play completely differently from the other two weapons on this list.” Stats reported: 124 physical damage (+28 Fire); scaling Strength 10 (E), Technique 15 (A), Spirit 11 (C). Location: Sunken City Overground — Flooded Street Branch to High Street; also sold at the Opossum's vending machine near Flooded Street Branch for 5,500 crystal." },
        { source: "ludoguide", item: "Opossums Sais (DLC)", text: "Listed among Energy Blades; no numeric stats given." },
        { source: "steam-thread", poster: "Akameka", text: "“Really depends on the weapon. Low damage per hit means very low stunlock ability. you'll have to compensate the damage per hit somehow (with fire/electricity enchant, and/or physical boost spell and/or pierce power on your arm... Pierce is very powerful on those because you hit fast and a lot).” Also: “My current main weapon is the corrupted double blade you can get on the blader in the forest area. Damage are kinda low, but the weapon skill is very cool looking, powerful, stacks pierce like crazy... push the weapon into top dps.”" }
      ]
    },
    {
      type: "Scythe",
      entries: [
        { source: "steam-thread", poster: "Akameka", text: "“About the same than greatsword. Good damage per hit, good stunlock, good cleave, not that slow as it seems. good weapon skills. you can get one on the blader in the second area (graveyard) and one on the boss of the 3rd area. Both are good.”" }
      ]
    },
    {
      type: "Spears",
      entries: [
        { source: "steam-thread", poster: "Akameka", text: "“Good damage, good range. Especially the one from the first boss (you can get the weapon in 5th area).”" }
      ]
    },
    {
      type: "Claws",
      entries: [
        { source: "steam-thread", poster: "Akameka", text: "“Quite good. Same-ish than dual blades. The dual drill you can buy at the first merchant is a solid pick with good damage and skills/heavy, as well as its explosive finisher on light attack combo.”" },
        { source: "steam-thread", poster: "solthusx", item: "Stygian Touch", text: "“Basically a strength scaling version of the Corrupted Dual Blades. Fast normal attacks and a flashy weapons skill that does good damage and stacks Pierce like crazy. Weapon Skill has a backstep built in to the last hit of the combo, so be careful using it near ledges.”" },
        { source: "steam-thread", poster: "solthusx", item: "Holy Embrace", text: "“Technique and Spirit Scaling (favouring Technique more). Fast attack speed like the Stygian Touch. The weapon skill doesn't do as much damage but stuns nearly everything you hit with it.”" }
      ]
    },
    {
      type: "Fire Blades (early/Deluxe-edition weapon)",
      entries: [
        { source: "steam-thread", poster: "Akameka", text: "“I hated the fire blades you can get early from ultimate edition. low damage, skill is powerfull but take forever to fire up, making it very impractical to use. Same with the heavy attack. Maybe better in NG+, as it does have a very good scalling. But I would never pick that again for a first run.”" }
      ]
    },
    {
      type: "Lightning weapons (general damage-type note, not a single weapon)",
      entries: [
        { source: "steam-thread", poster: "Rising Gale", text: "“If I had to pick something broken in every circumstance it would be lightning weapons because [they] melt even enemies that spam [resistance].”" },
        { source: "steam-thread", poster: "M19*Haunter", text: "“As always, piercing is broken. Which is the same as blood in ER [Elden Ring].”", note: "Followed up by Rising Gale: “Necros bosses do some resistance to it... it takes way longer than triggering it on church bosses.”" }
      ]
    },
    {
      type: "Pulse Rifles / ranged (gap, not a finding)",
      entries: [
        { source: "ludoguide", text: "Named as a weapon category only — the page states “while not explicitly detailed in this segment, Pulse Rifles are a category of ranged weaponry available in AI Limit. Specific examples and their locations would be detailed in a detailed weapon list,” which does not exist on the page. No other in-rail source filled this gap.", isGap: true }
      ]
    },
    {
      type: "Other named Energy Blades (name only, no description in any source read)",
      entries: [
        { source: "ludoguide", text: "Forged Steel Blade, Bonecrackers, and Serrated Halberd are named in the same Energy Blades list as the weapons above, with no individual description beyond the page's blanket statement that these weapons “offer different attack speeds and damage outputs.”", isGap: true }
      ]
    }
  ];

  // Disclosed data-quality note: a ludo.guide sidebar teaser (for a different sub-page, not this
  // one) claims AI Limit has a "multiplayer map, Limit" and an "Impulse laser type-1" weapon.
  // No other source corroborates multiplayer in this single-player Souls-like, and that sidebar
  // text was not used anywhere in this dataset — flagged here instead of silently trusted.
  var LUDOGUIDE_FLAG =
    "ludo.guide's own “More in this chapter” sidebar on the fetched page includes a teaser " +
    "line for an unrelated sub-page reading “Your friendly guide to weapons in AI Limit's " +
    "multiplayer map, Limit. Learn about the Impulse laser type-1...” — AI LIMIT has no " +
    "known multiplayer mode, and no other source (including Deltias Gaming, Sportskeeda, or the " +
    "Steam Community) mentions one. That sidebar text is not used anywhere in this build; only " +
    "the main body's Energy Blades weapon-name list was used.";

  root.AILIMIT_DATA = {
    FETCHED: FETCHED,
    SOURCES: SOURCES,
    STATS: STATS,
    SEALS: SEALS,
    WEAPON_TYPES: WEAPON_TYPES,
    LUDOGUIDE_FLAG: LUDOGUIDE_FLAG
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = root.AILIMIT_DATA;
  }
})();
