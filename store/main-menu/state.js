export default () => ({
  mainMenu: [
    {
      title: 'Главная',
      type: 'item',
      icon: {
        type: 'fontawesome',
        icon: 'home',
        outline: false
      },
      link: '/'
    },
    {
      title: 'Жилье',
      type: 'item',
      icon: {
        type: 'fontawesome',
        icon: 'bed',
        outline: false
      },
      link: '/apartments-day'
    },
    {
      title: 'Услуги',
      type: 'item',
      icon: {
        type: 'fontawesome',
        icon: 'smile',
        outline: false
      },
      link: '/services'
    },
    {
      title: 'Места',
      type: 'item',
      icon: {
        type: 'fontawesome',
        icon: 'map-marker-alt',
        outline: false
      },
      link: '/place'
    },
    {
      type: 'separator'
    }
  ],
  userMenu: [
    {
      title: 'Справка',
      type: 'item',
      icon: {
        type: 'fontawesome',
        icon: 'question',
        outline: false
      },
      link: '/help'
    }
  ],
  config: {
    open: false,
    view: 'full',
    viewport: 'big'
  }
})
