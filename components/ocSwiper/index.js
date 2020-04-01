import OcSlide from './ocSlide/index.vue'

export default {
  components: { OcSlide },
  props: ['swiperInfo'],
  data: () => ({
    activeIndex: 0
  }),
  computed: {
    maxInd () { return this.swiperInfo.list.lenth }
  },
  methods: {
    rightList () {
      if (this.activeIndex === this.swiperInfo.list.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
      console.log(this.swiperInfo.list.length)
    },
    leftList () {
      if (this.activeIndex === 0) {
        this.activeIndex = this.swiperInfo.list.length - 1
      } else {
        this.activeIndex--
      }
      console.log(this.swiperInfo.list)
    }
  }
}
