# 2GIS Design System — справочник токенов для ИИ-агентов

Правила: интерфейсы собираются ТОЛЬКО из semantic-токенов и классов .type-*.
primitive.* — справочная информация о шкалах, напрямую в коде не используется.
Темы: пути токенов идентичны, значения переключаются через [data-theme="dark"].

## Семантические цвета (light / dark)

| Токен | Light | Dark | Применение |
|---|---|---|---|
| text-and-icon.primary | #1a1a1a | #ffffff | Основной текст и иконки на светлых поверхностях |
| text-and-icon.secondary | #1a1a1aa3 | #ffffffa3 | Второстепенный текст: подписи, подсказки на светлом |
| text-and-icon.tertiary | #1a1a1a5c | #ffffff5c | Третичный текст: плейсхолдеры, подписи к графикам |
| text-and-icon.inverse.primary | #ffffff | #1a1a1a | Текст и иконки на тёмных и брендовых поверхностях |
| text-and-icon.inverse.secondary | #ffffffa3 | #1a1a1aa3 | Второстепенный текст на тёмных поверхностях |
| text-and-icon.inverse.tertiary | #ffffff5c | #1a1a1a5c | Третичный текст на тёмных поверхностях |
| text-and-icon.status.accent | #19aa1e | #3bb643 | Брендовый акцент в тексте: ссылки, активные пункты |
| text-and-icon.status.positive | #51a52c | #71bb56 | Статус success в тексте и иконках |
| text-and-icon.status.error | #ea4142 | #f97b76 | Статус error в тексте и иконках (старое имя Attention — сверить конвенцию) |
| text-and-icon.status.warning | #b27e03 | #ffb814 | Статус warning в тексте и иконках (старое имя Negative — сверить конвенцию) |
| surfaces.primary | #f4f4f4 | #192025 | Фон страницы в светлой теме |
| surfaces.secondary | #ffffff | #283136 | Фон карточек и поднятых поверхностей в светлой теме |
| surfaces.tertiary | #f4f4f4 | #3c454b | ⚠️ Дублирует surfaces.primary — уточнить роль у дизайнеров (кандидат: grey.20) |
| surfaces.inverse.primary | #19aa1e | #12951a | Брендовые поверхности: CTA-блоки, активные карточки |
| surfaces.inverse.button-secondary | #00830c | #dbdbdb | Заливка вторичной кнопки в светлой теме |
| surfaces.inverse.button-primary | #19aa1e | #ffffff | Заливка основной кнопки в светлой теме |
| surfaces.blur | #ffffffb8 | #ffffff1f | Полупрозрачный фон блюр-панелей (стекло) в светлой теме |
| surfaces.contrast.low | #1a1a1a14 | #ffffff1f | Мягкая подложка: отделение карточек от фона |
| surfaces.contrast.mid | #1a1a1a1f | #ffffff3d | Ховер-подложка на светлых поверхностях |
| surfaces.contrast.high | #1a1a1a3d | #ffffff5c | Активная/выделенная подложка на светлом |
| stroke.primary | #1a1a1a5c | #ffffff5c | Основные обводки: карточки, инпуты, разделители на светлом |
| stroke.accent | #19aa1e | #19aa1e | Акцентные обводки: фокус, активные состояния |
| stroke.inverse.accent | #ffffff | #ffffff | Обводки на тёмных и брендовых поверхностях |

## Отступы и радиусы

| Токен | Значение | Применение |
|---|---|---|
| space.4 | 4 | Минимальный зазор: иконка и подпись внутри контрола |
| space.8 | 8 | Зазор между элементами компактных контролов |
| space.12 | 12 | Внутренние отступы малых контролов (кнопки sm, инпуты) |
| space.16 | 16 | Базовый внутренний отступ компонентов (кнопки md, карточки) |
| space.20 | 20 | Отступ между группами компонентов |
| space.24 | 24 | Отступы внутри карточек, между блоками компонента |
| space.32 | 32 | Отступ между самостоятельными блоками внутри секции |
| radius.2 | 2 | Мелкие теги, чипы |
| radius.4 | 4 | Малые контролы: чекбоксы, кнопки sm |
| radius.8 | 8 | Стандартные контролы: кнопки, инпуты |
| radius.12 | 12 | Карточки и модальные окна |
| radius.16 | 16 | Крупные карточки и баннеры |
| radius.20 | 20 | Hero-блоки, контейнеры изображений |
| radius.24 | 24 |  |
| radius.28 | 28 |  |
| radius.32 | 32 |  |
| radius.36 | 36 |  |
| radius.48 | 48 | Декоративные контейнеры, плашки |
| section.mobile.sm | 36 | Mobile: отступ между связными блоками внутри секции |
| section.mobile.md | 64 | Mobile: отступ между секциями страницы |
| section.desktop.sm | 48 | Desktop: отступ между связными блоками внутри секции |
| section.desktop.md | 64 | Desktop: стандартный отступ между секциями |
| section.desktop.lg | 96 | Desktop: отступ между крупными тематическими секциями |
| section.desktop.xl | 120 | Desktop: отступ вокруг hero и финального CTA |

