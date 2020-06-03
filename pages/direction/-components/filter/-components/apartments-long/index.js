import Guests from './-components/guests'
import Calendar from '~/components/ocCalendar'

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
  methods: {
    handlerSearch () {
      // try {
      //   const { data } = this.$api.getSearch(this.search)
      //   this.searchedList = data
      //   this.touched = true
      // } catch (e) {
      //   console.log('Error search: ', e)
      // }
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
