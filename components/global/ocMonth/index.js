export default {
  props: {
    mode: {
      type: String,
      default: 'start'
    },
    occupiedDates: {
      type: Array,
      default: () => []
    },
    curSelDate: {
      type: Date
    },
    curOppDay: {
      type: String
    }
  },
  data () {
    return {
      monthName: '',
      days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
      dArray: [],
      selDate: null,
      flOccNone: false
    }
  },
  methods: {
    increase () {
      this.currentFirstDate.setMonth(this.currentFirstDate.getMonth() + 1)
      this.daysArray()
    },
    reduce () {
      this.currentFirstDate.setMonth(this.currentFirstDate.getMonth() - 1)
      this.daysArray()
    },
    select () {
      if (event.target.classList.contains('selected')) {
        this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].sel = false
        this.selDate = null
        this.$emit('changeSelDate', this.mode, this.selDate)
      } else if (this.selDate === null) {
        if (this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].unavailable === false && this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].occ === false) {
          this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].sel = true
          this.selDate = new Date(this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].fullDate)
          this.$emit('changeSelDate', this.mode, this.selDate)
        }
      } else if (this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].unavailable === false && this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].occ === false) {
        this.dArray.forEach((element) => {
          const selCell = element.da.find(item => item.sel === true)
          if (selCell !== undefined) {
            selCell.sel = false
          }
        })
        this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].sel = true
        this.selDate = new Date(this.dArray[event.target.attributes.ind1.value].da[event.target.attributes.ind2.value].fullDate)
        this.$emit('changeSelDate', this.mode, this.selDate)
      }
    },
    checkOcc (day) {
      let res = false
      for (let i = 0; i < this.occupiedDates.length; i++) {
        // debugger
        if (day <= this.occupiedDates[i].finish && day >= this.occupiedDates[i].start) {
          res = true
          break
        }
      }
      return res
    },
    checkOccInterval (day) {
      if (this.flOccNone && this.mode === 'start') {
        return false
      }

      let res = false
      for (let i = 0; i < this.occupiedDates.length; i++) {
        // debugger
        // if (filters <= this.occupiedDates[i].finish && filters >= this.occupiedDates[i].start) {
        //   res = true
        //   break
        // }
        if (this.mode === 'start') {
          if ((this.curOppDay > this.occupiedDates[i].start || this.curOppDay > this.occupiedDates[i].finish) &&
            (day <= this.occupiedDates[i].start || day <= this.occupiedDates[i].finish)) {
            res = true
            break
          }
        } else if ((this.curOppDay < this.occupiedDates[i].start || this.curOppDay < this.occupiedDates[i].finish) &&
          (day >= this.occupiedDates[i].start || day >= this.occupiedDates[i].finish)) {
          res = true
          break
        }
      }
      if (res === false) {
        this.flOccNone = true
      }
      return res
    },
    daysArray () {
      const weekDay = new Date(this.currentFirstDate).getDay()
      const emptyCount = (weekDay === 0 ? 6 : weekDay - 1)
      const da = [] // filters array
      let cda = [] // current filters array
      let key = 0
      this.flOccNone = false
      for (let i = 1; i <= emptyCount; i++) {
        cda.push({ key2: key, empty: true })
        key += 1
      }
      let weekCounter = emptyCount
      const curMonth = this.currentFirstDate.getMonth()
      const curDate = new Date(this.currentFirstDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      while (curDate.getMonth() === curMonth) {
        weekCounter += 1
        // debugger
        cda.push({
          key2: key,
          empty: false,
          unavailable: curDate < today ||
          (this.curOppDay === null ? false : (this.mode === 'start' ? curDate > this.curOppDay : curDate < this.curOppDay)) ||
          (this.curOppDay === null ? false : this.checkOccInterval(curDate)),
          occ: this.checkOcc(curDate),
          date: curDate.getDate(),
          fullDate: new Date(curDate),
          sel: this.selDate === null ? false : curDate.getTime() === this.selDate.getTime()
        })
        key += 1

        if (weekCounter === 7) {
          weekCounter = 0
          da.push({ key1: key, da: cda })
          cda = []
          key += 1
        }
        curDate.setDate(curDate.getDate() + 1)
      }
      if (cda.length > 0) {
        da.push({ key1: key, da: cda })
        key += 1
      }

      this.dArray = da
      this.monthName = this.currentFirstDate.toLocaleString('ru', { year: 'numeric', month: 'long' })
    }
  },
  created () {
    // this.currentFirstDate = (this.mode === 'start') ? this.selectedDates.start === null ? new Date() : new Date(this.selectedDates.start) : this.selectedDates.finish === null ? new Date() : new Date(this.selectedDates.finish)
    // this.currentFirstDate.setDate(1)
    // this.currentFirstDate.setHours(0, 0, 0, 0)
    // if (this.mode === 'start') {
    //   if (this.selectedDates.start !== null) {
    //     this.selDate = new Date(this.selectedDates.start)
    //     this.selDate.setHours(0, 0, 0, 0)
    //   }
    // } else if (this.selectedDates.finish !== null) {
    //   this.selDate = new Date(this.selectedDates.finish)
    //   this.selDate.setHours(0, 0, 0, 0)
    // }
    this.currentFirstDate = this.curSelDate === null ? new Date() : new Date(this.curSelDate)
    this.currentFirstDate.setDate(1)
    this.currentFirstDate.setHours(0, 0, 0, 0)
    this.selDate = this.curSelDate === null ? null : new Date(this.curSelDate)

    this.daysArray()
  },
  watch: {
    curOppDay () {
      this.selDate = this.curSelDate === null ? null : new Date(this.curSelDate)
      this.daysArray()
    }
  }
}
