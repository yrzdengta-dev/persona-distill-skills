# Persona Distill Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
[![Codex-compatible](https://img.shields.io/badge/Codex-compatible-blue)](./README.md#install-into-codex)
[![Claude-compatible](https://img.shields.io/badge/Claude-compatible-blue)](./README.md#安装到-claude)

[中文](./README.md)

An open-source repository of local skills for persona distillation, perspective-driven analysis, and structured workflow roles.

These skills can be installed into either Codex (`~/.codex/skills/`) or Claude Code (`~/.claude/skills/`), since both tools support directory-based `SKILL.md` skills.

## Scope

This repo contains:

- perspective skills for traders, public figures, and methodologies
- workflow skills for product thinking and interview evaluation
- Codex-ready `SKILL.md` files
- supporting docs such as persona cards, sources, and examples

## Skills

### Perspective

- [`wallstreet0name`](./skills/wallstreet0name/README.md)
  Derived from the public market commentary of `@WallStreet0Name`, with emphasis on multi-timeframe structure, waiting for high-quality locations, trading discipline, and low-quality trade filtering.
- [`fengxun`](./skills/fengxun/README.md)
  Derived from the public market commentary of `@0xfengxun`, with emphasis on valuation logic, liquidity distribution, launch risk, and short / avoid reasoning for new tokens.
- [`ict`](./skills/ict/README.md)
  Derived from the public teaching framework of ICT / Michael J. Huddleston, with emphasis on HTF premise, liquidity, PD Array, AMD/Judas/displacement, and session timing.
- [`17zxhold`](./skills/17zxhold/README.md)
  Derived from the public short-term trading commentary of `@17zxhold`, with emphasis on altcoin execution, key levels, breakout confirmation, stop loss, and break-even protection.
- [`liangxi`](./skills/liangxi/README.md)
  Derived from the public trading commentary associated with Liangxi (`凉兮大元帅`), with emphasis on opponent-positioning analysis, extreme-window filtering, liquidation-path reasoning, event-driven execution, and sharp response style.
- [`byzantine-general`](./skills/byzantine-general/README.md)
  Derived from the public trading commentary of `Byzantine General`, with emphasis on structure-first reading, crowding-aware filtering, confirmation logic, invalidation-led execution, and disciplined major-asset trading.
- [`daan-crypto-trades`](./skills/daan-crypto-trades/README.md)
  Derived from the public chart commentary of `Daan Crypto Trades`, with emphasis on range identification, key-level execution, retest logic, gap-aware framing, and invalidation-based risk control.
- [`donalt`](./skills/donalt/README.md)
  Derived from the public trading commentary of `DonAlt`, with emphasis on HTF-first framing, location-quality filtering, retest patience, opportunity-cost discipline, and low-frequency execution.
- [`credible-crypto`](./skills/credible-crypto/README.md)
  Derived from the public market commentary of `CrediBULL Crypto`, with emphasis on trend/correction separation, HTF thesis framing, invalidation-based action, and structured hold / exit logic.
- [`arthur-hayes`](./skills/arthur-hayes/README.md)
  Derived from the public macro market commentary of `Arthur Hayes`, with emphasis on liquidity-first regime analysis, policy interpretation, BTC-led cycle mapping, beta rotation, and macro-to-crypto transmission logic.
- [`ansem`](./skills/ansem/README.md)
  Derived from the public market commentary of `Ansem`, with emphasis on attention-scarcity framing, narrative-stage analysis, product-mindshare reasoning, beta spillovers, and crowded-consensus filtering.

### Workflow

- [`founder-advisor`](./skills/founder-advisor/README.md)
  Sourced from the founder archetype; designed to compress product ambition into executable focus, wedge selection, and clear non-goals.
- [`product-clarifier`](./skills/product-clarifier/README.md)
  Sourced from the product clarification archetype; designed to turn vague requests into actionable requirements, boundaries, risks, and acceptance criteria.
- [`persona-distill-writer`](./skills/persona-distill-writer/README.md)
  Sourced from the persona distillation writer archetype; designed to turn fragmented material into reusable persona and style documentation.
- [`senior-interviewer`](./skills/senior-interviewer/README.md)
  Sourced from the senior interviewer archetype; designed to turn interview answers into defensible hiring judgments across multiple role types.

## Quick Start

Validate:

```bash
npm run validate
```

Install all skills into Codex:

```bash
npm run install:codex
```

Install all skills into Claude Code:

```bash
npm run install:claude
```

Install a single skill into Claude Code:

```bash
INSTALL_TARGET=claude bash scripts/install-skill.sh ict
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
