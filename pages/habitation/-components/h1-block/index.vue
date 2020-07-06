<template>
  <div class="h1-block">
    <div class="flex jc aic">
      <div>
        <p class="h1">
          {{ h1Info.desc1 }}
        </p>

        <p class="h2">
          {{ h1Info.desc2 }}
        </p>
      </div>

      <div class="fe">
        <p class="h1">
          <nobr>
            {{ h1Info.price }}
          </nobr>
        </p>

        <p class="period">
          <nobr>
            {{ h1Info.period }}
          </nobr>
        </p>
      </div>
    </div>

    <div class="flex aic mt12">
      <div class="estimate">
        {{ h1Info.estimate }}
      </div>

      <div class="comms">
        {{ h1Info.comms }}
      </div>

      <div class="dateNumber">
        {{ h1Info.dateNumber }}
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped/>

<script src="./index.js"/>
