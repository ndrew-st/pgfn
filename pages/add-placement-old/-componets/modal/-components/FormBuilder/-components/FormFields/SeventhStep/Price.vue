<template>
  <div class="modal-price">
    <h3 class="modal-price__title">
      Залог
    </h3>
    <!-- <template
      v-for="(item, index) in params.list"
      :key="index"
    >
      <ItemPrice
        :label="item.label"
        :sub-label="item.subLabel"
        :value="result[item.name] || {}"
        @input="updateValue(item.name, $event)"
      />
    </template> -->
    <p class="modal-price__attention">
      {{ params.attention }}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import ItemPrice from './-components/ItemPrice'

export default {
  name: 'Price',
  components: { ItemPrice },
  props: {
    params: {
      type: Object,
      default: () => {
      }
    },
    setValue: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      result: {}
    }
  },
  created () {
    if (this.setValue) {
      this.result = this.setValue
    } else {
      this.params.list.map(item => Vue.set(this.result, item.name, null))
    }
  },
  methods: {
    updateValue (name, val) {
      this.result[name] = val

      this.$emit('input', this.result)
    }
  }
}
</script>

<style lang="stylus">
  .modal-price
    position relative

    max-width 500px

    &__title
      position absolute
      top -25px
      right 80px

      display inline-block

      font-weight 400
      font-size: 16px;
      color: rgb(115, 115, 115);
</style>
