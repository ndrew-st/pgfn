import { mapState } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  async asyncData ({ store }) {
    store.dispatch(`housing/filters/changeTypePage`, `supply`)
    await store.dispatch(`housing/getPlacementData`)
  },
  computed: {
    ...mapState(`housing`, {
      placement: state => state.placement,
      coords: state => state.result.coords,
      city: state => state.result.city
    })
  }
}
