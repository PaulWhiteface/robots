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
        <source srcset="../assets/img/lk-robot-tablet.svg" media="(max-width: 1370px)">
        <source srcset="../assets/img/lk-robot-phone.svg" media="(max-width: 729px)">

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
          <span class="mainlk__card-text">Список учебных заведений в России с направлением «Виртуальная
            реальность»</span>
          <div class="mainlk__card-button-container">
            <button class="mainlk__card-button">Скачать</button>
            <div class="mainlk__card-button-figure"></div>
          </div>
        </li>
        <li class="mainlk__card mainlk__card-3">
          <h2 class="mainlk__card-title">AR</h2>
          <span class="mainlk__card-text">Список учебных заведений в России с направлением «Дополненная
            реальность»</span>
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
  background-position: top right;
}

.mainlk__card-2 {
  background-image: url('../assets/img/card-background-2.svg');
  background-repeat: no-repeat;
  background-position: top right;
}

.mainlk__card-3 {
  background-image: url('../assets/img/card-background-3.svg');
  background-repeat: no-repeat;
  background-position: top right;
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
  .mainlk {
    background-image: url('../assets/img/lk-background-lines-tablet.svg');
    background-size: 744px 963px;
    background-position: center;
  }

  .mainlk__first-section {
    height: 451px;
    background-image: url('../assets/img/lk-section-banner-tablet.png');
    justify-content: space-between;
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 131px;
  }

  .mainlk__first-section-container {
    max-width: 322px;
  }

  .mainlk__title {
    font-size: 24px;
    line-height: 26.54px;
  }

  .mainlk__title-first {
    margin-bottom: 32px;
  }

  .mainlk__text {
    font-size: 16px;
    line-height: 20px;

  }

  .mainlk__text-first {
    margin-bottom: 44px;
  }

  .mainlk__button-container {
    max-width: 322px;
    height: 58px;
  }

  .mainlk__button {
    height: 51px;
    font-size: 16px;
    line-height: 19.36px;
    font-weight: 500;
  }

  .mainlk__button-figure {
    left: 32px;
    bottom: 1px;
  }

  .mainlk__button-link {
    max-width: 322px;
    height: 58px;
  }

  .mainlk__button-text {
    font-size: 16px;
    line-height: 19.36px;
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
    padding-left: 200px;
    padding-right: 200px;
    box-sizing: border-box;
    margin-top: 80px;
    width: 100%;
    justify-content: space-between;
  }

  .mainlk__second-section-container {
    max-width: 323px;
  }

  .mainlk__title-second {
    margin-bottom: 20px;
  }

  .mainlk__text-second {
    margin-bottom: 60px;
  }

  .mainlk__second-figure {
    background-image: url('../assets/img/lk-orange-vector-tablet.svg');
    background-repeat: no-repeat;
    width: 21px;
    height: 256px;
    padding-right: 65px;
    margin: 0;
  }

  .mainlk__second-vector {
    background-image: url('../assets/img/lk-vector-tablet.svg');
    background-repeat: no-repeat;
    width: 235px;
    height: 233px;
    padding-left: 19px;
    margin: 0;
  }

  .mainlk__third-section {
    width: 664px;
    height: 363px;
    background-image: url('../assets/img/lk-third-section-background-tablet.png');
    margin-bottom: 80px;
    margin-top: 80px;
  }

  .mainlk__third-section-container {
    width: 350.05px;
    margin-left: 87px;
    margin-top: 67px;
  }

  .mainlk__title-third {
    font-size: 24px;
    line-height: 26.54px;
  }

  .mainlk__text-third {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 20px;
  }

  .mainlk__button-third {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);
    width: 167px;
    height: 52px;
    font-size: 16px;
    line-height: 19.36px;
  }

  .mainlk__fourth-section {
    width: 100%;
    box-sizing: border-box;
    padding-left: 200px;
    padding-right: 200px;
    margin-bottom: 80px;
  }

  .mainlk__fourth-title-container {
    margin-bottom: 44px;
    width: 100%;
  }

  .mainlk__horizontal-figure {
    background-image: url('../assets/img/purple-horizontal-vector-tablet.svg');
    width: 210px;
    height: 20px;
  }

  .mainlk__card-container {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .mainlk__card {
    width: 100%;
    clip-path: polygon(100% 100%, 100% 0, 100% 0, 4% 0, -25% 100%);
    max-height: 222px;
    padding: 40px 0 17px 40px;
    box-sizing: border-box;
  }

  .mainlk__card-1 {
    background-position: right;
  }

  .mainlk__card-2 {
    background-image: url('../assets/img/card-background-2.svg');
    background-position: right;
  }

  .mainlk__card-3 {
    background-image: url('../assets/img/card-background-3.svg');
    background-position: right;
  }

  .mainlk__card-title {
    font-size: 14px;
    line-height: 15.48px;
    max-width: 360px;
  }

  .mainlk__card-text {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
    max-width: 360px;
  }

  .mainlk__card-button-container {
    max-width: 360px;
    height: 58px;
  }

  .mainlk__card-button {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
    width: 100%;
    height: 53px;
    background-color: transparent;
    background-image: url('../assets/img/black-button-tablet.svg');
    font-size: 16px;
    line-height: 19.36px;
  }

  .mainlk__card-button-figure {
    background-image: url('../assets/img/black-button-frame.svg');
    width: 120px;
    height: 14px;
    position: absolute;
    left: 32px;
    bottom: 0px;
  }
}

