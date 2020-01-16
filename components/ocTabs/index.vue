<template>
  <div class="oc-tabs">
    <div
      v-for="(tab, index) of tabs"
      :key="index"
      :class="{ 'oc-tabs__item': true, 'oc-tabs__item_active': index == activeTab }"
      @click="changeTab(tab.value)"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTab: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeTab (val) {
      this.$emit('change-tab', val)
    }
  }
}
</script>

<style lang="stylus">
.oc-tabs
  display flex
  flex-direction row

  &__item
    cursor pointer
    padding 10px 22px
    background $gray-1
    margin-right 10px
    border-radius 4px

    &_active
      color $white
      background $violete
</style>
