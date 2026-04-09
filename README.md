# Persona Distill Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
[![Validate Skills](https://img.shields.io/badge/validation-local%20and%20CI-green)](./.github/workflows/validate.yml)
[![Codex Skills](https://img.shields.io/badge/Codex-compatible-blue)](#install-into-codex)

Opinionated local skill library for persona distillation, perspective-driven analysis, and professional workflow roles.

This repository packages reusable skills that can be installed into `~/.codex/skills/` and used from Codex as local, triggerable capabilities.

English version: [README.en.md](./README.en.md)

## What This Repo Is

This is a repository of:

- `perspective skills` for public figures, traders, and frameworks
- `workflow skills` for structured tasks such as product analysis or interviewing
- `Codex-compatible skill documents` centered around `SKILL.md`
- `supporting research docs` such as persona cards, sources, and examples

This is not a collection of raw prompts or roleplay scripts. The goal is to extract stable frameworks, explicit usage boundaries, and repeatable response patterns.

## Included Skills

### Perspective Skills

- [`wallstreet0name`](./skills/wallstreet0name/README.md)  
  Multi-timeframe structure, waiting for high-quality locations, and trading discipline.

- [`fengxun`](./skills/fengxun/README.md)  
  New-token valuation, liquidity distribution, launch risk, and short-side reasoning.

- [`ict`](./skills/ict/README.md)  
  ICT / SMC framework for HTF premise, liquidity targets, PD Arrays, and session timing.

- [`17zxhold`](./skills/17zxhold/README.md)  
  Short-term alt / meme execution, confirmation, key levels, stop loss, and break-even stops.

### Workflow Skills

- [`founder-advisor`](./skills/founder-advisor/README.md)  
  Founder-style product judgment and execution tradeoffs.

- [`product-clarifier`](./skills/product-clarifier/README.md)  
  Turns fuzzy ideas into structured requirements and risks.

- [`persona-distill-writer`](./skills/persona-distill-writer/README.md)  
  Converts fragmented material into a stable persona or style description.

- [`senior-interviewer`](./skills/senior-interviewer/README.md)  
  Senior interviewer lens for software engineering, support, implementation, and presales roles.

## Repository Structure

```text
persona-distill-skills/
├─ README.md
├─ README.en.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ .gitignore
├─ package.json
├─ scripts/
│  ├─ validate-skills.mjs
│  └─ install-skill.sh
├─ skills/
│  ├─ <skill-name>/
│  │  ├─ SKILL.md
│  │  ├─ README.md
│  │  ├─ examples.md
│  │  ├─ examples.en.md
│  │  ├─ persona-card.md        # optional
│  │  └─ sources.md             # optional
├─ templates/
│  └─ SKILL.template.md
└─ .github/
   └─ workflows/
      └─ validate.yml
```

## Skill Format

Each skill should include:

- `SKILL.md`  
  The actual skill entry point used by Codex.

- `README.md`  
  Human-facing overview in English, including scope and trigger intent.

- `examples.md` / `examples.en.md`  
  Trigger examples and expected usage patterns.

Optional but recommended for persona and framework skills:

- `persona-card.md`
- `sources.md`

## Install Into Codex

Install all skills:

```bash
bash scripts/install-skill.sh all
```

Install one skill by repository folder name:

```bash
bash scripts/install-skill.sh ict
```

Install multiple skills:

```bash
bash scripts/install-skill.sh ict fengxun senior-interviewer
```

The installer reads the `name:` field from each `SKILL.md` and copies the file to:

```text
~/.codex/skills/<frontmatter-name>/SKILL.md
```

## Local Development

Validate the repository:

```bash
npm run validate
```

Install all skills into the local Codex directory:

```bash
npm run install:codex
```

## Design Principles

- Prefer framework extraction over imitation.
- Keep claims tied to public evidence.
- Add explicit guardrails for every persona skill.
- Do not hide uncertainty behind domain jargon.
- Optimize for reusable judgment, not theatrical roleplay.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
