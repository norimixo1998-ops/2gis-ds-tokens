# Pattern: Header (свёрнутый)

**Скоуп:** desktop (≥768) + mobile (<768) свёрнутый хедер в light и dark.
**ВНЕ скоупа:** раскрытое мобильное меню — отдельный паттерн `patterns/header-mobile-menu.md`.
**Агенту:** копировать разметку и стили как есть; менять только контент ссылок и тексты кнопок.
Бургер — кнопка-триггер без реализации содержимого. Не изобретать дропдауны и раскрытия.

## Ассеты

Два варианта логотипа в `assets/`:
- `assets/logo-light.svg` (208×78) — светлая тема, словесная часть `#1A1A1A`.
- `assets/logo-dark.svg` (123×42) — тёмная тема, словесная часть белая.

**Запрещено:** перекрашивать, масштабировать вне заданных высот, заменять текстом, менять порядок элементов. Переключение темы — заменой файла через `[data-theme]`.

## Геометрия

### Desktop (≥768)
- Контейнер: 1200px, gutter 16px (контент 1168px).
- **Строка 1** (высота 56, space-between, без фона):
  - Лого-зона: высота 54.
  - Правая группа: зазор 32 между подгруппами.
  - Подгруппа «поиск + язык»: зазор 8.
    - Поиск: высота 48, padding 12/8, radius 12, ширина поля 156, иконка 24.
    - Язык RU: высота 40, padding 8, иконки 24, зазор 4 между буквами и шевроном.
  - Подгруппа «кнопки»: зазор 12.
    - Secondary: высота 48, padding 12/28, radius 12.
    - Primary: высота 48, padding 12/16, min-width 190, radius 12.
- **Строка 2** — nav-панель: отступ сверху 24, высота СТРОГО 80px
  (не через padding: через `height` + `align-items: center`), radius 16,
  padding-inline 28, фон `surfaces.secondary`.
  - «Все продукты» + шеврон (слева).
  - Первичная навигация (Бизнесу / Госсектору / Партнерам), зазор 32.
  - Вторичная навигация (О данных / Кейсы / Контакты), зазор 24, справа.

### Mobile (<768)
- Строка: высота 64, padding 12/16, фон `surfaces.secondary`.
- Лого высота 40.
- Справа: зазор 12 — иконка поиска 32 и бургер 32.
- Кнопки CTA, язык и nav-панель скрыты; их контент доступен через бургер (см. mobile-menu).
- Фон хедера продолжается на зону статус-бара.

## Типографические роли

| Элемент | Стиль | Токен |
|---|---|---|
| Навигация, «Все продукты» | 16/24, weight 500 | text-l·500 |
| Кнопки (primary/secondary) | 16/24, weight 500 | button-md |
| Язык RU | 16/24, weight 400 | text-l·400 |
| Плейсхолдер поиска | 14/20, weight 400 | text-m·400 |

Гарнитура — **только Suisse Intl**. Фолбэк-стеки не использовать.

## Цветовые роли

| Элемент | Light | Dark |
|---|---|---|
| Фон страницы под хедером | `surfaces.primary` `#F4F4F4` | `surfaces.primary` `#192025` |
| Nav-панель, mobile-строка | `surfaces.secondary` `#FFFFFF` | `surfaces.secondary` `#283136` |
| Поиск (фон) | `surfaces.blur` `#FFFFFFB8` | `surfaces.blur` `#FFFFFF1F` |
| Secondary-кнопка (фон) | `surfaces.contrast.low` `#1A1A1A14` | `surfaces.contrast.low` `#FFFFFF1F` |
| Primary-кнопка (фон) | `surfaces.inverse.primary` `#19AA1E` | `surfaces.inverse.primary` `#12951A` |
| Primary-кнопка (текст) | `text-and-icon.on-brand` `#FFFFFF` | `text-and-icon.on-brand` `#FFFFFF` |
| Основной текст / иконки | `text-and-icon.primary` `#1A1A1A` | `text-and-icon.primary` `#FFFFFF` |
| Навигация, плейсхолдер, RU | `text-and-icon.secondary` `#1A1A1AA3` | `text-and-icon.secondary` `#FFFFFFA3` |
| Обводка nav-панели (light) | `stroke.primary` `#1A1A1A5C` | — (в dark нет обводки) |

## Эталонная разметка

```html
<header class="ds-header" role="banner">
  <div class="ds-header__top">
    <a class="ds-logo" href="/" aria-label="2ГИС">
      <img class="ds-logo__light" src="assets/logo-light.svg" alt="2ГИС" width="146" height="54">
      <img class="ds-logo__dark"   src="assets/logo-dark.svg"  alt="2ГИС" width="123" height="42">
    </a>

    <div class="ds-header__actions">
      <div class="ds-header__group">
        <label class="ds-search">
          <svg class="ds-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" stroke-width="2"/>
          </svg>
          <input type="search" placeholder="Поиск">
        </label>
        <button class="ds-lang" type="button" aria-label="Язык">
          RU
          <svg class="ds-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
      <div class="ds-header__group ds-header__group--cta">
        <button class="ds-btn ds-btn--secondary" type="button">Получить консультацию</button>
        <button class="ds-btn ds-btn--primary"   type="button">Оставить заявку</button>
      </div>
    </div>

    <button class="ds-burger" type="button" aria-label="Открыть меню">
      <svg class="ds-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <nav class="ds-navpanel" aria-label="Основная навигация">
    <button class="ds-navpanel__products" type="button">
      Все продукты
      <svg class="ds-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>
    <ul class="ds-navpanel__primary">
      <li><a href="/business">Бизнесу</a></li>
      <li><a href="/gov">Госсектору</a></li>
      <li><a href="/partners">Партнерам</a></li>
    </ul>
    <ul class="ds-navpanel__secondary">
      <li><a href="/about-data">О данных</a></li>
      <li><a href="/cases">Кейсы</a></li>
      <li><a href="/contacts">Контакты</a></li>
    </ul>
  </nav>
</header>
```

