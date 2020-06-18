import Rules from './comps/rules/index.vue'
import Payment from './comps/payment/index.vue'
import Total from './comps/total/index.vue'

export default {
  props: {
    bookingActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Rules,
    Payment,
    Total
  },
  data () {
    return {
      currentActive: 'rules',
      stage: 1
    }
  },
  methods: {
    next () {
      if (this.stage === 1) {
        this.stage = 2
        this.currentActive = 'payment'
      }
    },
    payment () {
      this.stage = 2
      this.currentActive = 'payment'
    },
    clickOutside (e) {
      if (this.bookingActive) {
        if (this.$el.contains(e.target) && !this.$el.children[0].contains(e.target)) {
          this.$emit('changeBookingActive')
        }
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.clickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.clickOutside)
  }
}
