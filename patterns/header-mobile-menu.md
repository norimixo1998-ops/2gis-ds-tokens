
---

# Файл 2: `patterns/header-mobile-menu.md`

```md
# Pattern: Header — Mobile Menu (раскрытое)

**Статус:** DRAFT. Факты собраны из Figma-экспорта (dark) и текстовых стилей.
Три факта вне шкалы ДС помечены как вопросы дизайнерам (см. раздел «Открытые вопросы»).

**Скоуп:** полноэкранное мобильное меню, открывающееся по тапу на бургер.
**Триггер:** бургер из `patterns/header.md` (класс `ds-burger`).
**ВНЕ скоупа:** desktop-навигация, модалки поверх меню.

## Ассеты

Промо-иллюстрация «Берёмся за сложные нестандартные задачи» — отдельный ассет
(в экспорте — композиция из декоративных элементов и зелёного логотипа `#44B43C`,
см. вопрос №3). Хранить в `assets/header-promo.svg`.

## Геометрия

- Оверлей: полноэкранный fixed, фон `surfaces.secondary` (#283136 dark / #FFFFFF light).
- Padding: 24 сверху / 48 снизу / 20 по бокам.
- Зазор между блоками: 16.
- Строка заголовка секции: высота 48, padding 8 вертикально.
- Пункты 1 уровня: padding-inline 16.
- Пункты 2 уровня: padding-inline 28 (отступ вложенности).
- Промо-карточка: padding 16, radius **17.77** (⚠️ вопрос №2).
- Зазор между секциями в правой колонке: 28; внутри групп секций 46.

## Типографические роли

| Элемент | Стиль | Роль ДС |
|---|---|---|
| Заголовок секции («Все продукты», «Бизнесу» и т.д.) | 20/24, weight 500 | heading-s, text-and-icon.primary |
| Пункт 1 уровня (Базы данных, 2ГИС Про, On-Premise, API и SDK, 2ГИС Ситискан) | 16/24, weight 400 | text-l, text-and-icon.primary |
| Пункт 2 уровня (Мониторинг, Логистика, API Карт…) | 14/20, weight 400 | text-m, text-and-icon.secondary |
| Инфо-ссылки (О данных, Кейсы) | 16/24, weight 400 | text-l, text-and-icon.secondary |
| Заголовок промо-карточки («Берёмся за сложные нестандартные задачи») | **16/20, weight 500** | ⚠️ вопрос №1 (вне шкалы) |
| CTA промо-карточки («Оставить заявку») | 16/24, weight 500 | button-md |

Гарнитура — **только Suisse Intl**.

## Цветовые роли

| Элемент | Light | Dark |
|---|---|---|
| Фон меню | `surfaces.secondary` `#FFFFFF` | `surfaces.secondary` `#283136` |
| Заголовки секций, пункты 1 уровня | `text-and-icon.primary` `#1A1A1A` | `text-and-icon.primary` `#FFFFFF` |
| Пункты 2 уровня, инфо-ссылки | `text-and-icon.secondary` `#1A1A1AA3` | `text-and-icon.secondary` `#FFFFFFA3` |
| Промо-карточка (фон) | ⚠️ вопрос №4 | `surfaces.tertiary` `#3C454B` + linear-gradient |
| Промо-карточка (текст) | `text-and-icon.primary` | `text-and-icon.primary` |
| Промо-карточка (CTA фон) | ⚠️ вопрос №4 | transparent, текст белый |
| Декоративные точки промо | ⚠️ вопрос №3 | `#44B43C` с alpha 0.60 / 0.30 |

## Эталонная разметка (скелет)

```html
<div class="ds-mobile-menu" role="dialog" aria-label="Меню">
  <div class="ds-mobile-menu__close">
    <!-- кнопка закрытия (крестик), стиль иконки как ds-burger -->
  </div>

  <section class="ds-mobile-menu__products">
    <h2 class="ds-mobile-menu__section-title">Все продукты</h2>
    <ul class="ds-mobile-menu__list">
      <li><a href="/db">Базы данных</a></li>
      <li><a href="/vector-maps">Векторные карты</a></li>
      <li><a href="/pro">2ГИС Про</a></li>
      <li>
        <a href="/geopotok">2ГИС ГеоПоток</a>
        <ul class="ds-mobile-menu__sublist">
          <li><a href="/geopotok/monitoring">Мониторинг</a></li>
          <li><a href="/geopotok/logistics">Логистика</a></li>
        </ul>
      </li>
      <li>
        <a href="/api">API и SDK</a>
        <ul class="ds-mobile-menu__sublist">
          <li><a href="/api/maps">API Карт</a></li>
          <li><a href="/api/search">API Поиска</a></li>
          <li><a href="/api/nav">API Навигации</a></li>
          <li><a href="/sdk/mobile">Mobile SDK</a></li>
          <li><a href="/sdk/platform">Менеджер Платформы</a></li>
        </ul>
      </li>
      <li><a href="/on-premise">On-Premise</a></li>
      <li><a href="/cityscan">2ГИС Ситискан</a></li>
    </ul>
  </section>

  <aside class="ds-mobile-menu__promo">
    <img src="assets/header-promo.svg" alt="" class="ds-mobile-menu__promo-art">
    <h3 class="ds-mobile-menu__promo-title">Берёмся за сложные нестандартные задачи</h3>
    <a href="/contact" class="ds-btn ds-btn--ghost">
      Оставить заявку
      <svg class="ds-icon" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg>
    </a>
  </aside>

  <div class="ds-mobile-menu__sections">
    <section>
      <h2 class="ds-mobile-menu__section-title">Бизнесу</h2>
      <h2 class="ds-mobile-menu__section-title">Госсектору</h2>
      <h2 class="ds-mobile-menu__section-title">Партнерам</h2>
    </section>
    <section>
      <a href="/about-data">О данных</a>
      <a href="/cases">Кейсы</a>
    </section>
  </div>
</div>