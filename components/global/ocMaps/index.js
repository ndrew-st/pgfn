import { loadYmap } from 'vue-yandex-maps'
import settings from '~/plugins/yandexMaps'
import isArray from '~/utils/isArray'

export default {
  props: {
    coords: {
      type: [Array, Object],
      default: () => ({
        lat: 45.389194, lon: 33.993751
      })
    },
    zoom: {
      type: Number,
      default: 7
    },
    typeIcon: {
      type: String,
      default: null
    },
    center: {
      type: Object,
      default: null // model: { lat: Number, lon: Number }
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
      icon: {
        layout: 'default#image',
        imageHref: '/map-icon.png', // адрес изображения или data:image/svg+xml;base64
        imageSize: [56, 56], // размер иконки в px
        imageOffset: [0, 0]
      },
      showMap: false,
      address: '',
      markerCoords: [] // latitude, longitude
    }
  },
  computed: {
    centerMap () {
      if (this.center) {
        return this.getCoords(this.center)
      } else if (!this.isArrayCoords) {
        return this.getCoords(this.coords)
      } else {
        // throw new Error('Need to transfer the center of the map')
        return [45.389194, 33.993751]
      }
    },
    isArrayCoords () {
      return isArray(this.coords)
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
    this.showMap = true

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
    },
    getCoords (obj) {
      return [obj.lat, obj.lon]
    }
  }
}
