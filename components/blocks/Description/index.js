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
      strLength: 300
    }
  },
  methods: {
    desc (num) {
      if (this.description.length < 300) {
        return this.description
      }

      const res = this.chunkString(this.description, this.strLength)
      return res && res.length ? res[num] : []
    },
    chunkString (str, length) {
      return str.match(new RegExp('.{1,' + length + '}'))
    }
  }
}
