import InfoBlock1 from './info-block-1/index.vue'
import InfoBlock2 from './info-block-2/index.vue'
import InfoBlock3 from './info-block-3/index.vue'

export default {
  components: {
    InfoBlock1,
    InfoBlock2,
    InfoBlock3
  },
  props: {
    tariffs: {
      type: Array,
      default: []
    },
    prices: {
      type: Array,
      default: []
    },
    onlineBooking: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      picked: 0
    }
  }
}
