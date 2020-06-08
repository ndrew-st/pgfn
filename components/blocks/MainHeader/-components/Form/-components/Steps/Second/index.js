import Calendar from '~/components/global/ocMonth'

export default {
  components: { Calendar },
  data () {
    return {
      list: [
        { name: 'start' },
        { name: 'end' }
      ],
      formatDate: 'DD.MM.YYYY',
      mode: 'start',
      regNum: /^[0-9]/,
      curSelStart: new Date(),
      start: '',
      curDate: new Date().toString(),
      end: ''
    }
  },
  watch: {
    curSelStart (val) {
      console.log(val)
    },
    start (val) {
      this.$emit('input', { start: val, end: this.end })
    },
    end (val) {
      this.$emit('input', { end: val, start: this.start })
    }
  },
  methods: {
    changeSelDate (mode, newSelDate) {
      const selDate = newSelDate || new Date(newSelDate)
      const resDate = [
        this._addLeadZero(selDate.getDate()),
        this._addLeadZero(selDate.getMonth() + 1),
        selDate.getFullYear()
      ].join('.')

      if (mode === 'start') {
        this.start = resDate
      } else {
        this.end = resDate
      }
    },
    _addLeadZero (val) {
      if (+val < 10) { return '0' + val }
      return val
    },
    focus (md) {
      this.mode = md

      this.curDate = new Date().toString() // Reload calendar
    },
    keyDown (e, field) {
      // if (e.key === 'Backspace' || e.key === 'Delete') {
      //   return
      // }
      //
      // if (!this.regNum.test(e.key) || this[field].length >= 10) {
      //   e.preventDefault()
      // }
      //
      // if (this.$data[field].length === 2 || this.$data[field].length === 5) {
      //   this.$data[field] = this.$data[field] + '.'
      // }
    }
  }
}
