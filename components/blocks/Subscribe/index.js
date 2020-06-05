export default {
  data () {
    return {
      email: '',
      loading: false,
      success: false
    }
  },
  methods: {
    handlerSubmit () {
      console.log('subscribe')
      // const res = await this.$api.subscribeEmail(this.email)
      // this.success = true
    }
  }
}
