import Guests from './-components/guests'
import Calendar from '~/components/blocks/Calendar'

export default {
  components: { Calendar, Guests },
  data () {
    return {
      search: '',
      searchedList: [],
      date: '',
      guests: []
    }
  },
  methods: {
    handlerSearch () {
      console.log('handlerSearch ', this.search)
      // try {
      //   const { data } = this.$api.getSearch(this.search)
      //   this.searchedList = data
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
