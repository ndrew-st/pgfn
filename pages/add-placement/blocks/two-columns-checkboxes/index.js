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
    },
    columnCount: {
      type: Number,
      default: 2,
      required: false
    }
  },
  data () {
    return {
      checkedItems: []
    }
  },
  methods: {
    change (ev) {
      // debugger
      this.$emit('change', ev)
    }
  }
}
