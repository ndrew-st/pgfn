import Checkboxes from './-components/checkboxes'

import apartmentsDay from './-components/apartments-day'
import apartmentsLong from './-components/apartments-long'

export default {
  components: { Checkboxes, apartmentsDay, apartmentsLong },
  data () {
    return {
      checkboxes: [
        { title: 'Жильё посуточно', name: 'apartmentsDay' },
        { title: 'Жильё на длительный срок', name: 'apartmentsLong' }
      ],
      currentActive: 'apartmentsDay'
    }
  },
  methods: {
    changeTab (cur) {
      this.currentActive = cur
    }
  }
}
