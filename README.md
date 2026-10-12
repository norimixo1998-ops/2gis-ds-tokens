# 2GIS Design System — Landing Builder

Система быстрой сборки лендингов из готовых блоков на основе дизайн-системы 2GIS (тёмная тема).

---

##  Для AI (Codex, Open Design)

**Точка входа:** `.codex/AGENT.md` — начни чтение отсюда.

**Порядок чтения:**
1. `.codex/AGENT.md` — инструкции по сборке
2. `.codex/context/design-rules.md` — все цвета, шрифты, отступы, правила
3. `blocks/` — готовые компоненты (hero, features, pricing, cta, footer)
4. `patterns/` — канонические паттерны (header, footer)
5. `templates/` — шаблоны лендингов (будут добавлены)

**НЕ читать:**
- `DESIGN.md` — полный файл дизайна (14 КБ), использовать только для справки людьми
- `package.json` — служебный файл
- `scripts/` — скрипты сборки

**Правила:**
- Все цвета брать только из `.codex/context/design-rules.md`
- Все блоки брать из папки `blocks/`
- Header всегда копировать из `patterns/header.md`
- Результат сборки сохранять в `dist/`

---

##  Структура проекта
