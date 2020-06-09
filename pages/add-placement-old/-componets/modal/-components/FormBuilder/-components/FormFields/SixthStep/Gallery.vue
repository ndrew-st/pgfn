<template>
  <div class="gallery">
    <div
      v-for="item in list"
      :key="item.id"
      class="gallery__list">
      <h3
        v-if="!item.change"
        class="gallery__title">{{item.name}}</h3>
      <label
        v-else
        class="gallery__title--label">
        <input
          @input="updateFieldRoom(item.id, 'name', $event.target.value)"
          :value="item.name"
          class="gallery__title--input"
          type="text">
      </label>
      <div
        v-if="list.length > 1"
        class="gallery__button-container button-name">
        <button
          @click="deleteItem(item.id)"
          class="button-name__delete"
          type="button">Удалить
        </button>
        <button
          @click="changeItem(item.id)"
          class="button-name__change"
          type="button">{{item.change ? 'Сохранить' : 'Изменить'}}
        </button>
      </div>
      <div
        v-if="item.images.length"
        class="list">
        <p
          v-for="imgItem in item.images"
          :key="imgItem.id"
          class="gallery__item unit-gallery">
          <img
            :src="imgItem.src"
            :alt="imgItem.desc"
            class="unit-gallery__image"
            width="120"
            height="70"/>
          <button
            @click="deleteImage(item.id, imgItem.id)"
            v-if="item.images.length > 1"
            class="unit-gallery__delete"
            type="button">delete
          </button>
          <input
            @input="updateFieldImage('desc', item.id, imgItem.id, $event.target.value)"
            :value="imgItem.desc"
            :readonly="!imgItem.change"
            placeholder="Описание"
            class="unit-gallery__desc"
            type="text">
          <button
            @click="updateFieldImage('change', item.id, imgItem.id)"
            class="unit-gallery__change"
            type="button">{{imgItem.change ? 'save' : 'change'}}
          </button>
        </p>
      </div>
      <input
        @change="setImage($event, item.id)"
        :id="`image-input${item.id}`"
        type="file"
        class="gallery__file-input"
        accept="image/*">
      <label
        :for="`image-input${item.id}`"
        class="gallery__file-label">
        Добавить картинку
      </label>
      <label class="gallery__video modal-video">
        Видео с YouTube
        <input
          :value="item.link"
          @input="updateFieldRoom(item.id, 'link', $event.target.value)"
          class="modal-video__input"
          placeholder="Ссылка на видео"
          type="text">
      </label>
    </div>
    <Select
      @input="addRoom"
      :params="fieldSelect"/>
  </div>
</template>

<script>
import Select from '../Select'

export default {
  name: 'Gallery',
  components: { Select },
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    setValue: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'Основное',
          link: '',
          change: false,
          images: []
        }
      ],
      fieldSelect: {
        placeholder: 'Добавить помещение',
        options: [
          { value: 'living-room', name: 'Гостинная' },
          { value: 'bed-room', name: 'Спальня' },
          { value: 'children-room', name: 'Детская' },
          { value: 'simple-room', name: 'Произвольное поле' }
        ]
      }
    }
  },
  watch: {
    list (newVal) {
      this.$emit('input', newVal)
    }
  },
  created () {
    if (this.setValue.length) {
      this.list = this.setValue
    }
  },
  methods: {
    updateFieldRoom (roomId, field, val) {
      this.list = this.list.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            [field]: val
          }
        }

        return room
      })
    },
    addRoom (val) {
      this.list.push({
        id: new Date().getTime(),
        name: this.fieldSelect.options.filter(option => option.value === val)[0].name || 'Помещение',
        link: '',
        change: false,
        images: []
      })
    },
    setImage (evt, id) {
      const input = evt.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()
        const self = this

        reader.onload = function (e) {
          self.list = self.list.map((item) => {
            if (item.id === id) {
              item.images = [
                ...item.images,
                {
                  id: new Date().getTime(),
                  src: e.target.result,
                  desc: '',
                  change: true
                }
              ]

              return item
            }

            return item
          })
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    updateFieldImage (field, roomId, imgId, desc) {
      this.list = this.list.map((room) => {
        if (room.id === roomId) {
          const idx = room.images.findIndex(img => img.id === imgId)
          return {
            ...room,
            images: [
              ...room.images.slice(0, idx),
              {
                ...room.images[idx],
                [field]: desc || !room.images[idx][field]
              },
              ...room.images.slice(idx + 1)
            ]
          }
        }

        return room
      })
    },
    deleteImage (id, imgId) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          const idx = item.images.findIndex(unitImg => unitImg.id === imgId)

          return {
            ...item,
            images: [
              ...item.images.slice(0, idx),
              ...item.images.slice(idx + 1)
            ]
          }
        }

        return item
      })
    },
    deleteItem (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    changeItem (id) {
      const idx = this.list.findIndex(item => item.id === id)

      this.list = [
        ...this.list.slice(0, idx),
        {
          ...this.list[idx],
          change: !this.list[idx].change
        },
        ...this.list.slice(idx + 1)
      ]
    }
  }
}
</script>

