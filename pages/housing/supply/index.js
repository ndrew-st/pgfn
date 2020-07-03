import { mapState } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  async asyncData ({ store }) {
    // await store.dispatch(`housing/getData`)
  },
  computed: {
    ...mapState(`housing`, {
      list: state => state.result.items,
      coords: state => state.result.coords,
      city: state => state.result.city
    })
  }
}
