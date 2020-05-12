import Popup from './-components/Popup'
import ocCarousel from '~/components/ocCarousel'
import ocZoomer from '~/components/ocZoomer'

export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: { ocCarousel, Popup, ocZoomer },
  data () {
    return {
      activeIndex: 0,
      showPopup: false,
      zoomed: false,
      date: Date.now().toString() // update ocCarousel in popup
    }
  },
  methods: {
    updateIndex (val) {
      console.log('updateIndex ', val)
      this.activeIndex = val
    },
    toggleShow (val) {
      if (val === undefined) {
        this.showPopup = !this.showPopup
      } else {
        this.showPopup = val
      }

      this.date = Date.now().toString()
    }
  }
}
