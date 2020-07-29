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
  inheritAttrs: false,
  computed: {
    maxWidthWrapper () {
      return this.widthWindow <= 1280 ? this.widthWindow : 1280
    },
    length () {
      return this.items.length
    }
  },
  methods: {
    _getSize (el, feature) {
      return el ? parseInt(getComputedStyle(el, true)[feature]) : 0
    },
    _sizeDiffDots (index) {
      const { dots } = this.$refs
      return dots && dots.children[index].getBoundingClientRect().left - dots.getBoundingClientRect().left - 29
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
    _updateHorizontalCarousel () {
      this.$nextTick(() => {
        const { list, carousel } = this.$refs
        if (list && list.children.length) {
          const marginRight = this._getSize(list.children[0], 'marginRight')
          this.widthOutMargin = this._getSize(list.children[0], 'width')
          this.widthItem = this.widthOutMargin + marginRight

          this.listWidth = this.widthItem * this.length
          this.widthWrapper = carousel.clientWidth

          if (this.widthWrapper < this.widthOutMargin * this.column) {
            this.countColumn = Math.floor(this.widthWrapper / this.widthOutMargin)
          } else {
            this.countColumn = this.column
          }

          this.isShowButtons = this.length > this.countColumn
        }
      })
    },
    _updateVerticalCarousel () {
      this.$nextTick(() => {
        const { listHeight } = this.$refs
        if (listHeight && listHeight.children.length) {
          const marginBottom = parseInt(getComputedStyle(listHeight.children[0], true).marginBottom)
          this.heightItem = listHeight.children[0].clientHeight + marginBottom

          this.maxHeightWrapper = this.heightItem * this.column

          this.posY = this.heightItem
        }
      })
    },
    _updatePosDot (index) {
      if (index < 3) {
        this.posDots = 0
      } else if (index > 2 && index < this.length - 2) {
        this.posDots = this._sizeDiffDots(index)
      } else if (index === this.length - 1) {
        this.posDots = this._sizeDiffDots(index - 2)
      }
    },
    carouselPrev () {
      this.arrow = 'prev'

      if (this.activeIndex < 1) {
        this.activeIndex = this.length - 1
      } else {
        this.activeIndex -= 1
      }

      this._updatePosX('prev')
    },
    carouselNext () {
      this.arrow = 'next'

      if (this.activeIndex + 1 < this.length) {
        this.activeIndex += 1
      } else {
        this.activeIndex = 0
      }

      this._updatePosX('next')
    },
    handlerResize ({ target: { screen } }) {
      if (screen.width === this.widthWindow) {
        return false
      }

      this.widthWindow = screen.width

      // update vertical carousel
      if (screen.width >= 1280) {
        this.date = Math.random()

        setTimeout(() => {
          this._updateVerticalCarousel()
        })
      }

      this.posX = 0
      this.activeIndex = 0
      this.$emit('updateIndex', 0)

      const { carousel } = this.$refs

      if (this.widthWrapper !== carousel.clientWidth) {
        this.widthWrapper = carousel.clientWidth
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
      } else if (this.activeIndex >= 1 && this.activeIndex < this.length - 1) {
        return item === this.activeIndex || item - 1 === this.activeIndex || item + 1 === this.activeIndex
      } else {
        return item === this.activeIndex || item + 1 === this.activeIndex || item + 2 === this.activeIndex
      }
    },
    isSmall (item) {
      if (this.activeIndex < 4) {
        return item === 4
      }

      if (this.activeIndex > this.length - 3) {
        return item === this.length - 5
      }
    },
    isCentered (item) {
      if (this.activeIndex > this.length - 3) {
        return item === this.length - 5
      }
    }
  },
  watch: {
    posX (val) {
      this.$refs.wrapper.scrollLeft = -val
    },
    activeIndex (val) {
      this._updatePosDot(val)

      if (this.vertical && val < this.length - 5) {
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

    window.addEventListener('resize', this.handlerResize)
    this.widthWindow = window.screen.width

    this.$nextTick(() => {
      if (this.horizontal) {
        this._updateHorizontalCarousel()

        return null
      }

      if (this.vertical) {
        this._updateVerticalCarousel()
      }
    })
  },
  updated () {
    if (this.activeItem !== null && this.widthItem) {
      this.activeIndex = this.activeItem

      this._updateHorizontalCarousel()

      this.$nextTick(() => {
        if (!this.vertical) {
          this.posX = -this.activeItem * this.widthItem
          this._updatePosDot(this.activeIndex)
        }
      })
    }

    if (this.activeItem !== null && this.activeItem !== this.activeIndex && this.heightItem > 1) {
      this.activeIndex = this.activeItem

      if (this.vertical && this.activeIndex < this.length - 2) {
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
      isShowButtons: true,
      timeout: false,
      posX: 0,
      heightItem: 0,
      posDots: 0,
      arrow: '',
      date: Math.random()
    }
  }
}
