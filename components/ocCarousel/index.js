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
    margin: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 1
    },
    dots: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      dafault: true
    }
  },
  computed: {
    activeSlide () {
      return this.activeIndex * this.widthItem
    },
    maxWidthWrapper () {
      return this.widthItem * this.countColumn
    }
  },
  methods: {
    carouselPrev () {
      if (this.activeIndex > 0) {
        --this.activeIndex
        this.posX = -this.activeIndex * this.widthItem
      }
    },
    carouselNext () {
      if (this.widthWrapper < this.widthItem * this.column) {
        this.countColumn = Math.min(this.widthWrapper / this.widthItem)
      }

      if (this.activeIndex + this.countColumn < this.items.length) {
        ++this.activeIndex
        this.posX = -this.activeIndex * this.widthItem
      }
    },
    touchStart (evt) {
      this.touch.startX = evt.touches[0].pageX
      this.touch.startY = evt.touches[0].pageY
      this.offset = this.$refs.list.getBoundingClientRect().left
    },
    touchMove (evt) {
      this.touch.moveX = evt.touches[0].pageX
      this.touch.moveY = evt.touches[0].pageY

      if (Math.abs(this.touch.moveX - this.touch.startX) < 40) {
        return null
      }

      if (this.offset + this.touch.moveX - this.touch.startX > 0 && this.offset === 0) {
        this.offset = -this.items.length * this.widthItem
      } else if (this.offset + this.touch.moveX - this.touch.startX < -(this.items.lenght + 1) * this.widthItem) {
        this.offset = -this.widthItem
      }

      // this.posX = this.offset + this.touch.moveX - this.touch.startX
    },
    touchEnd () {
      this.offset = this.$refs.list.getBoundingClientRect().left

      if (Math.abs(this.touch.moveX - this.touch.startX) < 40) {
        return null
      }

      this.touch.stayAtCur = !!(Math.abs(this.touch.moveX - this.touch.startX) < 40 || typeof this.touch.moveX === 'undefined')
      this.touch.dir = this.touch.startX < this.touch.moveX ? 'left' : 'right'

      if (!this.touch.stayAtCur) {
        this.touch.dir === 'left' ? this.activeIndex-- : this.activeIndex++

        if (this.activeIndex < 1) {
          this.activeIndex = 0
        } else if (this.activeIndex + this.countColumn >= this.items.length) {
          if (this.touch.dir === 'right') {
            this.activeIndex = this.items.length - this.countColumn
          }
        }
      }

      this.posX = -this.activeIndex * this.widthItem

      this.touch.startX = 0
      this.touch.startY = 0
      this.touch.moveX = 0
      this.touch.moveY = 0
    },
    mouseOver () {
      this.isOver = true
    },
    mouseOut () {
      this.isOver = false
    },
    mouseWheel (evt) {
      evt.preventDefault()

      if (this.isOver) {
        const direction = evt.deltaY
        this.offset = this.$refs.list.getBoundingClientRect().left

        if (direction > 0) { // right
          this.carouselPrev()
        } else { // left
          this.carouselNext()
        }
      }
    },
    handlerResize () {
      if (this.widthWrapper >= this.widthItem * this.column) {
        this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
      }

      if (this.widthWrapper !== this.$refs.carousel.clientWidth) {
        this.widthWrapper = this.$refs.carousel.clientWidth
      }
    }
  },
  mounted () {
    const marginRight = parseInt(getComputedStyle(this.$refs.list.children[0], true).marginRight)

    if (marginRight > 0) {
      this.widthItem = this.$refs.list.children[0].clientWidth + marginRight - 1 // For card with margin
    } else {
      this.widthItem = this.$refs.list.children[0].clientWidth

      console.log(this.widthItem)
    }

    this.widthWrapper = this.$refs.carousel.clientWidth

    if (this.widthWrapper < this.widthItem * this.column) {
      this.countColumn = Math.floor(this.widthWrapper / this.widthItem)
    } else {
      this.countColumn = this.column
    }

    window.addEventListener('resize', this.handlerResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize')
  },
  data () {
    return {
      widthWrapper: 0,
      activeIndex: 0,
      countColumn: 0,
      widthItem: 0,
      offset: 0,
      touch: {
        dir: '',
        stayAtCur: 0,
        startX: 0,
        startY: 0,
        moveX: 0,
        moveY: 0
      },
      isOver: false,
      posX: 0
    }
  }
}
