export default () => ({
  result: {
    title: 'Путеводитель по твоим правилам',
    description: [
      'Подбор жилья в аренду по персональным предпочтениям из ',
      ' вариантов. Квартиры, комнаты, дома, таунхаусы, отели, кемпинги и другое жильё посуточно и на длительный срок.'
    ],
    background: '/main-page/full-bg.jpg',
    count: 30,
    direction: { // Данное поле опционально, его может не быть
      count: 231,
      tabs: [
        { name: `Популярные`, url: `/api/apartments/list?q=popular` },
        { name: `Апартаменты`, url: `/api/apartments/list?q=apartments` },
        { name: `Коттеджи и дома`, url: `/api/apartments/list?q=cottage` },
        { name: `Гостиницы`, url: `/api/apartments/list?q=hosinities` },
        { name: `Отели`, url: `/api/apartments/list?q=otels` },
        { name: `Отели`, url: `/api/apartments/list?q=otels2` },
        { name: `Отели`, url: `/api/apartments/list?q=otels3` },
        { name: `Отели`, url: `/api/apartments/list?q=otels4` },
        { name: `Отели`, url: `/api/apartments/list?q=otels5` },
        { name: `Отели`, url: `/api/apartments/list?q=otels6` },
        { name: `Отели`, url: `/api/apartments/list?q=otels7` },
        { name: `Отели`, url: `/api/apartments/list?q=otels8` }
      ],
      items: [
        {
          id: 1,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 2,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 3,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 4,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 5,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 6,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 7,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 8,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 9,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        }
      ]
    },
    apartments: {
      count: 231,
      tabs: [
        { name: `Популярные`, url: `/api/apartments/list?q=popular` },
        { name: `Апартаменты`, url: `/api/apartments/list?q=apartments` },
        { name: `Коттеджи и дома`, url: `/api/apartments/list?q=cottage` },
        { name: `Гостиницы`, url: `/api/apartments/list?q=hosinities` },
        { name: `Отели`, url: `/api/apartments/list?q=otels` }
      ],
      items: [
        {
          id: 1,
          name: 'Tree house1',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png', '/cart/cart-5.jpg', '/cart/cart-6.jpg' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 2,
          name: 'Tree house2',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 3,
          name: 'Tree house3',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 4,
          name: 'Tree house4',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 5,
          name: 'Tree house5',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 6,
          name: 'Tree house6',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 7,
          name: 'Tree house7',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 8,
          name: 'Tree house8',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 9,
          name: 'Tree house9',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 10,
          name: 'Tree house10',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 11,
          name: 'Tree house11',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 12,
          name: 'Tree house12',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 13,
          name: 'Tree house13',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 14,
          name: 'Tree house14',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 15,
          name: 'Tree house 15',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        }
      ]
    },
    services: {
      count: 231,
      tabs: [
        { name: `Популярные`, url: `/api/apartments/list?q=popular` },
        { name: `Апартаменты`, url: `/api/apartments/list?q=apartments` },
        { name: `Коттеджи и дома`, url: `/api/apartments/list?q=cottage` },
        { name: `Гостиницы`, url: `/api/apartments/list?q=hosinities` },
        { name: `Отели`, url: `/api/apartments/list?q=otels` }
      ],
      items: [
        {
          id: 1,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 2,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 3,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 4,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 5,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 6,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        }
      ]
    }
  }
})
