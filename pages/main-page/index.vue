<template>
  <div class="main-page">
    <MainScreen />

    <LocationDescription
      :description="description"
      title="Крым"/>

    <PopularDirection />

    <Accommodation />
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
