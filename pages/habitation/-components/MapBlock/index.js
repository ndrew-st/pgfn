export default {
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
