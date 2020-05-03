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
    activeSlide () {
      return this.activeIndex * this.widthItem
    },
    maxWidthWrapper () {
      if (this.widthWindow >= 1280) { // set
        return this.widthItem * this.countColumn
      } else {
        return this.widthWindow
      }
    }
  },
  methods: {
    carouselPrev () {
      if (this.activeIndex > 0) {
        this.activeIndex -= this.countColumn

        if (this.activeIndex < 1) {
          this.activeIndex = 0
        }

        this.posX = -this.activeIndex * this.widthItem
      }
    },
    carouselNext () {
      if (this.widthWrapper < this.widthItem * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
      }

      if (this.activeIndex + this.countColumn >= this.items.length - 1) {
        this.activeIndex = this.items.length - this.countColumn
        this.posX = -this.activeIndex * this.widthItem

        return null
      }

      if (this.activeIndex + this.countColumn * 2 > this.items.length - 1) {
        this.activeIndex = this.items.length - this.countColumn
        this.posX = -this.activeIndex * this.widthItem

        return null
      }

      if (this.activeIndex + this.countColumn < this.items.length - 1) {
        this.activeIndex += this.countColumn
        this.posX = -this.activeIndex * this.widthItem

        return null
      }
    },
    mouseOver () {
      this.isOver = true
    },
    mouseOut () {
      this.isOver = false
    },
    handlerResize (e) {
      this.widthWindow = window.screen.width

      if (this.widthWrapper >= this.widthItem * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
      }

      if (this.widthWrapper !== this.$refs.carousel.clientWidth) {
        this.widthWrapper = this.$refs.carousel.clientWidth
      }
    },
    handlerScroll (e) {
      if (!this.scroll) {
        // e.preventDefault()

        return false
      }

      this.scrollLeft = e.target.scrollLeft

      const remSpace = (this.mainWidth - this.scrollLeft) / this.widthOutMargin // count card in remaining space
      this.activeIndex = this.items.length - Math.round(remSpace)
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
      this.heightItem = this.$refs.list.children[0].clientHeight

      if (marginRight > 0) {
        this.widthItem = this.$refs.list.children[0].clientWidth + marginRight // For card with margin
      } else {
        this.widthItem = this.$refs.list.children[0].clientWidth
      }

      this.widthOutMargin = this.$refs.list.children[0].clientWidth

      this.mainWidth = this.widthItem * this.items.length
      this.widthWrapper = this.$refs.carousel.clientWidth

      if (this.widthWrapper < this.widthItem * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
      } else {
        this.countColumn = this.column
      }
    }

    window.addEventListener('resize', this.handlerResize)

    this.widthWindow = window.screen.width
  },
  beforeDestroy () {
    window.removeEventListener('resize')
  },
  data () {
    return {
      mainWidth: '',
      scrollLeft: 0,
      widthWrapper: 0,
      widthWindow: 0,
      widthOutMargin: 0,
      heightItem: 0,
      duration: 600,
      activeIndex: 0,
      countColumn: 0,
      widthItem: 0,
      offset: 0,
      isOver: false,
      posX: 0
    }
  }
}
