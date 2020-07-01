export default {
  props: {
    item: {
      type: Object,
      default: () => ({

      })
    },
    coords: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      mainWidth: 0,
      titleHeight: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.titleHeight = this.$refs.title.clientHeight

      console.log('this.titleHeight ', this.titleHeight)
    })
  }
}
