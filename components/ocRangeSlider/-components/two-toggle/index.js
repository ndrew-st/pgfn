import Icon from '~/components/Icon/index'

import isMobile from '~/utils/isMobile'

export default {
  components: { Icon },
  props: {
    type: { // type who view in tooltip of toggle
      type: String,
      default: ''
    },
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 100
    },
    showDescription: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      left: {}, // left control
      right: {}, // right control
      slider: {}, // main slider object
      leftRes: 0,
      _left: 0,
      isOver: false,
      isClicked: false,
      _prevFinPos: 0,
      _shiftX: 0,
      leftPosLine: 0,
      rightPosLine: 0,
      rightRes: 0,
      sliderCoords: {},
      finLeftButton: 0,
      finRightButton: 0,
      newLeft: 0,
      maxNewLeftPos: 0,
      maxNewRightPos: 0,
      newRight: 0,
      diff: 10
    }
  },
  computed: {
    lineWidth () {
      return this.finRightButton - this.finLeftButton + 3
    }
  },
  mounted () {
    this.left = this.$refs.leftControl
    this.right = this.$refs.rightControl
    this.slider = this.$refs.slider

    this.finLeftButton = this.$refs.leftControl.getBoundingClientRect().right
    this.finRightButton = this.$refs.rightControl.getBoundingClientRect().left

    this.leftRes = this.from
    this.rightRes = this.to

    const sliderClientCoords = this.slider.getBoundingClientRect()

    this.sliderCoords.top = sliderClientCoords.top + pageYOffset
    this.sliderCoords.left = sliderClientCoords.left + pageXOffset
    this.sliderCoords.right = sliderClientCoords.right + pageXOffset

    window.addEventListener('resize', this.handlerResize)
  },
  beforeDestroy () {
    if (window && process.browser) {
      window.removeEventListener('resize', this.handlerResize)
    }
  },
  methods: {
    handlerResize () {
      if (isMobile && window.innerWidth < 1280) {
        this.$emit('update')
      } else {
        this.$emit('update')
      }
    },
    _handlerDragStart () {
      return false
    },
    handlerMove (type, target, e) {
      if (type === 'mouse') {
        if (!this.isOver || !this.isClicked) {
          return false
        }
      }

      // Check width for inner line
      this.finLeftButton = this.$refs.leftControl.getBoundingClientRect().right
      this.finRightButton = this.$refs.rightControl.getBoundingClientRect().left

      let newPos

      if (type === 'mouse') {
        if (target === 'right') {
          newPos = -(e.pageX - this.sliderCoords.right - this._shiftX)
        } else {
          newPos = e.pageX - this.sliderCoords.left - this._shiftX
        }
      } else if (type === 'touch') {
        if (target === 'right') {
          newPos = -(e.changedTouches[0].clientX - this.sliderCoords.right - this._shiftX)
        } else {
          newPos = e.changedTouches[0].clientX - this.sliderCoords.left - this._shiftX
        }
      }

      if (newPos < 0) { newPos = 0 }
      if (newPos > this._left) { newPos = this._left }

      if (target === 'right') {
        if (newPos > this._maxRightPos) { newPos = this._maxRightPos }

        this.rightPosLine = newPos
        const res = (100 - Math.round(newPos / this._left * 100)) * this.to / 100
        this.rightRes = Math.round(res)
      } else {
        if (newPos > this._maxLeftPos) { newPos = this._maxLeftPos }

        this.leftPosLine = newPos
        const res = Math.round(newPos / this._left * 100) * this.to / 100
        this.leftRes = Math.round(res)
      }

      this[target].style[target] = newPos + 'px'
    },
    handlerStart (type, target, e) {
      const itemClientCoords = this[target].getBoundingClientRect()
      const itemCoords = {}
      itemCoords.top = itemClientCoords.top + pageYOffset
      itemCoords.left = itemClientCoords.left + pageXOffset
      itemCoords.right = itemClientCoords.right + pageXOffset

      this._left = this.slider.offsetWidth - this[target].offsetWidth

      if (type === 'mouse') {
        this.isClicked = true
        this._shiftX = e.pageX - itemCoords[target]
      } else if (type === 'touch') {
        this._shiftX = e.changedTouches[0].clientX - itemCoords[target]
      }

      this._maxRightPos = this.slider.getBoundingClientRect().right - this.left.getBoundingClientRect().right - this.left.offsetWidth + this.diff
      this._maxLeftPos = this.right.getBoundingClientRect().left - this.slider.getBoundingClientRect().left - this.right.offsetWidth + this.diff
    },
    mouseUp () {
      this.isClicked = false
      this.isOver = false
    },
    mouseEnter () {
      this.isOver = true
    },
    mouseLeave () {
      this.isClicked = false
      this.isOver = false
    }
  }
}
