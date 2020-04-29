export default {
  props: ['mode', 'error'],
  methods: {
    cpn (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.$emit('cpn', this.phoneNumber)
    },
    next1 () {
      console.log('мы зашли в обработку нехт')
      this.$emit('next', this.password)
    }
  },
  data: () => ({
    isActive: false,
    password: ''
  })
}
