import { mapState } from 'vuex'

import Filters from './-components/filters'
import ocPaginate from '~/components/global/ocPagination'
import ocCardItem from '~/components/ocCardItem'

export default {
  components: { ocPaginate, ocCardItem, Filters },
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
