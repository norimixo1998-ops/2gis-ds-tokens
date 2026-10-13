# 2GIS Design System — Dark Theme (для AI)

## Colors

### Brand
- Primary: `#12951A` (кнопки, брендовые секции)
- Primary Hover: `#19AA1E`
- Primary Pressed: `#00830C`
- Accent Text: `#3BB643` (ссылки, акценты на тёмном)

### Surfaces
- Canvas (фон страницы): `#192025`
- Canvas Card (карточки, инпуты, nav-панель): `#283136`
- Canvas Raised (поднятые элементы): `#3C454B`
- Search/Button Secondary Background: `rgba(255,255,255,0.12)`

### Text
- Ink (основной): `#FFFFFF`
- Ink Secondary (подписи, ссылки навигации): `rgba(255,255,255,0.64)`
- Ink Tertiary (плейсхолдеры): `rgba(255,255,255,0.36)`

### Other
- Border: `rgba(255,255,255,0.36)`
- Positive: `#71BB56`
- Warning: `#FFB814`
- Negative: `#F97B76`

## Typography

**Font:** только `"Suisse Intl"` (без фолбэков)

### Desktop
- display-xl: 56px / 68px / 500 / -1% (hero)
- display-lg: 44px / 52px / 500 / -1% (крупные секции)
- display-md: 30px / 38px / 500 / -1.5% (средние секции)
- display-sm: 24px / 32px / 500 / -0.5% (карточки)
- body-lg: 18px / 28px / 400 / -1% (лид)
- body-md: 16px / 24px / 400 / -1% (основной текст, навигация)
- body-sm: 14px / 20px / 400 / 0 (второстепенный)
- body-xs: 12px / 14px / 400 / 0 (подписи)
- button-md: 16px / 24px / 500 / 0

### Mobile (заголовки)
- 40px / 44px / -2%
- 30px / 38px
- 24px / 28px
- 20px / 24px

## Spacing

- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px

### Section Padding
- Mobile: 36px (sm) / 64px (md)
- Desktop: 48px (sm) / 64px (md) / 96px (lg) / 120px (xl)

## Rounded

- sm: 4px (чекбоксы)
- md: 8px
- lg: 12px (кнопки, инпуты, поиск) ← реальное значение из Figma
- xl: 16px (nav-панель header, крупные карточки)
- 2xl: 20px
- 3xl: 24px (hero-блоки)

## Grid

### Desktop
- Columns: 12
- Container width: 1168px
- Gutter: 32px
- Column width: 68px
- Align: center

### Mobile
- Columns: 4
- Container width: 343px
- Gutter: 20px
- Margin: 16px
- Align: stretch

## Components

### button-primary
- Background: `#12951A` (hover `#19AA1E`, pressed `#00830C`)
- Text: `#FFFFFF`
- Typography: button-md (16px / 24px / 500)
- Rounded: 12px
- Padding: 12px 16px (фикс. ширина 190px в header) или 12px 28px

### button-secondary
- Background: `rgba(255,255,255,0.12)`
- Border: none
- Text: `#FFFFFF`
- Rounded: 12px
- Padding: 12px 28px

### search-input
- Background: `rgba(255,255,255,0.12)`
- Border: none
- Rounded: 12px
- Padding: 12px 16px
- Width: 200px
- Height: 48px
- Icon: 24px, color ink-secondary
- Placeholder: body-md, ink-secondary

### link
- Color: `#3BB643`
- Underline on hover
- Focus border: `#3BB643`

### card
- Background: `#283136`
- Border: 1px `rgba(255,255,255,0.36)`
- Rounded: 12px
- Padding: 24px
- Text: `#FFFFFF`

### text-input
- Background: `#283136`
- Border: 1px `rgba(255,255,255,0.36)`
- Rounded: 12px
- Padding: 12px 16px
- Focus border: `#3BB643`

### header-nav
- Background: `#283136`
- Rounded: 16px
- Height: 80px
- Padding: 0 28px
- Links: body-md (16px), ink-secondary, gap 32px
- Hover: ink (#FFFFFF)

### hero-band
- Background: `#192025`
- Typography: display-xl
- Padding: 96px 24px

### brand-band
- Background: `#12951A`
- Text: `#FFFFFF`
- Typography: display-md
- Padding: 96px 24px

## Header (канонический — из Figma)

### Структура
Две строки в контейнере 1168px:
1. **header-top** (56px) — логотип 56x56, поиск 200px, язык, кнопки "Контакты" и "Оставить заявку"
2. **header-nav** (80px) — "Все продукты ▾" + ссылки, фон #283136, radius 16px

### Ключевые значения
- Контейнер: 1168px
- Логотип: 56x56px, SVG из `assets/logo/logo-dark.svg`
- Поиск: 200x48px, radius 12px, фон rgba(255,255,255,0.12)
- Кнопки: height 48px, radius 12px
- "Оставить заявку": фикс. ширина 190px
- Gap между элементами header-top: 32px
- Gap между ссылками nav: 32px
- Файлы: `patterns/header/header.html` + `header.css` (копировать как есть)

## Rules

### Do
- Primary CTA и брендовые секции: `#12951A` + белый текст
- Ссылки на тёмном: `#3BB643`
- Элевация через контраст поверхностей (canvas → card → raised), без теней
- Текст: только белая иерархия с alpha (100% / 64% / 36%)
- Font-family: только `"Suisse Intl"`
- Скругления кнопок и инпутов: 12px (реальное значение из Figma)
- Скругление nav-панели: 16px

### Don't
- Не делать primary-кнопки серыми/белыми/светло-зелёными
- Не использовать `#12951A` для текста на тёмном (нечитаемо)
- Не использовать зелёный как фон обычных поверхностей
- Не вводить hex вне палитры
- Не использовать pill-скругления (9999px)
- Не писать font-stack с фолбэками
- Не переделывать header — копировать из `patterns/header/`

## Example Prompt

«Собери hero: фон #192025, заголовок Suisse Intl 56/68 weight 500 tracking -1% белый, подзаголовок 16/24 #FFFFFFA3, кнопка #12951A radius 12px padding 12/16 белый текст 16/24 weight 500, ссылка #3BB643».
