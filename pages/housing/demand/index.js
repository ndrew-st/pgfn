import { mapState, mapGetters } from 'vuex'

import Catalog from '~/pages/housing/-components/Catalog'

export default {
  components: { Catalog },
  async asyncData ({ store, query: { filters } }) {
    store.dispatch(`housing/filters/changeTypePage`, `demand`)
    await store.dispatch(`housing/getRequestData`, filters)
  },
  computed: {
    ...mapGetters('housing', ['requiresCoords']),
    ...mapState(`housing`, {
      list: state => state.request.request,
      city: state => state.result.city
    })
  }
}
