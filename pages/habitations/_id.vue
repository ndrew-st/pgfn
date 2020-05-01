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
  </div>
</template>

<script>
import TopLine from './-components/top-line/index.vue'
import H1Block from './-components/h1-block/index.vue'
import Pics from './-components/pics/index.vue'
import DescBlock from './-components/desc-block/index.vue'
import ThreeBlocks from './-components/three-blocks/index.vue'

export default {
  components: {
    TopLine,
    H1Block,
    Pics,
    DescBlock,
    ThreeBlocks
  },
  data: () => ({
    topPath: [
      'Главная',
      'Жильё',
      '3-к квартира, 146 м2, 11/12'
    ],
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
      desc2: 'Апартаменты представляют собой 3х комнатную квартиру, площадью 146 м2, находятся на 11 этаже 12-ти этажного кирпичного дома. В апартаментах могут расположиться до 7 гостей, в их распоряжении 3 комнаты, 4 кровати, кухня, ванная комната с джакузи и балкон. Оформлена в стиле модерн... ',
      owner: 'Артем А.',
      initials: 'АА',
      online: true,
      lastSeen: 'Был в сети 1 час назад',
      ownerStatus: 'Хозяин жилья',
      languages: 'Русский, English',
      regDate: 'Зарегистрирован на сайте 10 месяцев назад'
    },
    tariffs: [
      { name: 'Стандартный',
        desc: 'Без уборки, без дополнительных опций' },
      { name: 'С уборкой',
        desc: 'Уборка осуществляется в то время, которое укажете вы' }
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
    }
  }),
  computed: {
    apartmentInfo1 () { return '3-к квартира, 146 м², 11/12 эт.' },
    startDate () { return '27 июня 2018 г.' }
  }
}
</script>

<style src="./index.styl" lang="stylus"/>
