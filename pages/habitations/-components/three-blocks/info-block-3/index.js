import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    onlineBooking: {
      type: Array,
      default: []
    }
  }
}
