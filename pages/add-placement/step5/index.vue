<template>
  <div class="ap-step5">
    <p class="add-placement__h">
      Размещение объявления
    </p>

    <p class="add-placement__h2 ap-step5__h2">
      Мебель
      <span class="add-placement__red-star">*</span>
    </p>

    <ul class="ap-step5__list">
      <li
        v-for="item in listFur"
        :key="item.value"
        class="ap-step5__item"
      >
        <OcRadio
          v-model="furniture"
          icon="circle-radio"
          name="furniture"
          kind="circle"
          :check-value="item.value"
          :label="item.label"
        />
      </li>
    </ul>

    <p class="add-placement__h2 ap-step5__h2">
      Ограничения
    </p>

    <ul class="ap-step5__list ap-step5__two-columns">
      <li
        v-for="item in listLimits"
        :key="item.value"
        class="ap-step5__item"
      >
        <OcCheckbox
          v-model="limits"
          kind="most"
          icon="check"
          :label="item.label"
          name="limits"
          :check-value="item.value"
        />
      </li>
    </ul>

    <CountBed />

    <p class="add-placement__h2 ap-step5__h2">
      Интернет
      <span class="add-placement__red-star">*</span>
    </p>

    <ul class="ap-step5__list">
      <li
        v-for="item in listInternet"
        :key="item.value"
        class="ap-step5__item"
      >
        <OcRadio
          v-model="internet"
          icon="circle-radio"
          name="internet"
          kind="circle"
          :check-value="item.value"
          :label="item.label"
        />
      </li>
    </ul>

    <p class="add-placement__h2 ap-step5__h2 add-placement__uppercase">
      Расскажите, какие Удобства вы можете предложить гостям
      <span class="add-placement__red-star">*</span>
    </p>

    <CheckBlock
      title-block="Специальная особенность"
      :list="specials"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Климатконтроль"
      :list="climate"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Тип отделки"
      :list="interior"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Комнаты"
      :list="rooms"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Технические удобства"
      :list="facilities"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Посуда"
      :list="dishes"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckBlock
      title-block="Средства гигиены"
      :list="hygiene"
      :red-star="false"
      class="add-placement__mt48 ap-step5__pb80"
    />

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="$emit('next')"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
