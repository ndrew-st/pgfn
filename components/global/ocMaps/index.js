import { loadYmap } from 'vue-yandex-maps'
import settings from '~/plugins/yandexMaps'

export default {
  props: {
    coords: {
      type: Array,
      default: () => [45.389194, 33.993751]
    },
    params: {
      type: Object,
      default: () => {}
    },
    zoom: {
      type: Number,
      default: 7
    },
    name: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  data () {
    return {
      map: {},
      address: '',
      markerCoords: [45.389194, 33.993751] // latitude, longitude
    }
  },
  watch: {
    // address (newVal) { // obtain the coords for address(geocode object is not working)
    //   this.$axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${settings.apiKey}&geocode=${newVal}`)
    //     .then((res) => {
    //       const coords = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
    //       if (coords) {
    //         this.markerCoords = coords.split(' ').reverse()
    //       }
    //     })
    // },
    markerCoords (newVal) {
      this.$emit('input', newVal)
    }
  },
  async mounted () {
    await loadYmap({ ...settings, debug: true })

    // eslint-disable-next-line no-undef
    // console.log('ymaps ', ymaps)

    // this.suggestView = await new ymaps.SuggestView(this.$refs.findInput)

    // this.suggestView.events.add('select', (e) => { // select event
    //   this.address = e.get('item').value
    // })
  },
  methods: {
    // getCurrentLocation () {
    //   navigator.geolocation.getCurrentPosition((pos) => {
    //     this.markerCoords = [pos.coords.latitude, pos.coords.longitude]
    //   })
    // },
    initMap (instance) {
      this.map = instance
      //  Add event click for placemark
      // this.map.events.add('click', (e) => {
      //   this.markerCoords = e.get('coords')
      // })
    }
  }
}
