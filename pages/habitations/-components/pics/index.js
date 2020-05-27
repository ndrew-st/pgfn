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
      zoomed: false
    }
  },
  watch: {
    showPopup (val) {
      if (val) {
        document.querySelector('html').scrollTop = 0
        document.querySelector('html').style.overflowY = 'hidden'
      } else {
        document.querySelector('html').style.overflowY = 'auto'
      }
    }
  },
  methods: {
    updateIndex (val) {
      this.activeIndex = val
    },
    toggleShow (val) {
      if (val === undefined) {
        this.showPopup = !this.showPopup
      } else {
        if (this.showPopup && val) {
          return false
        }
        this.showPopup = val
      }
    },
    changeActiveCarousel (index) {
      this.activeIndex = index
    },
    changeSwipe (arrow) {
      // if (!this.showPopup) {
      //   return false
      // }
      //
      // if (arrow === 'right') {
      //   this.activeIndex += 1
      // } else if (arrow === 'left') {
      //   if (this.activeIndex > 0) {
      //     this.activeIndex -= 1
      //   }
      // }
    }
  }
}
