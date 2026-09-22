---
version: alpha
name: 2GIS Design System — Light
description: Светлая тема веб-дизайн-системы 2GIS: светло-серый канвас, белые карточки, брендовый зелёный #19AA1E для кнопок, ссылок и акцентов, чёрная текстовая иерархия с прозрачными ступенями, единственная гарнитура — Suisse Intl.

colors:
  primary: "#19AA1E"
  on-primary: "#FFFFFF"
  primary-hover: "#12951A"
  primary-pressed: "#00830C"
  accent-text: "#19AA1E"
  brand-surface: "#19AA1E"
  on-brand-surface: "#FFFFFF"
  canvas: "#F4F4F4"
  canvas-card: "#FFFFFF"
  canvas-raised: "#E8E8E8"
  ink: "#1A1A1A"
  ink-secondary: "#1A1A1AA3"
  ink-tertiary: "#1A1A1A5C"
  border: "#1A1A1A5C"
  positive: "#51A52C"
  warning: "#B27E03"
  negative: "#EA4142"

typography:
  display-xl: { fontFamily: "Suisse Intl", fontSize: 56px, fontWeight: 500, lineHeight: 68px, letterSpacing: -1% }
  display-lg: { fontFamily: "Suisse Intl", fontSize: 44px, fontWeight: 500, lineHeight: 52px, letterSpacing: -1% }
  display-md: { fontFamily: "Suisse Intl", fontSize: 30px, fontWeight: 500, lineHeight: 38px, letterSpacing: -1.5% }
  display-sm: { fontFamily: "Suisse Intl", fontSize: 24px, fontWeight: 500, lineHeight: 32px, letterSpacing: -0.5% }
  body-lg: { fontFamily: "Suisse Intl", fontSize: 18px, fontWeight: 400, lineHeight: 28px, letterSpacing: -1% }
  body-md: { fontFamily: "Suisse Intl", fontSize: 16px, fontWeight: 400, lineHeight: 24px, letterSpacing: -1% }
  body-sm: { fontFamily: "Suisse Intl", fontSize: 14px, fontWeight: 400, lineHeight: 20px }
  body-xs: { fontFamily: "Suisse Intl", fontSize: 12px, fontWeight: 400, lineHeight: 14px }
  button-md: { fontFamily: "Suisse Intl", fontSize: 16px, fontWeight: 500, lineHeight: 24px }

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  3xl: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  section-mobile-sm: 36px
  section-mobile-md: 64px
  section-desktop-sm: 48px
  section-desktop-md: 64px
  section-desktop-lg: 96px
  section-desktop-xl: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.2xl}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.2xl}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.2xl}"
  button-secondary:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.2xl}"
  button-secondary-on-brand:
    backgroundColor: "#00830C"
    textColor: "#FFFFFF"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.2xl}"
  link:
    textColor: "{colors.accent-text}"
    typography: "{typography.body-md}"
  card:
    backgroundColor: "{colors.canvas-card}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  text-input:
    backgroundColor: "{colors.canvas-card}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.2xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section-desktop-lg} {spacing.2xl}"
  brand-band:
    backgroundColor: "{colors.brand-surface}"
    textColor: "{colors.on-brand-surface}"
    typography: "{typography.display-md}"
    padding: "{spacing.section-desktop-lg} {spacing.2xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section-desktop-md} {spacing.2xl}"
---

## Overview

Светлая тема 2GIS — светло-серый канвас `#F4F4F4`, на котором белые карточки отделяются поверхностью и волосяной обводкой. Брендовый зелёный `#19AA1E` работает одновременно как заливка primary-кнопок, цвет ссылок и акцентный текст: в светлой теме это один и тот же шаг зеленого. Текстовая иерархия — чёрная с прозрачными ступенями 100% / 64% / 36%; обводки и разделители — чёрный 36%.

**Key Characteristics:**
- Primary-CTA, ссылки и акценты — `#19AA1E` с белым текстом на заливках; hover `#12951A`, pressed `#00830C`.
- Элевация через пару «серый канвас → белая карточка» + волосяная обводка, не через тени.
- Чёрная текстовая иерархия с alpha-ступенями, без серых оттенков.
- Единственная гарнитура — Suisse Intl: weight 500 для заголовков, кнопок и акцентов, 400 для текста.
- Скругления сдержанные: 8px кнопки, 12px карточки — не pill.

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` — `#19AA1E`): заливка primary-кнопок, ссылки, акцентный текст, брендовые CTA-секции.
- **Primary Hover** (`{colors.primary-hover}` — `#12951A`): ховер primary-кнопок и акцентов.
- **Primary Pressed** (`{colors.primary-pressed}` — `#00830C`): нажатие.

### Surfaces
- **Canvas** (`{colors.canvas}` — `#F4F4F4`): фон страницы.
- **Canvas Card** (`{colors.canvas-card}` — `#FFFFFF`): карточки, панели, инпуты.
- **Canvas Raised** (`{colors.canvas-raised}` — `#E8E8E8`): поднятые поверхности, ховер-подложки. Примечание: роль третьего уровня в токенах светлой темы ожидает подтверждения дизайнеров (сейчас дублирует canvas).
- **Blur** (`#FFFFFFB8`): полупрозрачный фон блюр-панелей поверх контента.

