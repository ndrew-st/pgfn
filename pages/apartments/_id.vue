<template>
  <div class="apartment-page">
    <h1>Apartment {{ $route.params.id }}</h1>

    <ApartmentPhoto />

    <div class="box">
      <div class="left-column">
        <ApartmentDescription :fullPath="fullPath" />
      </div>

      <div>
        <ContactPerson />

        <Booking />

        <Rating />
      </div>
    </div>

    <Facilities />

    <hr>

    <Services />

    <RatingComments />

    <PopularDirections />

    <Places />

    <HousingOptions />

    <Entertainments />
  </div>
</template>

<script>
import ApartmentPhoto from './-components/apartment-photo/index.vue'
import ApartmentDescription from './-components/apartment-description/index.vue'
import ContactPerson from './-components/contact-person/index.vue'
import Booking from './-components/booking/index.vue'
import Rating from './-components/rating/index.vue'
import Facilities from './-components/facilities/index.vue'
import Services from './-components/services/index.vue'
import RatingComments from './-components/rating-comments/index.vue'
import PopularDirections from './-components/popular-directions/index.vue'
import Places from './-components/places/index.vue'
import HousingOptions from './-components/housing-options/index.vue'
import Entertainments from './-components/entertainments/index.vue'

export default {
  data: () => ({
    fullPath: [
      'Главная',
      'Судакский городской округ',
      'Судак',
      'Жильё',
      'Апартаменты'
    ]
  }),
  components: {
    ApartmentPhoto,
    ApartmentDescription,
    ContactPerson,
    Booking,
    Rating,
    Facilities,
    Services,
    RatingComments,
    PopularDirections,
    Places,
    HousingOptions,
    Entertainments
  }
}
</script>

<style lang="stylus" scoped>
.box
  display flex

.left-column
  width 70%
</style>
