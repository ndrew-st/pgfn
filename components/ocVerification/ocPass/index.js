export default {
  props: ['stage'],
  methods: {
    cpn (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.$emit('cpn', this.phoneNumber)
    }
  },
  data: () => ({
    isActive: false,
    password: ''
  })
}
