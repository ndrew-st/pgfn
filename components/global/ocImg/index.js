export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    typeSize: {
      type: String,
      default: 'original'
    },
    alt: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  data () {
    return {
      url: ''
    }
  },
  methods: {
    async loadImage ({ detail }) {
      const data = await this.$api.attachment.getImage(detail)

      if (!data.error) {
        this.url = data[0][this.typeSize]
      } else {
        console.log('Error to load image: ', data)
      }
    }
  }
}
