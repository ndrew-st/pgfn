export default {
  props: ['popular', 'apartments'],
  computed: {
    popularRow () {
      return [
        this.popular.slice(0, 4),
        this.popular.slice(4, 9)
      ]
    },
    apartmentsRow () {
      return [
        this.apartments.slice(0, 4),
        this.apartments.slice(4, 9)
      ]
    }
  }
}
