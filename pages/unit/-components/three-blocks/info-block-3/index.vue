<template>
  <InfoBlock class="info-block-container">
    <div class="info-block-container__item info-unit">
      <h3 class="info-unit__title">
        Время для звонков
      </h3>

      <p class="info-unit__content">
        {{ reservation[content.typeOfReservation] }}
      </p>
    </div>

    <div class="info-block-container__item info-unit">
      <h3 class="info-unit__title">
        Время для звонков
      </h3>

      <p class="info-unit__content">
        {{ policy[content.cancellationPolicy] }}
      </p>
    </div>
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped />
