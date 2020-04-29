<template>
    <div>
        <div class="box-flex">
            <div>
                <h1>Рейтинг и отзывы о Крыме</h1>

                <div class="box-flex">
                    <h1>4,5</h1>

                    <span> из 5</span>
                </div>

                <p>Очень хорошо — на основе 236 784 оценок и отзывов.</p>

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

                <div class="write-comment-button">
                    <div class="text-button">
                        Написать отзыв
                    </div>
                </div>
            </div>

            <div>
                <h4><i>выше есть такие звёздочки в меньшем масштабе, думаю вынести их в отдельный компонент</i></h4>

                <img src="@/static/icons/stars.png">
            </div>
        </div>

        <hr>

        <img src="@/static/icons/chinese.png">

        <img src="@/static/icons/eva.png">
    </div>
</template>

<style lang="stylus" scoped>

.box-flex
  display flex

.star
  width 12px
  height 12px

.write-comment-button
  background-color rgb(255, 205, 0)
  border-radius 4px
  margin 5px 10px
  padding 10px 15px
  width 140px

.text-button
  margin auto

</style>