## Эталонные стили

Все значения — через `var(--…)` из `dist/tokens.css`. Никаких hex, никаких темовых условий кроме переключения лого.

```css
.ds-header { background: transparent; }
.ds-header__top, .ds-navpanel {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--space-16);
  width: 100%;
  box-sizing: border-box;
}

/* Строка 1 */
.ds-header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
}
.ds-logo__light, .ds-logo__dark { display: block; height: 54px; width: auto; }
.ds-logo__dark  { display: none; }
[data-theme="dark"] .ds-logo__dark  { display: block; }
[data-theme="dark"] .ds-logo__light { display: none; }

.ds-header__actions { display: flex; align-items: center; gap: var(--space-32); }
.ds-header__group   { display: flex; align-items: center; gap: var(--space-8); }
.ds-header__group--cta { gap: var(--space-12); }

.ds-search {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-12) var(--space-8);
  background: var(--surfaces-blur);
  border-radius: var(--radius-12);
  color: var(--text-and-icon-secondary);
}
.ds-search input {
  width: 156px; border: 0; background: transparent; outline: 0;
  color: var(--text-and-icon-primary);
  font: 400 14px/20px "Suisse Intl";
}
.ds-search input::placeholder { color: var(--text-and-icon-secondary); }

.ds-lang {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-8); border: 0; background: transparent;
  color: var(--text-and-icon-primary);
  font: 400 16px/24px "Suisse Intl";
  cursor: pointer;
}

.ds-btn {
  height: 48px; border: 0; border-radius: var(--radius-12);
  cursor: pointer; padding: var(--space-12) var(--space-28);
  font: 500 16px/24px "Suisse Intl";
}
.ds-btn--secondary {
  background: var(--surfaces-contrast-low);
  color: var(--text-and-icon-primary);
}
.ds-btn--primary {
  background: var(--surfaces-inverse-primary);
  color: var(--text-and-icon-on-brand);
  min-width: 190px;
  padding-inline: var(--space-16);
}

/* Строка 2: nav-панель. Высота СТРОГО 80px, центрирование через align-items,
   НЕ заменять height на padding. */
.ds-navpanel {
  margin-top: var(--space-24);
  height: 80px;
  align-items: center;
  border-radius: var(--radius-16);
  background: var(--surfaces-secondary);
  display: flex;
  gap: var(--space-32);
  padding-inline: 28px;
}
[data-theme="light"] .ds-navpanel {
  border: 1px solid var(--stroke-primary);
}
.ds-navpanel__products {
  display: flex; align-items: center; gap: var(--space-8);
  border: 0; background: transparent; cursor: pointer;
  color: var(--text-and-icon-primary);
  font: 500 16px/24px "Suisse Intl";
}
.ds-navpanel__primary, .ds-navpanel__secondary {
  display: flex; list-style: none; margin: 0; padding: 0;
}
.ds-navpanel__primary  { gap: var(--space-32); }
.ds-navpanel__secondary { gap: var(--space-24); margin-left: auto; }
.ds-navpanel a {
  text-decoration: none;
  color: var(--text-and-icon-secondary);
  font: 500 16px/24px "Suisse Intl";
}
.ds-navpanel a:hover,
.ds-navpanel__products:hover { color: var(--text-and-icon-primary); }

/* Бургер: виден только на mobile */
.ds-burger { display: none; }
.ds-icon { width: 24px; height: 24px; }

/* Mobile */
@media (max-width: 767px) {
  .ds-header__top {
    height: 64px;
    padding-inline: var(--space-16);
    background: var(--surfaces-secondary);
  }
  .ds-logo__light, .ds-logo__dark { height: 40px; }
  .ds-header__actions, .ds-navpanel { display: none; }
  .ds-burger {
    display: flex;
    align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border: 0; background: transparent;
    color: var(--text-and-icon-primary);
    cursor: pointer;
  }
}
```

## Do / Don't

### Do
- Копировать разметку и стили целиком; менять только контент (`<a href="…">`, тексты кнопок).
- Темы переключаются автоматически через `[data-theme]` на корне приложения.
- Использовать только переменные `var(--…)` из `dist/tokens.css`.
- Гарнитура — строго `"Suisse Intl"`.

### Don't
- Не добавлять тени, pill-радиусы, свои кегли и цвета.
- Не реализовывать содержимое мобильного меню — оно в `patterns/header-mobile-menu.md`.
- Не перекрашивать лого: темы меняются файлом.
- Не делать nav-панель sticky без отдельного решения.
- Не заменять фиксированную высоту nav-панели 80px на padding — высота и вертикальное центрирование обязательны.

## Допущения (сверить с дизайнерами)

1. **Light: nav-панель с обводкой** `stroke.primary` 1px. В dark-экспорте обводки нет; для light добавлена для читаемости на белом фоне.
2. **Sticky-поведение** не описано — считать статичным до отдельного решения.
3. **Light: blur на сером фоне** (`#FFFFFFB8`) даёт еле заметную подложку; если визуально слабо — заменить на `surfaces.contrast.low` с непрозрачным серым.
4. **Mobile: статус-бар** в экспорте имел фон `#283136`. Для light — фон статус-бара должен быть `#FFFFFF`, чтобы хедер сливался.