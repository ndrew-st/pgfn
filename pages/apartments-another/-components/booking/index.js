import OcSelectList from '@/components/ocSelectList/index.vue'
import OcDateRange from '@/components/ocDateRange/index.vue'

export default {
  components: {
    OcSelectList,
    OcDateRange
  },
  data: () => ({
    items1: [
      {
        name: '2 взрослых',
        flag: true,
        icon: 'icon item'
      },
      {
        name: '3 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '4 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '5 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '999999999999 взрослых',
        flag: false,
        icon: 'icon intem'
      }
    ],
    items2: [
      {
        name: '1 ребёнок',
        flag: false,
        icon: 'icon item'
      },
      {
        name: '2 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '3 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '4 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '5 детей',
        flag: false,
        icon: 'icon intem'
      }
    ],
    dayList: [],
    occList: [{ start: new Date(2020, 3, 12), end: new Date(2020, 3, 15) },
      { start: new Date(2020, 4, 21), end: new Date(2020, 4, 21) }],
    inputValue: 'Выберите даты'
  }),
  created () {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    let firstDay
    const dayWeek = today.getDay()
    if (dayWeek !== 1) {
      firstDay = today - (86400000 * (dayWeek === 0 ? 6 : (dayWeek - 1)))
    } else {
      firstDay = today
    }
    const dayList = []
    let curDay = firstDay
    for (let i = 1; i <= 91; i++) {
      let occFl = false
      this.occList.forEach((element) => {
        if (element.start <= curDay && element.end >= curDay) {
          occFl = true
        }
      })
      dayList.push({
        ind: i,
        dayOfMonth: new Date(curDay).getDate(),
        fullDate: curDay,
        past: curDay < today,
        occup: occFl,
        selected: false
      })
      curDay = curDay + 86400000
    }
    for (let i = 1; i <= 7; i++) {
      this.dayList.push([])
    }
    let cdw = 0
    dayList.forEach((element) => {
      this.dayList[cdw].push(element)
      ++cdw
      if (cdw === 7) {
        cdw = 0
      }
    })
  },
  methods: {
    changeSelect (item) {
      item.flag = !item.flag
    },
    selectInterval (par) {
      let minOcc = 9999
      let fd = 0
      let ld = 0
      this.dayList.forEach((element) => {
        element.forEach((el2) => {
          if (el2.ind <= par.end && el2.ind >= par.start && el2.occup && el2.ind < minOcc) {
            minOcc = el2.ind
          }
        })
      })

      this.dayList.forEach((element) => {
        element.forEach((el2) => {
          if (!el2.occup && !el2.past) {
            if (el2.ind <= par.end && el2.ind >= par.start && el2.ind < minOcc) {
              el2.selected = true
              if (fd === 0) {
                fd = el2.fullDate
              }
              if (ld === 0 || el2.fullDate > ld) {
                ld = el2.fullDate
              }
            } else if (el2.selected) { el2.selected = false }
          }
        })
      })
      const options = {
        // era: 'narrow',
        // year: 'numeric',
        month: 'short',
        day: 'numeric'
        // weekday: 'long',
        // timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
      }

      this.inputValue = (fd === 0 || ld === 0 ? 'Выберите даты' : 'C ' + new Date(fd).toLocaleString('ru', options) + ' по ' + new Date(ld).toLocaleString('ru', options))
    }
  }
}
