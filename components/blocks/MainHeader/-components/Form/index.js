import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

import Header from './-components/Header'
import Controls from './-components/Controls'

import First from './-components/Steps/First'
import Second from './-components/Steps/Second'
import Third from './-components/Steps/Third'

export default {
  components: { Header, Controls, First, Second, Third },
  data () {
    return {
      activeStep: 0,
      result: { },
      search: '',
      submitted: false,
      success: false,
      steps: [
        { name: 'First', value: 'type-object' },
        { name: 'Second', value: 'date' },
        { name: 'Third', value: 'peoples' }
      ]
    }
  },
  created () {
    this.steps.map(step => Vue.set(this.result, step.value, null))
  },
  computed: {
    activeStepValue () {
      return this.steps[this.activeStep] && this.steps[this.activeStep].value
    },
    activeButton () {
      return !!this.result[this.activeStepValue]
    },
    isShowClearButton () {
      return this.activeStep + 1 <= this.steps.length
    },
    ...mapState('search', ['search'])
  },
  methods: {
    changeStep (flag) { // Flag have a one value: if hav - next action
      if (flag) {
        if (this.steps === this.activeStep + 1) {
          this.submit()

          return null
        }

        this.activeStep += 1
      } else if (this.activeStep === 0) {
        this.$emit('closeModalMenu')
        return null
      } else {
        if (this.submitted) { // In the last result view
          this.submitted = false
        }

        this.activeStep -= 1
      }
    },
    clearData () {
      this.result[this.activeStepValue] = null
    },
    updateField (name, data) {
      this.result[name] = data

      if (this.activeStep === 0) {
        this.changeStep(true)
      }
    },
    submit () {
      this.submitted = true
      this.activeStep += 1

      // try {
      //   const { data } = this.searchResult({ search: this.search, request: this.result })
      //   this.success = true
      // } catch (e) {
      //   this.success = false
      // }
    },
    handlerSearch (srch) {
      this.search = srch

      // try {
      //   const { data } = this.searchResult({ search: this.search, request: this.result })
      //   this.success = true
      // } catch (e) {
      //   this.success = false
      // }
    },
    ...mapActions('search', ['searchResult'])
  },
  beforeDestroy () {
    this.result = {}
  }
}
