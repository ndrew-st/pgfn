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
      textDays: [ 'день', 'дня', 'дней' ],
      obj: {
        days: 0,
        price: 1500
      }
    }
  },
  computed: {
    byTheDay () {
      return this.prices.byTheDay.find(item => item.defaultValue) || this.obj
    },
    longTerm () {
      return this.prices.longTerm.find(item => item.defaultValue) || this.obj
    }
  },
  methods: {
    days (day) {
      return `${day} ${num2str(day, this.textDays)}`
    }
  }
}
