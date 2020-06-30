import num2str from '~/utils/num2str'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        img: '',
        title: '',
        price: '',
        reviews: null
      })
    }
  },
  inheritAttrs: false,
  data () {
    return {
      archive: true,
      reviewText: ['просмотр', 'просмотра', 'просмотров']
    }
  },
  computed: {
    review () {
      return `${this.item.reviews} ${num2str(this.item.reviews, this.reviewText)}`
    }
  }
}
