import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApTimeSelect from '../ap-time-select'
import WeekTime from '../blocks/week-time'
import TimeSelectBlock from './time-select-block'

export default {
  components: {
    ApButton,
    ApRadio,
    ApTimeSelect,
    WeekTime,
    TimeSelectBlock
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
    changeRadio (val, type) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: type, value: val })
    },
    next () {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'typeOfReservation', value: this.typeOfReservation })
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'cancellationPolicy', value: this.cancellationPolicy })
      this.$emit('next')
    },
    changeTimeForCalls (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'timeForCalls', value: val })
    },
    changePickUpTime (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'pickUpTime', value: val })
    },
    changeDepartureTime (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'departureTime', value: val })
    }
  }
}
