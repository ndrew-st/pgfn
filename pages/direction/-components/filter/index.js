import Checkboxes from './-components/checkboxes'

import filters from './-components/filters'

export default {
  components: {
    Checkboxes,
    'day': filters,
    'long': filters
  },
  data () {
    return {
      checkboxes: [
        { title: 'Жильё посуточно', name: 'day' },
        { title: 'Жильё на длительный срок', name: 'long' }
      ],
      currentActive: 'day',
      result: { }
    }
  },
  methods: {
    changeTab (cur) {
      this.currentActive = cur
    },
    submit () {
      // what do with search
      if (this.result.guests) {
        this.$storage.setItem('guests', this.result.guests)
      }

      this.$router.push({ path: 'search', query: { ...this.result, guestsKey: 'guests' } })
    },
    updateValue ({ field, value }) {
      this.result = {
        ...this.result,
        [field]: value
      }
    }
  }
}
