<template>
  <div>
    <input
      class="dates"
      type="text"
      value="Заезд и выезд"
    >

    <table class="calendar">
      <tr>
        <th class="th">
          ПН
        </th>
        <td
          v-for="day in dayList[0]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          ВТ
        </th>
        <td
          v-for="day in dayList[1]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          СР
        </th>
        <td
          v-for="day in dayList[2]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          ЧТ
        </th>
        <td
          v-for="day in dayList[3]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          ПТ
        </th>
        <td
          v-for="day in dayList[4]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          СБ
        </th>
        <td
          v-for="day in dayList[5]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
      <tr>
        <th class="th">
          ВС
        </th>
        <td
          v-for="day in dayList[6]"
          :key="day"
          class="bc"
          :data-value="day.ind"
          :class="{ occup: day.occup, past: day.past, sel: (day.selected && !day.occup) }"
        >
          {{ day.day }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus" scoped></style>
