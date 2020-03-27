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
    dayList: []
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
      dayList.push({
        ind: i,
        day: new Date(curDay).getDate(),
        past: curDay < today,
        occup: i > 15 && i < 19,
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
      console.log('par ' + JSON.stringify(par))
      this.dayList.forEach((element) => {
        element.forEach((el2) => {
          if (el2.ind <= par.end && el2.ind >= par.start) {
            el2.selected = true
          } else { el2.selected = false }
        })
      })
    }
  }
}
