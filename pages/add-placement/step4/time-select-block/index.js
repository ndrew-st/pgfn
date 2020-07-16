import ApRadio from '../../ap-radio'
import ApTimeSelect from '../../ap-time-select'
import WeekTime from '../../blocks/week-time'
import { getStateArray } from '../getStateArray'

export default {
  components: {
    ApRadio,
    ApTimeSelect,
    WeekTime
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedValue: 0,
      timeStart: '10:00',
      timeEnd: '18:00',
      block3: [
        { id: 0,
          name: 'Пн',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 1,
          name: 'Вт',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 2,
          name: 'Ср',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 3,
          name: 'Чт',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 4,
          name: 'Пт',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 5,
          name: 'Сб',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        },
        { id: 6,
          name: 'Вс',
          checked: false,
          intervalTime: {
            timeStart: '10:00',
            timeEnd: '18:00'
          }
        }
      ]
    }
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
        case 2:
          this.$emit('changeTime', getStateArray(undefined, undefined, this.block3))
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
    },
    changeDayCheckboxBlock3 (val, id) {
      // console.log('val: ' + val + ' id: ' + id)
      this.block3[id].checked = val
      this.$emit('changeTime', getStateArray(undefined, undefined, this.block3))
    },
    changeTimeBlock3 (val, id) {
      if (val.type === 'start') {
        this.block3[id].intervalTime.timeStart = val.val
      } else {
        this.block3[id].intervalTime.timeEnd = val.val
      }
      this.$emit('changeTime', getStateArray(undefined, undefined, this.block3))
    }
  },
  mounted () {
    this.change(0)
  }
}
