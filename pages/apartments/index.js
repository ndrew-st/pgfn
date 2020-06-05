import { mapState } from 'vuex'

import Filters from './-components/filters'
import ocPaginate from '~/components/global/ocPagination'

export default {
  components: { ocPaginate, Filters },
  async asyncData ({ app }) {
    // await app.store.dispatch(`apartments/getData`)
  },
  layout: 'main',
  data () {
    return {
      perPage: 9,
      currentPage: 1,
      items: []
    }
  },
  computed: {
    ...mapState(`apartments`, [ `result` ])
  },
  methods: {
    fetchItems () {

    },
    handlerLike (id, type) {

    }
  }
}
