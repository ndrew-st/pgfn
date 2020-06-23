export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        coords: [],
        id: 1,
        date: '',
        title: '',
        reviews: null,
        price: ''
      })
    }
  }
}