@media screen and (max-width: 1049px) {
  .mainlk__first-section {
    padding-left: 100px;
    padding-right: 100px;
  }

  .mainlk__second-section {
    padding-left: 100px;
    padding-right: 100px;
  }

  .mainlk__fourth-section {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (max-width: 849px) {
  .mainlk__first-section {
    padding-left: 40px;
    padding-right: 40px;
  }

  .mainlk__second-section {
    padding-left: 40px;
    padding-right: 40px;
  }

  .mainlk__fourth-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media screen and (max-width: 729px) {

  .mainlk__first-section {
    height: 766px;
    background-image: url('../assets/img/lk-section-banner-phone.png');
    padding-top: 104px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    align-items: center;
  }

  .mainlk__first-section-container {
    max-width: 320px;
  }

  .mainlk__title {
    font-size: 24px;
    line-height: 26.54px;
  }

  .mainlk__title-first {
    margin-bottom: 20px;
  }

  .mainlk__text {
    font-size: 16px;
    line-height: 20px;

  }

  .mainlk__text-first {
    margin-bottom: 40px;
  }

  .mainlk__button-container {
    max-width: 320px;
    height: 54px;
  }

  .mainlk__button {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
    height: 47px;
    font-size: 16px;
    line-height: 19.36px;
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
    max-width: 320px;
    height: 43px;
  }

  .mainlk__button-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    margin-right: 0;
  }

  .mainlk__button-frame {
    display: none;
  }

  .mainlk__picture {
    margin-left: 0;
    margin-top: 40px;
    width: 320px;
    height: 298px;
  }

  .mainlk__second-section {
    max-width: 320px;
    padding: 0;
  }

  .mainlk__second-section-container {
    max-width: 320px;
  }

  .mainlk__text-second {
    margin-bottom: 40px;
  }

  .mainlk__second-figure {
    display: none;
  }

  .mainlk__second-vector {
    display: none;
  }

  .mainlk__third-section {
    width: 320px;
    height: 430px;
    background-image: url('../assets/img/lk-third-section-background-phone.png');
    margin-bottom: 80px;
    margin-top: 80px;
  }

  .mainlk__third-section-container {
    width: 280px;
    margin-left: 20px;
    margin-top: 60px;
  }

  .mainlk__title-third {
    font-size: 24px;
    line-height: 26.54px;
    white-space: nowrap;
  }

  .mainlk__text-third {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 40px;
  }

  .mainlk__button-third {
    width: 100%;
    height: 43px;
    font-size: 16px;
    line-height: 19.36px;
  }

  .mainlk__fourth-section {
    max-width: 320px;
    margin-bottom: 80px;
    padding: 0;
  }

  .mainlk__fourth-title-container {
    margin-bottom: 40px;
  }

  .mainlk__horizontal-figure {
    display: none;
  }

  .mainlk__card-container {
    display: flex;
    padding: 0;
    gap: 20px;
  }

  .mainlk__card {
    padding: 0;
    clip-path: polygon(100% 100%, 100% 0, 100% 0, 8% 0, -65% 100%);
    width: 320px;
    max-height: 240px;
    padding: 40px 20px 20px 20px;

  }

  .mainlk__card-1 {
    background-image: url('../assets/img/card-background-1.svg');
    background-repeat: no-repeat;
    background-size: 150px 164px;
    background-position: top right;
  }

  .mainlk__card-2 {
    background-image: url('../assets/img/card-background-2.svg');
    background-repeat: no-repeat;
    background-size: 150px 164px;
    background-position: top right;
  }

  .mainlk__card-3 {
    background-image: url('../assets/img/card-background-3.svg');
    background-repeat: no-repeat;
    background-size: 150px 164px;
    background-position: top right;
  }

  .mainlk__card-title {
    font-size: 16px;
    line-height: 17.7px;
    margin-bottom: 20px;
  }

  .mainlk__card-text {
    font-size: 14px;
    line-height: 18px;
  }

  .mainlk__card-button-container {
    max-width: 320px;
    height: 54px;
  }

  .mainlk__card-button {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
    width: 100%;
    height: 47px;
    background-color: transparent;
    background-image: url('../assets/img/black-button-phone.svg');
    font-size: 16px;
    line-height: 19.36px;
  }

  .mainlk__card-button-figure {
    background-image: url('../assets/img/black-button-frame-phone.svg');
    width: 100px;
  }
}

@media screen and (max-width: 360px) {
  .mainlk {
    background-image: url('../assets/img/lk-background-lines-phone.svg');
    background-size: 360px 904px;
    background-position: center;
  }
  
}
</style>