import ApRadio from '../../../add-placement/ap-radio'
import ApTimeSelect from '../../../add-placement/ap-time-select'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selTime: 'allTime'
    }
  },
  components: {
    ApRadio,
    ApTimeSelect
  }
}
