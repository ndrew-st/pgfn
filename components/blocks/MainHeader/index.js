import { mapActions } from 'vuex'

import Form from './-components/Form'

import SearchPanel from '~/components/blocks/SearchPanel'

export default {
  components: { Form, SearchPanel },
  data () {
    return {
      mobileLinks: [
        { title: 'Поиск', link: '/search', icon: 'find' },
        { title: 'Закладки', link: '/bookmarks', icon: 'heart', iconClass: 'icon-heart' },
        { title: 'Меню', link: '/menu', icon: 'home', iconClass: 'icon-menu' },
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
      result: [
        // { id: 1, content: 'Search 1' },
        // { id: 2, content: 'Search 2' },
        // { id: 3, content: 'Search 3' },
        // { id: 4, content: 'Search 4' }
      ],
      focused: false,
      // Geo block
      geoSearch: 'Россия',
      // header-controls
      list: [
        { id: 1, content: 'Жильё' },
        { id: 2, content: 'Услуги' }
      ] // add objects
    }
  },
  methods: {
    handlerSearch () {
      // try {
      //   const { data } = await this.searchByQuery(this.search)
      //   this.result = data
      //   this.touched = true
      // } catch (e) {
      //   this.error = e
      //   this.search = ''
      //   this.touched = false
      // }
    },
    handlerSubmit (id) {
      this.touched = false

      if (!id && !this.search.length) {
        return
      }

      this.selectResult = id ? this.result.filter(item => item.id === id) : this.search
      this.addSearchRequest(this.selectResult)

      if (this.widthWindow >= this.desktopWidth) { // desktop
        // try {
        //   const { data } = this.searchObject({ search: this.search, request: this.result })
        //   this.success = true
        // } catch (e) {
        //   this.success = false
        // }
      } else { // mobile
        this.showForm = true
      }
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
