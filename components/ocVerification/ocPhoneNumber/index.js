import OcButtonNext from '@/components/ocVerification/ocButtonNext/index.vue'

export default {
  props: ['stage', 'phoneNumber'],
  components: {
    OcButtonNext
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    mask (item) {
      const matrix = '___ ___-__-__'
      let i = 0
      const def = matrix.replace(/\D/g, '')
      let val = this.phoneNumber.replace(/\D/g, '')
      if (def.length >= val.length) { val = def }
      this.phoneNumber = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
      if (this.phoneNumber.length === 13) {
        this.isActive = true
      } else { this.isActive = false }
      this.$emit('changePhoneNumber', this.phoneNumber)
      //   if (event.type == "blur") {
      //       if (this.value.length == 2) this.value = ""
      //   } else setCursorPosition(this.value.length, this)
    },
    next (item) {
      // this.$emit('changePhoneNumber', this.phoneNumber)
    }
  }
}
