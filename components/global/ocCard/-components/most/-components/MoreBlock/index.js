import num2str from '~/utils/num2str'

export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      textDays: [ 'день', 'дня', 'дней' ]
    }
  },
  methods: {
    days (day) {
      return `${day} ${num2str(day, this.textDays)}`
    }
  }
}
