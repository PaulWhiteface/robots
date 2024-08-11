<template>
  <div class="profilelk">
    <div class="profilelk__banner"></div>
    <div class="profilelk__section">
      <form class="profilelk__form">
        <div class="prfoilelk__avatar-container">
          <img class="prfoilelk__avatar" src="../assets/img/avatar.png" alt="аватар" />
        </div>
        <div class="profilelk__form-first-container">
          <div class="profilelk__input-container profilelk__input-container-tablet">
            <label class="profilelk__input-label">Ф.И.О.</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Введите Ф.И.О." required>
            </div>
          </div>
          <div class="profilelk__input-container profilelk__input-container-tablet">
            <label class="profilelk__input-label">E-mail</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Введите E-mail">
            </div>
          </div>
          <div class="profilelk__input-container profilelk__input-container-tablet">
            <label class="profilelk__input-label">Телефон</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Введите телефон">
            </div>
          </div>
          <div class="profilelk__input-container profilelk__input-container-tablet">
            <label class="profilelk__input-label">Город</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Выберите город">
              <img class="input-figure" src="../assets/img/arrow-down.svg" alt="кнопка" />
            </div>
          </div>
        </div>

        <div class="profilelk__form-second-container">
          <div class="profilelk__input-container">
            <label class="profilelk__input-label">ФИО представителя</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Введите ФИО представителя">
            </div>
          </div>
          <div class="profilelk__input-container">
            <label class="profilelk__input-label">Категория</label>
            <div class="profilelk__input-border">
              <input class="profilelk__input" placeholder="Выберите категорию">
              <img class="input-figure" src="../assets/img/arrow-down.svg" alt="кнопка" />
            </div>
          </div>
          <div class="profilelk__input-container">
            <label class="profilelk__input-label">Наименование учебного заведения</label>
            <div class="profilelk__input-border profilelk__input-border-span">
              <input class="profilelk__input profilelk__input-span" placeholder="Введите наименование учебного заведения">
            </div>
          </div>
          <button class="profilelk__button profilelk__button-first">Сохранить</button>
        </div>
        <div class="profilelk__figure"></div>
      </form>
    </div>

    <div class="profilelk__pass">
      <h1 class="profilelk__title">СМЕНА ПАРОЛЯ</h1>
      <form class="profilelk__pass-form">
        <label class="profilelk__input-label">Текущий пароль</label>
        <div class="profilelk__input-border">
          <input class="profilelk__input" placeholder="Введите текущий пароль">
          <img class="input-figure" src="../assets/img/password-eye.svg" alt="кнопка" />
        </div>
        <label class="profilelk__input-label">Новый пароль</label>
        <div class="profilelk__input-border">
          <input class="profilelk__input" placeholder="Новый пароль">
          <img class="input-figure" src="../assets/img/password-eye.svg" alt="кнопка" />
        </div>
        <div class="profilelk__input-border-pass">
          <div class="profilelk__input-border">
            <input class="profilelk__input" placeholder="Повторите новый пароль">
            <img class="input-figure" src="../assets/img/password-eye.svg" alt="кнопка" />
          </div>
        </div>
        <button class="profilelk__button profilelk__button-pass">Сохранить</button>
      </form>
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

.profilelk {
  background: #0E0214;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter, sans-serif;
  color: white;
  background-image: url('../assets/img/profilelk-lines.svg');
  background-repeat: no-repeat;
  background-size: 1054px 1547px;
  background-position: 0% -400%;
}

.profilelk__banner {
  width: 100%;
  min-height: 300px;
  background-image: url('../assets/img/profilelk-banner.png');
  background-repeat: no-repeat;
  background-position: center;
}

.profilelk__section {
  padding-left: 385px;
  box-sizing: border-box;
}

.profilelk__form {
  display: flex;
  height: 500px;
  position: relative;
  margin-right: 46px;
  margin-left: auto;
  padding-right: 108px;
}

