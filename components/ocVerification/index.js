import OcPhoneNumber from './ocPhoneNumber/index.vue'
import OcPass from './ocPass/index.vue'

export default {
  props: ['mode', 'stage', 'phoneNumber'],
  data: () => ({
    username: '',
    userpassword: '',
    smsCode: ''
  }),
  components: {
    OcPhoneNumber,
    OcPass
  },
  methods: {
    changePhoneNumber (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.$emit('changePhoneNumber', this.phoneNumber)
    },
    mask (item) {
      if (this.smsCode.length > 4) {
        this.smsCode = this.smsCode.substr(0, 4)
      }
      // const matrix = '••••'
      // let i = 0
      // const def = matrix.replace(/\D/g, '')
      // let val = this.smsCode.replace(/\D/g, '')
      // if (def.length >= val.length) { val = def }
      // this.smsCode = matrix.replace(/./g, function (a) {
      //   return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      // })
      // if (this.smsCode.length === 13) {
      //   this.isActive = true
      // } else { this.isActive = false }
      // // this.$emit('changePhoneNumber', this.phoneNumber)
    }
  }
}
