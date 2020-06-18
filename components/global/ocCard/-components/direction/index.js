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
  computed: {
    weather () {
      // return this.item.weather || {}
      return {
        temperature: 34,
        waterTemperature: 3425,
        current: 32897
      }
    },
    image () {
      return `https://media.personal.guide${this.item.preview}`
    }
  },
  methods: {
    numToStr (num) {
      return num2str(num, this.reviewsText)
    },
    goTo () {
      this.$router.push(`/direction/${this.item.name}`)
    }
  }
}
