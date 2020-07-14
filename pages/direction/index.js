import { mapActions, mapState } from 'vuex'

import FilterBlock from './-components/filter'

import Full from './-components/full'
import SubscribeEmail from '~/components/blocks/Subscribe'

import Description from '~/components/blocks/Description'
import GroupCard from '~/components/blocks/GroupCard'

import isEmptyObject from '~/utils/isEmptyObject'

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
    await store.dispatch(`direction/getData`, params.city || `Крым`)
  },
  data () {
    return {
      likes: {
        direction: [],
        apartments: [],
        services: []
      },
      date: 0,
      showComp: false
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
      count: state => state.result.count
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.showComp = true
    })
  },
  methods: {
    isLiked (id, field) {
      return this.likes[field].includes(id)
    },
    isEmptyObj (obj) {
      return isEmptyObject(obj)
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
