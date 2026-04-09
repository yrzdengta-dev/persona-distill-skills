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
