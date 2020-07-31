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
        Запрос на долгосрочную аренду жилья в {{ item.address.city }}, {{ item.address.region }}
        {{ typeOfHousing }}, {{ item.areaOfHousin.start }}-{{ item.areaOfHousin.end }} м²
      </OcLink>

      <p class="card__type-house">
        {{ item.type }}
      </p>

      <p class="card__price card__price--desktop">
        <span class="card__price--desc">Желаемая цена:</span>
        <span class="card__price--text">{{ item.price && item.price.toLocaleString() }}</span>
        <span class="card__price--rouble">9</span>
        <span class="card__price--measure">за месяц</span>
      </p>

      <p class="card__date">
        {{ item.date }}
      </p>

      <Attrs
        class="card__attr"
        title="Количество гостей"
        :content="item.guests"
      />

      <!-- временный говнокод -->
      <p class="card__reviews card__reviews--mobile">
        {{ review === undefined ? '0' : review }} с момента публикации
      </p>
    </div>

    <div class="card__footer">
      <p class="card__state">
        {{ state }}
      </p>

      <p class="card__price card__price--mobile">
        <span class="card__price--desc">Желаемая цена:</span>
        <span class="card__price--text">{{ item.price && item.price.toLocaleString() }}</span>
        <span class="card__price--rouble">9</span>
        <span class="card__price--measure">за месяц</span>
      </p>

      <!-- временный говнокод -->
      <p class="card__reviews card__reviews--desktop">
        {{ review === 'undefined просмотров' ? '0 просмотров' : review }} с момента публикации
      </p>

      <!--      <OcButton>изменить</OcButton>-->
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
