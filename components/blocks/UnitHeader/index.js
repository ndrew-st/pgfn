export default {
  data () {
    return {
      topPathHab: [
        {
          title: 'Главная',
          url: '/'
        },
        {
          title: 'Жильё',
          url: '/housing/supply'
        }
      ],
      topPathReq: [
        {
          title: 'Главная',
          url: '/'
        },
        {
          title: 'Запрос на жильё',
          url: '/'
        }
      ]
    }
  },
  computed: {
    title () {
      return this.$store.getters['unit/title']
    },
    typePage () {
      return this.$store.state.unit.type
    },
    arrLinks () {
      return this.typePage === 'habitation' ? this.topPathHab : this.topPathReq
    }
  },
  created () {
    if (this.title) {
      this.topPathHab.push({ title: this.title, url: '' })
    }
  }
}
