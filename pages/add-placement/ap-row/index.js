import ApSums from '../ap-sums/index.vue'

export default {
  components: {
    ApSums
  },
  props: {
    item: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      checked: false
    }
  }
}
