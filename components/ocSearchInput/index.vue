<template>
  <label class="search-label">
    <OcIcon
      name="find"
      class="search-label__icon search-label__icon--find"
    />
    <input
      v-model="search"
      v-bind="$attrs"
      :maxlength="maxSearchLength"
      type="text"
      class="search-label__input"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @input="throttledSearch"
      @keydown="handlerKeyDown"
    >
  </label>
</template>

<script>
import throttle from '~/utils/throttle'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    maxSearchLength: {
      type: Number,
      default: 200
    },
    sideIcon: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      search: this.value || ''
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
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()
      }
    },
    clear () {
      this.$emit('input', '')
      this.search = ''
    }
  }
}
</script>

<style lang="stylus">
.search-label
  position relative

  display flex
  width 100%

  &__icon
    position absolute

    top 0
    bottom 0
    left 18px

    width 12px
    height 13px
    margin: auto 0

    &--find
      & svg
        display block
        width 100%
        height auto
        margin-top -1px

        & circle
        & path
          stroke #272528
          anim(all)

  &:hover
    & .search-label__icon svg circle
    & .search-label__icon svg path
      stroke $blue

      anim(all)

  &__input
    display block
    width 100%
    padding-left 40px
    padding-right 30px

    height 40px

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.05px;
    color: #272528;

    background: #FFFFFF;
    border: 2px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 4px;

    anim(border-color)

    &.left
      padding 8px 40px
      padding-right 20px

    &.right
      padding 8px 16px
      padding-right 30px

    &:focus
    &:active
      border-color $blue

      outline 0

      anim(border-color)

@media(min-width 1090px)
  .search-label
    &__icon
      display none

    &__input
      padding 0 16px

      font-size: 16px;
      line-height: 24px;
</style>