## Типографика (классы в tokens.css)

| Класс | Состав | Применение |
|---|---|---|
| .type-desktop-heading-xl | Suisse Intl, 56/68, 500, tracking -1% | Desktop: главный заголовок страницы/hero, один на страницу |
| .type-desktop-heading-l | Suisse Intl, 44/52, 500, tracking -1% | Desktop: заголовок крупной секции лендинга |
| .type-desktop-heading-m | Suisse Intl, 30/38, 500, tracking -1.5% | Desktop: заголовок средней секции |
| .type-desktop-heading-s | Suisse Intl, 24/32, 500, tracking -0.5% | Desktop: подзаголовок секции, заголовок карточки |
| .type-desktop-text-l | Suisse Intl, 18/28, 400, tracking -1% | Desktop: лид-абзац, вводный текст секции |
| .type-desktop-text-m | Suisse Intl, 16/24, 400, tracking -1% | Desktop: основной текст абзацев и карточек |
| .type-desktop-text-s | Suisse Intl, 14/20, 400, tracking 0% | Desktop: второстепенный текст, списки |
| .type-desktop-text-xs | Suisse Intl, 12/14, 400, tracking 0% | Desktop: подписи, дисклеймеры, футер |
| .type-desktop-accent-l | Suisse Intl, 18/28, 500, tracking -1% | Desktop: акцентный текст, ссылки, крупные подписи кнопок |
| .type-desktop-accent-m | Suisse Intl, 16/24, 500, tracking 0% | Desktop: подписи кнопок и активных элементов |
| .type-desktop-accent-s | Suisse Intl, 14/20, 500, tracking 0% | Desktop: акцентные подписи малого размера |
| .type-desktop-accent-xs | Suisse Intl, 12/14, 500, tracking 0% | Desktop: мелкие акцентные подписи, бейджи |
| .type-mobile-heading-xl | Suisse Intl, 40/44, 500, tracking -2% | Mobile: главный заголовок страницы/hero |
| .type-mobile-heading-l | Suisse Intl, 30/38, 500, tracking -1% | Mobile: заголовок крупной секции |
| .type-mobile-heading-m | Suisse Intl, 24/28, 500, tracking -1% | Mobile: заголовок средней секции |
| .type-mobile-heading-s | Suisse Intl, 20/24, 500, tracking -0.5% | Mobile: подзаголовок, заголовок карточки |
| .type-mobile-text-l | Suisse Intl, 16/24, 400, tracking -1% | Mobile: лид-абзац, вводный текст |
| .type-mobile-text-m | Suisse Intl, 14/20, 400, tracking -1% | Mobile: основной текст абзацев |
| .type-mobile-text-s | Suisse Intl, 12/16, 400, tracking 0% | Mobile: второстепенный текст, списки |
| .type-mobile-text-xs | Suisse Intl, 10/14, 400, tracking 0% | Mobile: подписи, дисклеймеры |
| .type-mobile-accent-l | Suisse Intl, 16/20, 500, tracking -1% | Mobile: акцентный текст, ссылки |
| .type-mobile-accent-m | Suisse Intl, 14/20, 500, tracking -1% | Mobile: подписи кнопок |
| .type-mobile-accent-s | Suisse Intl, 12/16, 500, tracking 0% | Mobile: акцентные подписи малого размера |
| .type-mobile-accent-xs | Suisse Intl, 10/14, 500, tracking 0% | Mobile: мелкие акцентные подписи, бейджи |

## Палитра (справочно, не использовать напрямую)

