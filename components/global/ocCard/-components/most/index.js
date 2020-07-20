import num2str from '~/utils/num2str'

import typeHousing from '~/constants/consts/typeOfHousing'

export default {
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
      attrsHeight: 0,
      widthWindow: 0,
      viewWidth: 0,
      reviewsText: ['отзыв', 'отзыва', 'отзывов'],
      viewsText: ['просмотр', 'просмотра', 'просмотров'],
      bedsText: ['кровать', 'кровати', 'кроватей'],
      guestKey: [ 'гость', 'гости', 'гостей' ]
    }
  },
  computed: {
    attrs () {
      return this.item.attrs && this.item.attrs.slice(0, 6)
    },
    adrs () {
      const { address } = this.item
      return address && `${this.item.address.country}, ${address.region}, ${address.city}, ${address.street}, ${address.house}`
    },
    typeHouse () {
      return typeHousing
    },
    title () {
      return `${parseInt(this.item.typeOfHousing) === 0 ? `${this.item.numberOfRooms}-к квартира` : typeHousing[parseInt(this.item.typeOfHousing)]}, ${this.item.areaOfHousin} м² `
    },
    countGuests () {
      let res = 0

      this.item.sleepingPlace.forEach((item) => {
        if (item.typeOfParam === 'bunkBed') {
          res += parseInt(item.amount) * 2
        } else {
          res += parseInt(item.amount)
        }
      })

      return `${res} ${num2str(res, this.guestKey)}`
    },
    countBeds () {
      let res = 0

      this.item.sleepingPlace.forEach((item) => {
        res += parseInt(item.amount)
      })

      return `${res} ${num2str(res, this.bedsText)}`
    },
    arrImages () {
      return this.item.images.length ? this.item.images : this.$store.state.images.content
    },
    bedsRoom () {
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
        this.addressWidth = this.$refs.addressCt.scrollWidth
        this.titleWidth = this.$refs.titleCt.scrollWidth
        this.attrsHeight = this.$refs.attrs.clientHeight
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
