<template>
  <div class="mainlk">
    <div class="mainlk__first-section">
      <div class="mainlk__first-section-container">
        <h1 class="mainlk__title mainlk__title-first">О МЕРОПРИЯТИИ</h1>
        <h3 class="mainlk__text mainlk__text-first">Более подробную информацию о всех мероприятиях «Дней робототехники и
          инновационных образовательных технологий» вы можете скачать ниже.</h3>
        <div class="mainlk__button-container mainlk__button-container-first">
          <button class="mainlk__button">Программа</button>
          <div class="mainlk__button-figure"></div>
        </div>
        <div class="mainlk__button-link">
          <span class="mainlk__button-text">Сертификат</span>
          <div class="mainlk__button-frame"></div>
        </div>
      </div>
      <picture class="mainlk__picture">
        <source srcset="" media="(max-width: 744px)">
        <source srcset="" media="(max-width: 360px)">

        <img class="mainlk__image" src="../assets/img/lk-robot-desktop.svg" alt="" />
      </picture>
    </div>

    <div class="mainlk__second-section">
      <div class="mainlk__second-figure"></div>
      <div class="mainlk__second-section-container">
        <h1 class="mainlk__title mainlk__title-second">СПИСОК РЕКОМЕНДУЕМЫХ УЧЕБНЫХ ЗАВЕДЕНИЙ</h1>
        <h3 class="mainlk__text mainlk__text-second">Персонализированные рекомендации по ведущим
          учебным заведениям. Нажмите кнопку ниже, чтобы скачать свой список!</h3>
        <div class="mainlk__button-container mainlk__button-container-second">
          <button class="mainlk__button mainlk__button-second">Скачать</button>
          <div class="mainlk__button-figure"></div>
        </div>
      </div>
      <div class="mainlk__second-vector"></div>
    </div>

    <div class="mainlk__third-section">
      <div class="mainlk__third-section-container">
        <h1 class="mainlk__title-third">Материалы</h1>
        <h3 class="mainlk__text mainlk__text-third">В этом разделе мы рассказываем о достижениях в области
          робототехники, мехатроники, виртуальной и
          дополненной реальности. Узнайте, как эти инновации изменяют наш мир и открывают новые возможности в
          повседневной жизни.</h3>
        <button class="mainlk__button-third">Перейти</button>
      </div>
    </div>

    <div class="mainlk__fourth-section">
      <div class="mainlk__fourth-title-container">
        <h1 class="mainlk__title mainlk__title-fourth">УЧЕБНЫЕ ЗАВЕДЕНИЯ</h1>
        <div class="mainlk__horizontal-figure"></div>
      </div>

      <ul class="mainlk__card-container">
        <li class="mainlk__card mainlk__card-1">
          <h2 class="mainlk__card-title">РОБОТОТЕХНИКА</h2>
          <span class="mainlk__card-text">Список учебных заведений в России с направлением «Робототехника»</span>
          <div class="mainlk__card-button-container">
            <button class="mainlk__card-button">Скачать</button>
            <div class="mainlk__card-button-figure"></div>
          </div>
        </li>
        <li class="mainlk__card mainlk__card-2">
          <h2 class="mainlk__card-title">VR</h2>
          <span class="mainlk__card-text">Список учебных заведений в России с направлением «Виртуальная реальность»</span>
          <div class="mainlk__card-button-container">
            <button class="mainlk__card-button">Скачать</button>
            <div class="mainlk__card-button-figure"></div>
          </div>
        </li>
        <li class="mainlk__card mainlk__card-3">
          <h2 class="mainlk__card-title">AR</h2>
          <span class="mainlk__card-text">Список учебных заведений в России с направлением «Дополненная реальность»</span>
          <div class="mainlk__card-button-container">
            <button class="mainlk__card-button">Скачать</button>
            <div class="mainlk__card-button-figure"></div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainLk'
}
</script>

<style>
div,
h1,
h2,
h3,
img,
span,
a,
button {
  margin: 0;
  padding: 0;
}

@font-face {
  src: url(../assets/fonts/Inter-Medium.woff) format('woff');
  font-family: 'Inter';
  font-weight: 500;
}

@font-face {
  src: url(../assets/fonts/Inter-Regular.woff) format('woff');
  font-family: 'Inter';
  font-weight: 400;
}

@font-face {
  src: url(../assets/fonts/Wadik.woff) format('woff');
  font-family: 'Wadik';
  font-weight: 700;
}

.mainlk {
  background: #0E0214;
  background-image: url('../assets/img/lk-background-lines-desktop.svg');
  background-repeat: no-repeat;
  background-size: 1078px 1331px;
  background-position: bottom right;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter, sans-serif;
}

