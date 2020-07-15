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
      // coords: this.content ? this.content.geo : { lat: 45.389194, lon: 33.993751 }
      coords: { lat: 45.389194, lon: 33.993751 }
    }
  }
}
