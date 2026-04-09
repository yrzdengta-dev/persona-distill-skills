# Persona Distill Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
[![Validate Skills](https://img.shields.io/badge/validation-local%20and%20CI-green)](./.github/workflows/validate.yml)
[![Codex Skills](https://img.shields.io/badge/Codex-compatible-blue)](#安装到-codex)

[English](./README.en.md)

用于 persona 蒸馏、视角提炼和专业工作流角色封装的本地 skill 仓库。

本仓库提供可安装到 `~/.codex/skills/` 的本地 skill，可在 Codex 中作为可触发能力使用。

## 仓库定位

本仓库包含：

- `人物与视角类 skills`
- `方法论类 skills`
- `工作流类 skills`
- `兼容 Codex 的 SKILL.md 文档`
- `辅助研究文档`，如 persona card、sources、examples

这不是一个提示词堆积仓库，也不是纯角色扮演集合。目标是提炼稳定框架、明确边界和可复用的判断流程。

## 已包含的 Skills

### 人物与视角类

- [`wallstreet0name`](./skills/wallstreet0name/README.md)  
  多周期结构、等待高质量位置、交易纪律。

- [`fengxun`](./skills/fengxun/README.md)  
  新币估值、流动性分配、开盘风险与空头逻辑。

- [`ict`](./skills/ict/README.md)  
  ICT / SMC 框架，强调 HTF premise、liquidity、PD Array、session timing。

- [`17zxhold`](./skills/17zxhold/README.md)  
  山寨短线执行、关键位置、真突破、止损与保本损。

### 工作流类

- [`founder-advisor`](./skills/founder-advisor/README.md)  
  创始人视角的方向判断与执行取舍。

- [`product-clarifier`](./skills/product-clarifier/README.md)  
  将模糊需求拆成结构化需求与风险。

- [`persona-distill-writer`](./skills/persona-distill-writer/README.md)  
  把零散资料整理成稳定的人物 / 风格画像。

- [`senior-interviewer`](./skills/senior-interviewer/README.md)  
  面向软件开发、技术支持、实施、售前岗位的资深面试官 skill。

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

## 设计原则

- 优先提炼框架，不优先模仿人格。
- 公开材料必须和结论边界对应。
- 每个人物类 skill 都需要显式 guardrails。
- 不用术语掩盖不确定性。
- 优化可复用判断，而不是戏剧化扮演。

## 贡献

见 [CONTRIBUTING.md](./CONTRIBUTING.md)。
