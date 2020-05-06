<template>
  <div class="habitation-page">
    <TopLine :top-path="topPath" />
    <H1Block :h1-info="h1Info" />
    <Pics />
    <DescBlock :info="descInfo" />
    <ThreeBlocks
      :tariffs="tariffs"
      :prices="prices"
      :online-booking="onlineBooking"
    />
    <Comfort :comfort="comfort" />
    <Rules
      :rules1="rules1"
      :rules2="rules2"
    />
    <Location
      :coords="coords"
      :location="location"
      :loc-desc="locDesc"
    />
    <Recommended />
  </div>
</template>

<script>
import TopLine from './-components/top-line/index.vue'
import H1Block from './-components/h1-block/index.vue'
import Pics from './-components/pics/index.vue'
import DescBlock from './-components/desc-block/index.vue'
import ThreeBlocks from './-components/three-blocks/index.vue'
import Comfort from './-components/comfort/index.vue'
import Rules from './-components/rules/index.vue'
import Location from './-components/location/index.vue'
import Recommended from './-components/recommended/index.vue'

export default {
  components: {
    TopLine,
    H1Block,
    Pics,
    DescBlock,
    ThreeBlocks,
    Comfort,
    Rules,
    Location,
    Recommended
  },
  data: () => ({
    topPath: ['Главная', 'Жильё', '3-к квартира, 146 м2, 11/12'],
    h1Info: {
      desc1: '3-к квартира, 146 м², 11/12 эт., г. Судак',
      desc2: 'Лучшее место в Ялте с видом на море',
      price: '4500 ₽',
      period: 'за сутки',
      dateNumber: '15 февраля 2020 г. № 847234',
      comms: '182 отзыва • Квартира',
      estimate: '4.3'
    },
    descInfo: {
      desc1: 'Квартира 2 спальни 7 гостей',
      desc2:
        'Апартаменты представляют собой 3х комнатную квартиру, площадью 146 м2, находятся на 11 этаже 12-ти этажного кирпичного дома. В апартаментах могут расположиться до 7 гостей, в их распоряжении 3 комнаты, 4 кровати, кухня, ванная комната с джакузи и балкон. Оформлена в стиле модерн... ',
      owner: 'Артем А.',
      initials: 'АА',
      online: true,
      lastSeen: 'Был в сети 1 час назад',
      ownerStatus: 'Хозяин жилья',
      languages: 'Русский, English',
      regDate: 'Зарегистрирован на сайте 10 месяцев назад'
    },
    tariffs: [
      { name: 'Стандартный', desc: 'Без уборки, без дополнительных опций' },
      {
        name: 'С уборкой',
        desc: 'Уборка осуществляется в то время, которое укажете вы'
      }
    ],
    prices: [
      {
        name: 'Посуточно',
        minPeriod: 'от 2-х дней',
        price: '4000 ₽',
        pricePeriod: 'за сутки'
      },
      {
        name: 'Длительная аренда',
        minPeriod: 'от 30-ти дней',
        price: '30 000 ₽',
        pricePeriod: 'за месяц'
      }
    ],
    onlineBooking: {
      onlinePay: true,
      minPeriodCancel: 'сутки'
    },
    comfort: [
      { name: 'Чайник', image: '/img/teapot.jpg', order: 0 },
      { name: 'Wi-Fi1', image: '/img/teapot.jpg', order: 1 },
      { name: 'Wi-Fi2', image: '/img/teapot.jpg', order: 10 },
      { name: 'Wi-Fi3', image: '/img/teapot.jpg', order: 15 },
      { name: 'Wi-Fi4', image: '/img/teapot.jpg', order: 9 },
      { name: 'Wi-Fi5', image: '/img/teapot.jpg', order: 2 },
      { name: 'Wi-Fi6', image: '/img/teapot.jpg', order: 80 },
      { name: 'Wi-Fi7', image: '/img/teapot.jpg', order: 3 },
      { name: 'Wi-Fi8', image: '/img/teapot.jpg', order: 76 },
      { name: 'Wi-Fi9', image: '/img/teapot.jpg', order: 45 },
      { name: 'Wi-Fi10', image: '/img/teapot.jpg', order: 22 },
      { name: 'Фен', image: '/img/teapot.jpg', order: 4 }
    ],
    rules1: [
      'Въезд в 12:00',
      'Выезд не позже 14:00',
      'Звонок за час до въезда.'
    ],
    rules2: [
      'Нельзя с животными',
      'Нельзя с детьми',
      'Нельзя курить'
    ],
    location: [
      'Россия',
      'Республика Крым',
      'город Судак',
      'улица Ленина д 9'
    ],
    coords: [
      44.858161, 34.974244
    ],
    locDesc: 'Жилье расположено в Судаке на улице Ленина, д9 - это в 300 метрах от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4х километрах от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени К. Айвазовского) - 110 км...'
  }),
  computed: {
    apartmentInfo1 () {
      return '3-к квартира, 146 м², 11/12 эт.'
    },
    startDate () {
      return '27 июня 2018 г.'
    }
  }
}
</script>

<style src="./index.styl" lang="stylus" />
