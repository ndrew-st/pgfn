import { mapState, mapGetters } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  async asyncData ({ store, query: { filters } }) {
    store.dispatch(`housing/filters/changeTypePage`, `supply`)
    await store.dispatch(`housing/getPlacementData`, filters)
  },
  computed: {
    ...mapGetters('housing', ['placementCoords']),
    ...mapState(`housing`, {
      placement: state => state.placement.apartments,
      count: state => state.placement.count,
      city: state => state.result.city
    })
  }
}
