import ApCheckbox from '../../ap-checkbox'

export default {
  components: {
    ApCheckbox
  },
  props: {
    list: {
      type: Array,
      default: []
    },
    store: {
      type: String,
      default: 'placement',
      required: false
    }
  },
  data () {
    return {
      checkedItems: []
    }
  }
}
