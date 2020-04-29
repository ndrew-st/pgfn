import num2str from '@/utils/num2str'

export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: 1,
        name: 'Севастополь',
        weather: {
          temperature: '24',
          waterTemperature: '18' // Опционально, может не быть
        },
        current: 4777,
        type: 'Город',
        rating: 4.9,
        reviews: 182,
        favorit: false,
        preview: ''
      })
    },
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      reviewsText: ['отзыв', 'отзыва', 'отзывов']
    }
  },
  methods: {
    numToStr (num) {
      return num2str(num, this.reviewsText)
    }
  }
}
