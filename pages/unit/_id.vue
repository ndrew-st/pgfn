<template>
  <div class="habitation-page">
    <div class="habitation-page__padding">
      <div class="habitation-page__order-flex">
        <H1Block
          :title="title"
          :intro="header.intro"
          :reviews="header.reviews"
          :estimate="header.estimate"
          :type-of-housing="header.typeOfHousing"
          :views="header.views"
          :date="header.date"
          :owner-id="header.id"
          :price="header.price"
          class="habitation-page__h1-block"
        />

        <Pics
          v-if="images.length"
          :images="images"
        />
        <MapBlock
          v-else
          :content="address"
        />
      </div>

      <DescBlockTop
        :description="description"
        :info="user"
      />

      <ThreeBlocks
        :reservation="reservation"
        :prices="prices"
      />

      <Comfort
        v-if="facilities.length"
        :comfort="facilities"
      />

      <!--      <Rules-->
      <!--        :rules1="reservation"-->
      <!--        :rules2="limits"-->
      <!--      />-->

      <Location
        :coords="coords"
        :address="address"
      />

      <!--      <GroupCard-->
      <!--        :count="apartments.count"-->
      <!--        name="most"-->
      <!--        :auto-width="true"-->
      <!--        :items="apartments.items"-->
      <!--        :tabs="apartments.tabs"-->
      <!--        title="Жильё"-->
      <!--        @changeTab="handlerTab('apartments', $event)"-->
      <!--      >-->
      <!--        <ocCard-->
      <!--          v-for="item in apartments.items"-->
      <!--          :key="item.id"-->
      <!--          kind="most"-->
      <!--          :item="item"-->
      <!--          type="housing"-->
      <!--          :is-liked="false"-->
      <!--        />-->
      <!--      </GroupCard>-->
    </div>

    <Subscribe />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
