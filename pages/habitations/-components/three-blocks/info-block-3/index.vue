<template>
  <InfoBlock block-name="Онлайн бронирование">
    <p class="p-info-3">
      Оплата онлайн: <span class="bold">{{ onlineBooking.onlinePay ? 'включена' : 'нет' }} </span>
    </p>

    <p class="p-info-3">
      Отмена возможна не менее чем за <span class="bold">{{ onlineBooking.minPeriodCancel }} </span> до срока аренды
    </p>

    <a
      href="#"
      class="href-all-items"
    >
      Подробнее о правилах отмены
    </a>
  </InfoBlock>
</template>

<style src="./index.styl" lang="stylus" scoped />

<script src="./index.js"/>
