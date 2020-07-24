import Calendar from '~/components/blocks/Calendar'
import ApInput from '../../../pages/add-placement/ap-input'
import ApDadataDropdown from '../../../pages/add-placement/ap-dadata-dropdown'
import ApButton from '../../../pages/add-placement/ap-button/index.vue'
import ApListDropdown from '../../../pages/add-placement/ap-list-dropdown/index.vue'

export default {
  components: {
    ApInput,
    ApDadataDropdown,
    ApButton,
    ApListDropdown,
    Calendar
  },
  data () {
    return {
      adressList: [],
      coords: [55.753933, 37.620735],
      inputAdress: '',
      unknownHouse: null,
      list: [
        { id: 0,
          name: 'Квартира/апартаменты',
          list: [
            { id: 0, label: 'Квартира целиком', code: 0 },
            { id: 1, label: 'Номер в отеле', code: 1 }
          ] },
        { id: 1,
          name: 'Дом/коттедж',
          list: [
            { id: 0, label: 'Дом целиком с отдельным двором', code: 2 },
            { id: 1, label: 'Дом целиком с общим двором', code: 3 },
            { id: 2, label: 'Дом целиком при отеле', code: 4 },
            { id: 3, label: 'Часть дома с отдельным двором', code: 5 },
            { id: 4, label: 'Часть дома с общим двором', code: 6 },
            { id: 5, label: 'Часть дома при отеле', code: 7 },
            { id: 6, label: 'Таунхаус', code: 8 },
            { id: 7, label: 'Таунхаус при отеле', code: 9 }
          ] },
        { id: 2,
          name: 'Комната',
          list: [
            { id: 0, label: 'В квартире', code: 10 },
            { id: 1, label: 'В доме', code: 11 },
            { id: 2, label: 'В хостеле', code: 12 }
          ] },
        { id: 3,
          name: 'Койко-место',
          list: [
            { id: 0, label: 'В квартире', code: 13 },
            { id: 1, label: 'В доме', code: 14 },
            { id: 2, label: 'В хостеле', code: 15 }
          ] },
        { id: 4,
          name: 'На природе',
          list: [
            { id: 0, label: 'Место на кемпинге', code: 16 },
            { id: 1, label: 'Земельный участок', code: 17 }
          ] }
      ],
      selItem: null,
      sleepingPlacesArray: [
        { id: 0, name: '1 место' },
        { id: 1, name: '2 места' },
        { id: 2, name: '3 места' },
        { id: 3, name: '4 места' },
        { id: 4, name: '5 мест' },
        { id: 5, name: '6 мест' },
        { id: 6, name: '7 мест' },
        { id: 7, name: '8 мест' },
        { id: 8, name: '9 мест' },
        { id: 9, name: '10 и более мест' }
      ],
      sleepingPlaces: '',
      datesOfStay: '',
      curDate: new Date().toString(),
      curSelStart: new Date().toString(),
      price: ''
    }
  },
  methods: {
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
      // if (inputText.length > 3) {
      const result = await this.$api.dadata.sendRequest(inputText)
      // debugger
      if (!result.error) {
        this.adressList = result.suggestions
        // console.log(this.adressList)
      } else {
        this.adressList = []
      }
      // }
    },
    async geoAdressByCoord (coords) {
      const result = await this.$axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.ymaps_key}&format=json&geocode=${coords[1]},${coords[0]}`)
      // debugger
      let refreshInput = true
      if (result) {
        const adress = {}
        // console.log('FormattedAdress: ' + result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted)
        const arrAdr = result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components
        const country = arrAdr.find(item => item.kind === 'country')
        if (country !== undefined) {
          // console.log('country: ' + country.name)
          adress.country = country.name
        }
        const province = arrAdr.find(item => item.kind === 'province')
        if (province !== undefined) {
          // console.log('province: ' + province.name)
          adress.region = province.name
        }
        const area = arrAdr.find(item => item.kind === 'area')
        if (area !== undefined) {
          // console.log('area: ' + area.name)
          adress.cityArea = area.name
        }
        const locality = arrAdr.find(item => item.kind === 'locality')
        if (locality !== undefined) {
          // console.log('locality: ' + locality.name)
          adress.city = locality.name
        }
        const street = arrAdr.find(item => item.kind === 'street')
        if (street !== undefined) {
          // console.log('street: ' + street.name)
          adress.street = street.name
        }
        const house = arrAdr.find(item => item.kind === 'house')
        if (house !== undefined) {
          // console.log('house: ' + house.name)
          adress.house = house.name
        } else if (this.unknownHouse !== null) {
          adress.house = this.unknownHouse
          refreshInput = false // обратно в строку не загоняем, там будут данные улицы без дома
        }
        // console.log('allAdress: ' + result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components)

        adress.geo = { lat: coords[0], lon: coords[1] }
        this.setItem({ key: 'address', value: adress }) // Обрати внимание, на бэке с 2 d, правильно и так и так
      }
      if (refreshInput) {
        this.inputAdress = result.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted
      }
    },
    selectItem (par) {
      this.selItem = par.id
      this.selId = 0 // нижний список обнуляем, чтоб не прыгали значения
      this.$root.$emit('dropdown:hide')
    },
    selectSleepingPlaces (val) {
      this.sleepingPlaces = val.name
      this.$root.$emit('dropdown:hide')
    },
    changeSelDate (date) {
      this.$root.$emit('dropdown:hide')
      this.datesOfStay = date
    }
  }
}
