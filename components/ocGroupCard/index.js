import ocCarousel from '@/components/ocCarousel'

export default {
  components: { ocCarousel },
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => []
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    column: {
      type: Number,
      default: 3
    },
    count: {
      type: Number,
      required: true,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
      default: 'To set a title cart group'
    },
    autoWidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tabSelect: '',
      settings: {
        maxScrollbarLength: 60
      },
      swiper: {}
    }
  }
}
