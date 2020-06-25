import Input from './-components/FormFields/Input'
import Count from './-components/FormFields/Count'
import Select from './-components/FormFields/Select'

import CheckBoxes from './-components/FormFields/FirstStep/CheckBoxes'

import Map from './-components/FormFields/SecondStep/Map'
import RadioButton from './-components/FormFields/SecondStep/RadioButton'
// import PhoneInput from './-components/FormFields/SecondStep/PhoneInput'

import CountBed from './-components/FormFields/FourthLevel/CountBed'

import CheckboxGroup from './-components/FormFields/FifthStep/CheckboxGroup'

import Gallery from './-components/FormFields/SixthStep/Gallery'

import TextEditor from './-components/FormFields/SeventhStep/TextEditor'
import Price from './-components/FormFields/SeventhStep/Price'
import Booking from './-components/FormFields/SeventhStep/Booking'

export default {
  components: {
    Input,
    Count,
    Select,
    CheckBoxes,
    Map,
    RadioButton,
    // PhoneInput,
    CountBed,
    CheckboxGroup,
    Gallery,
    TextEditor,
    Price,
    Booking
  },
  provide () {
    return {
      formValues: this.formValues
    }
  },
  props: {
    fieldList: {
      type: Array,
      required: true,
      default: () => []
    },
    activeStep: {
      type: Number,
      required: true
    },
    lengthSteps: {
      type: Number,
      required: true
    },
    allFields: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      formValues: {}, // Common values form
      disabled: true
    }
  },
  created () {
    // this.fieldList.map(field => Vue.set(this.formValues, field.name, null))
  },
  methods: {
    nextStepClick () {
      this.$validator.validate()
        .then((res) => {
          if (res) {
            this.$emit('changeStep', true)
          }
        })
    },
    isValid () {
      let valid = true

      this.allFields.forEach((item) => {
        item.fields.forEach((field) => {
          if (field.validation && field.validation === 'required') {
            if (!this.formValues[field.name]) {
              valid = false
            }
          }
        })
      })

      return valid
    },
    updateField (fieldName, value) {
      this.formValues[fieldName] = value
    },
    handlerSubmit () {
      console.log(this.formValues)
      console.log('Submit')
    }
  }
}
