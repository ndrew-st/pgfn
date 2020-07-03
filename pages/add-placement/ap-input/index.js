export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      locValue: this.value
    }
  }
  // ,
  // watch: {
  //   locValue (val) {
  //     this.$emit('input', val)
  //   }
  // }
}
