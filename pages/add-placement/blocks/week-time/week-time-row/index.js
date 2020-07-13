import ApTimeSelect from '../../../ap-time-select'
import ApCheckbox from '../../../ap-checkbox'

export default {
  components: {
    ApTimeSelect,
    ApCheckbox
  },
  props: {
    day: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    start: {
      type: String,
      default: '00:00'
    },
    end: {
      type: String,
      default: '00:00'
    }
  },
  methods: {
    // changeTime (val, type) {
    //   if (type === 'start') {
    //     this.timeStart = val
    //   } else {
    //     this.timeEnd = val
    //   }
    //   // this.checkState()
    //   // emit !!!
    // }
    // ,
    // checkState (ev) {
    //   if (ev !== undefined) {
    //     this.checked = ev
    //   }
    //   if (this.checked) {
    //     // this.$store.dispatch('placement/weekDayIn', {
    //     //   sector: this.type,
    //     //   weekDay: this.day.id,
    //     //   timeStart: this.timeStart,
    //     //   timeFinish: this.timeFinish
    //     // })
    //   } else {
    //     // this.$store.dispatch('placement/weekDayOut', {
    //     //   sector: this.type,
    //     //   weekDay: this.day.id
    //     // })
    //   }
    // }
  }
}
