import Popup from './-components/Popup'

export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: { Popup },
  data () {
    return {
      activeIndex: 0,
      showPopup: false,
      zoomed: false
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
      console.log('changeSwipe ', arrow)

      if (!this.showPopup) {
        return false
      }

      if (arrow === 'right') {
        this.activeIndex += 1
      } else if (arrow === 'left') {
        if (this.activeIndex > 0) {
          this.activeIndex -= 1
        }
      }
    }
  }
}
