import Calendar from '~/components/ocCalendar'

import throttle from '~/utils/throttle'

export default {
  components: { Calendar },
  data () {
    return {
      search: '',
      touched: false,
      searchedList: []
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
        const { data } = this.$api.getSearch(this.search)
        this.searchedList = data
        this.touched = true
      } catch (e) {
        console.log('Error search: ', e)
      }
    },
    handlerSubmit () {

    }
  }
}
