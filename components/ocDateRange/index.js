export default {
  props: ['dayList', 'inputValue'],
  data: () => ({
    startCell: 0,
    endCell: 0,
    prev: 0,
    isActive: false
  }),
  computed: {
    topLine () {
      return 1
    }
  },
  methods: {
    mousedownOnCell (e) {
      // console.log('tn ' + e.target.tagName)
      if (this.$el.contains(e.target)) {
        if (e.target.tagName === 'TD') {
          this.startCell = e.target.getAttribute('data-value')
          this.endCell = 0
        } else if (e.target.tagName === 'INPUT') {
        }
      } else {
      }
    },
    mouseupOnCell (e) {
      if (this.$el.contains(e.target)) {
        if (e.target.tagName === 'TD') {
          this.endCell = e.target.getAttribute('data-value')
          this.$emit('selectInterval', { start: this.startCell, end: this.endCell })
        } else if (this.isActive) {
          if (this.startCell > 0 && this.endCell === 0) {
            this.startCell = 0
            this.endCell = 0
            this.$emit('selectInterval', { start: this.startCell, end: this.endCell })
          }
        }
      } else if (this.isActive) {
        if (this.startCell > 0 && this.endCell === 0) {
          this.startCell = 0
          this.endCell = 0
          this.$emit('selectInterval', { start: this.startCell, end: this.endCell })
        }
      }
    },
    mousemoveOnCell (e) {
      if (this.startCell > 0 && this.endCell === 0) {
        if (e.target.tagName !== 'TD') { return }
        if (e.target.getAttribute('data-value') === this.prev) { return }
        this.$emit('selectInterval', { start: this.startCell, end: e.target.getAttribute('data-value') })
        this.prev = e.target.getAttribute('data-value')
      }
    },
    clickOutside (e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    }
  },
  mounted () {
    document.addEventListener('mousedown', this.mousedownOnCell)
    this.$el.addEventListener('mousemove', this.mousemoveOnCell)
    document.addEventListener('mouseup', this.mouseupOnCell)
    document.addEventListener('click', this.clickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('mousedown', this.mousedownOnCell)
    this.$el.removeEventListener('mousemove', this.mousemoveOnCell)
    document.removeEventListener('mouseup', this.mouseupOnCell)
    document.removeEventListener('click', this.clickOutside)
  }
}
