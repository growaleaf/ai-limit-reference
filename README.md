# AI LIMIT — Weapon & Seal Stat-Priority Reference

A static reference page for *AI LIMIT* (M2 Dot Studio / Beijing CE-Asia, Steam AppID 2407270) —
built for a player who just unlocked a third weapon type and picked up a handful of Seals, with no
idea which stat to pump or which Seal matters, and no single site that answers both without making
them cross-reference four separate guides.

Open `index.html` in a browser. No build step, no server, no framework — vanilla HTML/CSS/JS.

## Contents

1. **Stat Priority Guide** — the game's 5 named stats (Life, Vitality, Strength, Technique,
   Spirit), what each does per source, and whether the two stat-priority sources agree on its
   early-game importance.
2. **Seal Reference** — all 7 Seals named across the two sources that cover Seals, with effect
   text and acquisition location.
3. **Weapon Type Reference** — 10 weapon-type entries (8 with real content, 2 disclosed gaps),
   sourced across ludo.guide, two Deltias Gaming articles, Sportskeeda, and a Steam Community
   thread — qualitative descriptors only, attributed per-source, never averaged into one verdict.

This is a **qualitative reference, not a numeric calculator**. No official AI LIMIT stat table
exists anywhere to calculate from — Gate 2 (run by the orchestrator) confirmed zero wiki.gg, zero
Fandom, and zero numeric weapon-stat table for this game anywhere online.

## Sourcing — all 6 charter-listed URLs fetched live this session, read in full before building

Fetched via `curl` with a browser user-agent (WebFetch 405'd on every one of these domains this
session — a tool-layer block, not a site-specific one; curl with cookies worked cleanly on all
six). Every page was checked for recognizable in-game nouns (Sync Gauge, Blader, Branch, Memory,
Sewer Town, Outer-Wall Ruins, Hagios Patir, Necros) before its content was trusted, because "AI
LIMIT" collides in search results with an Eversoul character guide, an Otherworld Legends Fandom
item ("Afterimage Mirror"), and generic AI-rate-limit essays. All six confirmed genuine:

- `deltiasgaming.com/ai-limit-best-upgrades-to-have/` (resolved from the charter's `?p=195822`) —
  stat priority, by Ananya Giri, Apr 8 2025.
- `deltiasgaming.com/ai-limit-best-early-game-seals-you-need-to-know/` (resolved from `?p=193519`)
  — 5 Seals, by Abhinaba Sengupta, Apr 5 2025.
- `deltiasgaming.com/ai-limit-best-early-game-weapons-you-need-to-pick-up/` (resolved from
  `?p=193113`) — 3 named weapons, by Kaif Ali, Apr 4 2025.
- `sportskeeda.com/esports/best-beginner-guide-ai-limit` — stat priority, 2 weapons, 3 Seals, by
  Rishi Pallav, Mar 28 2025.
- `steamcommunity.com/app/2407270/discussions/0/601900568252777625` — 4-poster thread on weapon
  types, started Apr 1 2025.
- `ludo.guide/guide/ai-limit/items-equipment/weapons-energy-blades-pulse-rifles` — weapon-name
  list, zero numbers, matching the charter's own description exactly.

## Disclosed agreements, disagreements, and gaps (not resolved into one invented verdict)

- **Stat priority — agree:** Deltias Gaming and Sportskeeda both name Life and Strength as early
  priorities.
- **Stat priority — disagree:** Deltias Gaming lists Vitality second among its five stats (an
  implied early priority once past basic combat); Sportskeeda does not single Vitality out and
  implicitly files it under "other stats [that] don't hold much weight in the early game." Shown
  as a disclosed disagreement on the page, not resolved.
- **Seal of Pilgrim — genuinely cross-verified:** Deltias Gaming and Sportskeeda independently
  report the identical effect block (+70 Stability / 15% less Poison, Piercing, Infection damage /
  +50 All Defense when afflicted) — two sources, not a mirror of the same text.
- **Corrupted Blader Greatsword — numeric discrepancy, disclosed not reconciled:** Deltias Gaming
  reports a Strength requirement of 13; Sportskeeda reports 15, for the same weapon. Both numbers
  are shown on the page, each attributed to its source — neither was picked as "the" answer.
- **Pulse Rifles — disclosed gap:** ludo.guide names the category but states examples "would be
  detailed in a detailed weapon list," which does not exist on the page. No other in-rail source
  filled this gap, so the page says so rather than inventing content.
- **Forged Steel Blade, Bonecrackers, Serrated Halberd — disclosed gap:** named only by ludo.guide,
  with no qualitative description beyond its blanket "different attack speeds and damage outputs"
  line for the whole weapon list.
- **ludo.guide data-quality flag:** its own sidebar teaser (for an unrelated sub-page) claims AI
  LIMIT has a "multiplayer map, Limit" and an "Impulse laser type-1" weapon. No other source
  corroborates multiplayer in this single-player Souls-like. That sidebar text is not used
  anywhere in this build — flagged on the page instead of silently trusted (Principle XXII: a
  content-mill derivative source can be internally wrong even where its main body is accurate).

## Rails respected

- Only the six charter-listed domains fetched (deltiasgaming.com, sportskeeda.com,
  steamcommunity.com, ludo.guide); no Fandom domain touched.
- No registry writes, no git commit, no deployment — left to the orchestrator per rails.
- No account access, no game files extracted — every fact is reproduced from text already
  published on public guide sites.

## Verification run

```
$ node test.js
ALL PASS (156 assertions: 6 sources with https URLs; 5 stats each with >=1 cited source and an
agree/disagree note, Vitality's disagreement specifically checked; 7 seals each with category,
effect, how-to-get and cited source(s), Seal of Pilgrim's 2-source cross-verification checked;
10 weapon-type entries each with cited sources, the Corrupted Blader Greatsword discrepancy
disclosure checked, exactly 2 disclosed gaps checked; the ludo.guide multiplayer flag present;
no banned T0 word (compliant/certified/safe/approved/guaranteed) anywhere in the data; index.html
wires up all 3 search filters.)

$ python3 Tools/slop_lint.py Orchard/FACTORY/output/ai-limit-reference/
slop_lint: clean — 0 findings
```

Served locally with `python3 -m http.server` and curled: `index.html` (200, 15,179 bytes) and
`data.js` (200, 18,833 bytes) both returned HTTP 200; `Seal of Pilgrim`, `Corrupted Blader
Greatsword`, `disagree`, `multiplayer`, and `Stygian Touch` all confirmed present in the actually
served bytes, not just the source file on disk.
