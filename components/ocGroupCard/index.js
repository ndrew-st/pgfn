import Carousel from '~/components/ocCarousel'

export default {
  components: { Carousel },
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
      swiper: {}
    }
  },
  mounted () {
    if (this.tabs.length) {
      this.tabSelect = this.tabs[0].name === 'Популярные' ? this.tabs[0].url : ''
    }
  }
}
