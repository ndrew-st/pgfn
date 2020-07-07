import Description from '~/components/blocks/Description'

import num2str from '~/utils/num2str'

export default {
  components: { Description },
  props: {
    description: {
      type: Object,
      default: null
    },
    info: {
      Type: Object,
      default: {}
    }
  },
  data () {
    return {
      active: false,
      textBed: [ 'спальня', 'спальни', 'спален' ]
    }
  },
  methods: {
    connect () {
      console.log('connect')
    }
  },
  computed: {
    title () {
      return `${this.description.typeOfHousing} ${this.description.countBed} ${num2str(this.description.countBed, this.textBed)}`
    }
  }
}
