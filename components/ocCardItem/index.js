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
        intro: 'intro',
        type: 'Отель',
        previewGallery: [ ],
        favorits: false,
        price: 5980,
        oldprice: 8010, // опционально
        typePrice: '',
        views: 0
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
      addressHeight: 0,
      addressWidth: 0,
      titleHeight: 0,
      attrsHeight: 0,
      viewWidth: 0,
      reviewsText: ['отзыв', 'отзыва', 'отзывов'],
      viewsText: ['просмотр', 'просмотра', 'просмотров']
    }
  },
  computed: {
    attrs () {
      return this.item.attrs.slice(0, 6)
    }
  },
  mounted () {
    this.addressHeight = this.$refs.address.clientHeight
    this.addressWidth = this.$refs.address.scrollWidth
    this.titleHeight = this.$refs.title.clientHeight
    this.attrsHeight = this.$refs.attrs.clientHeight
    this.viewWidth = this.$refs.views && this.$refs.views.clientWidth
  },
  methods: {
    reviewText (num) {
      return num2str(num, this.reviewsText)
    },
    viewText (num) {
      return num2str(num, this.viewsText)
    }
  }
}
