import mainComp from './-components/main-comp'
import parameters from './-components/parameters'
import usability from './-components/usability'

import ocScrollBar from '~/components/ocScrollBar'

import num2str from '~/utils/num2str'

export default {
  name: 'Another',
  components: { ocScrollBar, mainComp, parameters, usability },
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
      name: 'another-filter',
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
