import Header from './-components/Header'

import first from './-components/Steps/First'
import second from './-components/Steps/Second'

import Conf from './config/index.json'

export default {
  layout: 'clean',
  components: {
    Header,
    first,
    second
  },
  data () {
    return {
      current: 0,
      result: {},
      error: null,
      loading: false
    }
  },
  computed: {
    buttonText () {
      return this.current < this.config.length - 1 ? 'Продолжить' : 'Опубликовать заявку'
    },
    config () {
      return Conf
    }
  },
  methods: {
    next () {
      if (this.current < this.config.length - 1) {
        this.current += 1
      }
    },
    prev () {
      if (this.current > 0) {
        this.current -= 1
      }
    }
  }
}
