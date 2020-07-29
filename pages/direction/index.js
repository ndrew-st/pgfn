import { mapActions, mapState } from 'vuex'

import SubscribeEmail from '~/components/blocks/Subscribe'
import Description from '~/components/blocks/Description'
import GroupCard from '~/components/blocks/GroupCard'

import Full from './-components/full'
import FilterBlock from './-components/filter'

export default {
  layout: 'main',
  scrollToTop: true,
  components: {
    Full,
    Description,
    SubscribeEmail,
    GroupCard,
    FilterBlock
  },
  async asyncData ({ params, store }) {
    await store.dispatch(`direction/getPlacementData`, params.city || `Крым`)
    await store.dispatch(`direction/getRequestData`)
  },
  data () {
    return {
      likes: {
        direction: [],
        apartments: [],
        services: []
      },
      date: 0
    }
  },
  computed: {
    ...mapState('direction', {
      direction: state => state.result.direction || state.dir,
      apartments: state => state.result,
      services: state => state.result.services || state.dir,
      description: state => state.result.description,
      head: (state) => {
        return {
          title: state.result.title,
          description: state.result.description,
          keywords: state.result.keywords
        }
      },
      header: (state) => {
        return {
          title: state.result.header,
          description: state.result.mainText,
          background: state.result.background
        }
      },
      count: state => state.result.count,
      request: state => state.request
    })
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
    },
    showRequest () {
      this.$emit('showRequest')
    },
    ...mapActions('direction', ['updateTabs'])
  },
  head () {
    return {
      title: this.head.title,
      meta: [
        { name: 'description', content: this.head.description },
        { name: 'keywords', content: this.head.keywords }
      ]
    }
  }
}
