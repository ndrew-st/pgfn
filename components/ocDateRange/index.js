export default {
  props: ['dayList'],
  data: () => ({
    startCell: 0,
    endCell: 0,
    prev: 0
  }),
  computed: {
    topLine () {
      return 1
    }
  },
  methods: {
    mousedownOnCell (e) {
      if (this.$el.contains(e.target)) {
        if (e.target.tagName !== 'TD') { return }
        this.startCell = e.target.getAttribute('data-value')
        this.endCell = 0
        // console.log('------on td a ' + e.target.getAttribute('data-value') + ' start ' + this.startDate + ' end ' + this.endDate)
      }
    },
    mouseupOnCell (e) {
      if (this.$el.contains(e.target)) {
        if (e.target.tagName !== 'TD') {
          this.startCell = 0
          this.endCell = 0
          // console.log('------off-near-out ' + ' start ' + this.startDate + ' end ' + this.endDate)
          return
        }e.target.getAttribute('data-value')
        this.endCell = e.target.getAttribute('data-value')
        // console.log('------off td' + e.target.getAttribute('data-value') + ' start ' + this.startDate + ' end ' + this.endDate)
      } else {
        this.startCell = 0
        this.endCell = 0
        // console.log('------off-far-out ' + ' start ' + this.startDate + ' end ' + this.endDate)
      }
    },
    mousemoveOnCell (e) {
      // console.log('------over before ' + e.target.getAttribute('data-value') + ' start ' + this.startDate + ' end ' + this.endDate)
      if (this.startCell > 0 && this.endCell === 0) {
        if (e.target.tagName !== 'TD') { return }
        if (e.target.getAttribute('data-value') === this.prev) { return }
        // console.log('------right over prev ' + this.prev)
        this.$emit('selectInterval', { start: this.startCell, end: e.target.getAttribute('data-value') })
        this.prev = e.target.getAttribute('data-value')
        console.log('------right over prev ' + this.prev)
      }
    }
  },
  mounted () {
    this.$el.addEventListener('mousedown', this.mousedownOnCell)
    this.$el.addEventListener('mousemove', this.mousemoveOnCell)
    document.addEventListener('mouseup', this.mouseupOnCell)
    // console.log('dayList ' + JSON.stringify(this.dayList))
  },
  beforeDestroy () {
    this.$el.removeEventListener('mousedown', this.mousedownOnCell)
    this.$el.removeEventListener('mousemove', this.mousemoveOnCell)
    document.removeEventListener('mouseup', this.mouseupOnCell)
  }
}
