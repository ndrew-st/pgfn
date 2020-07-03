import ApTimeSelect from '../../../ap-time-select'
import ApCheckbox from '../../../ap-checkbox'

export default {
  components: {
    ApTimeSelect,
    ApCheckbox
  },
  props: {
    day: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      timeStart: '',
      timeFinish: '',
      checked: false
    }
  },
  methods: {
    changeStart (ev) {
      this.timeStart = ev
      this.checkState()
    },
    changeFinish (ev) {
      this.timeFinish = ev
      this.checkState()
    },
    checkState (ev) {
      if (ev !== undefined) {
        this.checked = ev
      }
      if (this.checked) {
        this.$store.dispatch('placement/weekDayIn', {
          sector: this.type,
          weekDay: this.day.id,
          timeStart: this.timeStart,
          timeFinish: this.timeFinish
        })
      } else {
        this.$store.dispatch('placement/weekDayOut', {
          sector: this.type,
          weekDay: this.day.id
        })
      }
    }
  }
}
