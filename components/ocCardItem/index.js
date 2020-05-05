import num2str from '~/utils/num2str'
import Carousel from '~/components/ocCarousel'

export default {
  components: { Carousel },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        name: 'Tree house',
        address: 'Полный адрес',
        attrs: [ '4 гостя', '1 спальня' ], // опционально
        rating: 4.3,
        reviews: 128,
        type: 'Отель',
        previewGallery: [ ],
        favorits: false,
        price: 5980,
        oldprice: 8010, // опционально
        typePrice: ''
      })
    },
    isLiked: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      reviewsText: ['отзыв', 'отзыва', 'отзывов']
    }
  },
  computed: {
    attrs () {
      return this.item.attrs.slice(0, 6)
    }
  },
  methods: {
    numToStr (num) {
      return num2str(num, this.reviewsText)
    }
  }
}