.mainlk__first-section {
  width: 100%;
  height: 800px;
  background-image: url('../assets/img/lk-section-banner-desktop.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 204px;
  box-sizing: border-box;
}

.mainlk__first-section-container {
  display: flex;
  flex-direction: column;
  max-width: 670px;
  box-sizing: border-box;
}

.mainlk__title {
  font-family: Wadik;
  font-weight: 700;
  font-size: 48px;
  line-height: 53.09px;
  background: linear-gradient(50deg, #FFAA00, #AA00FF 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mainlk__title-first {
  margin-bottom: 40px;
}

.mainlk__text {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

}

.mainlk__text-first {
  margin-bottom: 64px;
}

.mainlk__button-container {
  max-width: 440px;
  height: 82px;
  position: relative;
}

.mainlk__button-container-first {
  margin-bottom: 20px;
}

.mainlk__button {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
  width: 100%;
  height: 75px;
  background-color: #FFAA00;
  border: none;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 500;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}

.mainlk__button-figure {
  background-image: url('../assets/img/button-figure.svg');
  width: 120px;
  height: 14px;
  position: absolute;
  left: 32px;
  bottom: 1px;
}

.mainlk__button-link {
  max-width: 440px;
  height: 72px;
  background: transparent;
  border: 2px solid #FFAA00;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainlk__button-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 24.2px;
  margin-right: 10px;
}

.mainlk__button-frame {
  background-image: url('../assets/img/button-frame.svg');
  width: 24px;
  height: 24px;
}

.mainlk__picture {
  margin-left: 20px;
}

.mainlk__second-section {
  display: flex;
  max-width: 1440px;
}

.mainlk__second-section-container {
  display: flex;
  flex-direction: column;
  max-width: 791px;
}

.mainlk__title-second {
  margin-bottom: 40px;
}

.mainlk__text-second {
  margin-bottom: 64px;
}

.mainlk__second-figure {
  background-image: url('../assets/img/lk-orange-vector-desktop.svg');
  width: 28px;
  height: 388px;
  margin-right: 87px;
}

.mainlk__second-vector {
  background-image: url('../assets/img/lk-vector-desktop.svg');
  width: 440px;
  height: 440px;
  margin-left: 20px;
}

.mainlk__third-section {
  width: 1360px;
  height: 464px;
  background-image: url('../assets/img/lk-third-section-backgtound-desktop.png');
  background-size: cover;
  margin-bottom: 120px;
  margin-top: 120px;
}

.mainlk__third-section-container {
  display: flex;
  flex-direction: column;
  width: 670px;
  margin-left: 115px;
  margin-top: 101px;
}

.mainlk__title-third {
  font-family: Wadik;
  color: white;
  font-weight: 700;
  font-size: 48px;
  line-height: 53.09px;
  margin-bottom: 20px;
}

.mainlk__text-third {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 24px;
}

.mainlk__button-third {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
  background-color: #AA00FF;
  width: 210px;
  height: 52px;
  border: none;
  color: white;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
}

.mainlk__fourth-section {
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
}

.mainlk__fourth-title-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
}

.mainlk__horizontal-figure {
  background-image: url('../assets/img/purple-horizontal-vector.svg');
  width: 293px;
  height: 28px;
  align-self: flex-end;
}

.mainlk__card-container {
  display: flex;
  padding: 0;
  gap: 20px;
}

.mainlk__card {
  padding: 0;
  background: #FFAA00;
  list-style-type: none;
  border-radius: 6px;
  clip-path: polygon(100% 100%, 100% 0, 100% 0, 8% 0, -65% 100%);
  width: 440px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px 40px;
  
}

.mainlk__card-1 {
  background-image: url('../assets/img/card-background-1.svg');
  background-repeat: no-repeat;
}

.mainlk__card-title {
  font-family: Wadik;
  font-weight: 700;
  font-size: 24px;
  line-height: 26.54px;
  margin-bottom: 20px;
}

.mainlk__card-text {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 44px;
}

.mainlk__card-button-container {
  max-width: 360px;
  height: 77px;
  position: relative;
}

.mainlk__card-button {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
  width: 100%;
  height: 72px;
  background-color: transparent;
  background-image: url('../assets/img/black-button-desktop.svg');
  background-repeat: no-repeat;
  border: none;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 500;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}

.mainlk__card-button-figure {
  background-image: url('../assets/img/black-button-frame.svg');
  width: 120px;
  height: 14px;
  position: absolute;
  left: 32px;
  bottom: 0px;
}

@media screen and (max-width: 1370px) {

}

</style>