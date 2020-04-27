export default {
  props: ['mode', 'error'],
  data: () => ({
    isActive: false,
    password: ''
  }),
  methods: {
    next1 () {
      if (this.password.length > 5) {
        console.log('next1')
        this.$emit('next', this.password)
      }
    }
  }
}
