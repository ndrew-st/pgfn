import history from './-components/history'
import request from './-components/request'
import ads from './-components/ads'

export default {
  components: { history, ads, request },
  props: {
    type: {
      type: String,
      default: 'history'
    }
  }
}
