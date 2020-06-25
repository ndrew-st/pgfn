<template>
  <div class="map">
    <label class="map__label">
      <input
        ref="findInput"
        :placeholder="params.placeholder"
        class="map__input"
        type="text"
      >
    </label>
    <button
      class="map__button"
      type="button"
      @click="getCurrentLocation"
    >
      Определить моё месторасположение
    </button>
    <yandex-map
      :coords="markerCoords.length ? markerCoords : [45.389194, 33.993751]"
      zoom="7"
      class="map__content"
      @map-was-initialized="initMap"
    >
      <ymap-marker
        :coords="markerCoords"
        marker-id="123"
      />
    </yandex-map>
  </div>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps'
import settings from '~/plugins/yandexMaps'

export default {
  name: 'Map',
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    setValue: {
      type: Array,
      default: () => []
    }
  },
  $_veeValidate: {
    // value getter
    value () {
      return this.markerCoords
    },
    // name getter
    name () {
      return this.name
    }
  },
  data () {
    return {
      map: {},
      suggestView: null,
      address: '',
      markerCoords: this.setValue || [] // latitude, longitude
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
  async mounted () {
    await loadYmap({ ...settings, debug: true })

    // this.suggestView = await new ymaps.SuggestView(this.$refs.findInput)

    this.suggestView.events.add('select', (e) => { // select event
      this.address = e.get('item').value
    })
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
</script>

<style lang="stylus">
  .map
    max-width 400px

    &__label
      position: relative

      display: block
      margin-bottom: 5px;

      &:before
        content: '*'

        position: absolute;
        left -15px
        top 0
        bottom 0

        display block
        margin auto 0
        margin-top: 10px
        color red

    &__input
      width 100%
      height 30px
      padding-left: 10px;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px;

      cursor: pointer;

      box-sizing: border-box;

    &__button
      color blue
      text-decoration: underline;

      background-color transparent
      border 0

      cursor pointer

    &__content
      width 400px
      height 200px
      margin 10px 0
</style>
