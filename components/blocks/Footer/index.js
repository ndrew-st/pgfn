export default {
  data () {
    return {
      menu: [
        { title: 'Направления',
          children: [
            { title: 'Районы и округа', url: '' },
            { title: 'Города', url: '' },
            { title: 'Деревни и сёла', url: '' }
          ]
        },
        {
          title: 'Жильё',
          children: [
            { title: 'Апартаменты', url: '' },
            { title: 'Коттеджи и дома', url: '' },
            { title: 'Комнаты', url: '' },
            { title: 'Койко-места', url: '' },
            { title: 'На природе', url: '' }
          ]
        },
        {
          title: 'О нас',
          children: [
            { title: 'О проекте', url: '' },
            { title: 'Помощь', url: '' }
          ]
        }
      ],
      social: [
        { title: 'Фейсбук', src: '/icons/facebook.svg', url: 'https://www.facebook.com/personal.guide.russia' },
        { title: 'Вконтакте', src: '/icons/vk.svg', url: 'https://vk.com/personal.guide' },
        { title: 'Инстарграм', src: '/icons/instagram.svg', url: 'https://www.instagram.com/personal.guide_rus/' },
        { title: 'Твиттер', src: '/icons/twitter.svg', url: 'https://twitter.com/PersonalGuideR' },
        { title: 'Зен яндекс', src: '/icons/zen.svg', url: 'https://vk.cc/au93Ch' }
      ],
      payments: [
        { title: 'Master Card', src: '/payments/master-card.svg' },
        { title: 'Visa', src: '/payments/visa.svg' },
        { title: 'Google pay', src: '/payments/gpay.png', width: 47.5, height: 20 },
        { title: 'Apple pay', src: '/payments/apple.svg' },
        { title: 'Samsung pay', src: '/payments/sampay.png', width: 83, height: 12 }
      ]
    }
  }
}
