<template>
  <form
    class="modal-form"
    @submit.prevent="handlerSubmit"
  >
    <div class="modal-form__content">
      <div
        v-for="field in fieldList"
        :key="field.name"
      >
        <p
          v-if="field.label"
          class="modal-form__label"
        >
          {{ field.label }}
        </p>

        <p
          v-if="field.desc"
          class="modal-form__desc"
        >
          {{ field.desc }}
        </p>

        <component
          :is="field.type"
          v-validate="field.params.validation"
          :params="field.params"
          :set-value="formValues[field.name]"
          :name="field.label || field.params.label"
          @input="updateField(field.name, $event)"
        />
        <!-- <span class="modal-form__error">{{ errors.first(field.label || field.params.label) }}</span> -->
      </div>
    </div>
    <button
      v-if="activeStep !== lengthSteps - 1"
      class="modal-form__next"
      type="button"
      @click.prevent="nextStepClick"
    >
      Продолжить
    </button>
    <button
      v-else
      :disabled="!isValid()"
      class="modal-form__submit"
      type="submit"
    >
      Отправить
    </button>
  </form>
</template>

<script src="./index.js"/>
<style scoped lang="stylus" src="./index.styl"/>
