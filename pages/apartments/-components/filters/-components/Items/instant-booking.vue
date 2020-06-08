<template>
  <div class="instant-booking">
    <div class="instant-booking__title-container">
      <h3 class="instant-booking__title">
        Мгновенное бронирование
      </h3>
      <OcInput
        v-model="value"
        label="toggle"
        kind="toggle"
        type="checkbox"
        check-value="instant-booking"
        @input="$emit('input', $event)"
      />
    </div>
    <p class="instant-booking__desc">
      Объявления, которые можно забронировать, не дожидаясь подтверждения хозяина.
    </p>
  </div>
</template>

<script>
export default {
  name: 'InstantBooking',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.instant-booking
  width: 372px
  padding: 28px

  background: #FFFFFF;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;

  &__title-container
    display flex
    justify-content: space-between;

  &__title
    margin: 0
    margin-bottom: 16px

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: #272528;

  &__desc
    margin: 0
    max-width 245px

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #989BA8;
</style>
