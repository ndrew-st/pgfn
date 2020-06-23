import Attrs from './-components/Attrs'

export default {
  components: { Attrs },
  props: {
    item: {
      type: Object,
      default: () => ({
        img: '',
        title: '',
        date: '',
        price: '',
        guests: [],
        tariff: ''
      })
    }
  },
  inheritAttrs: false
}
