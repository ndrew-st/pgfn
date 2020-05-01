<template>
  <div class="three-blocks flex">
    <InfoBlock1
      :tariffs="tariffs"
      class="info-block-1"
    />

    <InfoBlock2
      :prices="prices"
      class="info-block-2"
    />

    <InfoBlock3
      :online-booking="onlineBooking"
      class="info-block-3"
    />
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js"/>
