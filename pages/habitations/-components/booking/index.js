import Rules from './comps/rules/index.vue'
import Payment from './comps/payment/index.vue'
import Total from './comps/total/index.vue'

export default {
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
    }
  }
}
