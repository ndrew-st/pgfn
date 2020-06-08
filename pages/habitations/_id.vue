<template>
  <div
    class="habitation-page"
  >
    <div class="habitation-page__padding">
      <TopLine :top-path="topPath" />

      <div class="habitation-page__order-flex">
        <H1Block
          :h1-info="h1Info"
          class="habitation-page__h1-block"
        />

        <Pics :images="images" />
      </div>

      <DescBlockTop :info="descInfo" />

      <ThreeBlocks
        :tariffs="tariffs"
        :prices="prices"
        :online-booking="onlineBooking"
      />

      <Comfort :comfort="comfort" />

      <Rules
        :rules1="rules1"
        :rules2="rules2"
      />

      <Location
        :coords="coords"
        :location="location"
        :loc-desc="locDesc"
      />

      <GroupCard
        :count="apartments.count"
        :auto-width="true"
        :items="apartments.items"
        :tabs="apartments.tabs"
        title="Жильё"
        @changeTab="handlerTab('apartments', $event)"
      >
        <ocCard
          v-for="item in apartments.items"
          :key="item.id"
          kind="most"
          :item="item"
          type="housing"
          :is-liked="false"
        />
      </GroupCard>
    </div>

    <Subscribe />

    <Footer />

    <BookingFooter
      :booking-footer-info="bookingFooterInfo"
      @changeBookingActive="bookingActive = !bookingActive"
    />

    <Booking
      v-if="bookingActive"
      @changeBookingActive="changeBookingActive"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
