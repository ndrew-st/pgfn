import { mapActions, mapState } from 'vuex'

import H1Block from './-components/h1-block/index.vue'
import MapBlock from './-components/MapBlock'
import Pics from './-components/pics/index.vue'
import DescBlockTop from './-components/desc-block/index.vue'
import ThreeBlocks from './-components/three-blocks/index.vue'
import Comfort from './-components/comfort/index.vue'
import Rules from './-components/rules/index.vue'
import Location from './-components/location/index.vue'
import BookingFooter from './-components/booking-footer/index.vue'
import Booking from './-components/booking/index.vue'

import GroupCard from '~/components/blocks/GroupCard'
import Footer from '~/components/blocks/Footer'
import Subscribe from '~/components/blocks/Subscribe'

export default {
  layout: 'unit',
  components: {
    H1Block,
    MapBlock,
    Pics,
    DescBlockTop,
    ThreeBlocks,
    Comfort,
    Rules,
    Location,
    GroupCard,
    Footer,
    BookingFooter,
    Booking,
    Subscribe
  },
  validate ({ params: { id } }) {
    return !!id
  },
  async asyncData ({ store, params }) {
    console.log('params ', params)

    await store.dispatch(`habitation/getItem`, params.id)
  },
  data: () => ({
    user: {
      owner: 'Артем А.',
      initials: 'АА',
      online: true,
      lastSeen: 'Был в сети 1 час назад',
      ownerStatus: 'Хозяин жилья',
      languages: 'Русский, English',
      regDate: 'Зарегистрирован на сайте 10 месяцев назад'
    },
    onlineBooking: {
      onlinePay: true,
      minPeriodCancel: 'сутки'
    },
    location: [
      'Россия',
      'Республика Крым',
      'город Судак',
      'улица Ленина д 9'
    ],
    locDesc: 'Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км...'
  }),
  computed: {
    ...mapState('habitation', {
      header: (state) => {
        return {
          title: state.result.title,
          intro: state.result.intro,
          description: state.result.description,
          reviews: state.result.reviews,
          views: state.result.views,
          estimate: state.result.estimate,
          id: state.result.ownerId,
          date: state.result.date,
          price: state.result.price,
          typeOfHousing: state.result.typeOfHousing
        }
      },
      description: (state) => {
        const idx = state.result.params.findIndex(item => item.typeOfParam === 'params.guests')

        return {
          typeOfHousing: state.result.typeOfHousing,
          countBed: state.result.sleepingPlace && state.result.sleepingPlace.length,
          content: state.result.description,
          countGuests: state.result.params[idx] && state.result.params[idx].paramValue.length
        }
      },
      prices: state => state.result.price,
      address: state => state.result.address,
      images: state => state.result.images,
      facilities: (state) => {
        const idx = state.result.params && state.result.params.findIndex(item => item.typeOfParam === 'params.facilities')

        return state.result.params[idx] && state.result.params[idx].paramValue
      },
      reservation: state => state.result.reservation,
      limits: (state) => {
        const idx = state.result.params && state.result.params.findIndex(item => item.typeOfParam === 'params.listLimits')

        return state.result.params[idx].paramValue
      },
      rates: state => state.rates,
      coords: state => state.result && state.result.address.coords
    })
  },
  methods: {
    handlerTab (field, url) {
      this.updateTabs({ field, url })
    },
    handlerLike (idCard, field) {
      // what do with likes
    },
    changeBookingActive () {
      this.bookingActive = !this.bookingActive
    },
    ...mapActions('search-page', ['updateTabs'])
  }
}
