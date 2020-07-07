import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    prices: {
      type: Object,
      default: () => ({})
    }
  }
}
