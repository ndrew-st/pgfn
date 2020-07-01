<template>
  <div class="count-bed">
    <div
      v-for="room in rooms"
      :key="room.id"
      class="count-bed__list">
      <h5
        v-if="!room.isChange"
        class="count-bed__title">{{room.name}}</h5>
      <label
        v-else
        class="count-bed__title--label">
        <input
          v-model="room.name"
          class="count-bed__title--input"
          type="text">
      </label>
      <div
        v-if="rooms.length > 1"
        class="count-bed__button-room">
        <button
          @click="updateFieldRoom('isChange', room.id)"
          class="count-bed__button-room--save"
          type="button">{{room.isChange ? 'Сохранить' : 'Изменить'}}
        </button>
        <button
          @click="deleteRoom(room.id)"
          class="count-bed__button-room--delete"
          type="button">Удалить
        </button>
      </div>
      <span
        v-if="room.beds.length > 0"
        class="count-bed__places">{{getBedPlaces(room.beds.length)}}</span>
      <button
        v-if="!room.beds.length"
        @click="addBed(room.id)"
        class="count-bed__add-bed"
        type="button">Добавить кровати
      </button>
      <button
        v-else
        @click="updateFieldRoom('save', room.id)"
        class="count-bed__save-bed"
        type="button">Сохранить
      </button>
      <template v-if="room.beds.length && !room.save">
        <div
          v-for="bed in room.beds"
          :key="bed.id"
          class="bed">
          <p class="bed__title">{{bed.name}}</p>
          <Count
            :params="fieldCount"
            :defaultVal="bed.count"
            @input="updateCountBed(room.id, bed.id, $event)"
            class="bed__count"/>
        </div>
      </template>
      <label>
        <Select
          :params="fieldSelect"
          @input="addBed(room.id, $event)"
        />
      </label>
    </div>
    <hr>
    <AddRoom
      @input="addRoom"
    />
  </div>
</template>

<script>
import AddRoom from '../AddRoom'
import Count from '../Count'
import Select from '../Select'

export default {
  name: 'CountBed',
  components: { AddRoom, Count, Select },
  props: {
    params: {
      type: Object,
      default: () => {
      }
    },
    name: {
      type: String,
      default: ''
    },
    setValue: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      rooms: [
        {
          id: 1,
          name: 'Общие помещения',
          isChange: false,
          save: false,
          beds: []
        }
      ],
      fieldCount: {
        label: 'Спальных мест'
      },
      fieldSelect: {
        options: this.params.beds || [],
        placeholder: 'Добавить кровати'
      }
    }
  },
  watch: {
    rooms (val) {
      this.$emit('input', val)
    }
  },
  created () {
    if (this.setValue) {
      this.rooms = this.setValue
    }
  },
  methods: {
    getBedPlaces (num) {
      return `${num} ${this._num2str(num, ['спальное', 'спальных', 'спальных'])} ${this._num2str(num, ['место', 'места', 'мест'])}`
    },
    addRoom (val) {
      this.rooms.push({
        id: new Date().getTime(),
        name: val,
        isChange: false,
        beds: []
      })
    },
    deleteRoom (id) {
      this.rooms = this.rooms.filter(room => room.id !== id)
    },
    addBed (roomId, val) {
      let name = null
      if (val) {
        name = this.params.beds.filter(bed => bed.value === val)[0].name // get name from value select
      } else {
        name = ''
      }

      this.rooms = this.rooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            beds: [
              ...room.beds,
              {
                id: new Date().getTime(),
                name: name || 'Диван-кровать',
                count: 1
              }
            ]
          }
        }

        return room
      })
    },
    updateFieldRoom (field, id) {
      this.rooms = this.rooms.map((room) => {
        if (room.id === id) {
          return {
            ...room,
            [field]: !room[field]
          }
        }

        return room
      })
    },
    updateCountBed (roomId, bedId, count) {
      this.rooms = this.rooms.map((room) => {
        if (room.id === roomId) {
          const idx = room.beds.findIndex(bed => bed.id === bedId)
          return {
            ...room,
            beds: [
              ...room.beds.slice(0, idx),
              {
                ...room.beds[idx],
                count
              },
              ...room.beds.slice(idx + 1)
            ]
          }
        }

        return room
      })
    },
    _num2str (n, textForms) {
      n = Math.abs(n) % 100
      const n1 = n % 10
      if (n > 10 && n < 20) {
        return textForms[2]
      }
      if (n1 > 1 && n1 < 5) {
        return textForms[1]
      }
      if (n1 === 1) {
        return textForms[0]
      }
      return textForms[2]
    }
  }
}
</script>

<style lang="stylus">
  .count-bed
    &__title
      margin-bottom: 5px;

      font-size: 16px;

      &--label
        display block
        margin-bottom 10px

    &__list
      position: relative;

      max-width 600px
      margin 5px 0
      margin-top 15px
      padding 5px 0

    &__add-bed,
    &__save-bed
      position: absolute;
      top 5px
      right 40%
      width 150px
      height 25px

      color rgba(0, 0, 0, 0.5)
      font-size: 15px;

      background-color: transparent;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.5);

      cursor pointer

    &__places
      display block

    &__button-room
      position: absolute;
      top 5px
      right 0

      &--save,
      &--delete
        position relative

        background-color: transparent;
        border: 0;

        cursor pointer

        &:hover,
        &:focus
          outline 0

          opacity 0.7
          transition opacity 0.3s linear 0s

      &--save:before
        content ''
        position absolute
        left -15px
        top 0
        bottom 0

        width 13px
        height 13px
        margin auto 0

        background-image: url('/modal/edit-button.svg');
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 13px 13px;

      &--delete
        margin-left: 25px;
        color red

        &:before,
        &:after
          content: ''
          position: absolute;
          top 0
          left -10px
          bottom 0

          width: 1px;
          height: 13px;
          margin auto 0

          background-color: red

        &:before
          transform rotate(-45deg)

        &:after
          transform rotate(45deg)

  .bed
    margin 10px 0
    padding 10px 0

    border-bottom 1px solid rgba(0, 0, 0, 0.3)

    &__title
      font-weight: 700;
      color: rgb(84, 84, 84);
      font-size: 15px;
</style>
