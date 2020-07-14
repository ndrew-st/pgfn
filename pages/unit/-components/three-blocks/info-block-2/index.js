import InfoBlock from '../info-block/index.vue'

import num2str from '~/utils/num2str'

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
  methods: {
    days (day) {
      return `${day} ${num2str(day, this.textDays)}`
    }
  }
}
