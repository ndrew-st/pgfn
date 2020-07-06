<template>
  <div class="map-container">
    <OcInput
      v-model="address"
      class="map-container__item"
      type="text"
      kind="most"
      icon="map-pos-icon"
      icon-position="right"
      label="Точный адрес"
      add-desc="Вы можете указать район города, улицу или точный адрес вплоть до определенного дома"
    />

    <OcMap
      class="map-container__item"
      label="Указать на карте"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
