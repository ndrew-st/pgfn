import ApButton from '../ap-button/index.vue'

export default {
  components: {
    ApButton
  },
  data () {
    return {
      picked: 'Без предоплаты'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    }
  }
}
