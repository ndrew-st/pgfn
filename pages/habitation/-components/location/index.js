import Address from '../Address'
import Description from '~/components/blocks/Description'

export default {
  components: { Description, Address },
  props: {
    coords: {
      type: Object,
      required: true,
      default: null
    },
    address: {
      type: Object,
      required: true,
      default: null
    },
    location: {
      type: Array,
      required: true,
      default: []
    },
    locDesc: {
      type: String,
      required: true,
      default: null
    }
  },
  data () {
    return {
      map: {},
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/icons/ads-house.svg',
        imageSize: [56, 56],
        imageOffset: [0, 0]
        // content: '123 v12',
        // contentOffset: [0, 15],
        // contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      },
      readMoreActive: false,
      locDescLong: 'Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км.'
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    }
  }
}
