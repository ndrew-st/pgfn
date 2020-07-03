import { mapState } from 'vuex'

export default {
  async asyncData ({ app: { store } }) {
    await store.dispatch(`housing/getAllData`)
  },
  computed: {
    ...mapState(`housing`, {
      placementItems: state => state.result.items,
      requestItems: state => state.result.itm
    }),
    allItems () {
      return this.shuffle([...this.placementItems, ...this.requestItems])
    }
  },
  methods: {
    shuffle (array) {
      return array.sort(() => Math.random() - 0.5).slice(0)
    }
  }
}
