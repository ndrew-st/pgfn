<template>
  <div class="h1-block">
    <div class="flex jc aic">
      <div>
        <p class="h1">
          {{ title }}
        </p>

        <p class="h2">
          {{ intro }}
        </p>
      </div>

      <div class="fe">
        <div class="h1-block__container">
          <p class="h1">
            <nobr>
              {{ priceView.toLocaleString() }}
              <span class="h1__rouble">9</span>
            </nobr>
          </p>

          <p class="period">
            <nobr>
              {{ measure }}
            </nobr>
          </p>
        </div>
        <div
          v-if="type === 'request'"
          class="h1-block__date"
        >
          {{ dateView }}
        </div>
      </div>
    </div>

    <div
      v-if="type === 'habitation'"
      class="flex aic mt12 container-desc"
    >
      <div class="container-desc__left">
        <div class="estimate">
          {{ estimate || '4.0' }}
        </div>

        <div
          v-if="reviews"
          class="comms"
        >
          {{ review }}
        </div>

        <div
          v-if="views"
          class="comms"
        >
          {{ view }}
        </div>

        <div
          v-if="typeOfHousing"
          class="comms"
        >
          {{ typeHouse[typeOfHousing] }}
        </div>
      </div>

      <div
        v-if="ownerId"
        class="dateNumber"
      >
        {{ date }}&nbsp;№&nbsp;{{ ownerId }}
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
