export default {
  props: {
    title: {
      type: String,
      default: 'Широкий ассортимент и высокое качество'
    },
    description: {
      type: [Array, String],
      default: null
    }
  },
  inheritAttrs: false,
  data () {
    return {
      show: false,
      typeArr: 'array'
    }
  },
  methods: {
    desc (num) {
      return typeof this.description === 'string' ? this.description : this.description[num]
    }
  }
}
