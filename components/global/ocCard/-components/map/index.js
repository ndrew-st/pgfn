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
      mainWidth: 0
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  }
}
