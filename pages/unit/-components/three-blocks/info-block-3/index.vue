<template>
  <InfoBlock class="info-block-container">
    <div class="info-block-container__item info-unit">
      <h3 class="info-unit__title">
        Тип бронирования
      </h3>

      <p class="info-unit__content">
        {{ reservation[content.typeOfReservation] }}
      </p>
    </div>

    <div class="info-block-container__item info-unit">
      <h3 class="info-unit__title">
        Условия отмены бронирования
      </h3>

      <p class="info-unit__content">
        {{ policy[content.cancellationPolicy] }}
      </p>
    </div>
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped />
