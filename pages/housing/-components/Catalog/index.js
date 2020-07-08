export default {
  props: {
    coords: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'most'
    },
    list: {
      type: Array,
      default: () => []
    },
    city: { // Need for getting center main map
      type: String,
      required: true,
      default: 'Moscow'
    }
  },
  data () {
    return {
      geo: []
    }
  }
  // async created () {
  //   if (this.title) {
  //     const data = await this.$api.cities.getCenterMainMap(this.city)
  //
  //     if (!data.error) {
  //       this.geo = data.geo
  //     }
  //   }
  // }
}
