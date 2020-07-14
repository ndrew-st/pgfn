import ApInput from '../../add-placement/ap-input/index.vue'
import CheckboxesList from '../../add-placement/blocks/checkboxes-list'
import ApDadataDropdown from '../../add-placement/ap-dadata-dropdown'

export default {
  components: {
    ApInput,
    CheckboxesList,
    ApDadataDropdown
  },
  data () {
    return {
      map: {},
      coords: [55.753933, 37.620735], // если не дать координаты, карта не работает. Тут Москва, Кремль
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
      ],
      adressList: [],
      inputAdress: '',
      unknownHouse: null
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    },
    clickMap (ev) {
      const coords = ev.get('coords')
      this.coords = coords
      this.geoAdressByCoord(coords)
    },
    selectAdress (val) {
      this.inputAdress = val.value
      this.coords = [val.data.geo_lat, val.data.geo_lon]
      if (val.data.fias_level === '8') {
        this.unknownHouse = null
      } else {
        // дом не существует в базе
        this.unknownHouse = val.data.house
      }
      this.geoAdressByCoord(this.coords)
      this.adressList = []
    },
    async askDadata (inputText) {
      const result = await this.$api.dadata.sendRequest(inputText)
      if (!result.error) {
        this.adressList = result.suggestions
      } else {
        this.adressList = []
      }
    },
    async geoAdressByCoord (coords) {
      const result = await this.$axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.ymaps_key}&format=json&geocode=${coords[1]},${coords[0]}`)
      let refreshInput = true
      if (result) {
        const adress = {}
        const arrAdr = result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components
        const country = arrAdr.find(item => item.kind === 'country')
        if (country !== undefined) {
          adress.country = country.name
        }
        const province = arrAdr.find(item => item.kind === 'province')
        if (province !== undefined) {
          adress.region = province.name
        }
        const area = arrAdr.find(item => item.kind === 'area')
        if (area !== undefined) {
          adress.cityArea = area.name
        }
        const locality = arrAdr.find(item => item.kind === 'locality')
        if (locality !== undefined) {
          adress.city = locality.name
        }
        const street = arrAdr.find(item => item.kind === 'street')
        if (street !== undefined) {
          adress.street = street.name
        }
        const house = arrAdr.find(item => item.kind === 'house')
        if (house !== undefined) {
          adress.house = house.name
        } else if (this.unknownHouse !== null) {
          adress.house = this.unknownHouse
          refreshInput = false // обратно в строку не загоняем, там будут данные улицы без дома
        }

        adress.geo = { lat: coords[0], lon: coords[1] }
        this.$store.dispatch('placement/setItem', { key: 'address', value: adress }) // Обрати внимание, на бэке с 2 d, правильно и так и так
      }
      if (refreshInput) {
        this.inputAdress = result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted
      }
    }
  }
}
