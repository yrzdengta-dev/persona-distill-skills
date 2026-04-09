# Persona Distill Skills

一个用于维护个人 persona / perspective / workflow skills 的 GitHub 仓库。

## Overview

这个仓库用于集中维护可复用的 skill，重点覆盖：

- 人物视角 skill
- 方法论 skill
- 产品与交易顾问类 skill
- 本地可安装到 Codex / Claude Code 的 skill 文档

## Included Skills

### Perspective Skills

- `wallstreet0name` - 多周期结构、交易纪律、等待高质量位置
- `fengxun` - 新币估值、流动性分配、公募和做空逻辑
- `ict` - ICT / SMC 分析框架，围绕 HTF premise、liquidity、PD Array、session timing
- `17zxhold` - 山寨短线执行、关键位置、真突破、止损和保本损

### Workflow Skills

- `founder-advisor` - 创始人视角的方向判断与执行取舍
- `product-clarifier` - 将模糊需求拆成结构化需求
- `persona-distill-writer` - 把人物资料整理成稳定的人格/风格描述

## Repository Structure

```text
persona-distill-skills/
├─ README.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ .gitignore
├─ package.json
├─ skills/
│  ├─ <skill-name>/
│  │  ├─ SKILL.md
│  │  ├─ persona-card.md
│  │  ├─ sources.md
│  │  └─ examples.md
├─ templates/
│  └─ SKILL.template.md
├─ scripts/
│  └─ validate-skills.mjs
└─ .github/
   └─ workflows/
      └─ validate.yml
```

## Skill Format

每个 skill 建议至少包含：

- `SKILL.md` - 实际给客户端加载的 skill 说明
- `persona-card.md` - 人物或方法论的结构化画像
- `sources.md` - 公开来源和证据边界
- `examples.md` - 触发示例和期望输出风格

## Local Validation

```bash
npm run validate
```

当前校验会检查：

- `skills/` 目录存在
- 每个 skill 子目录都包含 `SKILL.md`

## Install Into Codex

将单个 skill 复制到 `~/.codex/skills/<skill-name>/SKILL.md` 即可。

例如：

```bash
mkdir -p ~/.codex/skills/ict-perspective
cp skills/ict/SKILL.md ~/.codex/skills/ict-perspective/SKILL.md
```

## Development Notes

- 这些 skill 更偏“框架提炼”，不是“冒充真人”
- 所有人物 skill 都应显式写出 guardrails
- 对公开资料不足的结论，必须标注为推断
