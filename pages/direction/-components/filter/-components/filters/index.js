import Guests from '~/components/blocks/Guests'
import Calendar from '~/components/blocks/Calendar'

export default {
  components: { Calendar, Guests },
  watch: {
    search (value) {
      this.$emit('input', { field: 'search', value })
    },
    date (value) {
      this.$emit('input', { field: 'date', value })
    },
    guests (value) {
      this.$emit('input', { field: 'guests', value })
    }
  },
  data () {
    return {
      search: '',
      touched: false,
      searchedList: [],
      date: '',
      guests: null,
      curDate: new Date().toString(),
      curSelStart: new Date().toString(),
      formatDate: 'DD.MM.YYYY'
    }
  },
  methods: {
    select (title) {
      this.search = title
      this.searchedList = []
    },
    async handlerSearch () {
      if (!this.search.length) {
        this.searchedList = []
        this.touched = false
        return
      }

      try {
        const data = await this.$api.apartments.searching(this.search)

        if (data.length) {
          this.touched = true
          this.searchedList = data

          return
        }

        console.log('Result is empty: ', data)
      } catch (e) {
        console.log('Error search: ', e)
      }
    },
    changeSelDate (date) {
      this.$root.$emit('dropdown:hide')
      this.date = date
    }
  }
}
