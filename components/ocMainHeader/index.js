import { mapActions } from 'vuex'

import Icon from '~/components/ocIcon'
import Form from './-components/Form'

import SeachInput from '~/components/ocSearchInput'

export default {
  components: { Form, Icon, SeachInput },
  data () {
    return {
      search: '',
      error: null,
      list: [], // add objects
      result: [], // search result
      selectObject: '', // select add object
      selectResult: '', // select result
      show: false, // For add dropdown select
      touched: false, // Search form
      widthWindow: 0,
      desktopWidth: 1090,
      showForm: false // Mobile menu
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
