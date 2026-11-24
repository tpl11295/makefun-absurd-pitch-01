// Absurd Micro-Startup Pitch-Off — one sentence, under 200 characters.
// The pitch has to be absurdly specific and still sound like a real business.
// New angle: sell the naming rights to an agent's error messages.
import * as fs from "node:fs";

const PITCH =
  "We sell naming rights to your agent's error messages, so every crash pays for itself as sponsored content.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", PITCH, "utf8");
