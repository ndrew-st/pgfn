import num2str from '~/utils/num2str'
import InfoBlock from '../info-block/index.vue'

export default {
  components: {
    InfoBlock
  },
  props: {
    prices: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      textDays: [ 'день', 'дня', 'дней' ]
    }
  },
  computed: {
    byTheDay () {
      return this.prices.byTheDay.find(item => item.defaultValue)
    },
    longTerm () {
      return this.prices.longTerm.find(item => item.defaultValue)
    }
  },
  methods: {
    days (day) {
      return `${day} ${num2str(day, this.textDays)}`
    }
  }
}
