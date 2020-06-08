export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      current: this.currentTab || ''
    }
  }
}
