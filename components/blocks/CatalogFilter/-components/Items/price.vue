<template>
  <div class="price">
    <div class="price__container">
      <div class="price__header price-header">
        <button
          type="button"
          class="price-header__close"
          @click="$root.$emit('dropdown:hide')"
        >
          закрыть
        </button>
        <h2 class="price-header__title">
          Цена
        </h2>
      </div>
      <div class="price__title-container">
        <div class="price__range price-range">
          <p class="price-range__from">
            {{ from }} <span class="price-range__currency">₽</span>
          </p>
          &nbsp;—&nbsp;
          <p class="price-range__to">
            {{ to }} <span class="price-range__currency">₽</span>
          </p>
        </div>
        <h3 class="price__title">
          Средняя цена за сутки {{ price.toLocaleString(locale) }} ₽
        </h3>
      </div>
      <div class="price__content price__content--desktop">
        <ul class="price__list">
          <li class="price__item unit-price">
            <label class="unit-price__label">
              <span class="unit-price__label--text">мин. цена</span>
              <input
                v-model="min"
                type="number"
                class="unit-price__input"
                placeholder="5000"
              >
            </label>
          </li>
          <li class="price__item unit-price">
            <label class="unit-price__label">
              <span class="unit-price__label--text">макс. цена</span>
              <input
                v-model="max"
                type="number"
                class="unit-price__input"
                placeholder="10000"
              >
            </label>
          </li>
        </ul>
      </div>
      <div class="price__content price__content--mobile">
        <ocRangeSlider :show-description="false" />
      </div>
      <Footer
        class="price__footer price__footer--desktop"
        @save="save"
        @clear="clear"
      />
      <div class="price__footer price__footer--mobile footer-mobile">
        <button
          type="button"
          class="footer-mobile__button footer-mobile__button--clear"
        >
          Очистить все
        </button>
        <button
          type="button"
          class="footer-mobile__button footer-mobile__button--show"
        >
          Показать {{ `${count} ${variant(count)}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './-components/Footer'

import num2str from '~/utils/num2str'

export default {
  name: 'Price',
  components: { Footer },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      from: 740,
      to: 50000,
      min: null,
      max: null,
      price: 3223452,
      locale: 'ru',
      count: 234,
      text: [ 'вариант', 'варианта', 'вариантов' ]
    }
  },
  created () {
    if (this.value && this.value.min) {
      this.min = this.value.min
    }

    if (this.value && this.value.max) {
      this.max = this.value.max
    }
  },
  methods: {
    save () {
      if (this.min || this.max) {
        this.$emit('input', { min: this.min, max: this.max })
        this.$root.$emit('dropdown:hide')
      }
    },
    clear () {
      this.$emit('input', null)
      this.min = null
      this.max = null
    },
    variant (val) {
      return num2str(val, this.text)
    }
  }
}
</script>

<style lang="stylus" scoped>
.apartments-filter .unit-filter__content.price
  position fixed
  top 0
  left 0

  width 100%
  height 100vh

  padding-bottom: 0

  background-color: rgba(0, 0, 0, 0.4);
  z-index 999

.price

  &__header
    padding 0 34px
    padding-top: 16px
    padding-bottom: 11px

  &__title-container
    padding 0 18px

  &__range
    display flex

  & .price-range
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
    color: #272528;

    &__currency
      font-weight normal

    &__from
    &__to
      margin 0

  & .price-header
    position relative

    display flex
    justify-content center
    margin-bottom 28px

    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px solid #F3F3F3;

    &__title
      margin 0

      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      text-align: center;
      color: #272528;

    &__close
      position: absolute
      left: 18px
      top 22px

      display block
      width: 12px
      height: 12px

      font-size: 0

      border: 0
      background-color transparent
      cursor pointer

      &:hover
      &:focus
        outline 0

      &:before
      &:after
        content ''
        position: absolute
        left: 4px
        top: -2px

        width: 2px
        height 17px

        background-color #989BA8

      &:before
        transform rotate(45deg)

      &:after
        transform rotate(-45deg)

  &__container
    margin-top 30px
    width 100%
    height: 100%

    background #FFFFFF
    border-radius 20px 20px 0px 0px
    box-sizing: border-box;

  &__content
    &--desktop
      display none

    &--mobile
      padding 0 18px

  &__title
    margin: 0
    margin-bottom: 20px

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #989BA8;

  &__list
    display flex
    justify-content: space-between;
    margin: 0
    margin-bottom 32px
    padding: 0

    list-style none

  &__footer

    &--desktop
      display none

    &--mobile
      position absolute
      bottom 0
      left 0
      right 0

      display flex
      align-items center
      justify-content space-between
      min-height 72px
      padding 0 20px

      border-top 1px solid #DADADA
  & .footer-mobile
    &__button
      cursor pointer

      &:hover
      &:focus
        outline 0

      &--clear
        padding: 0

        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        color: #272528;

        border: 0
        background-color transparent

      &--show
        padding 0 22px
        height 48px

        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #FFFFFF;

        border: 0
        background: #CA1F03
        border-radius: 4px
        transition all 0.3s ease-in-out 0s

        &:hover
          transition all 0.3s ease-in-out 0s
          background-color #CA1E03

  &__item
    max-width 160px

  & .unit-price
    &__label
      &--text
        display block

        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: #272528;

    &__input
      display block
      max-width 160px
      height: 56px
      padding: 0 16px

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #272528;

      border: 0
      background: #F3F3F3;
      box-shadow: inset 0px -1px 0px #D5D1DB;
      border-radius: 4px 4px 0px 0px;
      box-sizing: border-box;
      transition all 0.3s ease-in-out 0s

      &:hover
      &:focus
        outline 0

      &:focus
        transition all 0.3s ease-in-out 0s
        box-shadow: inset 0px -2px 0px #7140B8;

@media (min-width 1280px)
  .apartments-filter .unit-filter__content.price
    position absolute
    left: 0;
    top: 52px;
    z-index: 99;

    height auto

    background-color transparent

  .price
    width: 392px
    height auto
    border-radius: 12px;
    box-sizing: border-box;

    &__container
      width: 392px
      margin-top: 0
      padding 28px
      padding-bottom: 0

      border-radius: 12px;
      box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);

    &__title-container
      padding 0

    &__range
      display none

    & .price-header
      display none

    &__content
      &--desktop
        display block

      &--mobile
        display none

    &__footer
      &--desktop
        display block

      &--mobile
        display none

    &__title
      font-weight: bold;
      font-size: 15px;
      line-height: 24px;
</style>
