# Persona Distill Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
[![Codex-compatible](https://img.shields.io/badge/Codex-compatible-blue)](./README.md#install-into-codex)

[中文](./README.md)

An open-source repository of local skills for persona distillation, perspective-driven analysis, and structured workflow roles.

## Scope

This repo contains:

- perspective skills for traders, public figures, and methodologies
- workflow skills for product thinking and interview evaluation
- Codex-ready `SKILL.md` files
- supporting docs such as persona cards, sources, and examples

## Skills

### Perspective

- [`wallstreet0name`](./skills/wallstreet0name/README.md)
- [`fengxun`](./skills/fengxun/README.md)
- [`ict`](./skills/ict/README.md)
- [`17zxhold`](./skills/17zxhold/README.md)

### Workflow

- [`founder-advisor`](./skills/founder-advisor/README.md)
- [`product-clarifier`](./skills/product-clarifier/README.md)
- [`persona-distill-writer`](./skills/persona-distill-writer/README.md)
- [`senior-interviewer`](./skills/senior-interviewer/README.md)

## Quick Start

Validate:

```bash
npm run validate
```

Install all skills into Codex:

```bash
npm run install:codex
```

Install a single skill:

```bash
bash scripts/install-skill.sh ict
```

## Repository Layout

```text
skills/<skill-name>/
├─ SKILL.md
├─ README.md
├─ README.en.md
├─ examples.md
├─ examples.en.md
├─ persona-card.md   # optional
└─ sources.md        # optional
```

## Principles

- Extract durable frameworks, not theatrical impersonation.
- Keep public-evidence boundaries explicit.
- Make trigger intent clear in frontmatter descriptions.
- Treat examples and guardrails as first-class documentation.
