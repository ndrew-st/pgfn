<template>
  <div>
    <div class="apartment-photo">
      <div class="apartment-photo__left">
        <!-- <OcImg
        class="apartment-photo__left-img"
        src="apartments-day/894753838.jpg"
      /> -->

        <OcSwiper :swiper-info="swiperInfo" />

        <div class="info-block">
          <p class="ap-info1">
            {{ apartmentInfo1 }}{{ kitchen }}
          </p>

          <p>{{ apartmentInfo2 }}</p>

          <OcImg
            class="thumb-up"
            src="icons/thumb-up.png"
          />

          <span> {{ likeCount }} </span>

          <OcImg
            class="thumb-down"
            src="icons/thumb-up.png"
          />
        </div>
      </div>

      <div class="apartment-photo__right">
        <OcImg
          class="apartment-photo__right-img"
          src="apartments/1399465201.jpg"
        />

        <h4 class="look-all">
          СМОТРЕТЬ ВСЕ ФОТО
        </h4>

        <div class="apartment-photo__maps">
          <yandex-map
            :coords="[45.009943, 35.118698]"
            zoom="12"
            ymap-class="apartment-photo__maps_yandex"
          />

          <div class="apartment-photo__maps_info">
            <p>Крым, г. Судак, ул. Ленина, 9А — на карте</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OcSwiper from '@/components/ocSwiper/index.vue'

export default {
  components: { OcSwiper },
  props: ['apartmentInfo1'],
  // data: () => ({
  //   // swiperInfo: {
  //   //   list: ['/apartments-day/894753838.jpg',
  //   //     '/apartments-day/1399465201.jpg',
  //   //     '/apartments-day/1759261812.jpg'],
  //   //   options: {} }
  //   // fffddd: [ 'asdf1', 'asdf2' ]
  // }),
  computed: {
    kitchen () { return ' · Кухня' },
    apartmentInfo2 () { return 'Полностью оборудованная кухня · Иван Иванов' },
    likeCount () { return 11 },
    swiperInfo () { return { list: ['/apartments-day/894753838.jpg', '/apartments-day/2446712885.jpg', '/apartments-day/1759261812.jpg'], options: { transition: true } } }
  }
}
</script>

<style src="./index.styl" lang="stylus" scoped>
