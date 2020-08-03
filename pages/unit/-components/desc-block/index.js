import Description from '~/components/blocks/Description'

import num2str from '~/utils/num2str'
import typeHouse from '~/constants/consts/typeOfHousing'
import typeTenant from '~/constants/typeOfTenant'

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
      type: Object,
      default: () => ({})
    },
    numberOfRooms: {
      type: [Number, Array],
      default: 0
    },
    typeOfTenant: {
      type: Array,
      default: null
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
      textGuests: [ 'гость', 'гостя', 'гостей' ],
      textRooms: [ 'комната', 'комнаты', 'комнат' ]
    }
  },
  methods: {
    getCountRooms (rooms) { // Array
      return rooms.reduce((prev, itm, idx, arr) => {
        if (idx < arr.length - 1) {
          return prev + itm + '/'
        } else {
          return prev + `${itm} ${num2str(itm, this.textRooms)}`
        }
      }, '')
    }
  },
  computed: {
    title () {
      const { typeOfHousing } = this.description

      return `${typeHouse[typeOfHousing || 0]} · ${this.countPlc} · ${this.countPlaces} ${num2str(this.countPlaces, this.textGuests)}`
    },
    countPlc () {
      if (this.type === 'habitation') {
        return `${this.description.countBed} ${num2str(this.description.countBed, this.textBed)}`
      } else {
        return `${this.getCountRooms(this.numberOfRooms)}`
      }
    },
    constTenant () {
      return typeTenant
    },
    owner () {
      return this.typeOfTenant.filter(item => item < 8)
    },
    mediator () {
      return this.typeOfTenant.filter(item => item > 7)
    },
    user () {
      return this.$store.state.auth.user
    }
  }
}
