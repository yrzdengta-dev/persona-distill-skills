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
  const readmeFile = path.join(skillsDir, name, "README.md");
  const readmeEnFile = path.join(skillsDir, name, "README.en.md");
  const examplesZhFile = path.join(skillsDir, name, "examples.md");
  const examplesEnFile = path.join(skillsDir, name, "examples.en.md");
  if (!fs.existsSync(skillFile)) {
    console.error(`Missing SKILL.md for ${name}`);
    process.exit(1);
  }
  if (!fs.existsSync(readmeFile)) {
    console.error(`Missing README.md for ${name}`);
    process.exit(1);
  }
  if (!fs.existsSync(readmeEnFile)) {
    console.error(`Missing README.en.md for ${name}`);
    process.exit(1);
  }
  if (!fs.existsSync(examplesZhFile)) {
    console.error(`Missing examples.md for ${name}`);
    process.exit(1);
  }
  if (!fs.existsSync(examplesEnFile)) {
    console.error(`Missing examples.en.md for ${name}`);
    process.exit(1);
  }
}

console.log(`Validated ${skillNames.length} skills.`);
