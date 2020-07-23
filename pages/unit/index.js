import { mapActions, mapState, mapGetters } from 'vuex'

import fac from '~/constants/fac'
import {
  moduleNameUnit,
  getPlacement,
  getRequest,
  setTypePage
} from '~/constants/actions/unit'

import GroupCard from '~/components/blocks/GroupCard'
import Subscribe from '~/components/blocks/Subscribe'

import H1Block from './-components/h1-block/index.vue'
import MapBlock from './-components/MapBlock'
import Pics from './-components/pics/index.vue'
import DescBlockTop from './-components/desc-block/index.vue'
import ThreeBlocks from './-components/three-blocks/index.vue'
import Comfort from './-components/comfort/index.vue'
import Rules from './-components/rules/index.vue'
import Location from './-components/location/index.vue'

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
    Subscribe
  },
  validate ({ params: { id } }) {
    return !!id
  },
  async asyncData ({ store, params: { id }, req }) {
    const type = req && req.url.split('/')[1]

    store.dispatch(setTypePage, type)

    if (type === 'habitation') {
      await store.dispatch(getPlacement, id)
    } else if (type === 'request') {
      // await store.dispatch(getRequest, id)
    }
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
    }
  }),
  computed: {
    ...mapGetters(moduleNameUnit, ['title']),
    ...mapState(moduleNameUnit, {
      type: state => state.type,
      header: (state) => {
        return {
          intro: state.result.title,
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
        return {
          typeOfHousing: state.result.typeOfHousing,
          countBed: state.result.sleepingPlace && state.result.sleepingPlace.length,
          content: state.result.description,
          countGuests: state.result.sleepingPlace.reduce((sum, cur) => sum + (cur.typeOfPlace === 'bunkBed' ? parseInt(cur.amount) * 2 : parseInt(cur.amount)), 0)
        }
      },
      prices: state => state.result.price,
      address: state => state.result.address,
      images: state => state.result.images,
      facilities: state => fac.filter(item => state.result.params && state.result.params.find(itm => itm.typeOfParam === item.value)),
      reservation: state => state.result.reservation,
      limits: (state) => {
        const idx = state.result.params && state.result.params.findIndex(item => item.typeOfParam === 'listLimits')

        return state.result.params.length && state.result.params[idx] && state.result.params[idx].paramValue
      },
      rates: state => state.rates,
      coords: state => state.result && state.result.address && state.result.address.geo
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
