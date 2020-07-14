<template>
  <div class="card">
    <OcImg
      :width="244"
      :height="120"
      class="card__img"
      :src="item.img"
      :alt="item.title"
    />

    <div class="card__container">
      <OcLink
        to="/"
        name="profile"
        class="card__title"
      >
        {{ item.title }}
      </OcLink>

      <p class="card__reviews">
        {{ review }} за сутки
      </p>

      <p class="card__price">
        <span class="card__price--text">от {{ item.price.toLocaleString() }}</span>
        <span class="card__price--rouble">9</span>
        <span class="card__price--measure">за сутки</span>
      </p>
    </div>

    <div class="card__footer">
      <p class="card__status">
        {{ archive ? 'Архивировать' : 'Черновик' }}
      </p>
      <!--      <OcButton>change</OcButton>-->
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
