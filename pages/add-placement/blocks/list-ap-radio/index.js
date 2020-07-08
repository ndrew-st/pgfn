import ApRadio from '../../ap-radio'

export default {
  components: {
    ApRadio
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    selId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    change (val) {
      this.locSelId = val
      this.$emit('change', val)
    }
  }
}
