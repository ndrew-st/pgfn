import num2str from '~/utils/num2str'
import randomString from '~/utils/randomString'

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
    type: { // For output card in carousel and catalog
      type: String,
      required: true
    }
  },
  watch: {
    showPrice (val) {
      if (!this.moreBlock) {
        return
      }

      if (this.parentCarousel) {
        this.parentCarousel.querySelectorAll('.price-more').forEach((item) => {
          item.classList.add('hidden')
        })

        if (val) {
          this.moreBlock.classList.remove('hidden')
        }

        return
      }

      if (val) {
        this.moreBlock.children[0].classList.remove('hidden')
      }
    }
  },
  data () {
    return {
      widthContainer: 0,
      addressWidth: 0,
      titleWidth: 0,
      parentCarousel: null,
      // attrsHeight: 0,
      widthWindow: 0,
      moreBlock: null,
      showPrice: false,
      parentListCarousel: null,
      random: null,
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
        if (key !== 'house' && key !== 'geo' && key !== 'country' && key !== 'region') {
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
    },
    leftPosition () {
      return this.$refs.card && this.$refs.card.offsetLeft
    }
  },
  mounted () {
    this.updateValues()

    const root = this.$root
    const { morePriceButton } = this.$refs

    root.$on('more-price:hide', () => this._hideDropDown())

    document.addEventListener('mousedown', function ({ target }) {
      const button = target.closest('.card-price-more__button')
      const body = target.closest('.price-more')

      if (!button && !body) {
        root.$emit('more-price:hide')

        return
      }

      if (!morePriceButton.isEqualNode(button) && !this.$refs.moreBlock.isEqualNode(body)) {
        root.$emit('more-price:hide')
      }
    })
  },
  beforeUpdate () {
    if (process.client && this.isShowMorePrice) {
      if (!this.random) {
        this.random = randomString(10)
      }

      this.parentCarousel = this.$refs.card.closest('div.carousel')
      this.parentListCarousel = this.$refs.card.closest('.carousel__list')

      if (!this.parentCarousel) { // card output without carousel
        this.moreBlock = this.$refs.moreBlock

        return
      }

      if (!this.parentCarousel.querySelector('.' + this.random)) {
        this.moreBlock = this.parentCarousel.appendChild(this.$refs.moreBlock.children[0])
        this.moreBlock.classList.add(this.random)
        this.moreBlock.style.left = this.leftPosition + 'px'
      }
    }
  },
  methods: {
    prevent () {
      return false
    },
    _hideDropDown () {
      this.showPrice = false
    },
    toggleMorePrice () {
      if (!this.parentCarousel) {
        this.showPrice = !this.showPrice

        return
      }

      this.moreBlock.style.left = this.$refs.card.getBoundingClientRect().left - this.parentCarousel.getBoundingClientRect().left + 'px'

      if (!this.showPrice) {
        this.$root.$emit('more-price:hide')
        this.showPrice = true

        return null
      }

      this.showPrice = false
    },
    goTo (url) {
      this.$router.push(url)
    },
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
    }
  }
}
