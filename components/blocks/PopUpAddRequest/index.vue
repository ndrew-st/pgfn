<template>
  <div class="add-request__container">
    <p class="add-request__p">
      Точный адрес
      <span class="add-placement__red-star">*</span>
    </p>

    <ApInput
      :value="inputAdress"
      @input="askDadata($event)"
    />

    <ApDadataDropdown
      v-if="adressList"
      :list="adressList"
      @selectAdress="selectAdress"
    />

    <div class="flex">
      <p
        v-if="unknownHouse !== null"
        class="ap-red-p"
      >
        Мы не уверены, что такой дом существует. Проверьте, нет ли ошибки
      </p>
    </div>
  </div>
</template>

<script src="./index.js"/>

<style lang="stylus" src="./index.styl" scoped/>
