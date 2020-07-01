import OcDropDown from '@/components/global/ocDropDown/index.vue'
// import OcCheckbox from '@/components/global/Forms/ocInput/index.vue'
import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'
import ApInput from '../ap-input/index.vue'

export default {
  components: {
    OcDropDown,
    ApButton,
    ApListDropdown,
    ApInput
  },
  data () {
    return {
      list: [
        'Квартира/апартаменты',
        'Дом/коттедж',
        'Комната',
        'Койко-место',
        'На природе'
      ],
      selItem: '',
      picked: 'Целиком',
      current: 'standard'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    }
  }
}
