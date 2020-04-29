export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filters: [
        { title: 'Направление', name: 'direction' },
        { title: 'Жильё', name: 'housing' },
        { title: 'Услуги', name: 'services' }
      ],
      selected: 'direction'
    }
  }
}
