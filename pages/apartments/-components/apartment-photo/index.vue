<template>
  <div class="apartment-photo">
    <div class="apartment-photo__left">
      <OcImg
        class="apartment-photo__left-img"
        src="apartments/894753838.jpg"
      />

      <div class="arrow-box__left">
        <div class="arrow-box__left__inner">
          <svg
            class="arrow-box__left__inner__svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 300 186.262"
            enable-background="new 0 0 300 186.262"
            xml:space="preserve"
            style="fill: rgb(0, 0, 0);"
          >
            <g id="__id386_sixooxn8n">
              <polygon
                points="0,37.608 150.629,186.261 300,37.549 262.721,0.045 150.501,111.778 37.189,0  "
                style="fill: rgb(166, 166, 166);"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="arrow-box__right">
        <div class="arrow-box__right__inner">
          <svg
            class="arrow-box__right__inner__svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 300 186.262"
            enable-background="new 0 0 300 186.262"
            xml:space="preserve"
            style="fill: rgb(0, 0, 0);"
          >
            <g id="__id386_sixooxn8n">
              <polygon
                points="0,37.608 150.629,186.261 300,37.549 262.721,0.045 150.501,111.778 37.189,0  "
                style="fill: rgb(166, 166, 166);"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="info-block">
        <p class="ap-info1">{{ apartmentInfo1 }}{{ kitchen }}</p>

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
</template>

<script>
export default {
  props: ['apartmentInfo1'],
  computed: {
    kitchen () { return ' · Кухня' },
    apartmentInfo2 () { return 'Полностью оборудованная кухня · Иван Иванов' },
    likeCount () { return 11 }
  }
}
</script>

<style src="./index.styl" lang="stylus">
