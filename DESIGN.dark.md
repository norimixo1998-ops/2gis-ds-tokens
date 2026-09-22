---
version: alpha
name: 2GIS Design System — Dark
description: Тёмная тема веб-дизайн-системы 2GIS: глубокие серо-синие поверхности трёх уровней, брендовый зелёный #12951A для кнопок и брендовых секций, светло-зелёный #3BB643 для ссылок и акцентного текста на тёмном, белая текстовая иерархия с прозрачными ступенями, единственная гарнитура — Suisse Intl.

colors:
  primary: "#12951A"
  on-primary: "#FFFFFF"
  primary-hover: "#19AA1E"
  primary-pressed: "#00830C"
  accent-text: "#3BB643"
  brand-surface: "#12951A"
  on-brand-surface: "#FFFFFF"
  canvas: "#192025"
  canvas-card: "#283136"
  canvas-raised: "#3C454B"
  ink: "#FFFFFF"
  ink-secondary: "#FFFFFFA3"
  ink-tertiary: "#FFFFFF5C"
  border: "#FFFFFF5C"
  positive: "#71BB56"
  warning: "#FFB814"
  negative: "#F97B76"

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
    backgroundColor: "#DBDBDB"
    textColor: "#1A1A1A"
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

Тёмная тема 2GIS — глубокие серо-синие поверхности трёх уровней (`#192025` страница → `#283136` карточки → `#3C454B` поднятые элементы). Брендовый зелёный в тёмной теме — тёмный шаг `#12951A`: им заливаются primary-кнопки и брендовые CTA-секции. Для ссылок, активных пунктов и акцентного текста на тёмном фоне используется светлый шаг `#3BB643` — тёмно-зелёный текст на тёмном фоне нечитаем. Текстовая иерархия — белая с прозрачными ступенями 100% / 64% / 36%; обводки и разделители — полупрозрачный белый 36%.

**Key Characteristics:**
- Primary-CTA и брендовые секции — `#12951A` с белым текстом; hover `#19AA1E`, pressed `#00830C`.
- Ссылки и акцентный текст на тёмном — `#3BB643`.
- Три уровня поверхностей вместо теней: контраст поверхностей и есть элевация.
- Белая текстовая иерархия с alpha-ступенями, без серых оттенков.
- Единственная гарнитура — Suisse Intl: weight 500 для заголовков, кнопок и акцентов, 400 для текста.
- Скругления сдержанные: 8px кнопки, 12px карточки — не pill.

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` — `#12951A`): заливка primary-кнопок, фон брендовых CTA-секций.
- **Primary Hover** (`{colors.primary-hover}` — `#19AA1E`): ховер primary-кнопок.
- **Primary Pressed** (`{colors.primary-pressed}` — `#00830C`): нажатие.
- **Accent Text** (`{colors.accent-text}` — `#3BB643`): ссылки, активные пункты, акцентный текст, фокус-обводка на тёмном.

### Surfaces
- **Canvas** (`{colors.canvas}` — `#192025`): фон страницы.
- **Canvas Card** (`{colors.canvas-card}` — `#283136`): карточки, панели, инпуты.
- **Canvas Raised** (`{colors.canvas-raised}` — `#3C454B`): поднятые поверхности, ховер-подложки.

### Text
- **Ink** (`{colors.ink}` — `#FFFFFF`): основной текст и иконки.
- **Ink Secondary** (`{colors.ink-secondary}` — `#FFFFFFA3`): подписи, второстепенный текст.
- **Ink Tertiary** (`{colors.ink-tertiary}` — `#FFFFFF5C`): плейсхолдеры, метаданные.

### Border & Semantic
- **Border** (`{colors.border}` — `#FFFFFF5C`): обводки карточек, инпутов, разделители.
- **Positive** (`#71BB56`), **Warning** (`#FFB814`), **Negative** (`#F97B76`): статусы, светлые шаги для контраста на тёмном.

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

Теней нет. Элевация — контраст поверхностей: canvas → canvas-card → canvas-raised. Блюр-панели: полупрозрачный белый 12% поверх контента.

## Shapes

| Token | Value | Use |
|---|---|---|
| rounded.sm | 4px | Чекбоксы, малые контролы |
| rounded.md | 8px | Кнопки, инпуты |
| rounded.lg | 12px | Карточки, модалки |
| rounded.xl | 16px | Крупные карточки, баннеры |
| rounded.3xl | 24px | Hero-блоки, медиа-контейнеры |

## Components

**button-primary** — брендовая CTA: фон `#12951A`, белый текст, radius 8px, padding 12px 24px, weight 500. Hover `#19AA1E`, pressed `#00830C`.
**button-secondary** — outline на тёмном: прозрачный фон, обводка 1px `#FFFFFF5C`, белый текст. На брендовых зелёных секциях secondary = `#DBDBDB` с тёмным текстом `#1A1A1A`.
**link** — `#3BB643`, подчёркивание при ховере. Фокус-обводка инпутов и кнопок — тоже `#3BB643`.
**card** — фон `#283136`, обводка 1px `#FFFFFF5C`, radius 12px, padding 24px.
**text-input** — фон `#283136`, обводка `#FFFFFF5C`, radius 8px; фокус — обводка `#3BB643`.
**hero-band** — фон canvas `#192025`, заголовок display-xl, padding-block 96px.
**brand-band** — зелёная CTA-секция: фон `#12951A`, белый текст.

## Do's and Don'ts

### Do
- Primary-CTA и брендовые секции — `#12951A` с белым текстом; состояния hover/pressed из шкалы зелёного.
- Ссылки и акцентный текст на тёмном — `#3BB643`.
- Элевация через уровни поверхностей, не через тени.
- Текст — только белая иерархия с alpha-ступенями.
- Статусы — только positive/warning/negative из палитры.
- В CSS писать только `font-family: "Suisse Intl"`.

### Don't
- Не делать primary-кнопки серыми, белыми или светло-зелёными: заливка primary всегда `#12951A`.
- Не использовать `#12951A` для текста и ссылок на тёмном фоне — нечитаемо; для текста есть `#3BB643`.
- Не использовать зелёный как фон обычных поверхностей — только brand-band.
- Не вводить hex вне палитры и кегли вне шкалы.
- Не использовать pill-скругления: кнопки 8px, карточки 12px.
- Не писать в стилях font-stack с заменами: только `font-family: "Suisse Intl"`.

## Agent Prompt Guide

- Background: `#192025`; Card: `#283136`; Raised: `#3C454B`
- Text: `#FFFFFF` / `#FFFFFFA3` / `#FFFFFF5C`; Border: `#FFFFFF5C`
- CTA: `#12951A` (hover `#19AA1E`, pressed `#00830C`), text on CTA `#FFFFFF`
- Links on dark: `#3BB643`
- Status: `#71BB56` / `#FFB814` / `#F97B76`
- Font: только Suisse Intl (500 заголовки/кнопки, 400 текст)
- Пример: «Собери hero: фон #192025, заголовок Suisse Intl 56/68 weight 500 tracking -1% белый, подзаголовок 18/28 #FFFFFFA3, кнопка #12951A radius 8px padding 12/24 с белым текстом 16/24 weight 500, ссылка #3BB643».