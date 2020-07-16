import ApRadio from '../../../add-placement/ap-radio'
import ApTimeSelect from '../../../add-placement/ap-time-select'
import { getStateArray } from '../../../add-placement/step4/getStateArray'

export default {
  data () {
    return {
      selectedValue: 0,
      timeStart: '10:00',
      timeEnd: '18:00'
    }
  },
  components: {
    ApRadio,
    ApTimeSelect
  },
  methods: {
    change (val) {
      this.selectedValue = val
      switch (val) {
        case 0:
          this.$emit('changeTime', getStateArray())
          break
        case 1:
          this.$emit('changeTime', getStateArray(this.timeStart, this.timeEnd))
          break
      }
    },
    changeTime (val, type) {
      if (type === 'start') {
        this.timeStart = val
      } else if (type === 'end') {
        this.timeEnd = val
      }
      if (this.selectedValue === 1) {
        this.$emit('changeTime', getStateArray(this.timeStart, this.timeEnd))
      }
    }
  }
}
