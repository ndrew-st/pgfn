import num2str from '~/utils/num2str'

import typeHouse from '~/constants/consts/typeOfHousing'

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
    },
    typeOfHousing: {
      type: String,
      default: null
    },
    views: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      textViews: [ 'просмотр', 'просмотры', 'просмотров' ],
      textReviews: [ 'отзыв', 'отзывы', 'отзывов' ]
    }
  },
  computed: {
    review () {
      return `${this.reviews} ${num2str(this.reviews, this.textReviews)}`
    },
    view () {
      return `${this.views} ${num2str(this.views, this.textViews)}`
    }
  }
}
