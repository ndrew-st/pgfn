export default {
  props: {
    nav: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    activeItem: {
      type: Number,
      default: null
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
    _updateWidthItem () {
      if (this.$refs.list.children.length) {
        const marginRight = parseInt(getComputedStyle(this.$refs.list.children[0], true).marginRight)
        this.widthItem = this.$refs.list.children[0].clientWidth + marginRight
      }
    },
    _updateHeightItem () {
      if (this.$refs.listHeight.children.length) {
        const marginBottom = parseInt(getComputedStyle(this.$refs.listHeight.children[0], true).marginBottom) || 0
        this.heightItem = this.$refs.listHeight.children[0].clientHeight + marginBottom
      }
    },
    _updatePosX (arrow) {
      if (this.posX === -this.activeIndex * this.widthItem) {
        if (arrow === 'next') {
          this.posX = -this.listWidth
        } else if (arrow === 'prev') {
          this.$refs.wrapper.scrollLeft = 0
        }
      } else {
        this.posX = -this.activeIndex * this.widthItem
      }
    },
    _updatePosDot (arrow) {
      if (this.activeIndex > 1 && this.activeIndex < this.items.length - 3) {
        if (arrow === 'prev') {
          this.posDots += this.widthDot
        } else if (arrow === 'next') {
          this.posDots -= this.widthDot
        }
      }
    },
    _updateHorizontalCarousel () {
      if (this.$refs.list.children.length) {
        this._updateWidthItem()

        this.widthOutMargin = this.$refs.list.children[0].clientWidth
        this.listWidth = this.widthItem * this.items.length
        this.widthWrapper = this.$refs.carousel.clientWidth

        if (this.widthWrapper < this.widthOutMargin * this.column) {
          this.countColumn = Math.floor(this.widthWrapper / this.widthOutMargin)
        } else {
          this.countColumn = this.column
        }
      }
    },
    _updateVerticalCarousel () {
      if (this.$refs.listHeight.children.length) {
        this._updateHeightItem()

        if (this.heightItem > 0) {
          this.maxHeightWrapper = this.heightItem * this.column

          this.posY = this.heightItem
        }
      }
    },
    carouselPrev () {
      this.arrow = 'prev'

      if (this.activeIndex < 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex -= 1
      }

      this._updatePosX('prev')
    },
    carouselNext () {
      this.arrow = 'next'

      this.activeIndex += 1

      this._updatePosX('next')
    },
    handlerResize (e) {
      if (e.target.screen.width === this.widthWindow) {
        return false
      }

      this.widthWindow = window.screen.width

      this._updateWidthItem()

      // update vertical carousel
      if (e.target.screen.width >= 1280) {
        this.date = Date.now().toString() + Math.random()

        this._updateVerticalCarousel()
      }

      this.posX = 0
      this.activeIndex = 0
      this.$emit('updateIndex', 0)

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
      }, 700)
    },
    isConvex (item) {
      if (this.activeIndex < 1) {
        return item === this.activeIndex || item - 1 === this.activeIndex || item - 2 === this.activeIndex
      } else if (this.activeIndex >= 1 && this.activeIndex < this.items.length - 1) {
        return item === this.activeIndex || item - 1 === this.activeIndex || item + 1 === this.activeIndex
      } else {
        return item === this.activeIndex || item + 1 === this.activeIndex || item + 2 === this.activeIndex
      }
    },
    isSmall (item) {
      if (this.activeIndex < 4) {
        return item === 4
      }

      if (this.activeIndex > this.items.length - 3) {
        return item === this.items.length - 5
      }
    },
    isCentered (item) {
      if (this.activeIndex > this.items.length - 3) {
        return item === this.items.length - 5
      }
    },
    _sizeDiffDots (index) {
      return this.$refs.dots.children[index].getBoundingClientRect().left - this.$refs.dots.getBoundingClientRect().left - 29
    }
  },
  watch: {
    posX (val) {
      this.$refs.wrapper.scrollLeft = -val
    },
    activeIndex (val) {
      console.log('this._sizeDiffDots() ', this._sizeDiffDots(val))

      if (val < 3) {
        this.posDots = 0
      } else if (val > 2 && val < this.items.length - 2) {
        this.posDots = this._sizeDiffDots(val)
      }

      if (this.vertical && val < this.items.length - 5) {
        this.posY = (val + 1) * this.heightItem
      }

      this.$emit('updateIndex', val)
    }
  },
  mounted () {
    if (this.activeItem !== null) {
      this.activeIndex = this.activeItem
      this.posX = -this.activeIndex * this.widthItem
    }

    if (this.horizontal) {
      this._updateHorizontalCarousel()

      return null
    }

    if (this.vertical) {
      this._updateVerticalCarousel()
    }

    window.addEventListener('resize', this.handlerResize)
    this.widthWindow = window.screen.width
  },
  updated () {
    if (this.activeItem !== null && this.widthItem) {
      this.activeIndex = this.activeItem
      this._updateHorizontalCarousel()

      if (!this.vertical) {
        this.posX = -this.activeIndex * this.widthItem
      }
    }

    if (this.activeItem !== null && this.activeItem !== this.activeIndex && this.heightItem > 1) {
      this.activeIndex = this.activeItem

      if (this.vertical && this.activeIndex < this.items.length - 2) {
        this.posY = (this.activeIndex + 1) * this.heightItem
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handlerResize)
  },
  data () {
    return {
      listWidth: 0,
      scrollLeft: 0,
      posY: 0,
      widthWrapper: 0,
      widthWindow: 0,
      widthOutMargin: 0,
      activeIndex: 0,
      maxHeightWrapper: 0,
      countColumn: 0,
      widthItem: 0,
      timeout: false,
      posX: 0,
      heightItem: 0,
      posDots: 0,
      arrow: '',
      date: Date.now().toString()
    }
  }
}
