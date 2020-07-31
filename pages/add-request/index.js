import StageBar from '../add-placement/stage-bar'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import Step6 from './step6'

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
      state: 1
    }
  },
  methods: {
    next () {
      this.state++
    }
  }
}
