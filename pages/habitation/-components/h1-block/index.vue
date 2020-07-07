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
        <p class="h1">
          <nobr>
            {{ price.byTheDay[0].price }}
            <span class="h1__rouble">9</span>
          </nobr>
        </p>

        <p class="period">
          <nobr>
            за сутки
          </nobr>
        </p>
      </div>
    </div>

    <div class="flex aic mt12">
      <div class="estimate">
        {{ estimate }}
      </div>

      <div class="comms">
        {{ review }}
      </div>

      <div class="dateNumber">
        {{ date }}&nbsp;№&nbsp;{{ ownerId }}
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
