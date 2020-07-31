import { mapState } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  async asyncData ({ store, query: { filters } }) {
    store.dispatch(`housing/filters/changeTypePage`, `demand`)
    await store.dispatch(`housing/getRequestData`, filters)
  },
  computed: {
    ...mapState(`housing`, {
      list: state => state.request || [],
      coords: state => state.result.coords,
      city: state => state.result.city
    })
  }
}
