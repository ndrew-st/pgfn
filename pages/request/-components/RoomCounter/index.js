import ApCheckbox from '../../../add-placement/ap-checkbox'

export default {
  components: {
    ApCheckbox
  },
  props: {
    selItems: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      roomsArray: [
        { checked: false, title: 'Студия' },
        { checked: false, title: '1' },
        { checked: false, title: '2' },
        { checked: false, title: '3' },
        { checked: false, title: '4' },
        { checked: false, title: '5' },
        { checked: false, title: '6' },
        { checked: false, title: '7' },
        { checked: false, title: '8 и более' }
      ],
      active: false,
      textForInput: ''
    }
  },
  methods: {
    changeActive () {
      this.active = !this.active
    },
    beforeCreate () {
      this.textForInput = ''
      const selLength = this.selItems.length
      if (selLength > 0) {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < selLength; j++) {
            if (this.roomsArray[i].title === this.selItems[j]) {
              this.roomsArray[i].checked = true
              this.textForInput = this.textForInput + (this.textForInput === '' ? '' : ' / ') + this.roomsArray[i].title
            }
          }
        }
      }
    },
    change (val, ind) {
      this.roomsArray[ind].checked = val
      this.textForInput = ''
      const selItems = []
      for (let i = 0; i < 9; i++) {
        if (this.roomsArray[i].checked) {
          selItems.push(this.roomsArray[i].title)
          this.textForInput = this.textForInput + (this.textForInput === '' ? '' : ' / ') + this.roomsArray[i].title
        }
      }
      this.$emit('change', selItems)
    }
  }
}
