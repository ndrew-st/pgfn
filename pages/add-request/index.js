import StageBar from '../add-placement/stage-bar'
import Step1 from './step1/index.vue'
import Step2 from './step2/index.vue'
import Step3 from './step3/index.vue'
import Step4 from './step4/index.vue'
import Step5 from './step5/index.vue'
import Step6 from './step6/index.vue'

export default {
  middleware: 'auth',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    StageBar
  },
  data () {
    return {
      state: 2
    }
  },
  methods: {
    next () {
      this.state++
    }
  }
}
