<template>
  <div>
    <h1>Рейтинг апартаментов</h1>

    <div class="box-flex">
        <div>
            <div class="star-box">
            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />
            </div>

            <div class="star-box">
            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />
            </div>

            <div class="star-box">
            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />
            </div>

            <div class="star-box">
            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />

            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />
            </div>

            <div class="star-box">
            <img
                class="star"
                src="@/static/icons/star.png"
                alt="star" />
            </div>
        </div>

        <img
          class="rating"
          src="@/static/icons/rating.png"
          alt="rating">
    </div>

    <p>Очень хорошо — на основе 784 оценок и отзывов.</p>

    <div class="box-flex">
        <p>Ваша оценка:</p>

        <img
        class="star"
        src="@/static/icons/star.png" />

        <img
        class="star"
        src="@/static/icons/star.png" />

        <img
        class="star"
        src="@/static/icons/star.png" />

        <img
        class="star"
        src="@/static/icons/star.png" />

        <img
        class="star"
        src="@/static/icons/star.png" />
    </div>

    <div class="box-flex">
        <div class="comments-button">
            <div class="text-button">
                Отзывы
            </div>
        </div>

        <div class="write-comment-button">
            <div class="text-button">
                Написать отзыв
            </div>
        </div>
    </div>

    <br>
    <br>

    <div class="box-flex">
        <div>
            <h4>Это жильё очень популярно.</h4>

            <p>За прошлую неделю это объявление посмотрели 500 раз.</p>
        </div>

        <div class="svg-img">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 268.5 347.5"
            enable-background="new 0 0 268.5 347.5"
            xml:space="preserve"
            style="fill: rgb(0, 0, 0);">
                <g id="__id447_s6ua8u8w38">
                <polygon
                points="146.861,0 30,163.992 88.431,183.5 0,347.5 204.5,163.992 149.5,145 268.5,43.5  "
                style="fill: rgb(113, 64, 184);">
                </polygon>
                </g>
            </svg>
        </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.star
  width 12px
  height 12px
  object-fit fill

.star-box
  text-align right

.box-flex
  display flex

.rating
  width 440px
  height 73px

.comments-button
  border 1px solid rgb(255, 205, 0)
  border-border-radius 4px
  margin 5px 10px
  padding 10px 15px

.write-comment-button
  background-color rgb(255, 205, 0)
  border-radius 4px
  margin 5px 10px
  padding 10px 15px

.text-button
  margin auto

.svg-img
  width 77px
  height 87px
  transform: rotate(-21.165deg);
</style>
