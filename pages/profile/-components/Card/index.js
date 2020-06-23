import most from './-components/most'
import map from './-components/map'

export default {
  components: { most, map },
  props: {
    type: {
      type: String,
      default: 'most'
    }
  }
}