<style lang="stylus">
  .gallery
    position relative
    margin-top 20px

    &__list
      position relative
      display flex
      flex-wrap wrap
      margin-bottom 20px

      border-bottom 1px solid rgba(0, 0, 0, 0.1)

    &__title
      flex-basis 100%
      margin-bottom 10px

      font-size 17px

      &--label
        display block
        flex-basis 100%
        margin-bottom 10px

    &__file-label
      position relative

      display block
      width 120px
      height 70px

      font-size 0

      border 1px solid black
      box-sizing border-box

      cursor pointer

      &:before,
      &:after
        content ''
        position absolute
        top 0
        left 0
        right 0
        bottom 0

        margin auto

        border-radius 3px
        background-color black

      &:before
        width 3px
        height 10px

      &:after
        width 10px
        height 3px

    &__file-input
      visually-hidden()

  .modal-video
    display block
    flex-basis 100%
    margin 10px 0

    font-weight: 400;
    color: rgb(84, 84, 84);

    &__input
      width 200px
      height 25px
      margin-left: 10px;
      padding 0 10px

      box-sizing: border-box;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);

  .item__img
    width 50px
    height 50px

  .list
    display flex
    flex-wrap wrap

  .button-name
    position: absolute;
    top 0
    right 0

    &__delete
      margin-right 20px

    &__change,
    &__delete
      position relative

      background-color: transparent;
      border: 0;

      cursor pointer

      &:hover,
      &:focus
        outline 0

        opacity 0.7
        transition opacity 0.3s linear 0s

    &__change:before
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

    &__delete
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

  .unit-gallery
    position relative

    display flex
    flex-wrap wrap
    width 120px
    margin-right 10px
    margin-bottom 10px

    box-sizing border-box

    &__desc
      width 120px
      height 30px
      display block
      padding-left 5px
      padding-right 20px

      border 1px solid rgba(0, 0, 0, 0.3)

      box-sizing border-box

    &__image
      vertical-align bottom

    &__change
      position absolute
      bottom 10px
      right 10px

      width 10px
      height 10px

      font-size 0

      border 0
      background-color transparent
      background-image url('/modal/edit-button.svg')
      background-position 0 0
      background-repeat no-repeat
      background-size 10px 10px

      cursor pointer

    &__delete
      position absolute
      top 5px
      right 5px

      width: 15px
      height 15px

      font-size 0

      background-color transparent
      border 0

      cursor pointer

      &:before,
      &:after
        content ''
        position absolute
        top 0
        right 0
        left 0
        bottom 0

        width 1px
        height 15px
        margin auto

        background-color red

      &:before
        transform rotate(-45deg)

      &:after
        transform rotate(45deg)
</style>
