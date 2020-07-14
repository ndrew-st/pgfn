import Attrs from '../Attrs'

import num2str from '~/utils/num2str'

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
        price: '',
        guests: [],
        type: ''
      })
    }
  },
  components: { Attrs },
  data () {
    return {
      state: 'Опубликовано',
      reviewText: ['просмотр', 'просмотра', 'просмотров']
    }
  },
  computed: {
    review () {
      return `${this.item.reviews} ${num2str(this.item.reviews, this.reviewText)}`
    }
  }
}
