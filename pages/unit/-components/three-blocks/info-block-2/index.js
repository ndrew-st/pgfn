import daysWeek from '~/constants/daysWeek'

import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    times: {
      type: Object,
      default: () => ({

      })
    }
  },
  computed: {
    departureTime () {
      const { departureTime } = this.times

      if (departureTime.length) {
        return departureTime.map(item => `${daysWeek[item.day]} с ${this.getTime(item.start)} по ${this.getTime(item.end)}`)
      }
    },
    pickUpTime () {

    },
    timeForCalls () {

    }
  },
  methods: {
    getTime (data) {
      console.log('date ', new Date(data))

      return '12:00'
    }
  },
  mounted () {
    console.log('times ', this.times)
  },
  data () {
    return {
      current: 'standard'
    }
  }
}
