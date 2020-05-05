export default {
  props: {
    nav: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    scroll: {
      type: Boolean,
      default: true
    },
    margin: {
      type: Number,
      default: 0
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 1
    },
    dots: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maxWidthWrapper () {
      if (this.widthWindow <= 1280) { // set
        return this.widthWindow
      }
    }
  },
  methods: {
    carouselPrev () {
      this.activeIndex -= 1

      if (this.activeIndex < 0) {
        this.activeIndex = 0
      }

      if (this.activeIndex < this.items.length - 3 && this.activeIndex > 1) {
        this.posDots += this.widthDot
      }

      // debugger
      if (this.posX !== -this.activeIndex * this.widthItem) {
        this.posX = -this.activeIndex * this.widthItem
      } else {
        this.$refs.wrapper.scrollLeft = 0
      }
    },
    carouselNext () {
      // Dots
      if (this.activeIndex > 1 && this.activeIndex < this.items.length - 3) {
        this.posDots -= this.widthDot
      }

      // debugger

      this.activeIndex += 1

      if (this.posX !== -this.activeIndex * this.widthItem) {
        this.posX = -this.activeIndex * this.widthItem
      } else {
        this.posX = -this.listWidth
      }
    },
    handlerResize () {
      this.widthWindow = window.screen.width

      if (this.widthWrapper !== this.$refs.carousel.clientWidth) {
        this.widthWrapper = this.$refs.carousel.clientWidth
      }

      if (this.widthWrapper >= this.widthItem * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
      }
    },
    handlerScroll (e) {
      if (this.timeout !== false) {
        clearTimeout(this.timeout)
      }

      const self = this
      const ev = e

      this.timeout = setTimeout(function () {
        self.scrollLeft = ev.target.scrollLeft

        const remSpace = (self.listWidth - ev.target.scrollLeft) / self.widthItem // count card in remaining space
        const resIndex = self.items.length - Math.round(remSpace)

        self.activeIndex = resIndex < 0 ? 0 : resIndex
      }, 1000)
    },
    isConvex (item) {
      if (this.activeIndex < 1) {
        return item === this.activeIndex || item - 1 === this.activeIndex || item - 2 === this.activeIndex
      } else if (this.activeIndex > 1 && this.activeIndex < this.items.length - 2) {
        return item === this.activeIndex || item - 1 === this.activeIndex || item + 1 === this.activeIndex
      } else {
        return item === this.activeIndex || item + 1 === this.activeIndex || item + 2 === this.activeIndex
      }
    },
    isSmall (item) {
      if (this.activeIndex < 2) {
        return item === 4
      }

      if (this.activeIndex > this.items.length - 2) {
        return item === this.items.length - 5
      }
    }
  },
  watch: {
    posX (val) {
      this.$refs.wrapper.scrollLeft = -val
    }
  },
  mounted () {
    if (this.$refs.list.children[0]) {
      const marginRight = parseInt(getComputedStyle(this.$refs.list.children[0], true).marginRight)

      if (marginRight > 0) {
        this.widthItem = this.$refs.list.children[0].clientWidth + marginRight // For card with margin
      } else {
        this.widthItem = this.$refs.list.children[0].clientWidth
      }

      this.widthOutMargin = this.$refs.list.children[0].clientWidth
      this.listWidth = this.widthItem * this.items.length
      this.widthWrapper = this.$refs.carousel.clientWidth

      if (this.widthWrapper < this.widthOutMargin * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthOutMargin)
      } else {
        this.countColumn = this.column
      }
    }

    if (this.$refs.dots && this.$refs.dots.children[6]) {
      const marginDot = parseInt(getComputedStyle(this.$refs.dots.children[6], true).marginRight)
      this.widthDot = this.$refs.dots.children[6].clientWidth + marginDot
    }

    if (process.browser) {
      window.addEventListener('resize', this.handlerResize)
      this.widthWindow = window.screen.width
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('resize')
    }
    
  },
  data () {
    return {
      listWidth: 0,
      scrollLeft: 0,
      dir: 'right',
      widthWrapper: 0,
      widthWindow: 0,
      widthOutMargin: 0,
      activeIndex: 0,
      countColumn: 0,
      widthItem: 0,
      timeout: false,
      posX: 0,
      posDots: 0,
      widthDots: 0,
      widthDot: 0
    }
  }
}
