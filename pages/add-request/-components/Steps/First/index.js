import CheckList from '../../CheckList'
import Map from '../../Map'

export default {
  props: {

  },
  components: { CheckList, Map },
  data () {
    return {
      infrastructureNearby: '',
      nature: '',
      coords: [],
      list: [
        {
          groupName: 'Инфраструктура поблизости',
          params: [
            { label: 'Аптека', value: 'pharmacy' },
            { label: 'Детский сад', value: 'kindergarten' },
            { label: 'Кафе/ресторан', value: 'cafe-restaurant' }
          ]
        },
        {
          groupName: 'Природа',
          params: [
            { label: 'Парк', value: 'park' },
            { label: 'Лес', value: 'forest' }
          ]
        }
      ]
    }
  },
  methods: {
    handlerCoords (coords) {
      console.log('coords ', coords)
    }
  }
}
