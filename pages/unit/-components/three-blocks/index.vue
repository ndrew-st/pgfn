<template>
  <div class="three-blocks flex">
    <InfoBlock1
      v-if="prices"
      :prices="prices"
      class="info-block info-block-1"
    />

    <InfoBlock2
      :times="times"
      class="info-block info-block-2"
    />

    <InfoBlock3
      :online-booking="booking"
      class="info-block info-block-3"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
