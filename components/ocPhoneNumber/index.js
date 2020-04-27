import OcButtonNext from '@/components/ocVerification/ocButtonNext/index.vue'

export default {
  props: ['error'],
  components: {
    OcButtonNext
  },
  data: () => ({
    isActive: false,
    phone1: ''
  }),
  methods: {
    mask (item) {
      const matrix = '___ ___-__-__'
      let i = 0
      const def = matrix.replace(/\D/g, '')
      let val = this.phone1.replace(/\D/g, '')
      if (def.length >= val.length) { val = def }
      this.phone1 = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
      if (this.phone1.length === 13) {
        this.isActive = true
      } else { this.isActive = false }
      this.$emit('cpn2', this.phone1)
      //   if (event.type == "blur") {
      //       if (this.value.length == 2) this.value = ""
      //   } else setCursorPosition(this.value.length, this)
    },
    next (item) {
      if (this.phone1.length === 13) {
        this.$emit('next')
      }
    }
  }
}
