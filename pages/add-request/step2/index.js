import ApButton from '../../add-placement/ap-button/index.vue'
import ApListDropdown from '../../add-placement/ap-list-dropdown/index.vue'
import ApInput from '../../add-placement/ap-input/index.vue'
import ListApRadio from '../../add-placement/blocks/list-ap-radio'
import RoomCounter from '../-components/RoomCounter/index.vue'

export default {
  components: {
    ApButton,
    ApListDropdown,
    ApInput,
    ListApRadio,
    RoomCounter
  },
  data () {
    return {
      selItem: null,
      selId: 0,
      selRooms: [],
      areaStart: '0',
      areaEnd: '0',
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
      ]
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par.id
      this.$root.$emit('dropdown:hide')
      // this.setItem({ key: 'typeOfHousing', value: par.id })
      // this.$store.dispatch('request/setItem', { key: 'numberOfRooms', value: par.id })
      this.$store.dispatch('request/setItem', { key: 'typeOfHousing', value: this.list[this.selItem].list[this.selId].code })
    },
    next () {
      this.$store.dispatch('request/setItem', { key: 'numberOfRooms', value: this.selRooms })
      this.$store.dispatch('request/setItemSecondLevel', { level: 'areaOfHousin', key: 'start', value: parseInt(this.areaStart) })
      this.$store.dispatch('request/setItemSecondLevel', { level: 'areaOfHousin', key: 'end', value: parseInt(this.areaEnd) })
      this.$emit('next')
    },
    setSelId (val) {
      this.selId = val
      this.$store.dispatch('request/setItem', { key: 'typeOfHousing', value: this.list[this.selItem].list[this.selId].code })
    },
    changeRoom (val) {
      this.selRooms = val
      console.log('this.selRooms:', this.selRooms)
      // this.$store.dispatch('request/setItemSecondLevel', { level: '', key: '', value:  })
    }
  }
}
