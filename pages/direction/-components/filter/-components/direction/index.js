import throttle from '~/utils/throttle'

export default {
  data () {
    return {
      result: [],
      text: '',
      touched: false
    }
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    }
  },
  methods: {
    handlerSearch () {
      try {
        const { data } = this.$api.getSearch(this.text)
        this.result = data
        this.touched = true
      } catch (e) {
        console.log('Error search: ', e)
      }
    },
    handlerSubmit () {
      this.$router.push(`/search?q=${this.text}`)
    }
  }
}
