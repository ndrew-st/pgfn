<template>
  <div
    ref="guests"
    class="guests"
  >
    <OcInput
      readonly
      kind="most"
      type="text"
      placeholder="Гости"
    />
    <div
      v-show="touched"
      class="guests__content"
    >
      <ul class="guests__list">
        <li
          v-for="item in list"
          :key="item.title"
          class="guests__item"
        >
          <Counter
            :key="date"
            class="guests__counter"
            :title="item.title"
            :current="peoples[item.name]"
            :sub-title="item.subTitle"
            @input="updateValue(item.name, $event)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Counter from '~/components/global/ocCounter'

export default {
  components: { Counter },
  data () {
    return {
      date: new Date().toString(),
      touched: false,
      list: [
        { title: 'Взрослые', name: 'parent' },
        { title: 'Дети', name: 'children', subTitle: 'От 2 до 12 лет' },
        { title: 'Младенцы', name: 'babies', subTitle: 'До 2 лет' }
      ],
      peoples: {
        parent: 0,
        children: 0,
        babies: 0
      }
    }
  },
  methods: {
    updateValue (field, current) { // get name and value
      if (field === 'parent') {
        this.peoples.parent = current
        this.date = new Date().toString()
        this.$emit('input', this.peoples)

        return null
      }

      if (this.peoples.parent === 0) {
        this.peoples[field] = current
        this.peoples.parent = 1
        this.date = new Date().toString()
      } else {
        this.peoples[field] = current
      }

      this.touched = true
      this.$refs.guests.focus()
      this.$emit('input', this.peoples)
    },
    handlerFocus (e) {
      console.log('focus')
    },
    handlerBlur (e) {
      console.log('blur ', e.target)
    }
  }
}
</script>

<style lang="stylus" scoped>
.guests
  position relative

  &:hover
  &:focus
  &:active
    outline 0

  &__content
    position absolute
    top 56px
    left 0
    right 0

    width 100%
    padding 24px 15px

    background: #FFFFFF;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 4px 4px;
    box-sizing border-box

  &__list
    margin 0
    padding 0

    list-style none

  &__item
    margin-bottom 24px

    &:last-child
      margin-bottom 0

  &__input
    position relative
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

    transition all 0.3s ease-in-out

    &:after
      content ''

      position absolute
      right 25px
      top 50%

      width 8px
      height 4px

      background url('/arrow-select.svg') 0 0 no-repeat
      background-size 8px 4px

    &--block
      display flex
      align-items center

      color #989BA8

      cursor pointer

    &:hover
    &:focus
      outline 0

    &:hover
    &:focus
      border-color $blue

      anim(border-color)
</style>
