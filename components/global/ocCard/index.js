import direction from './-components/direction'
import most from './-components/most'

export default {
  components: { direction, most },
  props: {
    kind: String,
    default: ''
  }
}
