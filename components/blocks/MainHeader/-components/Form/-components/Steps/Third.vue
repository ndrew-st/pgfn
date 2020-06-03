<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Добавить гостей
    </h3>

    <div class="step-container__container">
      <ul class="step-container__list-counter">
        <li
          v-for="item in list"
          :key="item.title"

          class="step-container__item-counter"
        >
          <Counter
            :key="date"
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
import Counter from '~/components/ocCounter'

export default {
  components: { Counter },
  data () {
    return {
      date: new Date().toString(),
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

      this.$emit('input', this.peoples)
    }
  }
}
</script>

<style lang="stylus">
.step-container
  &__container
    margin-top 50px

  &__list-counter
    margin 0
    padding 0

    list-style none

  &__item-counter
    margin-bottom 34px

    &:last-child
      margin-bottom 0
</style>
