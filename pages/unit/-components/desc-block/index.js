import Description from '~/components/blocks/Description'

import num2str from '~/utils/num2str'
import typeHouse from '~/constants/consts/typeOfHousing'

export default {
  components: { Description },
  props: {
    type: {
      type: String,
      default: 'habitation'
    },
    description: {
      type: Object,
      default: null
    },
    info: {
      Type: Object,
      default: () => ({})
    },
    countPlaces: {
      type: Number,
      default: 0
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
      const { typeOfHousing, countBed } = this.description

      return `${typeHouse[typeOfHousing || 0]} · ${countBed} ${num2str(countBed, this.textBed)} · ${this.countPlaces} ${num2str(this.countPlaces, this.textGuests)}`
    },
    user () {
      return this.$store.state.auth.user
    }
  }
}
