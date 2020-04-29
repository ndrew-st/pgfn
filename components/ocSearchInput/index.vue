<template>
  <label class="search-label">
    <Icon
      name="find"
      class="search-label__icon"/>
    <input
      @input="throttledSearch"
      @keydown="handlerKeyDown"
      @keyup="handlerKeyUp"
      :maxlength="maxSearchLength"
      v-model="search"
      type="text"
      placeholder="Укажите город, ориентир или адрес"
      class="search-label__input">
  </label>
</template>

<script>
import Icon from '~/components/Icon'

import throttle from '~/utils/throttle'

export default {
  components: { Icon },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      search: this.value || '',
      pressed: false,
      maxSearchLength: 200
    }
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    }
  },
  methods: {
    handlerSearch () {
      this.$emit('input', this.search)
    },
    handlerKeyDown (e) {
      if (this.pressed && e.code !== 'Backspace') {
        e.preventDefault()
      }
      this.pressed = true
    },
    handlerKeyUp () {
      this.pressed = false
    }
  }
}
</script>

<style lang="stylus">
.search-label
  position relative

  display block
  width 100%

  &__icon
    position absolute
    left 18px
    top 0
    bottom 0

    width 15px
    height 17px
    margin: auto 0

    & svg circle
    & svg path
      stroke #272528

      transition all 0.3s ease-in-out 0s

  &:hover .search-label__icon svg circle
  &:hover .search-label__icon svg path
    stroke #7140B8

    transition all 0.3s ease-in-out 0s

  &__input
    display block
    width 100%
    padding 10px 40px
    padding-right 20px
    height 48px

    background: #FFFFFF;
    border: 2px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 4px;

    transition border-color 0.3s ease-in-out 0s

    &:hover
    &:focus
    &:active
      outline 0

      border-color #7140B8
      transition border-color 0.3s ease-in-out 0s

@media(min-width 1090px)
  .search-label
    &__icon
      display none
    &__input
      padding-left 16px
</style>
