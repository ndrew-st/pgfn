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

      <p class="card__date">
        {{ item.date }}
      </p>

      <ul class="card__attrs">
        <li class="card__attrs-item">
          <Attrs
            class="card__attr"
            title="Количество гостей"
            :content="item.guests"
          />
        </li>

        <li class="card__attrs-item">
          <Attrs
            class="card__attr"
            title="Тариф"
            :content="item.tariff"
          />
        </li>
      </ul>
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
