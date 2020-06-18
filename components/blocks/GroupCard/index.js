import { mapActions } from 'vuex'

export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [
        { name: '', url: '', id: 0 }
      ]
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    column: {
      type: Number,
      default: 3
    },
    count: {
      type: Number,
      required: true,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
      default: 'To set a title cart group'
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tabSelect: '',
      swiper: {},
      loading: false
    }
  },
  mounted () {
    if (this.tabs.length) {
      this.tabSelect = this.tabs[0].name === 'Популярные' ? this.tabs[0].url : ''
    }
  },
  methods: {
    async change (url) {
      this.loading = true

      await this.updateTabs({ field: this.name, url })

      this.loading = false
    },
    ...mapActions('direction', ['updateTabs'])
  }
}
