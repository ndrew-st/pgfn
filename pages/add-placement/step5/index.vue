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
        <ApRadio
          :value="item.value"
          :checked="item.value === furniture"
          :label="item.label"
          @change="furniture = $event"
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
        <ApCheckbox :par-name="item.value">
          {{ item.label }}
        </ApCheckbox>
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
        <ApRadio
          :value="item.value"
          :checked="item.value === internet"
          :label="item.label"
          @change="internet = $event"
        />
      </li>
    </ul>

    <ApFolding
      caption="Расскажите, какие Удобства вы можете предложить гостям"
      class="ap-step5__folding-block"
    >
      <!-- <p class="add-placement__h2 ap-step5__h2 add-placement__uppercase">
        Расскажите, какие Удобства вы можете предложить гостям
        <span class="add-placement__red-star">*</span>
      </p> -->

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
    </ApFolding>

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="next()"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
