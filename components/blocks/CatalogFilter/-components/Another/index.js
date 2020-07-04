import { mapState } from 'vuex'

import mainComp from './-components/Main'
import parameters from './-components/Parameters'
import usability from './-components/Usability'

import num2str from '~/utils/num2str'

export default {
  name: 'Another',
  components: { mainComp, parameters, usability },
  data () {
    return {
      list: [
        { title: 'Общие', name: 'mainComp' },
        { title: 'Параметры жилья', name: 'parameters' },
        { title: 'Удобства', name: 'usability' }
      ],
      name: 'another-filter',
      active: 'mainComp',
      text: [ 'вариант', 'варианта', 'вариантов' ]
    }
  },
  computed: {
    ...mapState(`housing`, {
      count: state => state.result.count
    }),
    variant () {
      return `${this.count} ${num2str(this.count, this.text)}`
    }
  },
  methods: {
    showResult () {

    }
  }
}
