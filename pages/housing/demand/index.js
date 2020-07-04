import { mapState } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  asyncData ({ store }) {
    store.dispatch(`housing/filters/changeType`, `demand`)
    // await store.dispatch(`housing/getData`)
  },
  computed: {
    ...mapState(`housing`, {
      list: state => state.result.itm,
      coords: state => state.result.coords,
      city: state => state.result.city
    })
  }
}
