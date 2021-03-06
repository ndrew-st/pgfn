import Checkboxes from '~/components/blocks/Checkboxes'

export default {
  name: 'Main',
  components: { Checkboxes },
  data () {
    return {
      nameStep: 'main',
      result: {}
    }
  },
  created () {
    this.$store.dispatch(`housing/filters/getFilters`, this.nameStep)
  }
}
