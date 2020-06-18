import direction from './-components/direction'
import most from './-components/most'

export default {
  components: { direction, most },
  props: {
    kind: {
      type: String,
      default: 'most'
    }
  },
  inheritAttrs: false
}
