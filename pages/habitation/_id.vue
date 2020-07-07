<template>
  <div class="habitation-page">
    <div class="habitation-page__padding">
      <TopLine :title="header.title" />

      <div class="habitation-page__order-flex">
        <H1Block
          :title="header.title"
          :intro="header.intro"
          :reviews="header.reviews"
          :estimate="header.estimate"
          :date="header.date"
          :owner-id="header.ownerId"
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
        :info="descInfo"
      />

      <ThreeBlocks
        :tariffs="tariffs"
        :prices="prices"
        :online-booking="onlineBooking"
      />

      <Comfort :comfort="facilities" />

      <Rules
        :rules1="rules1"
        :rules2="rules2"
      />

      <Location
        :coords="coords"
        :location="location"
        :loc-desc="locDesc"
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

    <Footer />

    <BookingFooter
      :booking-footer-info="bookingFooterInfo"
      @changeBookingActive="bookingActive = !bookingActive"
    />

    <Booking
      v-if="bookingActive"
      :booking-active="bookingActive"
      @changeBookingActive="changeBookingActive"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
