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
  computed: {
    typeSize () {
      return this.images.length < 5 ? 'original' : 'middle'
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
