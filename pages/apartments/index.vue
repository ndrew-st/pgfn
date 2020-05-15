<template>
  <div>
    <h1>Apartments list</h1>
    <ul>
      <li
        v-for="apartment of 5"
        :key="apartment"
      >
        <a
          href="#"
          @click.prevent="openApartment(apartment)"
        >Apartment {{ apartment }}
        </a>
      </li>
    </ul>
    <h1>Autorization list</h1>
    <ul>
      <li>
        <router-link
          to="/verification/sign-in-01-1440"
        >
          sign-in-01-1440
        </router-link>
      </li>
      <li>
        <router-link to="/">
          home
        </router-link>
      </li>
      <li>
        <router-link to="/verification">
          home2
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openApartment (apartment) {
      this.$router.push('/apartments-day/' + apartment)
    }
  }
}
</script>

<style lang="stylus">
h1
    padding 100px 50px 30px 50px
</style>
