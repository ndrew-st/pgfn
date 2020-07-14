export default {
  data () {
    return {
      nameStep: 'usability'
    }
  },
  created () {
    this.$store.dispatch(`housing/filters/getFilters`, this.nameStep)
  }
}
