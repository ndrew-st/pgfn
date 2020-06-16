import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'

export default {
  components: {
    ApButton,
    ApRadio
  },
  data () {
    return {
      picked: 'Без предоплаты',
      picked2: 'любое время',
      picked3: 'любое время',
      picked4: 'Любое время'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    }
  }
}
