export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      required: true,
      default: 0
    },
    showPopup: {
      type: Boolean,
      default: false
    }
  }
}
