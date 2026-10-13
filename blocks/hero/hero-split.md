/* Hero секция */
.hero-split {
  background: #192025;
  padding: 96px 0;
}

/* Контейнер — должен совпадать с хедером */
.hero-split .container {
  max-width: 1168px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* Текстовый блок */
.hero-content {
  max-width: 622px;
  flex: 1;
}

/* Заголовок */
.hero-content .display-xl {
  font: 500 56px/68px "Suisse Intl";
  letter-spacing: -1%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Подзаголовок */
.hero-content .body-md {
  font: 400 16px/24px "Suisse Intl";
  letter-spacing: -1%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0 0 32px 0;
}

/* Кнопки */
.hero-content .cta-group {
  display: flex;
  gap: 16px;
}

/* Визуал */
.hero-visual {
  flex: 1;
  max-width: 584px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-visual img {
  max-width: 100%;
  height: auto;
}