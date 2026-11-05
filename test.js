// Headless structural tests. Run: node test.js
var data = require("./data.js");
var fs = require("fs");

var failures = 0;

function assert(cond, label) {
  if (!cond) {
    failures++;
    console.log("FAIL " + label);
  } else {
    console.log("PASS " + label);
  }
}

var sourceKeys = {};
data.SOURCES.forEach(function (s) { sourceKeys[s.key] = true; });

// ───────────────────────────────── sources

assert(data.SOURCES.length === 6, "exactly 6 sources (got " + data.SOURCES.length + ")");
data.SOURCES.forEach(function (s) {
  assert(typeof s.url === "string" && s.url.indexOf("https://") === 0, s.key + " has an https url");
  assert(typeof s.name === "string" && s.name.length > 0, s.key + " has a non-empty name");
});

// ───────────────────────────────── stats (every stat/seal/weapon entry has a cited source)

assert(data.STATS.length === 5, "exactly 5 stats (got " + data.STATS.length + ")");
data.STATS.forEach(function (s) {
  assert(typeof s.name === "string" && s.name.length > 0, s.name + " has a non-empty name");
  assert(Array.isArray(s.notes) && s.notes.length > 0, s.name + " has at least one sourced note");
  s.notes.forEach(function (n) {
    assert(!!sourceKeys[n.source], s.name + " note cites a known source (" + n.source + ")");
    assert(typeof n.text === "string" && n.text.length > 0, s.name + "/" + n.source + " has non-empty text");
  });
  assert(typeof s.agreement === "string" && s.agreement.length > 0, s.name + " discloses an agree/disagree note");
});

var statNames = data.STATS.map(function (s) { return s.name; });
["Life", "Vitality", "Strength", "Technique", "Spirit"].forEach(function (n) {
  assert(statNames.indexOf(n) !== -1, "stat list includes " + n);
});

var vitality = data.STATS.filter(function (s) { return s.name === "Vitality"; })[0];
assert(vitality.agreement.indexOf("disagree") === 0, "Vitality's agreement note is disclosed as a disagreement (not resolved/invented)");

// ───────────────────────────────── seals

assert(data.SEALS.length === 7, "exactly 7 seals (got " + data.SEALS.length + ")");
var sealNames = {};
data.SEALS.forEach(function (s) {
  assert(typeof s.name === "string" && s.name.length > 0, s.name + " has a non-empty name");
  assert(["Main Seal", "Normal Seal"].indexOf(s.category) !== -1, s.name + " has a valid category (got " + s.category + ")");
  assert(typeof s.effect === "string" && s.effect.length > 0, s.name + " has non-empty effect text");
  assert(typeof s.howToGet === "string" && s.howToGet.length > 0, s.name + " has non-empty how-to-get text");
  assert(Array.isArray(s.sources) && s.sources.length > 0, s.name + " cites at least one source");
  s.sources.forEach(function (k) {
    assert(!!sourceKeys[k], s.name + " cites a known source (" + k + ")");
  });
  assert(!sealNames[s.name], s.name + " is not a duplicate");
  sealNames[s.name] = true;
});

var pilgrim = data.SEALS.filter(function (s) { return s.name === "Seal of Pilgrim"; })[0];
assert(!!pilgrim, "Seal of Pilgrim (known cross-verified case) is present");
assert(pilgrim.crossVerified === true, "Seal of Pilgrim is flagged cross-verified");
assert(pilgrim.sources.length === 2, "Seal of Pilgrim cites both of its 2 independent sources");

// ───────────────────────────────── weapon types

assert(data.WEAPON_TYPES.length === 10, "exactly 10 weapon-type entries (got " + data.WEAPON_TYPES.length + ")");
data.WEAPON_TYPES.forEach(function (w) {
  assert(typeof w.type === "string" && w.type.length > 0, w.type + " has a non-empty type name");
  assert(Array.isArray(w.entries) && w.entries.length > 0, w.type + " has at least one sourced entry");
  w.entries.forEach(function (e) {
    assert(!!sourceKeys[e.source], w.type + " entry cites a known source (" + e.source + ")");
    assert(typeof e.text === "string" && e.text.length > 0, w.type + "/" + e.source + " has non-empty text");
  });
});

var greatsword = data.WEAPON_TYPES.filter(function (w) { return w.type === "Greatsword"; })[0];
assert(!!greatsword, "Greatsword weapon type (known search case) is present");
var discEntry = greatsword.entries.filter(function (e) { return !!e.discrepancyNote; })[0];
assert(!!discEntry, "Greatsword entries disclose the Strength-requirement discrepancy (13 vs 15) rather than silently picking one");

var gapTypes = data.WEAPON_TYPES.filter(function (w) { return w.entries.length === 1 && w.entries[0].isGap; });
assert(gapTypes.length === 2, "exactly 2 weapon-type entries are disclosed gaps, not findings (got " + gapTypes.length + ")");

// ───────────────────────────────── no invented numbers / banned verdict words

assert(typeof data.LUDOGUIDE_FLAG === "string" && data.LUDOGUIDE_FLAG.indexOf("multiplayer") !== -1,
  "ludo.guide sidebar data-quality flag is present and names the unused multiplayer claim");

var bannedWords = ["compliant", "certified", "safe", "approved", "guaranteed"];
var allText = JSON.stringify(data).toLowerCase();
bannedWords.forEach(function (bw) {
  assert(new RegExp("\\b" + bw + "\\b").test(allText) === false, "data contains no banned T0 word \"" + bw + "\"");
});

// ───────────────────────────────── DOM-surface check

var html = fs.readFileSync(__dirname + "/index.html", "utf8");
assert(html.indexOf("data.js") !== -1, "index.html references data.js");
assert(html.indexOf("statFilter") !== -1, "index.html wires up the stat search filter (known-case search works)");
assert(html.indexOf("sealFilter") !== -1, "index.html wires up the seal search filter");
assert(html.indexOf("weaponFilter") !== -1, "index.html wires up the weapon search filter");

console.log("");
console.log(failures === 0 ? "ALL PASS" : failures + " FAILURE(S)");
process.exit(failures === 0 ? 0 : 1);
