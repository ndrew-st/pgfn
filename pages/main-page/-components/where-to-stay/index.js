import StayItem from './-components/stay-item'

export default {
  components: {
    StayItem
  },

  data () {
    return {
      housing: [
        {
          name: 'Аппартаменты',
          image: '/img/wheretostay/1.png',
          count: 0,
          description: 'апартаментов'
        },
        {
          name: 'Виллы',
          image: '/img/wheretostay/2.png',
          count: 0,
          description: 'вилл'
        },
        {
          name: 'Шале',
          image: '/img/wheretostay/3.png',
          count: 0,
          description: 'шале'
        },
        {
          name: 'Коттеджи',
          image: '/img/wheretostay/4.png',
          count: 0,
          description: 'коттеджей'
        },
        {
          name: 'Таунхаусы',
          image: '/img/wheretostay/5.png',
          count: 0,
          description: 'таунхаусов'
        }
      ],
      hotel: [
        {
          name: 'Отели / Гостиницы',
          image: '/img/wheretostay/1.png',
          count: 0,
          description: 'гостиниц'
        },
        {
          name: 'Апарт-отели',
          image: '/img/wheretostay/7.png',
          count: 0,
          description: 'апарт-отелей'
        },
        {
          name: 'Хостелы',
          image: '/img/wheretostay/8.png',
          count: 0,
          description: 'хостелов'
        },
        {
          name: 'Пансионаты',
          image: '/img/wheretostay/9.png',
          count: 0,
          description: 'пансионатов'
        },
        {
          name: 'Кемпинги',
          image: '/img/wheretostay/10.jpg',
          count: 0,
          description: 'кемпингов'
        }
      ]
    }
  }
}
