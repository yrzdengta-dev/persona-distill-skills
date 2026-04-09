# Contributing

## Adding A New Skill

1. 在 `skills/` 下新建目录，目录名使用稳定、清晰的英文名。
2. 至少创建以下文件：
   - `SKILL.md`
   - `examples.md`
3. 对人物或方法论 skill，建议额外提供：
   - `persona-card.md`
   - `sources.md`
4. 保持 `SKILL.md` frontmatter 中的 `name` 和 `description` 清晰可触发。

## Style Rules

- 默认提炼框架，不模仿真人
- 明确写出适用场景和边界
- 对不确定事实标注为推断
- 不写空泛宣传文案

## Validation

提交前运行：

```bash
npm run validate
```
