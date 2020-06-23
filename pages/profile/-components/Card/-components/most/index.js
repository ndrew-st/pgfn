export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        img: '',
        title: '',
        date: '',
        price: '',
        guests: [],
        tariff: '',
        reviews: ''
      })
    }
  },
  inheritAttrs: false
}
