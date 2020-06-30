import ApRow from '../ap-row/index.vue'
import ApButton from '../ap-button/index.vue'

export default {
  components: {
    ApRow,
    ApButton
  },
  data () {
    return {
      items: ['От 1-го дня', 'От 3-х дней', 'От 5-ти дней', 'От 10-ти дней', 'От 15-ти дней', 'От 20-ти дней'],
      items2: ['От 28 дней', 'От 3-х месяцев', 'От 6-ти месяцев'],
      picked: 'Целиком',
      picked2: 'Целиком'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    }
  }
}
