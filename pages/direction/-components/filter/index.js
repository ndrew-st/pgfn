import Checkboxes from './-components/checkboxes'

import direction from './-components/direction'
import services from './-components/services'
import apartments from './-components/apartments'

export default {
  components: { Checkboxes, direction, services, apartments },
  data () {
    return {
      checkboxes: [
        { title: 'Направление', name: 'direction' },
        { title: 'Жильё', name: 'apartments' },
        { title: 'Услуги', name: 'services' }
      ],
      currentActive: 'apartments'
    }
  },
  methods: {
    changeTab (cur) {
      this.currentActive = cur
    }
  }
}
