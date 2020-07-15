import typeOfHousing from '~/constants/consts/typeOfHousing'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({

      })
    },
    coords: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      mainWidth: 0,
      titleHeight: 0,
      bedsText: ['комната', 'комнаты', 'комнат'],
      cords: {
        lat: 45.389194, lon: 33.993751
      }
    }
  },
  computed: {
    typeHouse () {
      return typeOfHousing
    },
    date () {
      const idxIn = this.item.params.findIndex(item => item.typeOfParam === 'checkIn')
      const idxOut = this.item.params.findIndex(item => item.typeOfParam === 'checkOut')

      return `${this.item.params[idxIn].paramValue} - ${this.item.params[idxOut].paramValue}`
    }
  },
  mounted () {
    console.log('request ', this.item)

    this.$nextTick(() => {
      if (this.$refs.title) {
        this.titleHeight = this.$refs.title.clientHeight
      }
    })
  }
}
