<template>
  <div>
    <br><br><br>
    <div>
      <div>
        <h5>Занятые даты</h5>
        <input
          v-model="start1"
          type="date"
        ><input
          v-model="finish1"
          type="date"
        ><br>
        <input
          v-model="start2"
          type="date"
        ><input
          v-model="finish2"
          type="date"
        ><br>
        <input
          v-model="start3"
          type="date"
        ><input
          v-model="finish3"
          type="date"
        ><br>
        <input
          v-model="start4"
          type="date"
        ><input
          v-model="finish4"
          type="date"
        ><br>
      </div>

      <div>
        <h5>Выбранные даты</h5>
        <input
          v-model="selStart"
          type="date"
        ><input
          v-model="selFinish"
          type="date"
        >
      </div>
    </div>
    <OcCalendar
      :selected-dates="selInterval"
      :occupied-dates="occArray"
    />
  </div>
</template>

<script>
import OcCalendar from '@/components/ocCalendar/index.vue'
export default {
  components: { OcCalendar },
  data () {
    return {
      selStart: '2020-04-19',
      selFinish: '2020-05-05',

      start1: '2020-05-12',
      start2: '2020-05-06',
      start3: undefined,
      start4: undefined,
      finish1: '2020-05-14',
      finish2: '2020-05-08',
      finish3: undefined,
      finish4: undefined
    }
  },
  computed: {
    occArray () {
      const oa = []
      if (this.start1 !== undefined) {
        oa.push({ start: new Date(this.start1), finish: new Date(this.finish1) })
      }
      if (this.start2 !== undefined) {
        oa.push({ start: new Date(this.start2), finish: new Date(this.finish2) })
      }
      // if (this.start3 !== undefined) {
      //   oa.push({ start: this.start3, finish: this.finish3 })
      // }
      // if (this.start4 !== undefined) {
      //   oa.push({ start: this.start4, finish: this.finish4 })
      // }
      console.log('oa: ' + JSON.stringify(oa))

      return oa
    },
    selInterval () {
      return (this.selStart !== null && this.selFinish !== null) ? { start: new Date(this.selStart), finish: new Date(this.selFinish) } : { start: null, finish: null }
    }
  }
}
</script>
