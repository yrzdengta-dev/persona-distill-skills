# Persona Distill Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
[![Validate Skills](https://img.shields.io/badge/validation-local%20and%20CI-green)](./.github/workflows/validate.yml)
[![Codex Skills](https://img.shields.io/badge/Codex-compatible-blue)](#安装到-codex)
[![Claude Skills](https://img.shields.io/badge/Claude-compatible-blue)](#安装到-claude)

[English](./README.en.md)

用于 persona 蒸馏、视角提炼和专业工作流角色封装的本地 skill 仓库。

本仓库提供可安装到 `~/.codex/skills/` 或 `~/.claude/skills/` 的本地 skill，可在 Codex 与 Claude Code 中作为可触发能力使用。

## 仓库定位

本仓库包含：

- `人物与视角类 skills`
- `方法论类 skills`
- `工作流类 skills`
- `兼容 Codex / Claude Code 的 SKILL.md 文档`
- `辅助研究文档`，如 persona card、sources、examples

这不是一个提示词堆积仓库，也不是纯角色扮演集合。目标是提炼稳定框架、明确边界和可复用的判断流程。

## 已包含的 Skills

### 人物与视角类

- [`wallstreet0name`](./skills/wallstreet0name/README.md)  
  基于 `@WallStreet0Name` 的公开市场评论整理，主要覆盖多周期结构、等待高质量位置、交易纪律和低质量机会过滤。

- [`fengxun`](./skills/fengxun/README.md)  
  基于 `@0xfengxun` 的公开评论整理，主要覆盖新币估值、流动性分配、开盘风险和空头 / 回避逻辑。

- [`ict`](./skills/ict/README.md)  
  基于 ICT / Michael J. Huddleston 的公开教学体系整理，主要覆盖 HTF premise、liquidity、PD Array、AMD/Judas/displacement 和 session timing。

- [`17zxhold`](./skills/17zxhold/README.md)  
  基于 `@17zxhold` 的公开短线交易表达整理，主要覆盖山寨短线执行、关键位置、真突破判断、止损和保本损。

- [`liangxi`](./skills/liangxi/README.md)  
  基于凉兮（凉兮大元帅）的公开交易表达整理，主要覆盖对手盘视角、极端行情筛选、清算路径判断、事件驱动出手和强语气表达。

- [`byzantine-general`](./skills/byzantine-general/README.md)  
  基于 `Byzantine General` 的公开交易表达整理，主要覆盖结构优先、仓位过滤、等待确认、失效边界和执行纪律。

- [`daan-crypto-trades`](./skills/daan-crypto-trades/README.md)  
  基于 `Daan Crypto Trades` 的公开图表评论整理，主要覆盖区间识别、关键水平、回踩确认、gap 语境和失效边界。

- [`donalt`](./skills/donalt/README.md)  
  基于 `DonAlt` 的公开交易表达整理，主要覆盖高周期优先、边界位置、回踩确认、机会成本和低频高质量执行。

- [`credible-crypto`](./skills/credible-crypto/README.md)  
  基于 `CrediBULL Crypto` 的公开市场评论整理，主要覆盖趋势/修正分离、HTF thesis、invalidation、持有纪律和结构化认错。

- [`arthur-hayes`](./skills/arthur-hayes/README.md)  
  基于 `Arthur Hayes` 的公开宏观市场表达整理，主要覆盖流动性优先、制度变量、BTC 先行、beta 轮动和宏观到 crypto 的传导框架。

- [`ansem`](./skills/ansem/README.md)  
  基于 `Ansem` 的公开市场表达整理，主要覆盖注意力稀缺、叙事阶段、产品心智、beta 外溢和拥挤共识过滤。

### 工作流类

- [`founder-advisor`](./skills/founder-advisor/README.md)  
  来源是创始人 archetype；其核心价值是把抽象产品野心收敛成可执行路径。提炼出方向判断、切入点收缩、真实需求识别和不做项管理。

- [`product-clarifier`](./skills/product-clarifier/README.md)  
  来源是产品澄清 archetype；其核心价值是把一句话需求转成可讨论、可实现、可验证的规格说明。提炼出需求展开、边界条件、风险识别和验收标准。

- [`persona-distill-writer`](./skills/persona-distill-writer/README.md)  
  来源是 persona distillation writer archetype；其核心价值是把碎片材料变成稳定可复用的人物文档。提炼出风格模式、事实 / 推断分离和判断框架整理。

- [`senior-interviewer`](./skills/senior-interviewer/README.md)  
  来源是资深面试官 / hiring panel lead archetype；其核心价值是把候选人回答压缩成可辩护的 hiring decision。提炼出面试设计、信号提取、风险判断和录用建议。

## 仓库结构

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
│  │  ├─ README.en.md
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

## Skill 文档结构

每个 skill 应至少包含：

- `SKILL.md`  
  实际被 Codex 读取和触发的 skill 入口。

- `README.md` / `README.en.md`  
  面向人类读者的中英文说明页。

- `examples.md` / `examples.en.md`  
  触发示例与期望输出模式。

人物或方法论类 skill 建议额外包含：

- `persona-card.md`
- `sources.md`

## 安装到 Codex

安装全部 skills：

```bash
bash scripts/install-skill.sh all
```

安装单个 skill：

```bash
bash scripts/install-skill.sh ict
```

安装多个 skill：

```bash
bash scripts/install-skill.sh ict fengxun senior-interviewer
```

安装脚本会读取每个 `SKILL.md` 中的 `name:` 字段，并复制到：

```text
~/.codex/skills/<frontmatter-name>/SKILL.md
```

## 本地开发

校验仓库结构：

```bash
npm run validate
```

安装全部 skills 到本地 Codex 目录：

```bash
npm run install:codex
```

## 安装到 Claude

Claude Code 官方也支持 `SKILL.md` 目录式 skills，安装位置为 `~/.claude/skills/`。

安装全部 skills：

```bash
npm run install:claude
```

安装单个 skill：

```bash
INSTALL_TARGET=claude bash scripts/install-skill.sh ict
```

安装多个 skill：

```bash
INSTALL_TARGET=claude bash scripts/install-skill.sh ict fengxun liangxi
```

安装脚本会读取每个 `SKILL.md` 中的 `name:` 字段，并复制到：

```text
~/.claude/skills/<frontmatter-name>/SKILL.md
```

## 设计原则

- 优先提炼框架，不优先模仿人格。
- 公开材料必须和结论边界对应。
- 每个人物类 skill 都需要显式 guardrails。
- 不用术语掩盖不确定性。
- 优化可复用判断，而不是戏剧化扮演。

## 贡献

见 [CONTRIBUTING.md](./CONTRIBUTING.md).
