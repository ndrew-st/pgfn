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
      console.log('submit ', this.result)
    },
    updateValue ({ field, value }) {
      this.result = {
        ...this.result,
        [field]: value
      }
    }
  }
}
