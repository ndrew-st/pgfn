<template>
  <div class="three-blocks">
    <InfoBlock1
      v-if="isPrice"
      :prices="prices"
      class="info-block info-block-1"
    />

    <InfoBlock2
      v-if="times"
      :times="times"
      class="info-block info-block-2"
    />

    <InfoBlock3
      v-if="booking"
      :content="booking"
      class="info-block info-block-3"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
