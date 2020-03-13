<template>
    <div>
        <div class="box-flex">
            <img
            class="icon"
            :src="img" />

            <div>
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
  width 28px
  height 28px
  margin 10px 10px

.box-flex
  display flex
  margin 10px 10px
</style>
