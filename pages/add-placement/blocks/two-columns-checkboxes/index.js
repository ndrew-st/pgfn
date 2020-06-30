import ApCheckbox from '../../ap-checkbox'

export default {
  components: {
    ApCheckbox
  },
  props: {
    titleBlock: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    },
    redStar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkedItems: []
    }
  }
}