<template>
  <div
    :class="{ submitted: submitted }"
    class="form-container"
  >
    <Header
      :active-step="activeStep"
      :active-clear="activeButton"
      :show-clear="isShowClearButton"
      @changeStep="changeStep"
      @clearData="clearData"
    />

    <div
      v-if="!submitted"
      class="form-container__menu"
    >
      <transition name="fade">
        <component
          :is="steps[activeStep].name"
          v-if="!submitted"
          @input="updateField(steps[activeStep].value, $event)"
        />
      </transition>

      <Controls
        v-if="activeStep"
        :active-step="activeStep"
        :step-length="steps.length"
        :active-next="activeButton"
        @changeStep="changeStep(true)"
        @submit="submit"
      />
    </div>

    <div
      v-else
      :class="{ success: success }"
      class="form-container__result form-result"
    >
      <div
        v-if="success"
        class="form-result__success"
      >
        <span class="form-result__success--date">11.09-21.09</span>
      </div>
      <div
        v-else
        class="form-result__search-container"
      >
        <OcInput
          v-model="search"
          icon="find"
          type="mainType"
          styles="main-search"
          icon-position="left"
          placeholder="Например отели с бассейном"
          @input="handlerSearch"
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
