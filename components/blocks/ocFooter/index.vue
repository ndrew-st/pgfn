<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__menu footer-menu">
          <ul class="footer-menu__types">
            <li
              v-for="type in menu"
              :key="type.title"
              class="footer-menu__type footer-menu-type"
            >
              <h3 class="footer-menu-type__title">
                {{ type.title }}
              </h3>
              <ul class="footer-menu-type__list">
                <li
                  v-for="item in type.children"
                  :key="item.title"
                  class="footer-menu-type__item"
                >
                  <nuxt-link
                    :to="item.url"
                    class="footer-menu-type__link"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer__contacts footer-contacts">
          <ul class="footer-contacts__social-list">
            <li
              v-for="soc in social"
              :key="soc.title"
              class="footer-contacts__social"
            >
              <a
                :href="soc.url"
                target="_blank"
                class="footer-contacts__social-link"
              >
                <img
                  :src="soc.src"
                  :alt="soc.title"
                  width="32"
                  height="32"
                  class="footer-contacts__social-img"
                >
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__pay footer-pay">
          <h3 class="footer-pay__title">
            Оплата онлайн
          </h3>
          <ul class="footer-pay__list">
            <li
              v-for="pay in payments"
              :key="pay.title"
              class="footer-pay__item"
            >
              <img
                :src="pay.src"
                :alt="pay.title"
                :width="pay.width"
                :height="pay.height"
                class="footer-pay__image"
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__author footer-author">
        <p class="footer-author__desc">
          © 2020 Personal.Guide
        </p>
        <ul class="footer-author__list">
          <li class="footer-author__item">
            <a
              href=""
              class="footer-author__link"
            >Конфиденциальность</a>
          </li>
          <li class="footer-author__item">
            <a
              href=""
              class="footer-author__link"
            >Условия</a>
          </li>
          <li class="footer-author__item">
            <a
              href=""
              class="footer-author__link"
            >Карта сайта</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Направления',
          children: [
            { title: 'Районы и округа', url: '' },
            { title: 'Города', url: '' },
            { title: 'Деревни и сёла', url: '' }
          ]
        },
        {
          title: 'Жильё',
          children: [
            { title: 'Апартаменты', url: '' },
            { title: 'Коттеджи и дома', url: '' },
            { title: 'Комнаты', url: '' },
            { title: 'Койко-места', url: '' },
            { title: 'На природе', url: '' }
          ]
        },
        {
          title: 'О нас',
          children: [
            { title: 'О проекте', url: '' },
            { title: 'Помощь', url: '' },
            { title: 'Пригласить друзей', url: '' }
          ]
        }
      ],
      social: [
        { title: 'Дзен', src: '/icons/zen.svg', url: 'https://vk.cc/au93Ch' },
        { title: 'Фейсбук', src: '/icons/facebook.svg', url: 'https://www.facebook.com/personal.guide.russia' },
        { title: 'Вконтакте', src: '/icons/vk.svg', url: 'https://vk.com/personal.guide' },
        { title: 'Инстарграм', src: '/icons/instagram.svg', url: '' },
        { title: 'Твиттер', src: '/icons/twitter.svg', url: 'https://twitter.com/PersonalGuideR' }
      ],
      payments: [
        { title: 'Master Card', src: '/icons/payments/master-card.svg' },
        { title: 'Visa', src: '/icons/payments/visa.svg' },
        { title: 'Google pay', src: '/icons/payments/gpay.png', width: 47.5, height: 20 },
        { title: 'Apple pay', src: '/icons/payments/apple.svg' },
        { title: 'Samsung pay', src: '/icons/payments/sampay.png', width: 83, height: 12 }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  max-width 1280px
  padding 0 18px
  margin 0 auto

  border-top 1px solid #ECECEC

  &__container
    display flex
    flex-wrap wrap
    justify-content space-between
    padding-top 24px
    padding-bottom 75px

  & .footer-menu
    width 100%
    max-width 670px

    &__types
      display flex
      justify-content space-between
      flex-wrap wrap
      margin 0
      margin-bottom 10px
      padding 0

      list-style none

      @media(min-width 1090px)
        margin-bottom 0

    &__type
      align-self flex-start
      width 45%
      margin-bottom 35px

      @media(min-width 1090px)
        margin-bottom 0

  & .footer-menu-type
    width 45%
    max-width 200px

    &:last-child
      margin-top -80px

      @media(min-width 645px)
        margin-top 0

    &__title
      margin 0
      margin-bottom 4px

      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: $black-1

    &__list
      margin 0
      padding 0

      list-style none

    &__item
      margin-bottom 5px

    &__link
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 28px;
      color: $black-1

      anim(color)

      &:hover
      &:focus
        outline 0

      &:hover
        color $blue

        anim(color)

  & .footer-contacts
    display flex
    align-self flex-start
    justify-content space-between
    align-items center

    flex-basis 100%
    max-width 208px
    width 100%
    margin 0 auto
    margin-bottom 35px

    &__social-list
      display flex
      justify-content space-between
      width 100%
      max-width 208px
      margin 0
      padding 0

      list-style none

    &__social-link
      display block

      rm-outline()

    &__social-img
      width 32px
      height 32px
      vertical-align bottom

  & .footer-pay
    width 100%
    flex-basis 100%

    @media(min-width 1090px)
      flex-basis auto
      margin-left auto
      margin-right 0
      margin-top -59px

    &__title
      margin 0
      margin-bottom 8px

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: $gray

    &__list
      display flex
      align-items center
      flex-wrap wrap
      margin 0
      padding 0

      list-style none

    &__item
      margin-right 15px
      margin-bottom 24px

      &:last-child
        margin-right 0

      @media(min-width 1090px)
        margin-bottom 0

  & .footer-author
      display flex
      flex-wrap wrap

      margin-left -18px
      margin-right -18px
      padding 20px 18px
      margin-bottom 50px

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: $gray

      border-top 1px solid #ECECEC

      &__list
        display flex
        flex-wrap wrap
        margin 0
        padding 0

        list-style none

      &__item
        position relative

        padding-left 13px

        &:before
          content ''

          position absolute
          left 6px
          top 2px
          bottom 0

          width 2px
          height 2px
          margin auto 0

          background-color $gray
          border-radius 50%

      &__link
        color: $gray

        rm-outline()

        &:hover
          text-decoration underline

@media (min-width 768px)
  .footer
    padding 0 40px

    & .footer-author
      margin-left -40px
      margin-right -40px
      padding-left 40px
      padding-right 40px

@media(min-width 1090px)
  .footer
    max-width 100%

    &__wrapper
      width 100%
      max-width 1280px
      margin 0 auto

    & .footer-contacts
      max-width 380px
    & .footer-pay
      max-width 380px

    & .footer-author
      margin-bottom 0
      margin-left 0
      margin-right 0
      padding-left 0
      padding-right 0

@media (min-width 1280px)
  .footer
    padding 0

    &__container
      padding-bottom 42px

    &__wrapper
      position relative

    & .footer-author
      align-items center
      min-height 90px
      padding-bottom 40px

      box-sizing border-box

      &__list
        align-items center

    & .footer-pay
      flex-basis 100%
      max-width 100%
      margin 0
      margin-top 32px

      &__link
        font-size 16px
        line-height 40px

    & .footer-menu-type
      &__title
        margin-bottom 8px

        font-size 14px
        line-height 32px

    & .footer-contacts
      position absolute
      right 0
      bottom 37px

      max-width 208px
      margin 0
</style>
