import { mapActions, mapState } from 'vuex'

import TopLine from './-components/top-line/index.vue'
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
  layout: 'clean',
  components: {
    TopLine,
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
  async asyncData ({ store }) {
    // await store.dispatch(`search/getData`, `Крым`)
  },
  data: () => ({
    descInfo: {
      title: 'Квартира 2 спальни 7 гостей',
      desc: [
        'Апартаменты представляют собой 3х комнатную квартиру, площадью 146 м2, находятся на 11',
        'Апартаменты представляют собой 3х комнатную квартиру, площадью 146 м2, находятся на 11 этаже 12-ти этажного кирпичного дома. В апартаментах могут расположиться до 7 гостей, в их распоряжении 3 комнаты, 4 кровати, кухня, ванная комната с джакузи и балкон. Оформлена в стиле модерн... '
      ],
      owner: 'Артем А.',
      initials: 'АА',
      online: true,
      lastSeen: 'Был в сети 1 час назад',
      ownerStatus: 'Хозяин жилья',
      languages: 'Русский, English',
      regDate: 'Зарегистрирован на сайте 10 месяцев назад'
    },
    tariffs: [
      { name: 'Стандартный', desc: 'Без уборки, без дополнительных опций', value: 'standard' },
      {
        name: 'С уборкой',
        desc: 'Уборка осуществляется в то время, которое укажете вы',
        value: 'clean'
      }
    ],
    onlineBooking: {
      onlinePay: true,
      minPeriodCancel: 'сутки'
    },
    rules1: [
      'Въезд в 12:00',
      'Выезд не позже 14:00',
      'Звонок за час до въезда.'
    ],
    rules2: [
      'Нельзя с животными',
      'Нельзя с детьми',
      'Нельзя курить'
    ],
    location: [
      'Россия',
      'Республика Крым',
      'город Судак',
      'улица Ленина д 9'
    ],
    coords: [
      44.858161, 34.974244
    ],
    locDesc: 'Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км...',
    bookingFooterInfo: {
      manCount: '2 гостя',
      period: '23 мая 2020 - 26 мая 2020',
      habitation: '3-к квартира, 146 м²... ',
      price: '4500₽/сутки'
    },
    bookingActive: false
  }),
  computed: {
    ...mapState('habitation', {
      header: (state) => {
        return {
          title: state.result.title,
          intro: state.result.intro,
          description: state.result.description,
          reviews: state.result.reviews,
          estimate: state.result.estimate,
          id: state.result.ownerId,
          date: state.result.date,
          price: state.result.price
        }
      },
      description: (state) => {
        return {
          typeOfHousing: state.result.typeOfHousing,
          countBed: state.result.sleepingPlace.length,
          content: state.result.description
        }
      },
      prices: state => state.result.price,
      address: state => state.result.address,
      images: state => state.result.images,
      facilities: (state) => {
        const idx = state.result.params.findIndex(item => item.typeOfParam === 'params.facilities')

        return state.result.params[idx] && state.result.params[idx].paramValue
      }
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
