<template>
  <div>
    <div class="box-flex">
      <OcImg
        class="icon"
        :src="img"
      />
      <div class="txt">
        <p>{{ name }}</p>

        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'name', 'description']
}
</script>

<style lang="stylus" scoped>
.icon
  width 44px
  height 44px
  margin 10px 10px

.box-flex
  display flex
  margin 10px 10px
  width 290px

.txt
  margin-top 10px
</style>
