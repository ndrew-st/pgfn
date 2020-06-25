import ApTimeSelect from '../../../ap-time-select'
import ApCheckbox from '../../../ap-checkbox'

export default {
  components: {
    ApTimeSelect,
    ApCheckbox
  },
  props: {
    day: {
      type: String,
      required: true
    }
  }
}
