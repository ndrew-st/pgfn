<template>
  <div class="direction-filter">
    <label class="direction-filter__label">
      <input
        v-model="search"
        type="text"
        class="direction-filter__input"
        placeholder="Укажите город или направление"
        @input="throttledSearch"
        @keydown="handlerKeyDown"
      >
      <OcIcon
        v-if="!search.length"
        name="find"
        class="direction-filter__icon direction-filter__icon--search"
      />
      <button
        v-else
        type="button"
        class="direction-filter__clear-button"
        @click="search = ''"
      >
        Очистить
        <OcIcon
          name="clear"
          class="direction-filter__icon direction-filter__icon--clear"
        />
      </button>
    </label>
    <div
      v-if="list.length"
      class="direction-filter__result direction-filter-result"
    >
      <ul class="direction-filter-result__list">
        <li
          v-for="item in list"
          :key="item.id"
          class="direction-filter-result__item"
        >
          <button
            type="button"
            class="direction-filter-result__button"
            @click="select(item.title)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import throttle from '~/utils/throttle'

export default {
  name: 'Direction',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      search: this.value || '',
      list: [
        { id: 1, title: 'Search 1' },
        { id: 2, title: 'Search 2' },
        { id: 3, title: 'Search 3' },
        { id: 4, title: 'Search 4' }
      ]
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
    select (title) {
      this.list = []
      this.$emit('input', title)

      this.$root.$emit('dropdown:hide')
    },
    handlerKeyDown (e) {
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="stylus">
.direction-filter
  width 344px
  padding 20px

  background: #FFFFFF;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;

  &__label
    position: relative
    display block
    width 100%

  &__icon
    position absolute
    top: 0
    bottom: 0
    right: 13px

    margin auto 0

    &--search
      & svg
        position: absolute;
        top: 0
        right 0
        bottom: 0

        width: 14px
        height: 16px
        margin auto 0
      & svg circle
      & svg path
        stroke #DADADA

    &--clear
      right 0

      & svg path
        fill #DADADA

  &__input
    display block
    width 100%
    height 40px
    padding 0 16px
    padding-right: 30px

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #272528;

    border 2px solid #ECECEC
    box-sizing border-box
    border-radius 4px

    transition all 0.3s ease-in-out 0s

    &:hover
    &:focus
      outline 0

    &:focus
      border-color #5604C1

      transition all 0.3s ease-in-out 0s

  &__clear-button
    position absolute
    top: 0
    bottom: 0
    right: 13px

    display block
    width: 16px
    height: 16px
    padding 0
    margin auto 0

    font-size 0

    border 0
    background-color transparent
    cursor pointer

    &:hover
    &:focus
      outline 0

  & .direction-filter-result
    margin-bottom: -20px
    margin-left: -20px
    margin-right: -20px
    margin-top: 8px

    &__list
      margin: 0
      padding: 0
      margin-bottom: 16px

      list-style none

    &__button
      display block
      width 100%
      padding: 12px 28px

      text-align left

      background-color transparent
      border: 0
      cursor pointer
      transition all 0.3s ease-in-out 0s

      &:hover
      &:focus
        outline 0

      &:hover
        background-color #ECECEC
        transition all 0.3s ease-in-out 0s
</style>
