import ComfortItem from './comfort-item/index.vue'

export default {
  components: {
    ComfortItem
  },
  props: {
    comfort: {
      type: Array,
      required: true,
      default: []
    }
  },
  data () {
    return {
      showAll: false,
      widthItem: 0,
      widthWindow: 0,
      marginWidth: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$refs.container) {
        this.widthWindow = this.$refs.container.clientWidth
      }

      if (window.innerWidth > 768) {
        this.widthItem = 242
        this.marginWidth = 18
      } else {
        this.widthItem = 86
        this.marginWidth = 13
      }
    })

    window.addEventListener('resize', this.handlerResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handlerResize)
  },
  methods: {
    handlerResize () {
      this.widthWindow = this.$refs.container.clientWidth
      if (window.innerWidth > 768) {
        this.widthItem = 242
        this.marginWidth = 18
      } else {
        this.widthItem = 86
        this.marginWidth = 13
      }
    }
  },
  computed: {
    orderedComfort () {
      const arr = this.comfort.slice(2)
      arr.sort((a, b) => {
        if (a.order > b.order) {
          return 1
        }
        if (a.order === b.order) {
          return 0
        }
        if (a.order < b.order) {
          return -1
        }
      })

      return arr
    },
    lengthConform () {
      return this.comfort.length
    },
    countShow () {
      return this.lengthConform - Math.round(this.widthWindow * 2 / (this.widthItem + this.marginWidth))
    },
    isShow () {
      return this.countShow > 0
    },
    textButton () {
      return !this.showAll ? `Показать все (${this.lengthConform})` : 'Свернуть'
    }
  }
}
