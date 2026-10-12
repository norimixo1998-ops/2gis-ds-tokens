# Hero: Split (текст + визуал)

## Когда использовать
Главный экран лендинга продукта. Текст слева, визуал справа.

## Структура
<section class="hero hero-split">
  <div class="container">
    <div class="hero-content" style="max-width: 622px">
      <h1 class="display-xl">{headline}</h1>
      <p class="body-md ink-secondary">{subheadline}</p>
      <div class="cta-group">
        <button class="button-primary">{primary_cta}</button>
        <button class="button-secondary">{secondary_cta}</button>
      </div>
    </div>
    <div class="hero-visual">
      {visual}
    </div>
  </div>
</section>

## Props
- headline: строка, 1-2 строки (до 60 символов)
- subheadline: строка, 2-3 строки (до 180 символов)
- primary_cta: текст зелёной кнопки (до 24 символов)
- secondary_cta: текст серой кнопки (до 24 символов)
- visual_type: "illustration" | "screenshot" | "photo" | "video" | "3d" | "none"
- visual_src: путь к файлу (например, "assets/illustrations/geopotok-3d.webp")
- visual_alt: alt-текст для доступности
- visual_size: "large" (по умолчанию) | "medium" | "small"

## Стили
- Фон секции: canvas (#192025)
- Заголовок: display-xl (56px / 68px / 500 / -1%), цвет #FFFFFF
- Подзаголовок: body-md (16px / 24px / 400 / -1%), цвет #FFFFFFA3
- Ширина текстового блока: max-width 622px
- Кнопки: button-primary + button-secondary, gap 16px
- Padding секции: 96px вертикально (desktop), 64px (mobile)
- Контейнер: 1168px, center
- Визуал: справа, выравнивание по центру вертикали текста

## Визуал — правила
- Если visual_type = "illustration" или "photo": использовать <img>
- Если visual_type = "video": использовать <video autoplay muted loop>
- Если visual_type = "3d": использовать <model-viewer> или Three.js
- Если visual_type = "none": hero становится centered (текст по центру)
- Максимальная ширина визуала: 50% контейнера (584px)
- На мобильном: визуал под текстом, ширина 80% экрана

## Мобильная версия
- Заголовок: 40px / 44px / -2%
- Layout: колонка (текст сверху, визуал снизу)
- Кнопки: full-width, stack вертикально
- Визуал: margin-top 32px

## Правила
- Только ОДИН primary CTA (зелёный)
- Secondary CTA всегда слева от primary (или ниже на мобильном)
- Визуал не должен перекрывать текст
- Alt-текст обязателен для доступности
- Все ассеты брать только из папки assets/