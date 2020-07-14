import Address from '../Address'

export default {
  components: { Address },
  props: {
    content: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      coords: [this.content.coords.lat, this.content.coords.lon]
    }
  }
}
