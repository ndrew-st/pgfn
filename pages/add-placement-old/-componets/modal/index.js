import FormBuilder from './-components/FormBuilder'
import Header from './-components/Header'
import Intro from './-components/Intro'

export default {
  components: { Header, Intro, FormBuilder },
  props: [ 'config' ],
  data () {
    return {
      activeStep: 0
    }
  },
  methods: {
    changeCurrentStep (flag) { // Flag have a two values(true): if true - next action
      if (flag) {
        this.activeStep += 1
      } else {
        this.activeStep -= 1
      }
    }
  }
}
