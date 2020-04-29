import OcMonth from './ocMonth/index.vue'

export default {
  components: { OcMonth },
  props: ['selectedDates', 'occupiedDates'],
  data: () => ({
    active: false,
    currentFirstDate: null,
    curSelStart: null,
    curSelFinish: null
  }),
  created () {
    if (this.selectedDates.start !== null) {
      this.curSelStart = new Date(this.selectedDates.start)
      this.curSelStart.setHours(0, 0, 0, 0)
    }
    if (this.selectedDates.finish !== null) {
      this.curSelFinish = new Date(this.selectedDates.finish)
      this.curSelFinish.setHours(0, 0, 0, 0)
    }
    for (let i = 0; i < this.occupiedDates.length; i++) {
      this.occupiedDates[i].start.setHours(0, 0, 0, 0)
      this.occupiedDates[i].finish.setHours(0, 0, 0, 0)
      if (!((this.selectedDates.start < this.occupiedDates[i].start && this.selectedDates.finish < this.occupiedDates[i].start) ||
       (this.selectedDates.start > this.occupiedDates[i].finish && this.selectedDates.finish > this.occupiedDates[i].finish))) {
        this.selectedDates.start = null
        this.selectedDates.finish = null
        this.curSelStart = null
        this.curSelFinish = null
      }
    }
  },
  computed: {
    interval () {
      const options = {
        // era: 'narrow',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
        // weekday: 'long',
        // timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
      }

      return (this.curSelStart === null || this.curSelFinish === null ? 'дд.мм.гггг – дд.мм.гггг' : '' + new Date(this.curSelStart).toLocaleString('ru', options) + ' - ' + new Date(this.curSelFinish).toLocaleString('ru', options))
    }
  },
  methods: {
    changeSelDate (mode, newSelDate) {
      if (mode === 'start') {
        this.curSelStart = newSelDate === null ? null : new Date(newSelDate)
      } else {
        this.curSelFinish = newSelDate === null ? null : new Date(newSelDate)
      }
    },
    clear () {
      this.curSelStart = null
      this.curSelFinish = null
    },
    save () {
      this.active = false
    }
  }
}
