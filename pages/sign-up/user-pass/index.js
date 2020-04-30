export default {
  data: () => ({
    username: '',
    userpassword: ''
  }),
  methods: {
    next () {
      if (this.username !== '' && this.userpassword.length > 5) {
        this.$emit('next', { name: this.username, password: this.userpassword })
      }
    }
  }
}
