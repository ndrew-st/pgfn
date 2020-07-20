export default () => ({
  resultBlock: {
    images: [
      { id: 1, url: '/habitation/img-1.jpg', description: 'Description 1' },
      { id: 2, url: '/habitation/img-2.png', description: 'Description 2' },
      { id: 3, url: '/habitation/img-3.png', description: 'Description 3' },
      { id: 14229, url: '/habitation/img-2.png', description: 'Description 4' },
      { id: 1243, url: '/habitation/img-3.png', description: 'Description 5' },
      { id: 2142, url: '/habitation/img-2.png', description: 'Description 6' },
      { id: 343, url: '/habitation/img-3.png', description: 'Description 7' },
      { id: 1242, url: '/habitation/img-2.png', description: 'Description 8' },
      { id: 124324, url: '/habitation/img-3.png', description: 'Description 9' },
      { id: 2124, url: '/habitation/img-2.png', description: 'Description 10' },
      { id: 12430, url: '/habitation/img-3.png', description: 'Description 11' },
      { id: 12427, url: '/habitation/img-2.png', description: 'Description 12' },
      { id: 4123, url: '/habitation/img-3.png', description: 'Description 133' },
      { id: 1422, url: '/habitation/img-2.png', description: 'Description 21' },
      { id: 143, url: '/habitation/img-3.png', description: 'Description 324' },
      { id: 142, url: '/habitation/img-2.png', description: 'Description 2214' },
      { id: 3143, url: '/habitation/img-3.png', description: 'Description 243' },
      { id: 224, url: '/habitation/img-2.png', description: 'Description 2142' },
      { id: 21343, url: '/habitation/img-3.png', description: 'Description 3214' },
      { id: 1342, url: '/habitation/img-2.png', description: 'Description 2214' },
      { id: 2143, url: '/habitation/img-3.png', description: 'Description 3421' },
      { id: 2342, url: '/habitation/img-2.png', description: 'Description 2143' },
      { id: 356, url: '/habitation/img-3.png', description: 'Description 3124' },
      { id: 34532, url: '/habitation/img-2.png', description: 'Description 1422' },
      { id: 35673, url: '/habitation/img-3.png', description: 'Description 3214' },
      { id: 3562, url: '/habitation/img-2.png', description: 'Description 2412' },
      { id: 5633, url: '/habitation/img-3.png', description: 'Description 314' }
    ]
  },
  result: {
    title: 'Intro',
    description: 'Лучшее место в Ялте с видом на море',
    city: 'Судак',
    address: {
      country: 'Россия',
      region: 'Республика Крым',
      city: 'Судак',
      street: 'улица Ленина',
      house: 9,
      apartment: 0,
      coords: { lat: 45.389194, lon: 33.993751 }
    },
    reviews: 288,
    views: 12314,
    date: '15 февраля 2020 г.',
    estimate: 4.3,
    typeOfTenant: 0,
    typeOfHousing: 'Квартира',
    numberOfRooms: 0,
    areaOfHousing: 0,
    price: {
      byTheDay: [
        {
          days: 1,
          price: 4500,
          pledge: 0,
          commission: 0,
          defaultValue: false
        }
      ],
      longTerm: [
        {
          days: 30,
          price: 4500,
          pledge: 0,
          commission: 0,
          defaultValue: false
        }
      ]
    },
    reservation: {
      typeOfReservation: 'typeOfReservation',
      cancellationPolicy: 'cancellationPolicy',
      departureTime: [
        {
          day: 1,
          intervalTime: {
            start: '2020-06-26T11:36:49.157Z',
            end: '2020-06-26T11:36:49.157Z'
          }
        }
      ],
      timeForCalls: [
        {
          day: 1,
          intervalTime: {
            start: '2020-06-26T11:36:49.157Z',
            end: '2020-06-26T11:36:49.157Z'
          }
        }
      ],
      pickUpTime: [
        {
          day: 1,
          intervalTime: {
            start: '2020-06-26T11:36:49.157Z',
            end: '2020-06-26T11:36:49.157Z'
          }
        }
      ]
    },
    // спальные места
    sleepingPlace: [
      // {
      //   typeOfPlace: '',
      //   amount: 0
      // }
    ],
    params: [
      {
        typeOfParam: 'params.guests',
        paramValue: []
      },
      {
        typeOfParam: 'params.facilities',
        paramValue: [
          { label: 'Фен', value: 'hairdryer' },
          { label: 'Кофемашина', value: 'coffee' },
          { label: 'Чайник', value: 'teapot' },
          { label: 'Утюг', value: 'iron' },
          { label: 'Холодильник', value: 'frige' },
          { label: 'Телевизор', value: 'tv' },
          { label: 'Аудиосистема', value: 'audio' },
          { label: 'Игровая приставка', value: 'playstation' },
          { label: 'Гладильная доска', value: 'ironingBoard' },
          { label: 'Стиральная машина', value: 'washer' },
          { label: 'Сушильная машина', value: 'drying' },
          { label: 'Посудомоечная машина', value: 'dishwasher' },
          { label: 'Газовая плита', value: 'gasStove' },
          { label: 'Электроплита', value: 'electricStove' },
          { label: 'Духовка / духовой шкаф', value: 'oven' },
          { label: 'Микроволновка', value: 'microwave' }
        ]
      },
      {
        typeOfParam: 'params.listLimits',
        paramValue: [
          { label: 'Можно с детьми', value: 'kids' },
          { label: 'Можно с животными', value: 'pets' },
          { label: 'Можно для мероприятий', value: 'party' },
          { label: 'Можно курить', value: 'weed' }
        ]
      }
    ],
    // удобства
    // facilities: [
    //   {
    //     facilitiesId: '',
    //     facilitiesValue: ''
    //   }
    // ],
    images: [],
    ownerId: '0921358907125',
    status: 0
  },
  rates: [
    { name: 'Стандартный', desc: 'Без уборки, без дополнительных опций', value: 'standard' }
    // {
    //   name: 'С уборкой',
    //   desc: 'Уборка осуществляется в то время, которое укажете вы',
    //   value: 'clean'
    // }
  ]
})
