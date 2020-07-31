import { mapActions } from 'vuex'

import ApInput from '../ap-input/index.vue'
// import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'
import ApDadataDropdown from '../ap-dadata-dropdown'

export default {
  components: {
    ApInput,
    ApListDropdown,
    ApDadataDropdown
  },
  data () {
    return {
      map: {},
      coords: [55.753933, 37.620735], // если не дать координаты, карта не работает. Тут Москва, Кремль
      listTypeOfTenant: [
        { id: 0, code: 0, name: 'Собственник / арендодатель' },
        { id: 1, code: 1, name: 'Посредник' }
      ],
      typeOfTenant1: null,
      typeOfTenant2: null,
      listTypeOfTenant1: [
        { id: 0, code: 0, name: 'Частное лицо' },
        { id: 1, code: 1, name: 'Компания/ИП' },
        { id: 2, code: 2, name: 'Отель' },
        { id: 3, code: 3, name: 'Гостиница' },
        { id: 4, code: 4, name: 'Пансионат' },
        { id: 5, code: 5, name: 'Санаторий' },
        { id: 6, code: 6, name: 'Хостел' },
        { id: 7, code: 7, name: 'Кемпинг' }
      ],
      listTypeOfTenant2: [
        { id: 0, code: 8, name: 'Агент' },
        { id: 1, code: 9, name: 'Агентство' },
        { id: 2, code: 10, name: 'Частное лицо' },
        { id: 3, code: 11, name: 'Компания / ИП' }
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
      // debugger
      // if (!this.map.balloon.isOpen()) {
      const coords = ev.get('coords')
      //   this.map.balloon.open(coords, {
      //     contentHeader: 'Событие!',
      //     contentBody: '<p>Кто-то щелкнул по карте.</p>' +
      //                 '<p>Координаты щелчка: ' + [
      //       coords[0].toPrecision(6),
      //       coords[1].toPrecision(6)
      //     ].join(', ') + '</p>',
      //     contentFooter: '<sup>Щелкните еще раз</sup>'
      //   })
      // } else {
      //   this.map.balloon.close()
      // }
      this.coords = coords
      this.geoAdressByCoord(coords)
    },
    selectTypeOfTenant1 (par) {
      this.typeOfTenant1 = par
      if (this.typeOfTenant2 !== null) {
        this.typeOfTenant2 = null
      }
      this.$root.$emit('dropdown:hide')
      // this.$store.dispatch('setItem', )
      // debugger
      // this.setItem({ key: 'typeOfTenant', value: par.code })
    },
    selectTypeOfTenant2 (par) {
      this.typeOfTenant2 = par
      this.$root.$emit('dropdown:hide')
      this.setItem({ key: 'typeOfTenant', value: par.code }) // здесь кутерьма с названиями полей, здесь должен быть только typeOfTenant, typeOfHousing - на следующем шаге
    },
    selectAdress (val) {
      // debugger
      this.inputAdress = val.value
      this.coords = [val.data.geo_lat, val.data.geo_lon]
      // console.log('this.coords:', this.coords)
      if (val.data.fias_level === '8') {
        this.unknownHouse = null
      } else {
        // дом не существует в базе
        // debugger
        this.unknownHouse = val.data.house
      }
      this.geoAdressByCoord(this.coords) // чтобы загнать в state
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
    ...mapActions('placement', ['setItem'])
  }
  // ,
  // computed: {
  //   needArray () {
  //     return this.typeOfTenant !== null && thistypeOfTenant === 0 ? this.listTypeOfHousing1 : this.listTypeOfHousing2
  //   }
  // }
}
