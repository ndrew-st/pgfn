export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      cur: this.current
    }
  },
  // watch: {
  //   cur (val) {
  //     this.$emit('input', val)
  //   }
  // },
  methods: {
    changeCount (flag) {
      // debugger
      if (flag) {
        this.cur += 1
        this.$emit('input', this.cur, flag, this.value)
      } else if (this.cur >= 1) {
        this.cur -= 1
        this.$emit('input', this.cur, flag, this.value)
      }
    }
  }
}
