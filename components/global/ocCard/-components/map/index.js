import ImgMap from '~/components/blocks/ImgMap'
import typeOfHousing from '~/constants/consts/typeOfHousing'

import num2str from '~/utils/num2str'

export default {
  components: { ImgMap },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    coords: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      mainWidth: 0,
      widthContainer: 0,
      addressWidth: 0,
      titleHeight: 0,
      bedsText: ['комната', 'комнаты', 'комнат'],
      textGuests: [ 'гость', 'гостя', 'гостей' ],
      placeKey: [ 'место', 'места', 'мест' ],
      cords: {
        lat: 45.389194, lon: 33.993751
      }
    }
  },
  computed: {
    date () {
      return 'Date'
    },
    typeHouse () {
      return `${typeOfHousing[this.item.typeOfHousing]}, ${this.item.areaOfHousing.start}-${this.item.areaOfHousing.end} м²`
    },
    title () {
      return `Аренда ${typeOfHousing[this.item.typeOfHousing].toLowerCase()} на ${this.dayCount} суток × ${this.priceName} · ${this.places}`
      // return `Запрос на ${this.item.price.byTheDay.length ? 'краткосрочную' : 'долгосрочную'} аренду жилья в г. ${this.item.address.city}, ${this.item.address.region}`
    },
    measure () {
      return this.item.price.byTheDay.length ? 'за сутки' : 'за месяц'
    },
    places () {
      return `${this.countGuests} ${num2str(this.countGuests, this.placeKey)}`
    },
    priceName () {
      return this.price.price + ` ₽`
    },
    price () {
      const { byTheDay, longTerm } = this.item.price
      return byTheDay.length ? byTheDay.find(item => item.defaultValue) : longTerm.find(item => item.defaultValue)
    },
    countRooms () {
      return `${this.countGuests} ${num2str(this.countGuests, this.textGuests)} ${this.item.numberOfRooms} комнат`
    },
    countGuests () {
      return this.item.sleepingPlace.reduce((sum, cur) => sum + (cur.typeOfPlace === 'bunkBed' ? parseInt(cur.amount) * 2 : parseInt(cur.amount)), 0)
    },
    dayCount () {
      return 8
    },
    address () {
      const { address } = this.item
      const res = []

      console.log('address ', address)

      for (const key in address) {
        if (key !== 'house' && key !== 'coords' && key !== 'apartment') {
          if (key === 'street') {
            if (address.house) {
              res.push(`${address[key]} ${address.house}`)
            } else {
              res.push(address[key])
            }
          } else {
            res.push(address[key])
          }
        }
      }

      // return address && `${this.item.address.country}, ${address.region}, ${address.city}, ${address.street}, ${address.house}`
      return res
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$refs.title) {
        this.titleHeight = this.$refs.title.clientHeight
      }

      this.widthContainer = this.$refs.cont.clientWidth
      if (this.$refs.addressCt.scrollWidth) {
        this.addressWidth = this.$refs.addressCt.scrollWidth
      }
    })
  }
}
