import num2str from '~/utils/num2str'
import Attrs from '../Attrs'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        coords: [],
        id: 1,
        date: '',
        title: '',
        reviews: null,
        price: '',
        guests: [],
        type: ''
      })
    }
  },
  components: { Attrs },
  data () {
    return {
      state: 'Опубликовано',
      reviewText: ['просмотр', 'просмотра', 'просмотров'],
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
  computed: {
    review () {
      return `${this.item.reviews} ${num2str(this.item.reviews, this.reviewText)}`
    },
    typeOfHousing () {
      switch (this.item.typeOfHousing) {
        case (0 || 1):
          return 'Квартира/апартаменты'
        case (2 || 3 || 4 || 5 || 6 || 7 || 8 || 9):
          return 'Дом/коттедж'
        case (10 || 11 || 12):
          return 'Комната'
        case (13 || 14 || 15):
          return 'Койко-место'
        case (16 || 17):
          return 'На природе'
      }
    }
  }
}
