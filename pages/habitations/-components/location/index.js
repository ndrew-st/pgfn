import Description from '~/components/blocks/Description'

export default {
  components: { Description },
  props: {
    coords: {
      type: Array,
      required: true,
      default: []
    },
    location: {
      type: Array,
      required: true,
      default: []
    },
    locDesc: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      map: {},
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/icons/icon-house.png',
        imageSize: [56, 56],
        imageOffset: [0, 0]
        // content: '123 v12',
        // contentOffset: [0, 15],
        // contentLayout: '<div styles="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      }
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    }
  }
}
