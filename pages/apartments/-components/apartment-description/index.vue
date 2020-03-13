<template>
  <div class="apartment-description">
    <p>
      <span
        v-for="(item, index) in fullPath"
        :key="index">
        <span v-if="index < fullPath.length - 1">{{ item }} /</span>

        <span v-else>{{ item }}</span>
      </span>
    </p>

    <h1>3-к квартира, 146 м², 11/12 эт.</h1>

    <span>7 гостей · 4 кровати · 3 комнаты · 1 ванная</span>

    <h2>от 3 366 ₽ / сутки</h2>

    <img
      class="icon"
      src="@/static/icons/sunrise.png" />

    <img
      class="icon"
      src="@/static/icons/water.png" />

    <img
      class="icon"
      src="@/static/icons/bath.png" />

    <img
      class="icon"
      src="@/static/icons/wifi.png" />

    <img
      class="icon"
      src="@/static/icons/parking.png" />

    <hr class="apartment-descriptor__separator" />

    <div class="apartment-descriptor__params">
      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span>Общая площадь:</span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span>Этаж:</span>
        </div>
      </div>

      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span>Этажей в доме:</span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span>Тип дома:</span>
        </div>
      </div>

      <div class="apartment-descriptor__column">
        <div class="apartment-descriptor__params_item">
          <span>Время заезда:</span>
        </div>

        <div class="apartment-descriptor__params_item">
          <span>Время выезда:</span>
        </div>
      </div>
    </div>

    <hr class="apartment-descriptor__separator" />

    <p class="paragraph">
      Апартаменты, представляют собой 3-х комнатную квартиру, площадью 146 м²,
      находятся на 11 этаже 12 этажного кирпичного дома. В апартаментах могут
      расположиться до 7 гостей, в их распоряжении 3 комнаты, 4 кровати, кухня,
      ванная комната с джакузи и балкон. Из окон открывается вид на море и виден
      восход солнца.
    </p>

    <p class="paragraph">
      Жильё расположено в Судаке на улице Ленина, дом 9 — это в 300 м от центра
      города, 50 м от Черного моря, 5 км от горы Ильяс-Кая и в 4 км от Храма
      Солнца. Расстояние до ближайшего аэропорта (Международный аэропорт
      Симферополь имени И.К. Айвазовского) — 110 км.
    </p>

    <p class="paragraph">
      Апартаменты "3-к квартира, 146 м², 11/12 эт." имеют текущий рейтинг 4,5
      балла, основанный на 234 отзывах от реальных людей, и занимают 3 место
      среди 257 апартаментов в Судаке и 22 место среди 1200 апартаментов Крыма.
    </p>

    <a href="#">Рейтинги и отзывы >>></a>

    <h2>От арендодателя</h2>

    <p class="paragraph">
      Квартира от собственника. Сдам 3-комнатную благоустроенную квартиру.
      Квартира находится в новом престижном доме в 15 минутах ходьбы от моря.1-й
      этаж, 2 изолированные комнаты, бронированная дверь. Количество спальных
      мест – 5-6, возможно 2 дополнительных места для маленького ребенка
      (детская кроватка) и для взрослого – современная ра...
    </p>

    <span>
      <a href="#">Развернуть</a>

      <a href="#">Перевести на...</a>
    </span>

    <h1>Спальные места • до 7 человек</h1>

    <div class="room-description">
      <room-description-item />

      <room-description-item />

      <room-description-item />
    </div>
  </div>
</template>

<script>
import RoomDescriptionItem from '../room-description-item/index.vue'

export default {
  components: {
    RoomDescriptionItem
  },
  props: ['fullPath']
}
</script>

<style lang="stylus" scoped>
.icon {
  width: 28px;
  height: 28px;
  margin: 10px 10px;
}

.apartment-descriptor {
  display: flex;
  flex-direction: column;
  padding: 22px;

  &__separator {
    width: 100%;
    border: 0.5px solid $gray-3;
  }

  &__params {
    display: flex;
    flex-direction: row;

    &_item {
      color: $gray-2;

      & span {
        color: $gray-3;
      }
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.paragraph {
  margin: 15px 0 15px 0;
}

.room-description {
  display: flex;
}
</style>
