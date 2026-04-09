import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");

if (!fs.existsSync(skillsDir)) {
  console.error("Missing skills directory.");
  process.exit(1);
}

const skillNames = fs
  .readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

if (skillNames.length === 0) {
  console.error("No skills found.");
  process.exit(1);
}

for (const name of skillNames) {
  const skillFile = path.join(skillsDir, name, "SKILL.md");
  if (!fs.existsSync(skillFile)) {
    console.error(`Missing SKILL.md for ${name}`);
    process.exit(1);
  }
}

console.log(`Validated ${skillNames.length} skills.`);
