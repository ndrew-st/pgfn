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
  async asyncData ({ store, params: { id }, route: { path } }) {
    const type = path && path.split('/')[1]

    store.dispatch(setTypePage, type)

    if (type === 'habitation') {
      await store.dispatch(getPlacement, id)
    } else if (type === 'request') {
      await store.dispatch(getRequest, id)
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
    ...mapGetters(moduleNameUnit, ['title', 'intro', 'date', 'countPlaces']),
    ...mapState(moduleNameUnit, {
      type: state => state.type,
      header: ({ result }) => {
        return {
          description: result.description,
          reviews: result.reviews,
          views: result.views,
          estimate: result.estimate,
          id: result.ownerId,
          price: result.price,
          typeOfHousing: result.typeOfHousing
        }
      },
      typeOfTenant: ({ result }) => result.typeOfTenant,
      description: ({ result }) => {
        return {
          typeOfHousing: result.typeOfHousing,
          countBed: result.sleepingPlace && result.sleepingPlace.length,
          content: result.description
        }
      },
      numberOfRooms: ({ result }) => result.numberOfRooms,
      prices: ({ result }) => result.price,
      address: ({ result }) => result.address,
      images: ({ result }) => result.images,
      facilities: ({ result }) => fac.filter(item => result.params && result.params.find(itm => itm.typeOfParam === item.value)),
      reservation: ({ result }) => result.reservation,
      limits: ({ result }) => {
        const idx = result.params && result.params.findIndex(item => item.typeOfParam === 'listLimits')

        return result.params.length && result.params[idx] && result.params[idx].paramValue
      },
      rates: state => state.rates,
      coords: state => state.result.address && state.result.address.geo
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
