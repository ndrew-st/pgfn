export default {
  props: {
    phone: String,
    error: String,
    recovery: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      timeCounter: 119
    }
  },
  methods: {
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
        const res = /[•\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '•' : a
        // console.log('a: ' + a + ' res:' + res)
        return res
      })
      // debugger

      item.currentTarget.value = smsCode1

      this.$refs.codeInput.setSelectionRange(pos, pos)

      this.$emit('input', val)
      if (val.length === 4) {
        this.$emit('next')
      }
    },
    smsTime () {
      this.timeCounter -= 1
      if (this.timeCounter <= 0) {
        clearInterval(this.smsTime)
      }
    }
  },
  mounted () {
    setInterval(this.smsTime, 1000)
  }
}
