import { mapActions } from 'vuex'

import SearchPanel from '~/components/blocks/SearchPanel'

import { isAuth } from '~/constants/getters/auth'

import Form from './-components/Form'
import User from './-components/User'

export default {
  components: { Form, SearchPanel, User },
  data () {
    return {
      mobileLinks: [
        { title: 'Поиск', link: '/search', icon: 'find' },
        { title: 'Закладки', link: '/bookmarks', icon: 'heart' },
        { title: 'Меню', link: '/menu', icon: 'home' },
        { title: 'Добавить', link: '/add-object', icon: 'add' },
        { title: 'Вход', link: '/sign-in', icon: 'user' }
      ],
      widthWindow: 0,
      desktopWidth: 1090,
      error: null,
      selectObject: '', // select add object
      selectResult: '', // select result
      showForm: false, // Mobile menu
      // find-header block
      touched: false,
      search: '',
      result: [],
      focused: false,
      // Geo block
      geoSearch: 'Россия',
      // header-controls
      list: [
        { id: 1, content: 'Жильё', url: '/add-placement' },
        { id: 2, content: 'Запрос на аренду жилья', url: '/add-request' }
      ] // add objects
    }
  },
  computed: {
    isAuth () {
      return this.$store.getters[`auth/${isAuth}`]
    },
    name () {
      return this.$store.state.auth.user && this.$store.state.auth.user.name
    }
  },
  methods: {
    goTo (url) {
      this.search = ''
      this.touched = false
      this.result = []

      this.$router.push(url)
    },
    async handlerSearch () {
      if (!this.search.length) {
        this.touched = false
        return
      }

      const data = await this.$api.apartments.searching(this.search)

      if (data.error) {
        this.error = data
        this.touched = true

        return
      }

      this.result = data
      this.touched = true
    },
    handlerClickResult (search) {
      this.touched = false

      if (!search && !this.search.length) {
        return
      }

      this.addSearchRequest(search)

      if (this.widthWindow >= this.desktopWidth) { // desktop
        this.goTo(`/search?q=${search}`)
      } else { // mobile
        this.showForm = true
      }
    },
    handlerSubmit () {

    },
    toggleFocus (flag) {
      this.focused = flag
    },
    handlerResizeWindow (evt) {
      this.widthWindow = evt.target.innerWidth
    },
    addObject (id) {
      // this.show = false
      // this.selectObject = this.list.filter(item => item.id === id)
    },
    closeModalMenu () {
      this.showForm = false
    },
    ...mapActions('search', ['addSearchRequest', 'searchByQuery', 'searchObject'])
  },
  mounted () {
    this.widthWindow = window.innerWidth

    window.addEventListener('resize', this.handlerResizeWindow)
  },
  beforeDestroy () {
    this.list = []
    this.touched = false
    this.show = false

    this.selectObject = ''
    this.checkedResult = ''

    window.removeEventListener('resize', this.handlerResizeWindow)
  }
}
