<template>
  <div class="phone">
    <label class="phone__label">
      <i
        v-if="params.validation === 'required'"
        class="phone__label--required"
      >*</i>
      <masked-input
        v-model="selectPhone"
        :placeholder="params.placeholder"
        :mask="phoneMask"
        class="phone__input"
      />
    </label>
    <label>
      <select
        v-if="phones.length"
        @change="updatePhone"
      >
        <option
          value=""
          selected
          disabled
          hidden
        >Выберите зарегестрированный телефон...</option>
        <option
          v-for="phone in phones"
          :key="phone.id"
          :value="phone.value"
        >{{ phone.name }}</option>
      </select>
    </label>
  </div>
</template>

<script>
// import MaskedInput from 'vue-text-mask'

export default {
  name: 'PhoneInput',
  // components: { MaskedInput },
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    setValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  $_veeValidate: {
    // value getter
    value () {
      return this.selectPhone
    },
    // name getter
    name () {
      return this.name
    }
  },
  data () {
    return {
      phones: [],
      selectPhone: this.setValue || ''
    }
  },
  computed: {
    phoneMask () {
      return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    }
  },
  watch: {
    selectPhone (val) {
      this.$emit('input', val)
    }
  },
  created () {
    // this.$axios.get(this.field.params.request) // get registered phone
    //   .then((res) => {
    //     this.phones = res.data.phones
    //   })
  },
  methods: {
    updatePhone (evt) {
      this.selectPhone = evt.target.value
    }
  }
}
</script>

<style lang="stylus">
.phone
  &__label
    position: relative;

    &--required
      position: absolute;
      left -15px
      top 0
      bottom 0

      margin auto 0
      margin-top: 5px;

      color red

  &__input
    width 200px
    height 30px
    padding-left: 10px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    cursor: pointer;
</style>
