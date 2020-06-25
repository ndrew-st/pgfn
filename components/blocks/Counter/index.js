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
      if (flag) {
        this.cur += 1
        this.$emit('change', this.cur, flag)
      } else if (this.cur >= 1) {
        this.cur -= 1
        this.$emit('change', this.cur, flag)
      }
    }
  }
}
