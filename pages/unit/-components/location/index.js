import Description from '~/components/blocks/Description'

import Address from '../Address'

export default {
  components: { Description, Address },
  props: {
    coords: {
      type: Object,
      required: true,
      default: null
    },
    address: {
      type: Object,
      required: true,
      default: null
    }
  }
}
