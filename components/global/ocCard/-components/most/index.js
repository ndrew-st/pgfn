import num2str from '~/utils/num2str'

import typeHousing from '~/constants/consts/typeOfHousing'

import MoreBlock from './-components/MoreBlock'

export default {
  components: { MoreBlock },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        address: {
          country: '',
          region: '',
          city: '',
          street: '',
          house: 142
        },
        price: { byTheDay: [], longTerm: [] },
        firstPaymentAmount: { byTheDay: '', longTerm: '' },
        reservation: {
          typeOfReservation: '',
          cancellationPolicy: '',
          departureTime: [],
          timeForCalls: [],
          pickUpTime: []
        },
        images: [ ],
        _id: '',
        title: '',
        description: '',
        city: '',
        typeOfTenant: 0,
        typeOfHousing: 0,
        numberOfRooms: 0,
        areaOfHousin: 0,
        sleepingPlace: [ ],
        params: [ ],
        facilities: [ ],
        status: 0
      })
    },
    isLiked: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      widthContainer: 0,
      addressWidth: 0,
      titleWidth: 0,
      // attrsHeight: 0,
      widthWindow: 0,
      viewWidth: 0,
      reviewsText: ['отзыв', 'отзыва', 'отзывов'],
      viewsText: ['просмотр', 'просмотра', 'просмотров'],
      bedsText: ['кровать', 'кровати', 'кроватей'],
      guestKey: ['гость', 'гостя', 'гостей'],
      placeKey: [ 'место', 'места', 'мест' ]
    }
  },
  computed: {
    // addressWidth () {
    //   return this.$refs.addressCt && this.$refs.addressCt.scrollWidth
    // },
    isShowMorePrice () {
      const { byTheDay, longTerm } = this.item.price
      return byTheDay.length > 1 || longTerm.length > 1
    },
    attrs () {
      return this.item.attrs && this.item.attrs.slice(0, 6)
    },
    adrs () {
      const { address } = this.item
      const res = []

      for (const key in address) {
        if (key !== 'house' && key !== 'geo') {
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
    },
    typeHouse () {
      return typeHousing
    },
    title () {
      return `${parseInt(this.item.typeOfHousing) === 0 ? `Квартира ${this.item.numberOfRooms}-к` : typeHousing[parseInt(this.item.typeOfHousing)]}, ${this.item.areaOfHousin} м² · ${this.countGuests} ${num2str(this.countGuests, this.placeKey)}`
    },
    countGuests () {
      return this.item.sleepingPlace.reduce((sum, cur) => sum + (cur.typeOfPlace === 'bunkBed' ? parseInt(cur.amount) * 2 : parseInt(cur.amount)), 0)
    },
    countBeds () {
      const res = this.item.sleepingPlace.reduce((sum, cur) => sum + parseInt(cur.amount), 0)

      return `${res} ${num2str(res, this.bedsText)}`
    },
    arrImages () {
      return this.item.images.length ? this.item.images : this.$store.state.images.content
    }
  },
  mounted () {
    this.updateValues()
  },
  methods: {
    updateValues () {
      this.$nextTick(() => {
        this.widthWindow = window.screen.width
        this.widthContainer = this.$refs.card.clientWidth
        if (this.$refs.addressCt.scrollWidth) {
          this.addressWidth = this.$refs.addressCt.scrollWidth
        }
        this.titleWidth = this.$refs.titleCt.scrollWidth
        // this.attrsHeight = this.$refs.attrs.clientHeight
        this.viewWidth = this.$refs.views && this.$refs.views.clientWidth
      })
    },
    handlerResize (e) {
      if (this.widthWindow === e.target.screen.width) {
        return false
      }

      this.updateValues()
    },
    mouseEnter () {
      if (this.titleWidth < 1) {
        this.updateValues()
      }
    },
    touchStart () {
      this.updateValues()
    },
    reviewText (num) {
      return num2str(num, this.reviewsText)
    },
    viewText (num) {
      return num2str(num, this.viewsText)
    }
  }
}
