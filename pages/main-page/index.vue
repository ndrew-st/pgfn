<template>
  <div class="main-page">
    <SearchScreen />

    <Advantage />

    <WhereToGo />

<!--    <WhereToStay />-->

    <HousingOptions
      :apartments="apartments"
      :popular="popular"
    />

    <ImpressionsForEvery />
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
