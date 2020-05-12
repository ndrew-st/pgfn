<template>
  <div class="room-description__item">
    <div class="room-description__bed-icon">
      <div class="box-flex">
        <OcImg
          v-for="bed in beds"
          :key="bed"
          :src="bed"
        />
      </div>
    </div>

    <h3>{{ desc }}</h3>

    <p>{{ full }}</p>

    <div class="human-box">
      <div
        v-for="man in people"
        :key="man"
        class="human-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="2.682 6.493 247.872 600"
          enable-background="new 2.682 6.493 247.872 600"
          xml:space="preserve"
          style="fill: rgb(0, 0, 0);"
        >
          <g id="__id437_sh9wfkpz1i">
            <path
              d="M126.615,6.493c29.307,0,53.056,23.75,53.056,53.055c0,29.3-23.749,53.049-53.056,53.049   c-29.293,0-53.055-23.75-53.055-53.049C73.56,30.243,97.323,6.493,126.615,6.493z"
              style="fill: rgb(113, 64, 184);"
            />
            <path
              d="M250.549,194.806c-0.225-39.396-32.225-71.277-71.677-71.277h-70.889h-4.861H74.369   c-39.452,0-71.461,31.88-71.664,71.277c-0.011,0.072-0.023,0.14-0.023,0.208v140.346c0,12.626,10.259,22.874,22.874,22.874   c12.649,0,22.885-10.257,22.885-22.874v-83.234v-46.792h10.932v50.069v89.666v12.948v217.732c0,16.971,13.749,30.719,30.708,30.719   c16.983,0,30.72-13.75,30.72-30.719V358.041h11.629v217.73c0,16.971,13.737,30.722,30.71,30.722   c16.979,0,30.718-13.751,30.718-30.722V358.043v-12.964v-89.665v-50.07h10.933v46.792v83.236c0,12.624,10.247,22.885,22.884,22.885   c12.639,0,22.874-10.269,22.874-22.885V195.013C250.56,194.946,250.549,194.878,250.549,194.806z"
              style="fill: rgb(113, 64, 184);"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['beds', 'desc', 'full', 'people']
}
</script>

<style lang="stylus" scoped>
.room-description__item
  margin 40px 40px

.human-box
  display flex

.room-description__bed-icon
  width 50px
  height 50px

.human-icon
  width 10px
  margin 5px 3px

.box-flex
  display flex

</style>
