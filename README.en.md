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
  Sourced from public market voice `@WallStreet0Name`, whose visible output centers on structure, timing, and discipline commentary. Built from `2` public source channels and `4` evidence categories, distilled into `4` core modules: multi-timeframe structure, waiting for high-quality locations, trading discipline, and low-quality trade filtering.
- [`fengxun`](./skills/fengxun/README.md)
  Sourced from public market commentator `@0xfengxun`, whose visible output centers on public sales, launch structure, liquidity, and distribution pressure. Built from `3` public source channels and `4` evidence categories, distilled into `4` core modules: valuation, liquidity distribution, launch risk, and short / avoid logic.
- [`ict`](./skills/ict/README.md)
  Sourced from public trading educator ICT / Michael J. Huddleston, known for the widely cited ICT / SMC framework. Built from `3` public source channels and `5` evidence categories, distilled into `5` core modules: HTF premise, liquidity, PD Array, AMD/Judas/displacement, and session timing.
- [`17zxhold`](./skills/17zxhold/README.md)
  Sourced from public short-term trader `@17zxhold`, whose visible output centers on key levels, breakout confirmation, stop loss, and break-even protection. Built from `2` public source channels and `4` evidence categories, distilled into `5` core modules: alt execution, key levels, breakout confirmation, stop loss, and break-even stop logic.
- [`liangxi`](./skills/liangxi/README.md)
  Sourced from public trader voice Liangxi (`凉兮大元帅`), whose visible output centers on leverage, liquidation paths, exchange behavior, and event-driven extreme moves. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: opponent-positioning analysis, extreme-window filtering, liquidation-path reasoning, event-driven strike logic, and sharp bounded response style.
- [`byzantine-general`](./skills/byzantine-general/README.md)
  Sourced from public trader voice `Byzantine General`, whose visible output centers on structure, crowding, confirmation, and invalidation in major crypto assets. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: structure-first reading, crowding-aware filtering, confirmation logic, invalidation-led execution, and disciplined major-asset trading.
- [`daan-crypto-trades`](./skills/daan-crypto-trades/README.md)
  Sourced from public trader voice `Daan Crypto Trades`, whose visible output centers on ranges, key levels, retests, and objective invalidations. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: range identification, key-level execution, breakout/retest logic, gap-aware framing, and invalidation-based risk control.
- [`donalt`](./skills/donalt/README.md)
  Sourced from public trader voice `DonAlt`, whose visible output centers on high-timeframe location quality, patience, retests, and opportunity cost. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: HTF-first framing, location-quality filtering, retest patience, opportunity-cost discipline, and low-frequency high-quality execution.
- [`credible-crypto`](./skills/credible-crypto/README.md)
  Sourced from public trader voice `CrediBULL Crypto`, whose visible output centers on trend theses, corrections, invalidation, and disciplined holding. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: trend/correction separation, HTF thesis framing, invalidation-based action, hold/exit discipline, and conviction with structure.
- [`arthur-hayes`](./skills/arthur-hayes/README.md)
  Sourced from public market voice `Arthur Hayes`, whose visible output centers on liquidity, policy paths, BTC-led regime shifts, and beta rotation across crypto cycles. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: liquidity-first regime analysis, policy interpretation, BTC-led cycle mapping, beta-rotation thinking, and macro-to-crypto transmission logic.
- [`ansem`](./skills/ansem/README.md)
  Sourced from public trader voice `Ansem`, whose visible output centers on attention flow, narrative spread, product mindshare, and high-beta market behavior. Built from `3` public source channels and `4` evidence categories, distilled into `5` core modules: attention-scarcity framing, narrative-stage analysis, product-mindshare reasoning, beta-spillover mapping, and crowded-consensus filtering.

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
