export default {
  props: {
    content: {
      type: Object,
      default: () => ({
        country: '',
        region: '',
        city: '',
        street: '',
        house: ''
      })
    }
  }
}
