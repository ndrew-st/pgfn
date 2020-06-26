export default () => ({
  result: {
    title: '',
    description: '',
    city: '',
    address: {
      country: '',
      region: '',
      city: '',
      street: '',
      house: 0,
      apartment: 0
    },
    typeOfTenant: 0,
    typeOfHousing: 0,
    numberOfRooms: 0,
    areaOfHousin: 0,
    price: {
      byTheDay: [
        {
          days: 0,
          price: 0
        }
      ],
      longTerm: [
        {
          days: 0,
          price: 0
        }
      ]
    },
    firstPaymentAmount: {
      byTheDay: '',
      longTerm: ''
    },
    reservation: {
      typeOfReservation: '',
      cancellationPolicy: '',
      departureTime: [
        {
          day: '',
          intervalTime: {
            start: '2020-06-26T11:36:49.157Z',
            end: '2020-06-26T11:36:49.157Z'
          }
        }
      ],
      timeForCalls: [
        {
          day: '',
          intervalTime: {
            start: '2020-06-26T11:36:49.157Z',
            end: '2020-06-26T11:36:49.157Z'
          }
        }
      ]
    },
    sleepingPlace: [
      {
        typeOfPlace: '',
        amount: 0
      }
    ],
    params: [
      {
        typeOfParam: '',
        paramValue: ''
      }
    ],
    facilities: [
      {
        facilitiesId: '',
        facilitiesValue: ''
      }
    ],
    images: [
      ''
    ],
    ownerId: '',
    status: 0
  }
})
