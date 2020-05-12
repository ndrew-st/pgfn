<template>
  <div class="all">
    <hr class="hr">

    <h1>Удобства</h1>

    <div class="box-flex">
      <Facility
        v-for="fac in facilitiesArray"
        :key="fac"
        :img="fac.img"
        :name="fac.name"
        :description="fac.description"
      />
    </div>

    <div class="show-facilities">
      <div class="text-button">
        Показать все удобства (44)
      </div>
    </div>
  </div>
</template>

<script>
import Facility from '@/pages/apartments-another/-components/facility/index.vue'

export default {
  components: {
    Facility
  },
  computed: {
    facilitiesArray () {
      return [
        { img: '/icons/sunrise.png',
          name: 'Вид на рассвет',
          description: 'Из окон виден восход солнца'
        },

        {
          img: '/icons/water.png',
          name: 'Вид на море',
          description: 'Из окон видно море'
        },

        {
          img: '/icons/bath.png',
          name: 'Джакузи',
          description: 'Имеется полноценное джакузи'
        },

        {
          img: '/icons/wifi.png',
          name: 'Wi-Fi',
          description: ''
        },

        {
          img: '/icons/parking.png',
          name: 'Парковка',
          description: '(бесплатная)'
        },
        {
          img: '/icons/tea.png',
          name: 'Чай, кофе и сахар',
          description: '(Гринфилд...'
        },
        {
          img: '/icons/snowflake.png',
          name: 'Кондиционер',
          description: ''
        },

        {
          img: '/icons/tv.png',
          name: 'Телевизор (33")',
          description: ''
        },

        {
          img: '/icons/towel.png',
          name: 'Постельное бельё и',
          description: 'полотенца'
        },

        {
          img: '/icons/card-payment.png',
          name: 'Оплата картой',
          description: ''
        },

        {
          img: '/icons/cap.png',
          name: 'Всё для готовки еды',
          description: '(кастрюли...'
        },
        {
          img: '/icons/sat.png',
          name: 'Спутниковое или',
          description: 'кабельное ТВ ...'
        },
        {
          img: '/icons/shower.png',
          name: 'Средства для душа',
          description: '(шамп...'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.all {
  margin: 20px 20px;
}

.box-flex {
  display: flex;
  flex-wrap wrap
}

.hr {
  opacity: 0.5;
  align: center;
}

.show-facilities {
  display: flex;
  border: 1px solid grey;
  padding: 10px 10px;
  width: 215px;
}

.text-button {
  margin: auto;
}
</style>
