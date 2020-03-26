<template>
  <div class="apartment-page">
    <h1>Apartment {{ $route.params.id }}</h1>

    <ApartmentPhoto :apartment-info1="apartmentInfo1" />

    <div class="box">
      <div class="left-column">
        <ApartmentDescription :full-path="fullPath" />
      </div>

      <div>
        <ContactPerson
          :apartment-info1="apartmentInfo1"
          :start-date="startDate"
          :languages="languages"
          :number-apartment="numberApartment"
          :refresh-date="refreshDate"
          :number-of-views="numberOfViews"
        />

        <Booking />

        <Rating />
      </div>
    </div>

    <Facilities />

    <hr><hr>

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
  },
  data: () => ({
    fullPath: [
      'Главная',
      'Судакский городской округ',
      'Судак',
      'Жильё',
      'Апартаменты'
    ]
  }),
  computed: {
    apartmentInfo1 () { return '3-к квартира, 146 м², 11/12 эт.' },
    startDate () { return '27 июня 2018 г.' },
    languages () { return 'Общение на Русском и Английском языках.' },
    numberApartment () { return '123456789' },
    refreshDate () { return '15.11.2019' },
    numberOfViews () { return '1723' }
  }
}
</script>

<style lang="stylus" scoped>
.box
  display flex

.left-column
  width 70%
  margin-left 22px
  margin-right 22px
</style>
