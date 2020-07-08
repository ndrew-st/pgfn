import num2str from '~/utils/num2str'

export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: 23,
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
      widthContainer: 0,
      addressWidth: 0,
      titleWidth: 0,
      attrsHeight: 0,
      widthWindow: 0,
      viewWidth: 0,
      reviewsText: ['отзыв', 'отзыва', 'отзывов'],
      viewsText: ['просмотр', 'просмотра', 'просмотров']
    }
  },
  computed: {
    attrs () {
      return this.item.attrs && this.item.attrs.slice(0, 6)
    }
  },
  mounted () {
    this.updateValues()
  },
  methods: {
    updateValues () {
      this.$nextTick(() => {
        this.widthWindow = window.screen.width
        this.widthContainer = this.$refs.card.clientWidth
        this.addressWidth = this.$refs.addressCt.scrollWidth
        this.titleWidth = this.$refs.titleCt.scrollWidth
        this.attrsHeight = this.$refs.attrs.clientHeight
        this.viewWidth = this.$refs.views && this.$refs.views.clientWidth
      })
    },
    handlerResize (e) {
      if (this.widthWindow === e.target.screen.width) {
        return false
      }

      this.updateValues()
    },
    mouseEnter () {
      if (this.titleWidth < 1) {
        this.updateValues()
      }
    },
    touchStart () {
      this.updateValues()
    },
    reviewText (num) {
      return num2str(num, this.reviewsText)
    },
    viewText (num) {
      return num2str(num, this.viewsText)
    }
  }
}
