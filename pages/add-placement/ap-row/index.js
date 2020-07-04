import ApSums from '../ap-sums/index.vue'

export default {
  components: {
    ApSums
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      checked: false,
      price: '', // не число, а строка для того, чтобы работал placeholder. На инпуте type="numer", вводятся только числа
      pledge: '',
      commission: '',
      locDefaultValue: this.item.defaultValue
    }
  },
  methods: {
    changePrice (sum) {
      // debugger
      this.price = sum
      if (this.checked) {
        this.refreshSums()
      } else {
        this.checkRow()
      }
    },
    changePledge (sum) {
      this.pledge = sum
      if (this.checked) {
        this.refreshSums()
      } else {
        this.checkRow()
      }
    },
    changeCommission (sum) {
      this.commission = sum
      if (this.checked) {
        this.refreshSums()
      } else {
        this.checkRow()
      }
    },
    refreshSums () {
      this.$store.dispatch('placement/refreshPrice',
        { type: this.type,
          data: {
            days: Number(this.item.days),
            price: Number(this.price),
            pledge: Number(this.pledge),
            commission: Number(this.commission),
            defaultValue: true
          }
        })
    },
    checkRow () {
      // debugger
      if (!this.checked) {
        this.$store.dispatch('placement/setPrice',
          { type: this.type,
            data: {
              days: Number(this.item.days),
              price: Number(this.price),
              pledge: Number(this.pledge),
              commission: Number(this.commission),
              defaultValue: true
            }
          })
      } else {
        this.$store.dispatch('placement/removePrice', {
          type: this.type,
          days: this.item.days
        })
      }

      this.checked = !this.checked
      this.$emit('changeCheck', this.item.days)
    }
  }
}
