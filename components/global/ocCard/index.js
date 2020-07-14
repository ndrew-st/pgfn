import direction from './-components/direction'
import most from './-components/most'
import maps from './-components/map'

export default {
  components: { direction, most, maps },
  props: {
    kind: {
      type: String,
      default: 'most'
    }
  },
  inheritAttrs: false
}
