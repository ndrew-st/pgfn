import { mapState } from 'vuex'

import Filters from './-components/filters'

export default {
  components: { Filters },
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
