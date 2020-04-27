<template>
  <div class="all">
    <p class="headline">
      {{ mode === 'start' ? 'Прибытие' : 'Выезд' }}
    </p>

    <div class="flex">
      <div
        @click="reduce"
        class="arrow"
      >
        <svg
          class="arrow_left"
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6.95711L1 6.95711"
            stroke="#989BA8"
            stroke-linecap="round"
          />
          <path
            d="M7 12.9512L1 6.9571L7 0.962955"
            stroke="#989BA8"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="month-name">
        {{ monthName }}
      </div>

      <div
        @click="increase()"
        class="arrow"
      >
        <svg
          class="arrow_right"
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.95711L16 6.95711"
            stroke="#989BA8"
            stroke-linecap="round"
          />
          <path
            d="M10 12.9512L16 6.9571L10 0.962955"
            stroke="#989BA8"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th
            v-for="day in days"
            :key="day"
            class="week-days"
          >
            {{ day }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(row, ind1) in dArray"
          :key="row.key1"
        >
          <td
            v-for="(day, ind2) in row.da"
            :key="day.key2"
            :class="[day.empty ? 'empty' : day.unavailable || day.occ ? 'cell-box unavailable' : 'cell-box available', day.sel ? 'selected' : '']"
            :ind1="ind1"
            :ind2="ind2"
            @click="select()"
          >
            {{ day.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
