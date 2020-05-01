import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    prices: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      picked: 0
    }
  }
}
