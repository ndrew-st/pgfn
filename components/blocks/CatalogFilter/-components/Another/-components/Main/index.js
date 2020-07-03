export default {
  name: 'Main',
  data () {
    return {
      result: {},
      radios: [
        { title: 'Специальные предложения и скидки', checked: false },
        { title: 'Круглосуточная регистрация', checked: false },
        { title: 'Возможность оплаты онлайн', checked: false }
      ],
      adPlaced: {
        title: 'Объявление размещено',
        more: true,
        name: 'ad-placed',
        count: 5,
        checkboxes: [
          { label: 'Частное лицо', value: 'private-person' },
          { label: 'Отель', value: 'otels' },
          { label: 'Компания', value: 'company' },
          { label: 'Гостиница', value: 'hotel' }
        ]
      }
    }
  },
  created () {

  },
  methods: {
    updateValue (field, value) {
      console.log('field ', field)
      console.log('value ', value)
    }
  }
}
