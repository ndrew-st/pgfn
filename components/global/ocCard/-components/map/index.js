export default {
  props: {
    item: {
      type: Object,
      default: () => ({

      })
    },
    coords: {
      type: Object,
      default: () => ({})
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
      if (this.$refs.title) {
        this.titleHeight = this.$refs.title.clientHeight
      }
    })
  }
}
