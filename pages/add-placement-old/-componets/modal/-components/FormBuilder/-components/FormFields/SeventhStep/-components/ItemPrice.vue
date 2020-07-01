<template>
    <div class="item-price">
      <label class="item-price__label item-price__label--price">
        {{label}}
        <input
          v-model.number="price"
          class="item-price__input"
          type="text">
      </label>
      <label class="item-price__label item-price__label--pledge">
        {{subLabel}}
        <input
          v-model.number="pledge"
          class="item-price__input"
          type="text">
      </label>
    </div>
</template>

<script>
export default {
  name: 'ItemPrice',
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    subLabel: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      price: null,
      pledge: null,
      result: {}
    }
  },
  watch: {
    price (newVal) {
      this.updateValue('price', newVal)
    },
    pledge (newVal) {
      this.updateValue('pledge', newVal)
    }
  },
  created () {
    if (this.value) {
      this.price = this.value.price
      this.pledge = this.value.pledge
    }
  },
  methods: {
    updateValue (field, val) {
      this.result = {
        ...this.result,
        [field]: val
      }

      this.$emit('input', this.result)
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-price
  display flex
  justify-content space-between
  margin-bottom 20px

  &__label
    position relative

    display flex
    width 48%
    justify-content space-between

    &:after
      content '₽'
      position absolute
      top 0
      bottom 0
      right 5px

      display block
      margin auto
      margin-top 2px

      color black

  &__input
    display block
    width 120px
    height 25px
    padding 0 10px
    padding-right 15px

    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    box-sizing: border-box;
</style>
