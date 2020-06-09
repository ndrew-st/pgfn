import { mapState } from 'vuex'

import FilterBlock from './-components/Filter'

export default {
  layout: 'main',
  components: { FilterBlock },
  // validate ({ query }) {
  //   return query.q && query.q.length
  // },
  asyncData ({ app, params }) {
    return {
      query: params.q
    }
  },
  data () {
    return {
      current: 'direction',
      totalPhotos: 100,
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    pageCount () {
      return 3
    },
    ...mapState('search', ['search', 'result'])
  },
  mounted () {
  },
  methods: {
    fetchItems (page) {

    },
    changeTab (name) {

    }
  }
}
