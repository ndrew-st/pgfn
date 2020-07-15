export default {
  props: {
    rules1: {
      type: Object,
      required: true,
      default: null
    },
    rules2: {
      type: Array,
      required: true,
      default: []
    }
  },
  computed: {
    limits () {
      return this.rules2.slice(0, 3)
    }
  },
  mounted () {
    console.log('rules1 ', this.rules1)
  }
}
