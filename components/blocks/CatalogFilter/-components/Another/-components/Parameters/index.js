export default {
  data () {
    return {
      nameStep: 'parameters'
    }
  },
  created () {
    this.$store.dispatch(`housing/filters/getFilters`, this.nameStep)
  }
}
