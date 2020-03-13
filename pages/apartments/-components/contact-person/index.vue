<template>
  <div>
    <div class="div-flex">
      <img
        class="avatar"
        src="@/static/icons/ivan.png"
        alt="avatar" />

      <div>
        <div class="div-flex">
          <h3>Иван Иванов</h3>

          <div class="online">
            Онлайн
          </div>
        </div>

        <div class="div-flex">
          <img
            class="flag"
            src="@/static/icons/flag.png"
            alt="flag" />

          <div class="rating">
            4.2
          </div>

          <div class="pro">
            PRO
          </div>
        </div>
      </div>

      <button class="connect-button">
        <img
        class="img-button"
        src="@/static/icons/mail.png" />
        Связаться
      </button>
    </div>

    <hr />

    <p>Общение на Русском и Английском языках.</p>

    <br>

    <p>Апартаменты "3-к квартира, 146 м², 11/12 эт." принимают гостей с OurCrimea.com с 27 июня 2018 г.</p>

    <br>

    <p><span>№ 123456789</span>   <span>15.11.2019 1723</span></p>

    <div class="div-flex">
      <div class="subscribe-button">
        <div class="text-button">Подписаться</div>
      </div>

      <div class="complain-button">
        <div class="text-button">Пожаловаться</div>
      </div>
    </div>

  </div>
</template>

<style lang="stylus" scoped>
.div-flex
  display flex

.avatar
  width 50px
  height 50px
  margin 10px 10px

.online
  color #fff
  background-color rgb(29, 172, 0)
  padding 3px 3px
  border-radius 5px
  margin 4px 4px

.flag
  width 26px
  height 26px

.rating
  color #fff
  background-color rgb(135, 108, 175)
  padding 3px 3px
  border-radius 5px
  margin 4px 4px

.pro
  background-color rgb(255, 205, 0)
  padding 3px 3px
  border-radius 5px
  margin 4px 4px

.connect-button
  background-color rgb(29, 172, 0)
  width 125px
  height 35px
  color #fff
  text-align center

.img-button
  width 19px
  height 19px

.subscribe-button
  width 140px
  height 35px
  border 2px solid blue
  border-radius 4px
  display flex

.text-button
  margin auto

.complain-button
  width 140px
  height 35px
  border 2px solid red
  border-radius 4px
  display flex

</style>
