<template>
  <div class="main-box">
    <div v-if="(type = 'multiselect')">
      <div
        class="list-top"
        v-on:click="isActive = !isActive">
        {{ topLine }}
      </div>

      <div
        class="list-box"
        v-bind:class="{ active: isActive }">
        <div
          class="list-item"
          v-for="item in items"
          :key="item"
          v-bind:class="{ active: isActive }"
          @click="changeSelect(item)"
        >
          <img
          class="img-v"
          v-if="item.flag"
          src="@/static/icons/v.png">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div v-else>
      <p>singleSelect</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'items'],
  data: () => ({
    isActive: false
  }),
  computed: {
    topLine () {
      let topLine = ''
      this.items.forEach((element) => {
        topLine = topLine + (element.flag ? (topLine === '' ? '' : ' + ') + element.name : '')
      })
      if (topLine === '') {
        topLine = 'Выберите пункты'
      }
      return topLine
    }
  },
  methods: {
    changeSelect (item) {
      this.$emit('changeSelect', item)
      if (this.type !== 'multiselect') {
        this.isActive = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-box
  position relative

.list-top
  border 2px solid rgb(170, 170, 170)
  border-radius 4px
  width 232px
  height 38px
  text-align center
  line-height 38px
  cursor pointer

.list-box
  visibility hidden
  max-height 0
  position absolute
  border 2px solid rgb(170, 170, 170)
  border-radius 0 0 4px 4px

.list-item
  visibility hidden
  max-height 0
  background-color #fff
  cursor pointer
  text-align center
  width 232px
  border-bottom 1px solid #e6e8ea

.active
  visibility visible
  max-height initial
  line-height 38px

.img-v
  width 15px
  height 15px
  margin-right 15px
</style>
