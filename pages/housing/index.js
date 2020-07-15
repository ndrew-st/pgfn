import { mapState } from 'vuex'

import GroupCard from '~/components/blocks/GroupCard'

export default {
  components: { GroupCard },
  async asyncData ({ app: { store } }) {
    store.dispatch(`housing/filters/changeTypePage`, 'main')
    await store.dispatch(`direction/getPlacementData`)
    await store.dispatch(`direction/getRequestData`)
  },
  computed: {
    ...mapState(`direction`, {
      apartments: state => state.result,
      request: state => state.requestRes
    })
  },
  data () {
    return {
      likes: {
        direction: [],
        apartments: [],
        services: []
      }
    }
  },
  methods: {
    isLiked (id, field) {
      return this.likes[field].includes(id)
    },
    handlerLike (idCard, field) {
      this.likes = {
        ...this.likes,
        [field]: [
          ...this.likes[field],
          idCard
        ]
      }
    }
  }
}
