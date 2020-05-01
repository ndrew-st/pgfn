<template>
  <div>
    <br><br><br><br><br>
    <h1>habitation list</h1>
    <ul>
      <li
        v-for="habitation of 5"
        :key="habitation"
      >
        <nuxt-link
          :to="'/habitations/' + habitation"
        >
          habitation {{ habitation }}
        </nuxt-link>
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
