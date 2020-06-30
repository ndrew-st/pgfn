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
        { id: 0, name: 'Квартира/апартаменты' },
        { id: 1, name: 'Дом/коттедж' },
        { id: 2, name: 'Комната' },
        { id: 3, name: 'Койко-место' },
        { id: 4, name: 'На природе' }
      ],
      selItem: null,
      numberOfRooms: 1,
      picked: 'Целиком',
      current: 'standard'
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par.id
      this.$root.$emit('dropdown:hide')
      // this.setItem({ key: 'typeOfHousing', value: par.id }) непонятно какое это значение на бэке
    },
    next () {
      // this.setItem({ key: 'numberOfRooms', value: this.numberOfRooms })
      this.$emit('next')
    }
  }
}
