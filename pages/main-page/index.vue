<template>
  <div class="main-page">
    <MainScreen />

    <LocationDescription
      :description="description"
      title="Крым"/>

    <PopularDirection />

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
