export default {
  props: {
    error: String,
    btnText: String
  },
  data: () => ({
    isActive: false,
    password: ''
  }),
  methods: {
    next () {
      if (this.password.length > 5) {
        this.$emit('next', this.password)
      }
    }
  }
}
