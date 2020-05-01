<template>
  <div class="services">
    <ul class="services__list">
      <li
        tabindex="0"
        class="services__item service"
        @blur.capture="touched = false"
      >
        <h3 class="service__title">
          Где
        </h3>
        <label class="service__label">
          <input
            v-model="search"
            type="text"
            placeholder="Где угодно"
            class="service__input"
            @input="throttledSearch"
          >
        </label>
        <div
          v-if="touched && searchedList.length"
          class="service__content result-service"
        >
          <ul class="result-service__list">
            <li
              v-for="srch in searchedList"
              :key="srch.title"
              class="result-service__item"
            >
              <button
                type="button"
                class="result-service__button"
                @click="handlerSearchSelect(srch.title)"
              >
                {{ srch.title }}
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li class="services__item service">
        <h3 class="service__title">
          планируемая дата
        </h3>
        <Calendar @input="handlerDate" />
      </li>
      <li class="services__item service">
        <h3 class="service__title">
          Участники
        </h3>
        <div class="service__input service__input--block">
          Участники
        </div>
      </li>
    </ul>
    <button
      type="button"
      class="services__submit"
    >
      поиск
    </button>
  </div>
</template>

<script>
import Calendar from './-components/Calendar'

import throttle from '~/utils/throttle'

export default {
  components: { Calendar },
  data () {
    return {
      search: '',
      searchedList: [],
      touched: false,
      date: '',
      participants: 0
    }
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    }
  },
  methods: {
    handlerSearch () {
      // try {
      //   const { data } = this.$api.getSearch(this.text)
      //   this.searchedList = data
      //   this.touched = true
      // } catch (e) {
      //   console.log('Error search: ', e)
      // }
    },
    handlerDate (date) {
      this.date = date
    },
    handlerSubmit () {
      this.$router.push(`/search?q=${this.text}`)
    },
    handlerSearchSelect (title) {
      this.touched = false
      this.searchedList = []
      this.search = title
    }
  }
}
</script>

<style lang="stylus" scoped>
.services
  display flex
  justify-content space-between

  &__list
    display flex
    justify-content space-between
    width 100%
    max-width 768px
    margin 0
    padding 0

    list-style none

  &__item
    width 100%
    max-width 248px

  &__submit
    align-self flex-end
    width 130px
    height 56px

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #FFFFFF;

    background: #5604C1;
    border-radius: 4px;
    border 0
    cursor pointer

    &:hover
    &:focus
      outline 0

  & .result-service
    &__list
      margin 0
      padding 0

      list-style none

    &__button
      display block
      width 100%
      height 44px
      padding 0 16px

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      text-align left
      align-items: center;
      color: #272528;

      background-color transparent
      border 0
      cursor pointer

      transition all 0.3s ease-in-out 0s

      &:hover
        background-color #ECECEC
        transition all 0.3s ease-in-out 0s

  & .service
    position relative

    &:hover
    &:focus
    &:active
      outline 0

    &__content
      position absolute
      top 90px
      left 0
      right 0

      width 100%

      background: #FFFFFF;
      box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
      border-radius: 0px 0px 4px 4px;

    &__title
      margin 0

      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #272528;

    &__input
      width 100%
      height 56px
      padding 0 16px

      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.1px;
      color: #272528;

      background: #F3F3F3;
      border 0
      border-bottom 2px solid #D5D1DB
      border-radius: 4px 4px 0px 0px;
      box-sizing border-box

      transition all 0.3s ease-in-out 0s

      &--block
        position relative

        display flex
        align-items center

        color #989BA8

        cursor pointer

        &:after
          content ''

          position absolute
          top 50%
          right 25px

          width 8px
          height 4px

          background url('/arrow-select.svg') 0 0 no-repeat
          background-size 8px 4px

      &:hover
      &:focus
        outline 0

      &:hover
      &:focus
        border-color #7140B8
        transition border-color 0.3s ease-in-out 0s
</style>
