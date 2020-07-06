import CheckList from '../../CheckList'
import CountBed from '../../CountBed'
import TitleMore from '../../TitleMore'

import FromTo from '~/components/blocks/FromTo'
import Select from '~/components/blocks/Select'

export default {
  components: { FromTo, CheckList, Select, CountBed, TitleMore },
  props: {},
  watch: {
    selectVal (val) {
      console.log('selectVal ', val)
    }
  },
  data () {
    return {
      selectVal: [],
      area: {},
      buttonText: 'Выберите тип жилья',
      list: [
        { title: 'Квартира/апартаменты', value: '' },
        { title: 'Дом/коттедж', value: '' },
        { title: 'Комната', value: '' },
        { title: 'Койко-место', value: '' },
        { title: 'На природе', value: '' }
      ],
      content: [
        {
          groupName: 'Инфраструктура поблизости',
          params: [
            { label: 'Аптека', value: 'pharmacy' },
            { label: 'Детский сад', value: 'kindergarten' },
            { label: 'Кафе/ресторан', value: 'cafe-restaurant' }
          ]
        },
        {
          groupName: 'Природа',
          params: [
            { label: 'Парк', value: 'park' },
            { label: 'Лес', value: 'forest' }
          ]
        }
      ],
      numbers: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8 и более', value: '>8' }
      ]
    }
  },
  methods: {
    change (data) {
      this.buttonText = data
    },
    changeInput (data) {
      this.area = data
    },
    select (data) {
      console.log('select ', data)
    }
  }
}
