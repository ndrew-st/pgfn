<template>
  <div class="modal-backdrop">
    <div
      class="modal-wrapper"
      @click.self="$emit('toggleModal')"
    >
      <Modal
        :config="formConfig"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
