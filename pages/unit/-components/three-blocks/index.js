import InfoBlock1 from './info-block-1/index.vue'
import InfoBlock2 from './info-block-2/index.vue'
import InfoBlock3 from './info-block-3/index.vue'

export default {
  components: {
    InfoBlock1,
    InfoBlock2,
    InfoBlock3
  },
  props: {
    reservation: {
      type: Object,
      default: null
    },
    prices: {
      type: Object,
      default: null
    }
  },
  computed: {
    times () {
      if (this.reservation) {
        return {
          departureTime: this.reservation.departureTime,
          pickUpTime: this.reservation.pickUpTime,
          timeForCalls: this.reservation.pickUpTime
        }
      } else {
        return {}
      }
    },
    booking () {
      if (this.reservation) {
        return {
          cancellationPolicy: this.reservation.cancellationPolicy,
          typeOfReservation: this.reservation.typeOfReservation
        }
      } else {
        return {}
      }
    }
  },
  data () {
    return {
      picked: 0
    }
  }
}
