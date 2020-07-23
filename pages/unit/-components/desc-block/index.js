import Description from '~/components/blocks/Description'

import num2str from '~/utils/num2str'
import typeHouse from '~/constants/consts/typeOfHousing'

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
      textGuests: [ 'гость', 'гостя', 'гостей' ]
    }
  },
  computed: {
    title () {
      return `${typeHouse[this.description.typeOfHousing || 0]} · ${this.description.countBed} ${num2str(this.description.countBed, this.textBed)} · ${this.description.countGuests} ${num2str(this.description.countGuests, this.textGuests)}`
    },
    user () {
      return this.$store.state.auth.user
    }
  }
}
