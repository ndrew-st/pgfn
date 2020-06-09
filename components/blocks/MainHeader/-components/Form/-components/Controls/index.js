export default {
  props: {
    activeStep: {
      type: Number,
      required: true
    },
    stepLength: {
      type: Number,
      required: true
    },
    activeNext: {
      type: Boolean,
      required: true
    }
  }
}
