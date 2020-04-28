import OcPhoneNumber from '@/components/ocPhoneNumber/index.vue'
import OcPass from '../ocPass/index.vue'

export default {
  props: ['mode', 'stage', 'error', 'phone', 'timeCounter'],
  components: {
    OcPhoneNumber,
    OcPass
  },
  methods: {
    cpn2 (phoneNumber) {
      this.$emit('cpn1', phoneNumber)
    },
    next (pass) {
      console.log('next ver')
      if (this.stage === 'phone' && this.phone.length === 13) {
        this.$emit('next')
      } else if (this.stage === 'pass' && pass.length > 5) {
        this.$emit('next', pass)
      } else if (this.stage === 'sms') {
        this.$emit('next')
      }
    }
  }
}
