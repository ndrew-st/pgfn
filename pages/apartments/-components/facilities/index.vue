<template>
  <div>
    <h1>Удобства</h1>

    <div class="box-flex">
        <Facility
        img="/icons/v-green.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />

        <Facility
        img="/icons/bath.png"
        name="Джакузи"
        description="Имеется полноценное джакузи" />

        <Facility
        img="/icons/sunrise.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />
    </div>

    <div class="box-flex">
        <Facility
        img="/icons/sunrise.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />

        <Facility
        img="/icons/bath.png"
        name="Джакузи"
        description="Имеется полноценное джакузи" />

        <Facility
        img="/icons/sunrise.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />
    </div>

    <div class="box-flex">
        <Facility
        img="/icons/sunrise.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />

        <Facility
        img="/icons/bath.png"
        name="Джакузи"
        description="Имеется полноценное джакузи" />

        <Facility
        img="/icons/sunrise.png"
        name="Вид на рассвет"
        description="Из окна виден рассвет" />

        <Facility
        img="/icons/water.png"
        name="Вид на море"
        description="Из окон видно море" />
    </div>

    <div class="show-facilities">
        <div class="text-button">
            Показать все удобства (44)
        </div>
    </div>

  </div>
</template>

<script>
import Facility from '@/pages/apartments/-components/facility/index.vue'

export default {
  components: {
    Facility
  }
}
</script>

<style lang="stylus" scoped>
.box-flex
  display flex

.show-facilities
  display flex
  border 1px solid grey
  padding 10px 10px
  width 215px

.text-button
  margin auto
</style>
