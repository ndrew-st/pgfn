import search from './types/search'
import most from './types/most'

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
    value: {
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      val: ''
    }
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    }
  },
  methods: {
    handlerSearch () {
      this.$emit('input', this.val)
    },
    keyDown (e) {
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()
      }
    }
  }
}
