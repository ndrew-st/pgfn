import search from './-components/search'
import most from './-components/most'

import throttle from '~/utils/throttle'

export default {
  components: { search, most },
  inheritAttrs: false,
  props: {
    kind: {
      type: String,
      required: true,
      default: 'most'
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    maxLength: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      id: Math.random()
    }
  },
  mounted () {
    import(`./styles/${this.kind}.styl`)
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    },
    leftIcon () {
      return this.iconPosition === 'left'
    },
    rightIconName () {
      return this.value.length > 0 ? 'clear' : this.icon
    },
    rightIcon () {
      return this.iconPosition === 'right'
    },
    visibleIcon () {
      return this.icon !== null
    },
    additionalClass () {
      return this.visibleIcon ? this.leftIcon ? 'input-wrapper__content--left' : 'input-wrapper__content--right' : ''
    }
  },
  methods: {
    handlerSearch () {
      this.$emit('input')
    },
    keyDown (e) {
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()
      }
    }
  }
}
