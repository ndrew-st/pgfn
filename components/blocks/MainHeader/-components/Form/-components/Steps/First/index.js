import { mapState } from 'vuex'

export default {
  data () {
    return {
      nameSec: 'type-object',
      searchSel: '',
      list: [
        { name: 'Услуги', value: 'services', img: '/form/services.png', img2x: '/form/services@2x.png' },
        { name: 'Жильё', value: 'housing', img: '/form/housing.png', img2x: '/form/housing@2x.png' }
      ]
    }
  },
  computed: {
    ...mapState('search', ['search'])
  },
  mounted () {
    if (typeof this.search === 'string') {
      this.searchSel = this.search
    } else {
      this.searchSel = this.search[0].content // some problem with rendering nuxt - store get array
    }
  }
}
