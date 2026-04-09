# Contributing

Thanks for contributing.

## Add A New Skill

1. Create a stable English folder name under `skills/`.
2. Add these required files:
   - `SKILL.md`
   - `README.md`
   - `examples.md`
   - `examples.en.md`
3. For persona or methodology skills, also add:
   - `persona-card.md`
   - `sources.md`
4. Keep the `name:` and `description:` fields in `SKILL.md` frontmatter clear enough to trigger reliably.

## Persona / Perspective README Standard

For every persona or perspective skill, write the human-facing introduction using this fixed structure:

1. `介绍该人物`
2. `有什么出色成果`
3. `本 skill 蒸馏出了它什么东西`

For example:

- `该人物是……`
- `其出色成果是……`
- `本 skill 蒸馏出了他的……框架`

For workflow or archetype skills, replace the person with a source role or source archetype, but keep the same first two sections:

1. `介绍该来源角色`
2. `有什么核心价值 / 成果`
3. `本 skill 蒸馏出了什么能力`

Each of these sections should be quantified whenever possible.

Use concrete counts such as:

- `2 public source channels`
- `5 recurring themes`
- `4 evidence categories`
- `3 distilled modules`

Do not keep these sections vague. Prefer explicit numbers, scope, and evidence boundaries.

## Skill Writing Rules

- Prefer framework extraction over impersonation.
- State scope, trigger conditions, and guardrails explicitly.
- Mark uncertain claims as inference.
- Avoid vague marketing language.
- Keep human-facing docs readable, but keep `SKILL.md` operational.

## Validation

Run before committing:

```bash
npm run validate
```

## Install Test

If you changed install behavior, also test:

```bash
npm run install:codex
```
