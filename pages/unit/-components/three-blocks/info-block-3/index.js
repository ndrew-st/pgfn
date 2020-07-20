import typeOfReservation from '~/constants/typeOfReservation'
import cancellationPolicy from '~/constants/cancellationPolicy'

import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  computed: {
    reservation () {
      return typeOfReservation
    },
    policy () {
      return cancellationPolicy
    }
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
