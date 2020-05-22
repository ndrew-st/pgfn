<template>
  <div class="footer">
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
        <a
          href="tel:+78006000322"
          class="footer-contacts__phone"
        >8 800 600-03-22</a>
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
    <p class="footer__author">
      © 2020 Personal.Guide Все права защищены
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Направления',
          children: [
            { title: 'Города', url: '' },
            { title: 'Районы', url: '' },
            { title: 'Сёла', url: '' }
          ]
        },
        {
          title: 'Жильё',
          children: [
            { title: 'Апартаменты', url: '' },
            { title: 'Коттеджи и дома', url: '' },
            { title: 'Отели', url: '' },
            { title: 'Кемпенги', url: '' },
            { title: 'Хостелы', url: '' }
          ]
        },
        {
          title: 'Услуги',
          children: [
            { title: 'Туры', url: '' },
            { title: 'Экскурсии', url: '' },
            { title: 'Прокат', url: '' },
            { title: 'Джиппинг', url: '' },
            { title: 'Морские прогулки', url: '' },
            { title: 'Верховая езда', url: '' }
          ]
        }
      ],
      social: [
        { title: 'Фейсбук', src: '/icons/facebook.svg', url: 'https://www.facebook.com/personal.guide.russia' },
        { title: 'Вконтакте', src: '/icons/vk.svg', url: 'https://vk.com/personal.guide' },
        { title: 'Инстарграм', src: '/icons/instagram.svg', url: '' },
        { title: 'Твиттер', src: '/icons/twitter.svg', url: 'https://twitter.com/PersonalGuideR' },
        { title: 'Зен яндекс', src: '/icons/zen-icon.svg', url: 'https://zen.yandex.ru/id/5db5b8a01ee34f00b119e343' }
      ],
      payments: [
        { title: 'Master Card', src: '/icons/payments/master-card.svg' },
        { title: 'maestro', src: '/icons/payments/maestro.svg' },
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

  @media(min-width 1280px)
    padding 0

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
      color: #272528;

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
      color: #272528;

      transition color 0.3s ease-in-out 0s

      &:hover
      &:focus
        outline 0

      &:hover
        color #5604C1

        transition color 0.3s ease-in-out 0s

  & .footer-contacts
    display flex
    align-self flex-start
    justify-content space-between
    align-items center
    margin-bottom 35px
    flex-basis 100%
    max-width 380px
    width 100%

    &__phone
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #272528;

      &:hover
      &:focus
        outline 0

    &__social-list
      display flex
      justify-content space-between
      width 100%
      max-width 220px
      margin 0
      padding 0

      list-style none

    &__social-link
      &:hover
      &:focus
        outline 0

    &__social-img
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

  &__author
    margin-left -18px
    margin-right -18px
    padding 20px 18px
    margin-bottom 50px

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #989BA8;

    border-top 1px solid #ECECEC

    @media(min-width 1280px)
      margin-bottom 0
      margin-left 0
      margin-right 0
      padding-left 0
      padding-right 0

@media(min-width 1090px)
  .footer

    & .footer-contacts
      max-width 380px
    & .footer-pay
      max-width 380px
</style>
