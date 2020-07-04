import ApButton from '../../add-placement/ap-button/index.vue'
import ApListDropdown from '../../add-placement/ap-list-dropdown/index.vue'
import ApInput from '../../add-placement/ap-input/index.vue'
import ApRadioList from '../../add-placement/blocks/ap-radio-list/index.vue'

export default {
  components: {
    ApButton,
    ApListDropdown,
    ApInput,
    ApRadioList
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
      current: 'standard',
      housesList: [
        { value: 'house-0', label: 'Дом целиком с отдельным двором' },
        { value: 'house-1', label: 'Дом целиком с общим двором' },
        { value: 'house-2', label: 'Дом целиком при отеле' },
        { value: 'house-3', label: 'Часть дома с отдельным двором' },
        { value: 'house-4', label: 'Часть дома с общим двором' },
        { value: 'house-5', label: 'Часть дома при отеле' },
        { value: 'house-6', label: 'Таунхаус' },
        { value: 'house-7', label: 'Таунхаус при отеле' }
      ],
      checkedHouse: 'house-0'
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
