import OcDropDown from '@/components/global/ocDropDown/index.vue'
import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'

export default {
  components: {
    OcDropDown,
    ApButton,
    ApListDropdown
  },
  data () {
    return {
      list2: [
        'Квартира/апартаменты',
        'Дом/коттедж',
        'Комната',
        'Койко-место',
        'На природе'
      ],
      selItem: ''
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
    }
  }
}
