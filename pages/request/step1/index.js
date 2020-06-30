import ApInput from '../../add-placement/ap-input/index.vue'
import CheckboxesList from '../../add-placement/blocks/checkboxes-list'

export default {
  components: {
    ApInput,
    CheckboxesList
  },
  data () {
    return {
      map: {},
      coords: [],
      infrastructure: [
        { label: 'Аптека', value: 'pharmacy' },
        { label: 'Детский сад', value: 'kindergarten' },
        { label: 'Кафе/ресторан', value: 'cafe' },
        { label: 'Кинотеатр', value: 'cinema' },
        { label: 'Продуктовый магазин/рынок', value: 'market' },
        { label: 'Торговый центр', value: 'mall' },
        { label: 'Школа', value: 'school' }
      ],
      nature: [
        { label: 'Парк', value: 'park' },
        { label: 'Лес', value: 'forest' },
        { label: 'Водоем', value: 'lake' },
        { label: 'Море', value: 'sea' }
      ]
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    }
  }
}
