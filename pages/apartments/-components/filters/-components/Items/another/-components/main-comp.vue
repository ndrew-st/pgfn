<template>
  <div class="main-filter">
    <div class="main-filter__full main-full">
      <ul class="main-full__list">
        <li
          v-for="(item, index) in radios"
          :key="index"
          class="main-full__item full-unit"
        >
          <p class="full-unit__desc">
            {{ item.title }}
          </p>
          <ocToggle
            :checked="item.checked"
          />
        </li>
      </ul>
    </div>

    <!--  Объявление размещено  -->
    <BlockCheckboxes
      :checkboxes="adPlaced.checkboxes"
      :name="adPlaced.name"
      :more="adPlaced.more"
      :title="adPlaced.title"
      :count="adPlaced.count"
      @input="updateValue(adPlaced.name, $event)"
    />

    <ocRangeSlider
      type="°С"
      :from="0"
      :to="40"
    />
  </div>
</template>

<script>
import BlockCheckboxes from './block-checkboxes'
import ocToggle from '~/components/ocToggle'
import ocRangeSlider from '~/components/ocRangeSlider'

export default {
  name: 'Main',
  components: { ocToggle, BlockCheckboxes, ocRangeSlider },
  data () {
    return {
      result: {},
      radios: [
        { title: 'Специальные предложения и скидки', checked: false },
        { title: 'Круглосуточная регистрация', checked: false },
        { title: 'Возможность оплаты онлайн', checked: false }
      ],
      adPlaced: {
        title: 'Объявление размещено',
        more: true,
        name: 'ad-placed',
        count: 5,
        checkboxes: [
          { label: 'Частное лицо', value: 'private-person' },
          { label: 'Отель', value: 'otels' },
          { label: 'Компания', value: 'company' },
          { label: 'Гостиница', value: 'hotel' }
        ]
      }
    }
  },
  methods: {
    updateValue (field, value) {
      console.log('field ', field)
      console.log('value ', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-filter
  padding 0 18px
  padding-bottom: 100px

  box-sizing border-box
.main-full
  padding: 26px 0

  border-bottom 1px solid #F3F3F3
  &__list
    margin: 0
    padding: 0

    list-style none

  &__item
    display flex
    align-items center
    justify-content space-between
    margin-bottom: 20px

    &:last-child
      margin-bottom: 0

  & .full-unit
      &__desc
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        color: #272528;

@media (min-width: 720px)
  .main-filter
    padding: 0 40px
    padding-bottom 20px

  .main-full
    padding: 35px 0

    &__item
      margin-bottom 24px

    & .full-unit
        &__desc
          font-size 16px
</style>
