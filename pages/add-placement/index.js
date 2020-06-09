import Step1 from './step1/index.vue'
import Step2 from './step2/index.vue'
import StageBar from './stage-bar/index.vue'

export default {
  components: {
    Step1,
    Step2,
    StageBar
  },
  data () {
    return {
      state: 1
    }
  },
  methods: {
    next () {
      this.state++
    }
  }
}
