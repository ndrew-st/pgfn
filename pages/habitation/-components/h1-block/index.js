import num2str from '~/utils/num2str'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },
    intro: {
      type: String,
      default: null
    },
    reviews: {
      type: [Number, String],
      default: null
    },
    estimate: {
      type: [String, Number],
      default: null
    },
    date: {
      type: String,
      default: null
    },
    ownerId: {
      type: String,
      default: null
    },
    price: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      text: [ 'просмотр', 'просмотры', 'просмотров' ]
    }
  },
  computed: {
    review () {
      return `${this.reviews} ${num2str(this.reviews, this.text)}`
    }
  }
}
