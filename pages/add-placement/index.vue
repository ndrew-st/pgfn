<template>
  <div class="add-placement">
    <div class="add-placement__flex-sb">
      <div class="add-placement__flex">
        <svg
          class="add-placement__arrow"
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7L1 4L4 1"
            stroke="#989BA8"
          />
        </svg>

        <span class="add-placement__path">Главная страница  ·  Размещение объявления</span>
      </div>

      <div class="add-placement__flex">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.428 2.73424C19.1338 2.43951 18.6564 2.43901 18.3622 2.73299L9.31953 11.7518L6.05695 8.20834C5.77503 7.90233 5.29839 7.88248 4.99187 8.16436C4.68558 8.44627 4.66597 8.92315 4.94789 9.22944L8.74187 13.3498C8.88082 13.5008 9.07527 13.5885 9.28031 13.5928C9.28581 13.593 9.29113 13.593 9.2964 13.593C9.49566 13.593 9.68734 13.5139 9.82855 13.3731L19.4266 3.8003C19.7215 3.50635 19.722 3.02897 19.428 2.73424Z"
            fill="#3D88C8"
          />
          <path
            d="M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z"
            fill="#3D88C8"
          />
        </svg>

        <span class="add-placement__all-changes-saved">Все изменения сохранены</span>
      </div>
    </div>

    <StageBar :stage="'stage'+state" />

    <p class="add-placement__step">
      ШАГ {{ state }}/6
    </p>

    <component
      :is="'step'+state"
      @next="next"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
