import mainComp from './-components/main-comp'
import parameters from './-components/parameters'
import usability from './-components/usability'

import num2str from '~/utils/num2str'

export default {
  name: 'Another',
  components: { mainComp, parameters, usability },
  props: {
    value: {
      type: Boolean,
      default: () => {}
    }
  },
  data () {
    return {
      list: [
        { title: 'Общие', name: 'mainComp' },
        { title: 'Параметры жилья', name: 'parameters' },
        { title: 'Удобства', name: 'usability' }
      ],
      name: 'Another-filter',
      active: 'mainComp',
      count: 2,
      text: [ 'вариант', 'варианта', 'вариантов' ]
    }
  },
  methods: {
    variant (val) {
      return num2str(val, this.text)
    }
  }
}
