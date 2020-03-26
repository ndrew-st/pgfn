<template>
  <div class="apartment-description">
    <p>
      <span
        v-for="(item, index) in fullPath"
        :key="index"
        class="blue"
      >
        <span v-if="index < fullPath.length - 1">{{ item }} / </span>

        <span v-else>{{ item }}</span>
      </span>
    </p>

    <h1>{{ apartmentInfo1 }}</h1>

    <span class="grey166">{{ apartmentInfo2 }}</span>

    <h2>{{ apartmentPrice }}</h2>

    <OcImg
      class="icon"
      src="icons/sunrise.png"
    />

    <OcImg
      class="icon"
      src="icons/water.png"
    />

    <OcImg
      class="icon"
      src="icons/bath.png"
    />

    <OcImg
      class="icon"
      src="icons/wifi.png"
    />

    <OcImg
      class="icon"
      src="icons/parking.png"
    />

    <hr class="apartment-descriptor__separator">

    <div class="apartment-descriptor__params">
      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span class="grey166">Общая площадь: <span class="grey85">{{ totalArea }}</span></span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span class="grey166">Этаж: <span class="grey85">{{ floor }}</span></span>
        </div>
      </div>

      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span class="grey166">Этажей в доме:  <span class="grey85">{{ floorsInHouse }}</span></span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span class="grey166">Тип дома: <span class="grey85">{{ typeHouse }}</span></span>
        </div>
      </div>

      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span class="grey166">Время заезда: <span class="grey85">{{ arrivalTime }}</span></span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span class="grey166">Время выезда:  <span class="grey85">{{ leaveTime }}</span></span>
        </div>
      </div>
    </div>

    <hr class="apartment-descriptor__separator">

    <p class="paragraph">
      {{ textDescription1 }}
    </p>

    <p class="paragraph">
      {{ textDescription2 }}
    </p>

    <p class="paragraph">
      {{ textDescription3 }}
    </p>

    <a href="#">Рейтинги и отзывы >>></a>

    <h2>От арендодателя</h2>

    <p class="paragraph">
      {{ textDescription4 }}
    </p>

    <span>
      <a href="#">Развернуть</a>

      <a href="#">Перевести на...</a>
    </span>

    <h1>Спальные места • {{ maxPeople }}</h1>

    <div class="room-description">
      <room-description-item
        :beds="['/icons/queen-size-bed.png']"
        desc="Спальня 1"
        full="1 кровать Queen Size"
        :people="2"
      />

      <room-description-item
        :beds="['/icons/single-bed.png', '/icons/single-bed.png']"
        desc="Спальня 2"
        full="2 односпальные сдвоенные кровати"
        :people="2"
      />

      <room-description-item
        :beds="['/icons/queen-size-bed.png', '/icons/single-bed.png']"
        desc="Гостиная"
        full="1 диван-кровать, 1 надувной матрас"
        :people="3"
      />
    </div>
  </div>
</template>

<script>
import RoomDescriptionItem from '../room-description-item/index.vue'

export default {
  components: {
    RoomDescriptionItem
  },
  props: ['fullPath'],
  computed: {
    apartmentInfo1 () { return '3-к квартира, 146 м², 11/12 эт.' },
    apartmentInfo2 () { return '7 гостей · 4 кровати · 3 комнаты · 1 ванная' },
    apartmentPrice () { return 'от 3 366 ₽ / сутки' },
    totalArea () { return '146 м²' },
    floor () { return '11' },
    floorsInHouse () { return '12' },
    typeHouse () { return 'кирпичный' },
    arrivalTime () { return '13:00 – 22:00' },
    leaveTime () { return '07:00 – 12:00' },
    textDescription1 () { return 'Апартаменты, представляют собой 3-х комнатную квартиру, площадью 146 м², находятся на 11 этаже 12 этажного кирпичного дома. В апартаментах могут расположиться до 7 гостей, в их распоряжении 3 комнаты, 4 кровати, кухня, анная комната с джакузи и балкон. Из окон открывается вид на море и виден восход солнца.' },
    textDescription2 () { return 'Жильё расположено в Судаке на улице Ленина, дом 9 — это в 300 м от центра города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4 км от Храма Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт Симферополь имени И.К. Айвазовского) — 110 км.' },
    textDescription3 () { return 'Апартаменты "3-к квартира, 146 м², 11/12 эт." имеют текущий рейтинг 4,5 балла, основанный на 234 отзывах от реальных людей, и занимают 3 место среди 257 апартаментов в Судаке и 22 место среди 1200 апартаментов Крыма.' },
    textDescription4 () { return 'Квартира от собственника. Сдам 3-комнатную благоустроенную квартиру. Квартира находится в новом престижном доме в 15 минутах ходьбы от моря.1-й этаж, 2 изолированные комнаты, бронированная дверь. Количество спальных мест – 5-6, возможно 2 дополнительных места для маленького ребенка (детская кроватка) и для взрослого – современная ра...' },
    maxPeople () { return 'до 7 человек' },
    bedsArray () { return ['/icons/single-bed.png', '/icons/queen-size-bed.png'] }
  }
}
</script>

<style src="./index.styl" lang="stylus" scoped></style>
