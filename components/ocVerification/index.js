import OcPhoneNumber from './ocPhoneNumber/index.vue'
import OcPass from './ocPass/index.vue'

export default {
  props: ['mode', 'stage', 'phoneNumber'],
  data: () => ({
    username: '',
    userpassword: ''
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
      // if (this.smsCode.length > 4) {
      //   this.smsCode = this.smsCode.substr(0, 4)
      // }
      const matrix = '••••'
      let i = 0
      const def = matrix.replace(/\D/g, '')
      let val = item.currentTarget.value.replace(/\D/g, '')
      const pos = val.length
      // console.log('dev: ' + def + 'val: ' + val);
      if (def.length >= val.length) { val = def }
      const smsCode1 = matrix.replace(/./g, function (a) {
        const res =
            /[•\d]/.test(a) && i < val.length
              ? val.charAt(i++)
              : i >= val.length
                ? '•'
                : a
        // console.log('a: ' + a + ' res:' + res)
        return res
      })
      // debugger

      item.currentTarget.value = smsCode1

      this.$refs.codeInput.setSelectionRange(pos, pos)
    }
  }
}
