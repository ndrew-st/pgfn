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
      keyDay: ['сутки', 'суток', ''],
      cords: {
        lat: 45.389194, lon: 33.993751
      }
    }
  },
  methods: {
    goTo (url) {
      this.$router.push(url)
    }
  },
  computed: {
    date () {
      return this.day[0] && this.day[1] && `с ${this.day[0]} по ${this.day[1]} / ${this.dayCount}`
    },
    day () {
      return this.item.params.find(item => item.typeOfParam === 'datesOfStay').paramValue.split(' - ')
    },
    typeHouse () {
      return `${typeOfHousing[this.item.typeOfHousing]}, ${this.item.areaOfHousing.start}-${this.item.areaOfHousing.end} м²`
    },
    title () {
      return `Аренда ${typeOfHousing[this.item.typeOfHousing].toLowerCase()} на ${this.dayCount} ${num2str(this.dayCount, this.keyDay)} × ${this.priceName} · ${this.places}`
      // return `Запрос на ${this.item.price.byTheDay.length ? 'краткосрочную' : 'долгосрочную'} аренду жилья в г. ${this.item.address.city}, ${this.item.address.region}`
    },
    places () {
      return `${this.countGuests} ${num2str(this.countGuests, this.placeKey)}`
    },
    priceName () {
      return this.item.price + ` ₽`
    },
    countRooms () {
      return `${this.countGuests} ${num2str(this.countGuests, this.textGuests)} ${this.item.numberOfRooms} комнат`
    },
    countGuests () {
      return this.item.sleepingPlace.reduce((sum, cur) => sum + (cur.typeOfPlace === 'bunkBed' ? parseInt(cur.amount) * 2 : parseInt(cur.amount)), 0)
    },
    dayCount () {
      const timeStBegin = new Date(this.day[0].split('.').slice(0).reverse().join('-'))
      const timeStEnd = new Date(this.day[1].split('.').slice(0).reverse().join('-'))

      return Math.ceil(Math.abs(timeStEnd.getTime() - timeStBegin.getTime()) / (1000 * 3600 * 24))
    },
    address () {
      const { address } = this.item
      const res = []

      for (const key in address) {
        if (key !== 'house' && key !== 'coords' && key !== 'geo' && key !== 'apartment' && key !== 'country' && key !== 'region') {
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
