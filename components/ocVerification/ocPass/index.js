export default {
  props: ['stage'],
  methods: {
    changePhoneNumber (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.$emit('changePhoneNumber', this.phoneNumber)
    }
  },
  data: () => ({
    isActive: false,
    password: ''
  })
}
