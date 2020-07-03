import ApCheckbox from '../../ap-checkbox'

export default {
  components: {
    ApCheckbox
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      checkedItems: []
    }
  }
}
