import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'
import ApInput from '../ap-input/index.vue'
import ListApRadio from '../blocks/list-ap-radio'

export default {
  components: {
    ApButton,
    ApListDropdown,
    ApInput,
    ListApRadio
  },
  data () {
    return {
      list: [
        { id: 0,
          name: 'Квартира/апартаменты',
          list: [
            { id: 0, label: 'Квартира целиком', code: 0 },
            { id: 1, label: 'Номер в отеле', code: 1 }
          ] },
        { id: 1,
          name: 'Дом/коттедж',
          list: [
            { id: 0, label: 'Дом целиком с отдельным двором', code: 2 },
            { id: 1, label: 'Дом целиком с общим двором', code: 3 },
            { id: 2, label: 'Дом целиком при отеле', code: 4 },
            { id: 3, label: 'Часть дома с отдельным двором', code: 5 },
            { id: 4, label: 'Часть дома с общим двором', code: 6 },
            { id: 5, label: 'Часть дома при отеле', code: 7 },
            { id: 6, label: 'Таунхаус', code: 8 },
            { id: 7, label: 'Таунхаус при отеле', code: 9 }
          ] },
        { id: 2,
          name: 'Комната',
          list: [
            { id: 0, label: 'В квартире', code: 10 },
            { id: 1, label: 'В доме', code: 11 },
            { id: 2, label: 'В хостеле', code: 12 }
          ] },
        { id: 3,
          name: 'Койко-место',
          list: [
            { id: 0, label: 'В квартире', code: 13 },
            { id: 1, label: 'В доме', code: 14 },
            { id: 2, label: 'В хостеле', code: 15 }
          ] },
        { id: 4,
          name: 'На природе',
          list: [
            { id: 0, label: 'Место на кемпинге', code: 16 },
            { id: 1, label: 'Земельный участок', code: 17 }
          ] }
      ],
      selItem: null,
      numberOfRooms: 1,
      area: 0,
      selId: 0,
      floors: 0,
      yardArea: 0
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par.id
      this.selId = 0 // нижний список обнуляем, чтоб не прыгали значения
      this.$root.$emit('dropdown:hide')
      // this.$store.dispatch('placement/setItem', { key: 'typeOfHousing', value: par.id })
      // setItem({ key: 'typeOfHousing', value: par.id })
    },
    next () {
      // this.setItem({ key: 'numberOfRooms', value: this.numberOfRooms })
      // this.setItem({ key: 'areaOfHousin', value: this.area })
      this.$store.dispatch('placement/setItem', { key: 'numberOfRooms', value: this.numberOfRooms })
      this.$store.dispatch('placement/setItem', { key: 'areaOfHousin', value: parseInt(this.area) })
      this.$store.dispatch('placement/setItem', { key: 'typeOfHousing', value: this.list[this.selItem].list[this.selId].code })
      // this.$store.dispatch('placement/setItem', { key: '', value: this.yardArea })
      this.$emit('next')
    }
  }
}
