import facilities from '~/constants/facilities'

export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    }
  },
  computed: {
    facil () {
      return facilities
    }
  }
}
