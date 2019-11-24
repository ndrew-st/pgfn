export default {
  data () {
    return {
      cities: [
        {
          name: 'Симферополь',
          image: '/img/wheretogo/1.png',
          count: 0
        },
        {
          name: 'Севастополь',
          image: '/img/wheretogo/2.png',
          count: 0
        },
        {
          name: 'Ялта',
          image: '/img/wheretogo/3.png',
          count: 0
        },
        {
          name: 'Судак',
          image: '/img/wheretogo/4.png',
          count: 0
        },
        {
          name: 'Щелкино',
          image: '/img/wheretogo/5.png',
          count: 0
        }
      ]
    }
  },
  computed: {
    bigCities () {
      return this.cities.slice(0, 2)
    },
    smallCities () {
      return this.cities.slice(2, 5)
    }
  }
}
