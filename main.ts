import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your stars say wealth is coming — unfortunately, it is coming for the trader who liquidated you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const outPath = outDir.endsWith("entry.txt") ? outDir : join(outDir, "entry.txt");

mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, fortune, "utf8");
