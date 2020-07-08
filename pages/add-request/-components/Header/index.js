export default {
  props: {
    step: {
      type: Number,
      required: true
    },
    countSteps: {
      type: Number,
      required: true
    },
    error: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      text: [
        { title: 'Главная страница', titleMob: 'Главная' },
        { title: 'Запрос на аренду жилья', titleMob: 'Запрос аренды' }
      ],
      save: {
        success: {
          mobile: 'Сохранено',
          desktop: 'Все изменения сохранены'
        },
        loading: {
          mobile: 'згр',
          desktop: 'Загрузка...'
        },
        error: {
          mobile: 'Ошибка',
          desktop: 'Ошибка сохранения! Обратитесь к администратору.'
        }
      }
    }
  },
  computed: {
    statWidth () {
      return Math.floor(this.step / this.countSteps * 100)
    }
  },
  methods: {
    saveText (field) {
      if (this.loading) {
        return this.save.loading[field]
      } else if (this.error) {
        return this.save.error[field]
      } else {
        return this.save.success[field]
      }
    }
  }
}
