import { mapState } from 'vuex'

import CatalogMap from '~/components/blocks/CatalogMap'

export default {
  components: { CatalogMap },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(`housing`, {
      items: state => state.result.itm,
      coords: state => state.result.coords
    })
  }
}
