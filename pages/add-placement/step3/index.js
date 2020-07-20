import ApRow from '../ap-row/index.vue'
import ApButton from '../ap-button/index.vue'

export default {
  components: {
    ApRow,
    ApButton
  },
  data () {
    return {
      items: [
        {
          name: 'От 1-го дня',
          days: 1,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 3-х дней',
          days: 3,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 5-ти дней',
          days: 5,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 10-ти дней',
          days: 10,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 15-ти дней',
          days: 15,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 20-ти дней',
          days: 20,
          defaultValue: false,
          checked: false
        }
      ],
      items2: [
        {
          name: 'От 28 дней',
          days: 28,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 3-х месяцев',
          days: 90,
          defaultValue: false,
          checked: false
        },
        {
          name: 'От 6-ти месяцев',
          days: 180,
          defaultValue: false,
          checked: false
        }
      ],
      byTheDay: '0',
      longTerm: '0',
      isFilled: false
    }
  },
  methods: {
    selectItem (par) {
      this.selItem = par
      this.$root.$emit('dropdown:hide')
    },
    changeCheck (days) {
      // debugger
      let curArray
      if (days < 28) {
        curArray = this.items
      } else {
        curArray = this.items2
      }

      let fl = false
      for (let index = 0; index < curArray.length; ++index) {
        const element = curArray[index]
        if (element.days === days) {
          element.checked = !element.checked
        }
        if (element.checked) {
          if (!fl) {
            // element.defaultValue = true
            this.$set(curArray, index, {
              name: element.name,
              days: element.days,
              defaultValue: true,
              checked: element.checked
            })

            fl = true
          } else if (element.defaultValue) {
            // element.defaultValue = false
            this.$set(curArray, index, {
              name: element.name,
              days: element.days,
              defaultValue: false,
              checked: element.checked
            })
          }
        } else if (element.defaultValue) {
          this.$set(curArray, index, {
            name: element.name,
            days: element.days,
            defaultValue: false,
            checked: element.checked
          })
        }
      }
      if (this.items2.find(item => item.checked === true) === undefined) {
        if (this.items.find(item => item.checked === true) === undefined) {
          this.isFilled = false
        } else {
          this.isFilled = true
        }
      } else {
        this.isFilled = true
      }
    },
    changeFirstPayment (val, type) {
      this[type] = val
      const toBack = (val === '1' ? 'Весь срок' : (type === 'byTheDay' ? 'Посуточно' : 'Первый месяц'))
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'firstPaymentAmount', key: type, value: toBack })
    },
    next () {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'firstPaymentAmount', key: 'byTheDay', value: this.byTheDay })
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'firstPaymentAmount', key: 'longTerm', value: this.longTerm })
      this.$emit('next')
    }
  }
}
