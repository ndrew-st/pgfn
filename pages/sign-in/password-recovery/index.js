export default {
  props: {
    phone: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    stage: 'sms',
    picked: '',
    timeCounter: 119
  }),
  methods: {
    next () {
      if (this.stage === 'sms') {
        this.stage = 'pass'
      }
    }
  }
}
