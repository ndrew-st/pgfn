import Guests from './-components/guests'
import Calendar from '~/components/ocCalendar'

import throttle from '~/utils/throttle'

export default {
  components: { Calendar, Guests },
  data () {
    return {
      search: '',
      touched: false,
      searchedList: [],
      date: '',
      guests: []
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
      // what do with search
    },
    handlerDate (date) {
      this.date = date
    },
    handlerGuests (data) {
      this.guests = data
    }
  }
}
