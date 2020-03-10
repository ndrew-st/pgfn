<template>
  <div>
    <h1>Apartments list</h1>
    <ul>
      <li
      v-for="apartment of 5"
      :key="apartment">
        <a
        @click.prevent="openApartment(apartment)"
        href="#"
          >Apartment {{ apartment }}
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openApartment (apartment) {
      this.$router.push('/apartments/' + apartment)
    }
  }
}
</script>

<style lang="stylus">
h1
    padding 100px 50px 30px 50px
</style>
