import Description from '~/components/blocks/Description'

import num2str from '~/utils/num2str'

export default {
  components: { Description },
  props: {
    description: {
      type: Object,
      default: null
    },
    info: {
      Type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      active: false,
      textBed: [ 'спальня', 'спальни', 'спален' ],
      textGuests: [ 'гость', 'гостей', 'гости' ]
    }
  },
  computed: {
    title () {
      return `${this.description.typeOfHousing} · ${this.description.countBed} ${num2str(this.description.countBed, this.textBed)} · ${this.description.countGuests} ${num2str(this.description.countGuests, this.textGuests)}`
    },
    user () {
      return this.$store.state.auth.user
    }
  }
}
