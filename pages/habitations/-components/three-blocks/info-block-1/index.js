import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    tariffs: {
      type: Array,
      default: []
    }
  }
}
