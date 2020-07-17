import typeOfReservation from '~/constants/typeOfReservation'
import cancellationPolicy from '~/constants/cancellationPolicy'

export default {
  props: {
    rules1: {
      type: Object,
      required: true,
      default: null
    },
    rules2: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    limits () {
      return this.rules2.length ? this.rules2.slice(0, 3) : this.rules2
    },
    reservation () {
      return typeOfReservation
    },
    policy () {
      return cancellationPolicy
    }
  }
}
