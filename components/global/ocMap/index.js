import { loadYmap } from 'vue-yandex-maps'
import settings from '~/plugins/yandexMaps'

export default {
  props: {
    coords: {
      type: Array,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  watch: {
    address (newVal) { // obtain the coords for address(geocode object is not working)
      this.$axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${settings.apiKey}&geocode=${newVal}`)
        .then((res) => {
          const coords = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          if (coords) {
            this.markerCoords = coords.split(' ').reverse()
          }
        })
    },
    markerCoords (newVal) {
      this.$emit('input', newVal)
    }
  },
  data () {
    return {
      map: {},
      suggestView: null,
      address: '',
      markerCoords: this.coords || [45.389194, 33.993751]
    }
  },
  async mounted () {
    await loadYmap({ ...settings, debug: true })
  },
  methods: {
    getCurrentLocation () {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.markerCoords = [pos.coords.latitude, pos.coords.longitude]
      })
    },
    initMap (instance) {
      this.map = instance
      //  Add event click for placemark
      this.map.events.add('click', (e) => {
        this.markerCoords = e.get('coords')
      })
    }
  }
}
