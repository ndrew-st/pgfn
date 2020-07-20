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
  methods: {
    getTimeArr (name) {
      if (!this.times[name]) {
        return
      }

      if (this.times[name].length < 7) {
        return this.times[name].map(item => `${daysWeek[item.day]} с ${this.getTime(item.intervalTime.start)} по ${this.getTime(item.intervalTime.end)}`)
      }

      if (this.checkAnyDayTime(this.times[name][1], this.times[name][0])) {
        return ['В любое время']
      }

      const res = this.checkAnyTime(this.times[name])

      if (res) {
        return [`Все дни с ${res[0]} по ${res[1]}`]
      }
    },
    checkAnyDayTime (start, end) {
      return this.getTime(start.intervalTime.start) === '00:00' && this.getTime(end.intervalTime.end) === '23:59'
    },
    checkAnyTime (data) {
      const start = {}
      const end = {}

      data.forEach((item) => {
        Object.assign(start, { [item.intervalTime.start]: null })
        Object.assign(end, { [item.intervalTime.end]: null })
      })

      return Object.keys(start).length < 2 && Object.keys(end).length < 2 ? [ this.getTime(data[0].intervalTime.start), this.getTime(data[0].intervalTime.end) ] : false
    },
    getTime (data) {
      return `${new Date(data).getHours().toString().length < 2 ? 0 + new Date(data).getHours().toString() : new Date(data).getHours().toString()}:${new Date(data).getMinutes().toString().length < 2 ? 0 + new Date(data).getMinutes().toString() : new Date(data).getMinutes().toString()}`
    }
  },
  data () {
    return {
      current: 'standard'
    }
  }
}
