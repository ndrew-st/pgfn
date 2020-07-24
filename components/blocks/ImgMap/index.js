import { cardDesktopHeight, cardDesktopWidth } from '~/constants/sizes/images'
import { cardDesktopZoom } from '~/constants/sizes/zooms'

export default {
  props: {
    coords: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      url: ''
    }
  },
  methods: {
    loadImage ({ detail }) {
      this.url = `${process.env.api.static_img_yandex}pt=${detail.lon},${detail.lat},org&size=${cardDesktopWidth},${cardDesktopHeight}&z=${cardDesktopZoom}&l=map`
    }
  }
}
