import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApTimeSelect from '../ap-time-select'
import WeekTime from '../blocks/week-time'

export default {
  components: {
    ApButton,
    ApRadio,
    ApTimeSelect,
    WeekTime
  },
  data () {
    return {
      picked: 'Целиком',
      picked2: 'любое время',
      picked3: 'любое время',
      picked4: 'Любое время',
      picked5: 'Любое время'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    }
  }
}
