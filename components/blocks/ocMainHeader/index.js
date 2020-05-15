import { mapActions } from 'vuex'

import Form from './-components/Form'

import OcSearchPanel from '~/components/blocks/ocSearchPanel'
import SearchInput from '~/components/ocSearchInput'

export default {
  components: { Form, SearchInput, OcSearchPanel },
  data () {
    return {
      mobileLinks: [
        { title: 'Поиск', link: '/search', icon: 'find' },
        { title: 'Закладки', link: '/bookmarks', icon: 'heart', iconClass: 'icon-heart' },
        { title: 'Меню', link: '/menu', icon: 'bag', iconClass: 'icon-bag' },
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
      show: false,
      list: [
        { id: 1, content: 'Жильё' },
        { id: 2, content: 'Услуги' }
      ] // add objects
    }
  },
  methods: {
    handlerSearch (srch) {
      this.search = srch
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

    window.removeEventListener('resize')
  }
}
