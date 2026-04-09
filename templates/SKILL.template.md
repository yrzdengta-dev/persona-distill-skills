# Skill Name

## Purpose

一句话说明这个 skill 的目标。

## When To Use

- 场景 1
- 场景 2
- 场景 3

## Inputs

- 用户会提供什么
- 依赖哪些上下文

## Outputs

- 最终产物是什么
- 输出格式和风格要求

## Workflow

1. 先确认目标和约束
2. 收集必要上下文
3. 执行核心分析或生成
4. 输出结果并给出下一步建议

## Guardrails

- 不要编造事实
- 不要跳过关键前提
- 信息不足时明确说明假设

## Example

用户输入：

```text
请帮我把这个产品想法整理成可执行计划
```

期望输出：

```text
需求拆解、风险、验收标准、优先级建议
```

## Persona README Standard

如果这是人物或视角类 skill，请额外创建 `README.md` 和 `sources.md`，并使用以下固定结构：

### README.md

1. 人物介绍
2. 公开成果与可见输出
3. 蒸馏过程中采集了什么
4. 提炼出了什么

每一段尽量量化，例如：

- `基于 3 类公开来源`
- `提取了 5 个高频主题`
- `采集了 4 类证据`
- `提炼出 4 个核心模块`

### sources.md

1. Source Person
2. Public Achievements / Visible Output
3. What Was Collected During Distillation
4. What Was Distilled
5. Public Sources Used
6. Evidence Boundaries
7. Confidence