| Токен | Hex | Примечание |
|---|---|---|
| black.100 | #1a1a1a | Базовый чёрный: текст и тёмные поверхности. Не чисто чёрный — смягчён |
| black.alpha.8 | #1a1a1a14 | black.100 с прозрачностью 8%: лёгкие оверлеи на светлом |
| black.alpha.12 | #1a1a1a1f | black.100 с прозрачностью 12%: ховер-подложки на светлом |
| black.alpha.24 | #1a1a1a3d | black.100 с прозрачностью 24%: разделители, скримы |
| black.alpha.36 | #1a1a1a5c | black.100 с прозрачностью 36%: плотные оверлеи |
| black.alpha.64 | #1a1a1aa3 | black.100 с прозрачностью 64%: модальные скримы |
| white.100 | #ffffff | Белый: фоны светлой темы, текст и иконки на тёмном |
| white.alpha.12 | #ffffff1f | white.100 с прозрачностью 12%: ховер-подложки на тёмном |
| white.alpha.24 | #ffffff3d | white.100 с прозрачностью 24%: разделители на тёмном |
| white.alpha.36 | #ffffff5c | white.100 с прозрачностью 36%: контрастные оверлеи на тёмном |
| white.alpha.64 | #ffffffa3 | white.100 с прозрачностью 64%: приглушённый текст на тёмном |
| white.alpha.72 | #ffffffb8 | white.100 с прозрачностью 72%: вторичный текст на тёмном |
| grey.10 | #f4f4f4 | Светло-серый: фоны подложек и секций в светлой теме |
| grey.20 | #e8e8e8 | Светло-серый: обводки и разделители в светлой теме |
| grey.30 | #dbdbdb | Светло-серый: контрастные обводки в светлой теме |
| grey.90 | #3c454b | Тёмно-серый: самый светлый из тёмной шкалы, обводки на тёмном |
| grey.100 | #283136 | Тёмно-серый: поднятые поверхности в тёмной теме |
| grey.110 | #1e262c | Тёмно-серый: карточки в тёмной теме |
| grey.120 | #192025 | Тёмно-серый: поверхности секций в тёмной теме |
| grey.130 | #141c21 | Тёмно-серый: фон страницы в тёмной теме |
| green.60 | #3bb643 | Брендовый зелёный, светлый шаг: ховер на тёмном фоне |
| green.70 | #19aa1e | Брендовый зелёный 2GIS: основные CTA и активные состояния |
| green.80 | #12951a | Брендовый зелёный, тёмный шаг: нажатие |
| green.90 | #00830c | Брендовый зелёный, самый тёмный: акценты на светлом |
| green.alpha.70-12 | #19aa1e1f | green.70 с прозрачностью 12%: подложки под акцентом |
| green-positive.60 | #71bb56 | Статус success, светлый шаг |
| green-positive.70 | #51a52c | Статус success: позитивные индикаторы, отличать от брендового green |
| green-positive.80 | #3f9015 | Статус success, тёмный шаг |
| green-positive.alpha.70-12 | #5ca2411f | ⚠️ База #5ca241 НЕ совпадает с green-positive.70 (#51a52c) — сверить с дизайнерами |
| red.60 | #f97b76 | Статус error, светлый шаг: тёмная тема |
| red.70 | #f6605c | Статус error: основной |
| red.80 | #ea4142 | Статус error, тёмный шаг: светлая тема |
| red.alpha.80-12 | #f133391f | ⚠️ База #f13339 НЕ совпадает с red.80 (#ea4142) — сверить с дизайнерами |
| yellow.40 | #ffb814 | Статус warning, светлый шаг |
| yellow.50 | #eca907 | Статус warning: основной |
| yellow.60 | #d89b05 | Статус warning, шаг темнее |
| yellow.70 | #c18711 | Статус warning для светлых фонов |
| yellow.80 | #b27e03 | Статус warning, самый тёмный |
| yellow.alpha.70-12 | #c187111f | yellow.70 с прозрачностью 12%: подложки под warning |
| blue.40 | #a9c7ff | Инфо-синий, светлый шаг |
| blue.50 | #87aef6 | Инфо-синий, шаг светлее основного |
| blue.60 | #608fee | Инфо-синий: ссылки и подсказки на тёмном |
| blue.70 | #446ae4 | Инфо-синий: основной (ссылки, инфо-состояния) |
| blue.80 | #2e52de | Инфо-синий, тёмный шаг |
| blue.90 | #164ec1 | Инфо-синий, самый тёмный |
| blue.alpha.70-12 | #3d65f31f | ⚠️ База #3d65f3 НЕ совпадает с blue.70 (#446ae4) — сверить с дизайнерами |
