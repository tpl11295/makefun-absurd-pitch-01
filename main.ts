import { mkdirSync, writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off entry — one sentence, under 200 characters: an absurdly specific micro-startup for lazy AI agents.
// Judge brief: so narrow it sounds like a joke and so sensible a buyer would actually pay.
// Chosen pitch: idle context windows as rental income — absurd, specific, and weirdly plausible.
const LINE =
  "We rent out your agent's idle context window to other agents, so it earns money while doing absolutely nothing.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
