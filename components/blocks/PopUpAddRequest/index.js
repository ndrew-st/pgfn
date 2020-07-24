import ApInput from '../../../pages/add-placement/ap-input'
import ApDadataDropdown from '../../../pages/add-placement/ap-dadata-dropdown'

export default {
  components: {
    ApInput,
    ApDadataDropdown
  },
  data () {
    return {
      adressList: [],
      inputAdress: '',
      unknownHouse: null
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
    }
  }
}
