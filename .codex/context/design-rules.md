# 2GIS Design System — Dark Theme

## Colors

### Brand
- Primary: `#12951A` (кнопки, брендовые секции)
- Primary Hover: `#19AA1E`
- Primary Pressed: `#00830C`
- Accent Text: `#3BB643` (ссылки, акценты на тёмном)

### Surfaces
- Canvas (фон страницы): `#192025`
- Canvas Card (карточки, инпуты): `#283136`
- Canvas Raised (поднятые элементы): `#3C454B`

### Text
- Ink (основной): `#FFFFFF`
- Ink Secondary (подписи): `#FFFFFFA3` (64%)
- Ink Tertiary (плейсхолдеры): `#FFFFFF5C` (36%)

### Other
- Border: `#FFFFFF5C` (36%)
- Positive: `#71BB56`
- Warning: `#FFB814`
- Negative: `#F97B76`

## Typography

**Font:** только `Suisse Intl` (без фолбэков)

### Desktop
- display-xl: 56px / 68px / 500 / -1% (hero)
- display-lg: 44px / 52px / 500 / -1% (крупные секции)
- display-md: 30px / 38px / 500 / -1.5% (средние секции)
- display-sm: 24px / 32px / 500 / -0.5% (карточки)
- body-lg: 18px / 28px / 400 / -1% (лид)
- body-md: 16px / 24px / 400 / -1% (основной текст)
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
- md: 8px (кнопки, инпуты)
- lg: 12px (карточки)
- xl: 16px (крупные карточки)
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
- Rounded: 8px
- Padding: 12px 24px

### button-secondary
- Background: transparent
- Border: 1px `#FFFFFF5C`
- Text: `#FFFFFF`
- На брендовых секциях: background `#DBDBDB`, text `#1A1A1A`

### link
- Color: `#3BB643`
- Underline on hover
- Focus border: `#3BB643`

### card
- Background: `#283136`
- Border: 1px `#FFFFFF5C`
- Rounded: 12px
- Padding: 24px
- Text: `#FFFFFF`

### text-input
- Background: `#283136`
- Border: 1px `#FFFFFF5C`
- Rounded: 8px
- Padding: 12px 16px
- Focus border: `#3BB643`

### hero-band
- Background: `#192025`
- Typography: display-xl
- Padding: 96px 24px

### brand-band
- Background: `#12951A`
- Text: `#FFFFFF`
- Typography: display-md
- Padding: 96px 24px

## Rules

### Do
- Primary CTA и брендовые секции: `#12951A` + белый текст
- Ссылки на тёмном: `#3BB643`
- Элевация через контраст поверхностей (canvas → card → raised), без теней
- Текст: только белая иерархия с alpha (100% / 64% / 36%)
- Font-family: только `"Suisse Intl"`

### Don't
- Не делать primary-кнопки серыми/белыми/светло-зелёными
- Не использовать `#12951A` для текста на тёмном (нечитаемо)
- Не использовать зелёный как фон обычных поверхностей
- Не вводить hex вне палитры
- Не использовать pill-скругления (кнопки 8px, карточки 12px)
- Не писать font-stack с фолбэками

## Example Prompt

«Собери hero: фон #192025, заголовок Suisse Intl 56/68 weight 500 tracking -1% белый, подзаголовок 18/28 #FFFFFFA3, кнопка #12951A radius 8px padding 12/24 белый текст 16/24 weight 500, ссылка #3BB643».