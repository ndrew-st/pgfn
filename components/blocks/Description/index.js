export default {
  props: {
    title: {
      type: String,
      default: 'Широкий ассортимент и высокое качество'
    },
    description: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  data () {
    return {
      show: false,
      strLength: 300,
      res: []
    }
  },
  mounted () {
    if (this.description.length < 300) {
      return
    }

    this.res.push(this.description.substring(0, 300))
    this.res.push(this.description.substring(301))
  }
}
