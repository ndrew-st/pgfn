<template>
  <div class="modal-container">
    <Header/>

    <Intro
      :disabled-back="activeStep === 0"
      :title="config[activeStep].name"
      @changeStep="changeCurrentStep"
    />

    <FormBuilder
      :field-list="config[activeStep].fields"
      :all-fields="config"
      :active-step="activeStep"
      :length-steps="config.length"
      @changeStep="changeCurrentStep"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
