import Description from '~/components/blocks/Description'

export default {
  components: { Description },
  props: {
    info: {
      Type: Object,
      default: {}
    }
  },
  methods: {
    connect () {
      console.log('connect')
    }
  }
}
