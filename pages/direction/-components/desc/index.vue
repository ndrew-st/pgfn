<template>
  <div class="description-block">
    <div class="description-block__container">
      <h2 class="description-block__title">
        {{ title }}
      </h2>
      <p class="description-block__desc">
        {{ content[0] }}
      </p>
      <transition name="fade">
        <p
          v-if="show"
          class="description-block__desc description-block__desc--all"
        >
          {{ content[1] }}
        </p>
      </transition>
      <button
        type="button"
        class="description-block__more"
        @click.prevent="show = !show"
      >
        {{ show ? 'Свернуть' : 'Читать далее' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Городской округ Судак'
    },
    content: {
      type: Array,
      default: () => [
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …,',
        'Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …Интернет-магазин – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал …'
      ]
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.description-block
  margin-bottom 40px
  padding 0 18px
  padding-top 25px

  border-top 1px solid #ECECEC

  @media (min-width 768px)
    padding 0 40px

  @media(min-width 1280px)
    padding 0

  &__container
    max-width 1280px
    margin 0 auto

  &__title
    margin 0
    margin-bottom 16px

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #272528;

  &__desc
    margin 0
    margin-bottom 8px

    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #000000;

  &__more
    padding 0

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #272528;

    border 0
    background-color transparent
    cursor pointer

    &:hover
    &:focus
      outline 0

@media(min-width 1090px)
  .description-block
    padding-top 60px
    margin-bottom 60px

    &__title
      margin-bottom 28px

      font-size: 20px;
      line-height: 20px;

    &__desc
      margin-bottom 12px

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.3px;

</style>
