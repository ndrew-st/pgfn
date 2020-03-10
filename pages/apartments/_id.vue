<template>
  <div class="apartment-page">
    <h1>Apartment {{ $route.params.id }}</h1>

    <ApartmentPhoto />
    <ApartmentDescription :fullPath="fullPath" />
    <ContactPerson />
    <Booking />
    <Raiting />
    <Facilities />
  </div>
</template>

<script>
import ApartmentPhoto from './-components/apartment-photo/index.vue'
import ApartmentDescription from './-components/apartment-description/index.vue'

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
    ApartmentDescription
  }
}
</script>
