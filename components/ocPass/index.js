export default {
  props: {
    error: String,
    btnText: String,
    value: String
  },
  data: () => ({
    isActive: false,
    password: ''
  }),
  methods: {
    change () {
      this.$emit('input', this.password)
    },
    next () {
      if (this.password.length > 5) {
        this.$emit('next', this.password)
      }
    }
  }
}