### Text
- **Ink** (`{colors.ink}` — `#1A1A1A`): основной текст и иконки.
- **Ink Secondary** (`{colors.ink-secondary}` — `#1A1A1AA3`): подписи, второстепенный текст.
- **Ink Tertiary** (`{colors.ink-tertiary}` — `#1A1A1A5C`): плейсхолдеры, метаданные.

### Border & Semantic
- **Border** (`{colors.border}` — `#1A1A1A5C`): обводки карточек, инпутов, разделители.
- **Positive** (`#51A52C`), **Warning** (`#B27E03`), **Negative** (`#EA4142`): статусы, тёмные шаги для контраста на светлом.

## Typography

### Font Family
Suisse Intl — единственная гарнитура системы. Фолбэк-стеки и альтернативные гарнитуры не использовать.

### Hierarchy (desktop)

| Token | Size | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | 56px | 500 | 68px | -1% | Hero-заголовок, один на страницу |
| display-lg | 44px | 500 | 52px | -1% | Заголовок крупной секции |
| display-md | 30px | 500 | 38px | -1.5% | Заголовок средней секции |
| display-sm | 24px | 500 | 32px | -0.5% | Подзаголовок, заголовок карточки |
| body-lg | 18px | 400 | 28px | -1% | Лид-абзац |
| body-md | 16px | 400 | 24px | -1% | Основной текст |
| body-sm | 14px | 400 | 20px | 0 | Второстепенный текст |
| body-xs | 12px | 400 | 14px | 0 | Подписи, дисклеймеры |
| button-md | 16px | 500 | 24px | 0 | Подписи кнопок |

Mobile-шкала заголовков: 40/44, 30/38, 24/28, 20/24 (tracking до -2% на hero).

## Layout

- База отступов 4px; шкала 4/8/12/16/20/24/32.
- Контейнер 1200px, padding-inline 24px.
- Вертикальный ритм секций: desktop 48/64/96/120, mobile 36/64.
- Внутри карточек 24px; между компонентами 16–24px.

## Elevation & Depth

Теней нет. Элевация — контраст поверхностей: canvas `#F4F4F4` → card `#FFFFFF` → raised `#E8E8E8`, плюс волосяная обводка `#1A1A1A5C` на карточках. Блюр-панели: `#FFFFFFB8` поверх контента.

## Shapes

| Token | Value | Use |
|---|---|---|
| rounded.sm | 4px | Чекбоксы, малые контролы |
| rounded.md | 8px | Кнопки, инпуты |
| rounded.lg | 12px | Карточки, модалки |
| rounded.xl | 16px | Крупные карточки, баннеры |
| rounded.3xl | 24px | Hero-блоки, медиа-контейнеры |

## Components

**button-primary** — брендовая CTA: фон `#19AA1E`, белый текст, radius 8px, padding 12px 24px, weight 500. Hover `#12951A`, pressed `#00830C`.
**button-secondary** — outline на светлом: прозрачный фон, обводка 1px `#1A1A1A5C`, чёрный текст. На брендовых зелёных секциях secondary = `#00830C` с белым текстом.
**link** — `#19AA1E`, подчёркивание при ховере. Фокус-обводка инпутов и кнопок — тоже `#19AA1E`.
**card** — фон `#FFFFFF`, обводка 1px `#1A1A1A5C`, radius 12px, padding 24px.
**text-input** — фон `#FFFFFF`, обводка `#1A1A1A5C`, radius 8px; фокус — обводка `#19AA1E`.
**hero-band** — фон canvas `#F4F4F4`, заголовок display-xl, padding-block 96px.
**brand-band** — зелёная CTA-секция: фон `#19AA1E`, белый текст.

## Do's and Don'ts

### Do
- Primary-CTA, ссылки и акценты — `#19AA1E`; состояния hover/pressed из шкалы зелёного.
- Элевация через пару «серый канвас → белая карточка» и волосяную обводку, не через тени.
- Текст — только чёрная иерархия с alpha-ступенями.
- Статусы — только positive/warning/negative из палитры.
- В CSS писать только `font-family: "Suisse Intl"`.

### Don't
- Не делать primary-кнопки серыми, чёрными или тёмно-зелёными: заливка primary всегда `#19AA1E`.
- Не использовать тёмные поверхности и белый текст в светлой теме.
- Не использовать зелёный как фон обычных поверхностей — только brand-band.
- Не вводить hex вне палитры и кегли вне шкалы.
- Не использовать pill-скругления: кнопки 8px, карточки 12px.
- Не писать в стилях font-stack с заменами: только `font-family: "Suisse Intl"`.

## Agent Prompt Guide

- Background: `#F4F4F4`; Card: `#FFFFFF`; Raised: `#E8E8E8`
- Text: `#1A1A1A` / `#1A1A1AA3` / `#1A1A1A5C`; Border: `#1A1A1A5C`
- CTA и ссылки: `#19AA1E` (hover `#12951A`, pressed `#00830C`), text on CTA `#FFFFFF`
- Status: `#51A52C` / `#B27E03` / `#EA4142`
- Font: только Suisse Intl (500 заголовки/кнопки, 400 текст)
- Пример: «Собери hero: фон #F4F4F4, заголовок Suisse Intl 56/68 weight 500 tracking -1% #1A1A1A, подзаголовок 18/28 #1A1A1AA3, кнопка #19AA1E radius 8px padding 12/24 с белым текстом 16/24 weight 500».