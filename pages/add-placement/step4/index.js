import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApTimeSelect from '../ap-time-select'
import WeekTime from '../blocks/week-time'

export default {
  components: {
    ApButton,
    ApRadio,
    ApTimeSelect,
    WeekTime
  },
  data () {
    return {
      typeOfReservation: '0',
      cancellationPolicy: '0',
      timeForCalls: 0,
      timeForCallsStart: 0,
      timeForCallsFinish: 0,
      pickUpTime: 0,
      pickUpTimeStart: '',
      pickUpTimeFinish: '',
      departureTime: 0,
      departureTimeStart: '',
      departureTimeFinish: ''
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    },
    next () {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'typeOfReservation', value: this.typeOfReservation })
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'cancellationPolicy', value: this.cancellationPolicy })
      this.$emit('next')
    },
    changeDeparture (ev) {
      this.departureTime = ev
    },
    changePickUp (ev) {
      this.pickUpTime = ev
    }
  }
}
