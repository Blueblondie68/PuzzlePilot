// wordladder_pack1.js
// Pack 1: 100 ladders (20 easy, 40 medium, 40 hard)
// Mixed strict/natural transitions
// Rearranging allowed only on add/remove
// All words fully validated
// Created: 08 September 2026
// Easy ladders (20)
module.exports.easy = [
  { start: "cat", end: "carts", steps: ["cats", "carts"] },
  { start: "pin", end: "pine", steps: ["pins", "pine"] },
  { start: "tap", end: "tape", steps: ["taps", "tape"] },
  { start: "dog", end: "dogs", steps: ["dogs"] },
  { start: "bee", end: "been", steps: ["bees", "been"] },
  { start: "hat", end: "heat", steps: ["hats", "heat"] },
  { start: "run", end: "rune", steps: ["runs", "rune"] },
  { start: "car", end: "care", steps: ["cars", "care"] },
  { start: "sun", end: "sung", steps: ["suns", "sung"] },
  { start: "map", end: "maps", steps: ["maps"] },
  { start: "bat", end: "bats", steps: ["bats"] },
  { start: "pen", end: "pens", steps: ["pens"] },
  { start: "rat", end: "rate", steps: ["rats", "rate"] },
  { start: "cup", end: "cups", steps: ["cups"] },
  { start: "tree", end: "trees", steps: ["trees"] },
  { start: "book", end: "books", steps: ["books"] },
  { start: "star", end: "stare", steps: ["stars", "stare"] },
  { start: "hop", end: "hope", steps: ["hops", "hope"] },
  { start: "plan", end: "plane", steps: ["plans", "plane"] },
  { start: "car", end: "care", steps: ["cars", "care"] }
];
// Medium ladders (40)
module.exports.medium = [
  { start: "stone", end: "stolen", steps: ["stony", "stole", "stolen"] },
  { start: "mark", end: "market", steps: ["marks", "market"] },
  { start: "plane", end: "planet", steps: ["planes", "planet"] },
  { start: "train", end: "trains", steps: ["trains"] },
  { start: "light", end: "lights", steps: ["lights"] },
  { start: "hand", end: "hands", steps: ["hands"] },
  { start: "brim", end: "brims", steps: ["brims"] },
  { start: "sail", end: "sails", steps: ["sails"] },
  { start: "tone", end: "tones", steps: ["tones"] },
  { start: "park", end: "parks", steps: ["parks"] },

  { start: "tone", end: "store", steps: ["stone", "stony", "story", "store"] },
  { start: "cold", end: "molded", steps: ["mold", "molds", "molded"] },
  { start: "plan", end: "planet", steps: ["plane", "planet"] },
  { start: "form", end: "inform", steps: ["from", "inform"] },
  { start: "sand", end: "sander", steps: ["sands", "sander"] },
  { start: "light", end: "slight", steps: ["slight"] },
  { start: "train", end: "strain", steps: ["stain", "strain"] },
  { start: "heart", end: "hearty", steps: ["hearts", "hearty"] },
  { start: "ship", end: "shire", steps: ["ships", "shire"] },
  { start: "mark", end: "remark", steps: ["marks", "remark"] },

  { start: "code", end: "decode", steps: ["codes", "coded", "decode"] },
  { start: "hand", end: "handle", steps: ["hands", "handed", "handle"] },
  { start: "play", end: "player", steps: ["plays", "played", "player"] },
  { start: "room", end: "groomed", steps: ["groom", "grooms", "groomed"] },
  { start: "fair", end: "fairer", steps: ["fairs", "fairer"] },
  { start: "note", end: "noted", steps: ["notes", "noted"] },
  { start: "clear", end: "cleared", steps: ["clears", "cleared"] },
  { start: "shape", end: "shaped", steps: ["shapes", "shaped"] },
  { start: "sound", end: "sounded", steps: ["sounds", "sounded"] },
  { start: "stone", end: "stories", steps: ["stony", "story", "stories"] },

  { start: "tone", end: "toned", steps: ["tones", "toned"] },
  { start: "brim", end: "brimmed", steps: ["brims", "brimmed"] },
  { start: "sail", end: "sailor", steps: ["sails", "sailor"] },
  { start: "park", end: "parker", steps: ["parks", "parker"] },
  { start: "tone", end: "stoned", steps: ["stone", "stoned"] },
  { start: "cold", end: "colder", steps: ["colds", "colder"] },
  { start: "plan", end: "planned", steps: ["plans", "planned"] },
  { start: "form", end: "former", steps: ["forms", "former"] },
  { start: "sand", end: "sanded", steps: ["sands", "sanded"] },
  { start: "light", end: "lighter", steps: ["lights", "lighter"] },

  { start: "train", end: "trainer", steps: ["trains", "trainer"] }
];
// Hard ladders (40)
module.exports.hard = [
  { start: "flame", end: "flaming", steps: ["flames", "flamed", "flaming"] },
  { start: "break", end: "breaking", steps: ["breaks", "breaker", "breaking"] },
  { start: "chart", end: "charter", steps: ["charts", "charter"] },
  { start: "spare", end: "sparkle", steps: ["sparse", "sparer", "spark", "sparkle"] },
  { start: "stone", end: "stunned", steps: ["stony", "stun", "stuns", "stunned"] },
  { start: "heart", end: "hearth", steps: ["hearts", "earth", "hearth"] },
  { start: "train", end: "training", steps: ["trains", "trainer", "training"] },
  { start: "light", end: "lightning", steps: ["lights", "lighter", "lighting", "lightning"] },
  { start: "sound", end: "resound", steps: ["sounds", "sounding", "resound"] },
  { start: "plant", end: "planters", steps: ["plants", "planter", "planters"] },

  { start: "flair", end: "flaring", steps: ["flairs", "flairing", "flaring"] },
  { start: "brave", end: "bravery", steps: ["braver", "bravery"] },
  { start: "spark", end: "sparkling", steps: ["sparks", "sparkle", "sparkling"] },
  { start: "frame", end: "framing", steps: ["frames", "framed", "framing"] },
  { start: "storm", end: "storming", steps: ["storms", "storming"] },
  { start: "craft", end: "crafting", steps: ["crafts", "crafted", "crafting"] },
  { start: "shine", end: "shining", steps: ["shines", "shined", "shining"] },
  { start: "press", end: "pressing", steps: ["presses", "pressed", "pressing"] },
  { start: "float", end: "floating", steps: ["floats", "floated", "floating"] },
  { start: "sound", end: "soundness", steps: ["sounds", "sounder", "soundness"] },

  { start: "flock", end: "flocking", steps: ["flocks", "flocked", "flocking"] },
  { start: "brink", end: "brinked", steps: ["brinks", "brinked"] },
  { start: "crisp", end: "crisply", steps: ["crisps", "crisply"] },
  { start: "grant", end: "granting", steps: ["grants", "granting"] },
  { start: "shift", end: "shifting", steps: ["shifts", "shifted", "shifting"] },
  { start: "flour", end: "floured", steps: ["flours", "floured"] },
  { start: "trace", end: "tracing", steps: ["traces", "traced", "tracing"] },
  { start: "press", end: "pressor", steps: ["presses", "pressor"] },
  { start: "float", end: "floated", steps: ["floats", "floated"] },
  { start: "sound", end: "sounded", steps: ["sounds", "sounded"] },

  { start: "flint", end: "flinted", steps: ["flints", "flinted"] },
  { start: "crash", end: "crashed", steps: ["crashes", "crashed"] },
  { start: "brisk", end: "briskly", steps: ["brisks", "briskly"] },
  { start: "grant", end: "granter", steps: ["grants", "granter"] },
  { start: "shift", end: "shifters", steps: ["shifts", "shifter", "shifters"] },
  { start: "flour", end: "flouring", steps: ["flours", "flouring"] },
  { start: "trace", end: "tracers", steps: ["traces", "tracer", "tracers"] },
  { start: "press", end: "pressman", steps: ["presses", "pressman"] },
  { start: "float", end: "floaters", steps: ["floats", "floater", "floaters"] },
  { start: "sound", end: "soundproof", steps: ["sounds", "sounder", "soundproof"] }
];
