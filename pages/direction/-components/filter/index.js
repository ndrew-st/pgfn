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
      currentActive: 'day'
    }
  },
  methods: {
    changeTab (cur) {
      this.currentActive = cur
    },
    submit () {
      // what do with search
    }
  }
}
