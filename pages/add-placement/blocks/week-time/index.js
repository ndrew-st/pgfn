import WeekTimeRow from './week-time-row'

export default {
  components: {
    WeekTimeRow
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      daysArray: [
        { id: 0, name: 'Пн' },
        { id: 1, name: 'Вт' },
        { id: 2, name: 'Ср' },
        { id: 3, name: 'Чт' },
        { id: 4, name: 'Пт' },
        { id: 5, name: 'Сб' },
        { id: 6, name: 'Вс' }
      ]
    }
  }
}
