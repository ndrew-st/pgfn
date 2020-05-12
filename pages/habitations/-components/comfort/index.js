import ComfortItem from './comfort-item/index.vue'

export default {
  components: {
    ComfortItem
  },
  props: {
    comfort: {
      type: Array,
      required: true,
      default: []
    }
  },
  data () {
    return {
      showAll: false
    }
  },
  computed: {
    orderedComfort () {
      this.comfort.sort((a, b) => {
        if (a.order > b.order) {
          return 1
        }
        if (a.order === b.order) {
          return 0
        }
        if (a.order < b.order) {
          return -1
        }
      })
      return this.comfort
    }
  }
}
