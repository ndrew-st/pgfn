export default {
  props: {

  },
  data () {
    return {
      filters: [
        { title: 'Цена', name: 'price' },
        { title: 'Остальные фильтры',
          name: 'another',
          children: [

          ] }
      ],
      selected: [

      ]
    }
  }
}
