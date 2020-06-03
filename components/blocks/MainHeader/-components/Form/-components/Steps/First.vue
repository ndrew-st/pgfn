<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Что вам найти?
    </h3>
    <nuxt-link
      class="step-container__link"
      to="/more-info"
    >
      {{ searchSel }}
    </nuxt-link>

    <ul class="step-container__content">
      <li
        v-for="item in list"
        :key="item.value"
        class="step-container__item"
      >
        <label class="step-container__label">
          <img
            :alt="item.name"
            :src="item.img"
            :srcset="item.img2x"
            width="80"
            height="65"
            class="step-container__image"
          >
          {{ item.name }}
          <input
            :name="nameSec"
            :value="item.value"
            type="radio"
            class="visually-hidden"
            @change="$emit('input', item.value)"
          >
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      nameSec: 'type-object',
      searchSel: '',
      list: [
        { name: 'Услуги', value: 'services', img: '/form/services.png', img2x: '/form/services@2x.png' },
        { name: 'Жильё', value: 'housing', img: '/form/housing.png', img2x: '/form/housing@2x.png' }
      ]
    }
  },
  computed: {
    ...mapState('search', ['search'])
  },
  mounted () {
    if (typeof this.search === 'string') {
      this.searchSel = this.search
    } else {
      this.searchSel = this.search[0].content // some problem with rendering nuxt - store get array
    }
  }
}
</script>

<style lang="stylus">
.step-container
  height 497px
  padding 0 18px

  overflow auto

  &__title
    margin 0
    margin-bottom 4px

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #272528;

  &__link
    display block
    margin-bottom 40px

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #272528;

    &:hover
    &:focus
      outline 0

  &__content
    margin 0
    padding 0

    list-style none

  &__item
    margin-bottom 16px

    background: #FFFFFF;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
    border-radius: 4px;

    &:last-child
      margin-bottom 0

  &__image
    margin-right 28px

  &__label
    display flex
    align-items center

    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #272528;

    cursor pointer
</style>