.profilelk__figure {
  height: 390px;
  width: 28px;
  position: absolute;
  right: 0;
  top: 0;
  background-image: url('../assets/img/profilelk-figure.svg');
}

.prfoilelk__avatar-container {
  position: absolute;
  bottom: 415px;
  left: -240px;
  width: 210px;
  height: 210px;
  background: linear-gradient(80deg, #FFAA00 30%, #AA00FF 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prfoilelk__avatar {
  width: 203px;
  height: 203px;
  border-radius: 50%;
}

.profilelk__form-first-container {
  width: 440px;
  margin-right: 20px;
}

.profilelk__form-second-container {
  width: 440px;
}

.profilelk__pass {
  background-image: url('../assets/img/profilelk-robot.png');
  max-width: 1360px;
  width: 100%;
  height: 475px;
  align-self: center;
  margin-top: 120px;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 114px;
  margin-bottom: 120px;
}

.profilelk__title {
  margin-bottom: 40px;
  font-family: Wadik;
  font-weight: 700;
  font-size: 24px;
  line-height: 26.54px;
}

.profilelk__pass-form {
  width: 901px;
  height: 395px;
  display: flex;
  flex-direction: column;
  max-width: 440px;
  position: relative;
}

.profilelk__input-border-pass {
  position: absolute;
  max-width: 440px;
  width: 100%;
  right: -460px;
  bottom: 128px;
}

.profilelk__input-label {
  font-size: 20px;
  line-height: 24px;
  display: inline-block;
  margin-bottom: 16px;
}

.input-figure {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  top: 24px;
  cursor: pointer;
  background-position: center;
}

.profilelk__input {
  background: #0E0214;
  border-radius: 6px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 22px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;
}

.profilelk__input:invalid {
  outline: 1px solid red;
}

.profilelk__input:invalid:hover {
  outline: 1px solid white;
  box-shadow: none;
}

.profilelk__input:invalid::placeholder {
  color: red;
}

.profilelk__input:invalid:hover::placeholder {
  color: red;
}

.profilelk__input:focus {
  outline: 1px solid white;
}

.profilelk__input:focus::placeholder {
  color: white;
}

.profilelk__input:focus:hover::placeholder {
  color: white;
}

.profilelk__input:focus:hover {
  box-shadow: none;
}

.profilelk__input::placeholder {
  color: rgba(208, 196, 214, 1);
}

.profilelk__input:hover {
  box-shadow: 4px 4px 10px 0 #AA00FF;
}

.profilelk__input:hover::placeholder {
  color: rgba(239, 207, 254, 1);
}

.profilelk__input-border {
  position: relative;
  background: linear-gradient(50deg, #FFAA00, #AA00FF);
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  padding: 1px;
  max-height: 150px;
  margin-bottom: 28px;
}

.profilelk__button {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 97% 100%, 0 100%);
  margin-top: 38px;
  width: 100%;
  height: 64px;
  background-color: #AA00FF;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24.2px;
  cursor: pointer;
  color: white;
}

.profilelk__button:hover {
  background-color: rgba(130, 0, 215, 1);
}

.profilelk__button-pass {
  margin-top: 0;
}

@media screen and (max-width: 1440px) {
  .profilelk {
    align-items: normal;
  }
}

@media screen and (max-width: 1361px) {
  .profilelk {
    background-image: url('../assets/img/profilelk-lines-tablet.svg');
    background-size: 750px 1193px;
    background-position: 0 130%;
  }

  .profilelk__banner {
    min-height: 155px;
    background-image: url('../assets/img/profilelk-banner-tablet.png');
  }

  .profilelk__pass {
    background-image: url('../assets/img/profilelk-robot-tablet.png');
    background-repeat: no-repeat;
    align-self: center;
    max-width: 664px;
    height: 475px;
    padding-top: 33px;
    padding-left: 86px;
    display: flex;
    flex-direction: column;
  }

  .profilelk__section {
    padding-left: 0;
    align-self: center;
  }

  .profilelk__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 452px;
    padding-right: 0;
    margin-right: 0;
  }

  .profilelk__figure {
    display: none;
  }

  .prfoilelk__avatar-container {
    position: absolute;
    bottom: 415px;
    left: 0;
    top: 0;
    width: 152px;
    height: 152px;
    background: linear-gradient(80deg, #FFAA00 30%, #AA00FF 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prfoilelk__avatar {
    width: 147px;
    height: 147px;
    border-radius: 50%;
  }

  .profilelk__form-first-container {
    max-width: 491px;
    width: 100%;
    margin-right: 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-self: flex-end;
  }

  .profilelk__form-second-container {
    max-width: 664px;
    width: 100%;
    margin-right: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .profilelk__title {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 15.48px;
  }

  .profilelk__input-container {
    max-width: 322px;
    width: 100%;
  }

  .profilelk__input-container-tablet {
    width: 235.5px;
  }

  .profilelk__input-border-pass {
    position: relative;
    right: 0;
    bottom: 0;
  }

  .profilelk__input-label {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
  }

  .profilelk__input {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  .profilelk__input-border {
    margin-bottom: 22px;
    max-width: 322px;
    width: 100%;
  }

  .profilelk__button {
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    max-width: 167px;
    width: 100%;
    height: 42px;
    margin-top: 53px;
  }

  .profilelk__button-first {
    clip-path: polygon(0 0, 100% 0, 100% 74%, 94% 100%, 0 100%);
  }

  .profilelk__button-pass {
    margin-top: 0;
    max-width: 322px;
    width: 100%;
  }

}

@media screen and (max-width: 679px) {
  .profilelk {
    background-image: none;
  }

  .profilelk__banner {
    min-height: 160px;
    background-image: url('../assets/img/profilelk-banner-phone.png');
  }

  .profilelk__section {
    height: 959px;
    padding-left: 0;
    align-self: center;
    margin-top: 95px;
  }

  .profilelk__form {
    display: flex;
    flex-direction: column;
    min-height: 959px;
    position: relative;
    margin-right: 20px;
    margin-left: 20px;
    padding-right: 0;
    align-items: center;
  }

  .prfoilelk__avatar-container {
    position: absolute;
    left: 0;
    top: -170px;
    width: 150px;
    height: 150px;
    background: linear-gradient(80deg, #FFAA00 30%, #AA00FF 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prfoilelk__avatar {
    width: 143px;
    height: 143px;
  }

  .profilelk__form-first-container {
    width: 100%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .profilelk__form-second-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .profilelk__pass {
    background-image: url('../assets/img/profilelk-robot-phone.png');
    max-width: 320px;
    width: 100%;
    height: 562px;
    align-self: center;
    margin-top: 80px;
    box-sizing: border-box;
    padding: 40px 20px;
    margin-bottom: 80px;
  }

  .profilelk__title {
    margin-bottom: 40px;
    font-family: Wadik;
    font-weight: 700;
    font-size: 16px;
    line-height: 17.7px;
  }

  .profilelk__pass-form {
    width: 280px;
    height: 461px;
    display: flex;
    flex-direction: column;
    max-width: 440px;
    position: relative;
  }

  .profilelk__input-container-tablet {
    width: 322px;
  }

  .profilelk__input-border-span {
    height: 80px;
  }

  .profilelk__input-span {
    height: 78px;
  }

  .profilelk__input-border-pass {
    position: static;
    max-width: 440px;
    width: 100%;
  }

  .profilelk__input-border {
    margin-bottom: 28px;
  }

  .profilelk__button {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 97% 100%, 0 100%);
    margin-top: 12px;
    width: 100%;
    height: 43px;
    background-color: #AA00FF;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    cursor: pointer;
    color: white;
    max-width: 322px;
  }

  .profilelk__button-pass {
    margin-top: 12px;
  }
}
</style>