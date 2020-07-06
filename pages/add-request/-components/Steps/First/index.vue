<template>
  <div class="container">
    <div class="container__location location">
      <OcInput
        class="location__item"
        type="text"
        kind="most"
        :required="true"
        label="Регион и населённый пункт"
        placeholder="Москва"
      />

      <div class="location__map-unit">
        <Map
          @input="handlerCoords"
        />
      </div>
    </div>
    <ul class="container__result result-check">
      <li
        v-for="item in list"
        :key="item.groupName"
        class="result-check__item unit-res"
      >
        <CheckList
          :content="item"
          type="checkbox"
          kind="checkbox"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
