<template>
  <div class="card">
    <OcMaps
      class="card__map"
      :coords="item.coords"
    />

    <div class="card__container">
      <OcLink
        to="/"
        name="profile"
        class="card__title"
      >
        {{ item.title }}
      </OcLink>

      <p class="card__date">
        {{ item.date }}
      </p>
    </div>

    <div class="card__footer">
      <p class="card__price">
        <span class="card__price--text">{{ item.price.toLocaleString() }}</span>
        <span class="card__price--rouble">9</span>
      </p>

      <!--      <OcButton>изменить</OcButton>-->
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
