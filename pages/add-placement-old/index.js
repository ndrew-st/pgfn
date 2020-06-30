import Modal from './-componets/modal'
import Config from './config/modal'

export default {
  name: 'AddNewObject',
  components: { Modal },
  computed: {
    formConfig () {
      return Config
    }
  }
}
