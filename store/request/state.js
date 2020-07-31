export default () => ({
  result: {
    title: '',
    description: '',
    // city: '',
    address: {
      country: '',
      region: '',
      area: '',
      cityArea: '',
      city: '',
      street: '',
      house: ''
      // apartment: 0
    },
    typeOfTenant: [],
    typeOfHousing: 0,
    numberOfRooms: 0,
    // areaOfHousin: 0, в реквесте это объект start - end
    areaOfHousin: {},
    price: {
      byTheDay: [
        // {
        //   days: 0,
        //   price: 0,
        //   pledge: 0,
        //   commission: 0,
        //   defaultValue: false
        // }
      ],
      longTerm: [
        // {
        //   days: 0,
        //   price: 0,
        //   pledge: 0,
        //   commission: 0,
        //   defaultValue: false
        // }
      ]
    },
    firstPaymentAmount: {
      byTheDay: '',
      longTerm: ''
    },
    reservation: {
      typeOfReservation: [],
      cancellationPolicy: [],
      departureTime: [
        // {
        //   day: '',
        //   intervalTime: {
        //     start: '2020-06-26T11:36:49.157Z',
        //     end: '2020-06-26T11:36:49.157Z'
        //   }
        // }
        { 'day': 0,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 1,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 2,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 3,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 4,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 5,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 6,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        }
      ],
      timeForCalls: [
        // {
        //   day: '',
        //   intervalTime: {
        //     start: '2020-06-26T11:36:49.157Z',
        //     end: '2020-06-26T11:36:49.157Z'
        //   }
        // }
        { 'day': 0,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 1,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 2,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 3,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 4,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 5,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 6,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        }
      ],
      pickUpTime: [
        { 'day': 0,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 1,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 2,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 3,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 4,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 5,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
          }
        },
        { 'day': 6,
          'intervalTime': {
            'start': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)',
            'end': 'Thu Jan 01 1970 23:59:00 GMT+0300 (Moscow Standard Time)'
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
      // {
      //   typeOfParam: '',
      //   paramValue: ''
      // }
    ],
    // удобства
    // facilities: [
    //   {
    //     facilitiesId: '',
    //     facilitiesValue: ''
    //   }
    // ],
    images: [
      // ''
    ],
    ownerId: '',
    status: 0,
    citizenship: ''
  }
})
