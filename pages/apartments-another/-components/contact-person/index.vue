<template>
  <div class="all-content">
    <div class="div-flex first-part">
      <OcImg
        class="avatar"
        src="/icons/ivan.png"
        alt="avatar"
      />

      <div>
        <div class="div-flex">
          <h3 class="name">
            {{ name }}
          </h3>

          <div class="online">
            {{ onlineStatus }}
          </div>
        </div>

        <div class="div-flex">
          <img
            class="flag"
            src="/icons/flag.png"
            alt="flag"
          >

          <div class="rating">
            4.2
          </div>

          <div class="pro">
            PRO
          </div>
        </div>
      </div>

      <button class="connect-button">
        <img
          class="img-button"
          src="/icons/mail.png"
        >
        Связаться
      </button>
    </div>

    <div class="second-part">
      <p>{{ languages }}</p>

      <br>

      <p>Апартаменты "{{ apartmentInfo1 }}" принимают гостей с OurCrimea.com с {{ startDate }}</p>

      <br>

      <p class="tech-info">
        <span class="grey166">№ {{ numberApartment }}</span>
        <OcImg
          class="icon-refresh"
          src="/icons/refresh.png"
        />

        <span class="grey166">{{ refreshDate }} 1723</span>

        <OcImg
          class="icon-eye"
          src="/icons/eye.png"
        />

        <span class="grey166">{{ numberOfViews }}</span>
      </p>

      <div class="div-flex">
        <div class="subscribe-button">
          <svg
            class="heart"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 350 305.5"
            enable-background="new 0 0 350 305.5"
            xml:space="preserve"
            style="fill: rgb(0, 0, 0);"
          >
            <g id="__id411_s0jk52huji">
              <path
                d="M256.158,29.167c35.68,0,64.703,29.048,64.6,65.021c-0.209,1.42-0.37,2.877-0.494,4.268l-0.599,9.139   c-0.654,2.995-1.851,6.746-3.901,11.512c-21.021,48.44-96.957,115.242-140.151,149.422   C142.78,242.153,72.09,182.131,41.689,132.095l-0.536-0.845l-0.408-0.574c-0.584-0.854-1.002-1.771-1.477-2.626l-1.438-2.644   l-0.251-0.574l-0.219-0.371c-1.448-2.701-2.787-5.459-4.159-9.114c-2.725-6.674-3.498-11.084-3.617-13.729l0.058-0.741l0.028-0.944   l0.062-1.31l-0.062-1.4c-0.066-1.41-0.224-2.772-0.446-4.368c0.584-35.2,29.37-63.745,64.732-63.745   c23.147,0,44.03,12.248,55.803,32.751l25.298,44.035L200.35,61.86C212.142,41.438,232.991,29.167,256.158,29.167 M256.158,0   c-34.863,0-64.923,19.202-81.129,47.396C158.803,19.192,128.771,0,93.918,0C42.06,0,0,42.041,0,93.908   c0,1.738,0.408,3.219,0.494,4.956c-0.028,0.65-0.143,1.344-0.143,1.995c0,7.912,2.118,16.429,5.735,25.435   c1.557,4.268,3.47,8.146,5.54,12.015c0.175,0.37,0.389,0.679,0.555,1.021c1.5,2.626,2.811,5.445,4.534,7.895   C60.189,218.95,175.352,305.5,175.352,305.5s134.278-99.121,167.091-174.716c0.114-0.223,0.228-0.545,0.342-0.797   c4.357-10.23,6.864-20.048,6.864-29.11l-0.398-0.028c0.237-2.354,0.75-4.548,0.75-6.94C350.029,42.041,308.016,0,256.158,0   L256.158,0z"
                style="fill: rgb(113, 64, 184);"
              />
            </g>
          </svg>

          <div class="subscribe-text">
            Подписаться
          </div>
        </div>

        <div class="complain-button">
          <OcImg
            class="exclamationMark"
            src="/icons/exclamationMark.png"
          />

          <div class="complain-text">
            Пожаловаться
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['apartmentInfo1', 'startDate', 'languages', 'numberApartment', 'refreshDate', 'numberOfViews'],
  computed: {
    name () { return 'Иван Иванов' },
    onlineStatus () { return 'Онлайн' }
  }
}
</script>

<style src="./index.styl" lang="stylus" scoped>
</style>
