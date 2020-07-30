import num2str from '~/utils/num2str'

import th from '~/constants/consts/typeOfHousing'

export default {
  props: {
    type: {
      type: String,
      default: 'habitation'
    },
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
      type: [Object, Number],
      default: null
    },
    typeOfHousing: {
      type: Number,
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
  methods: {
    _isNum (val) {
      return typeof val === 'number'
    },
    _getDateInFormat (date) {
      return `${new Date(date).toLocaleString('ru', { year: 'numeric',
        month: 'long',
        day: 'numeric' })}`
    }
  },
  computed: {
    typeHouse () {
      return th
    },
    day () {
      return this.date.split(' - ')
    },
    dateView () {
      return `C ${this._getDateInFormat(this.dateBegin)} по ${this._getDateInFormat(this.dateEnd)}`
    },
    dateBegin () {
      return new Date(this.day[0].split('.').slice(0).reverse().join('-'))
    },
    dateEnd () {
      return new Date(this.day[1].split('.').slice(0).reverse().join('-'))
    },
    dayCount () {
      return Math.ceil(Math.abs(this.dateBegin.getTime() - this.dateEnd.getTime()) / (1000 * 3600 * 24))
    },
    priceView () {
      return this._isNum(this.price) ? (this.price * this.dayCount) : this.price.byTheDay[0] && this.price.byTheDay[0].price
    },
    measure () {
      return this._isNum(this.price) ? 'за месяц' : 'за сутки'
    },
    review () {
      return `${this.reviews} ${num2str(this.reviews, this.textReviews)}`
    },
    view () {
      return `${this.views} ${num2str(this.views, this.textViews)}`
    }
  }
}
