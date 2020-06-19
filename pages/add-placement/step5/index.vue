<template>
  <div class="ap-step5">
    <p class="add-placement__h ap-step5__h">
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
        <OcCheckbox
          v-model="furniture"
          kind="most"
          icon="check"
          :label="item.label"
          name="furniture"
          :check-value="item.value"
        />
      </li>
    </ul>

    <!--    <ApRadio-->
    <!--      id="id1"-->
    <!--      name="radio1"-->
    <!--      value="Есть вся необходимая"-->
    <!--      label="Есть вся необходимая"-->
    <!--      class="ap-step5__radio add-placement__mt24"-->
    <!--    />-->

    <!--    <OcCheckbox-->
    <!--      label="туесок привяжи на поясок"-->
    <!--      check-value="instantBooking"-->
    <!--      @change="$emit('input', $event.target.value)"-->
    <!--    />-->

    <!--    <ApRadio-->
    <!--      id="id2"-->
    <!--      name="radio1"-->
    <!--      value="Частично есть"-->
    <!--      label="Частично есть"-->
    <!--      class="ap-step5__radio"-->
    <!--    />-->

    <!--    <ApRadio-->
    <!--      id="id3"-->
    <!--      name="radio1"-->
    <!--      value="Отсутствует"-->
    <!--      label="Отсутствует"-->
    <!--      class="ap-step5__radio"-->
    <!--    />-->

    <!--    <p class="add-placement__h2 ap-step5__h2">-->
    <!--      Ограничения-->
    <!--    </p>-->

    <p class="add-placement__h2 ap-step4__type-booking">
      Время для звонков
      <span class="add-placement__red-star">*</span>
    </p>

    <ul class="ap-step5__list">
      <li
        v-for="item in listTimeCall"
        :key="item.value"
        class="ap-step5__item"
      >
        <OcRadio
          v-model="timeCall"
          icon="circle-radio"
          name="time-call"
          kind="circle"
          :label="item.label"
          :check-value="item.value"
        />
      </li>
    </ul>

    <!--    <div class="ap-step4__radio-block">-->
    <!--      <div class="ap-step4__radio-item">-->
    <!--        <input-->
    <!--          id="fid-6"-->
    <!--          v-model="picked3"-->
    <!--          type="radio"-->
    <!--          name="radio3"-->
    <!--          class="ap-step2__radio"-->
    <!--          value="любое время"-->
    <!--        >-->

    <!--        <label-->
    <!--          class="ap-step2__label"-->
    <!--          for="fid-6"-->
    <!--        >Любое время и дни недели</label>-->
    <!--      </div>-->

    <!--      <div class="ap-step4__radio-item">-->
    <!--        <input-->
    <!--          id="fid-7"-->
    <!--          v-model="picked3"-->
    <!--          type="radio"-->
    <!--          name="radio3"-->
    <!--          class="ap-step2__radio"-->
    <!--          value="Любые дни с"-->
    <!--        >-->

    <!--        <label-->
    <!--          class="ap-step2__label"-->
    <!--          for="fid-7"-->
    <!--        >Любые дни с</label>-->
    <!--      </div>-->

    <!--      <div class="ap-step4__radio-item">-->
    <!--        <input-->
    <!--          id="fid-8"-->
    <!--          v-model="picked3"-->
    <!--          type="radio"-->
    <!--          name="radio3"-->
    <!--          class="ap-step2__radio"-->
    <!--          value="Выбранные дни"-->
    <!--        >-->

    <!--        <label-->
    <!--          id="fid-8"-->
    <!--          class="ap-step2__label"-->
    <!--        >Выбранные дни</label>-->
    <!--      </div>-->

    <!--          <div class="ap-step4__right-col">-->
    <p class="add-placement__h2 ap-step4__type-booking">
      Время заезда гостей/показа жилья
      <span class="add-placement__red-star">*</span>
    </p>

    <OcCheckbox
      v-model="starCheckbox"
      label="звезда чекбокс"
      kind="most"
      icon="check"
    />

    <!--        <ApRadio-->
    <!--          id="aasdf2"-->
    <!--          name="radio4"-->
    <!--          value="Любое время"-->
    <!--          label="Любое время и дни недели"-->
    <!--          class="ap-step4__radio-item ap-step4__radio"-->
    <!--        />-->

    <!--        <ApRadio-->
    <!--          id="aas3"-->
    <!--          name="radio4"-->
    <!--          value="Любые дни недели"-->
    <!--          label="Любые дни недели с"-->
    <!--          class="ap-step4__radio"-->
    <!--        />-->

    <!--        <ApRadio-->
    <!--          id="aas4"-->
    <!--          name="radio4"-->
    <!--          value="Выбранные дни"-->
    <!--          label="Выбранные дни"-->
    <!--          class="ap-step4__radio"-->
    <!--        />-->

    <!--        <p class="add-placement__h2 ap-step4__type-booking">-->
    <!--          Время выезда гостей-->
    <!--          <span class="add-placement__red-star">*</span>-->
    <!--        </p>-->

    <!--        <ApRadio-->
    <!--          id="aasdf2"-->
    <!--          name="radio4"-->
    <!--          value="Любое время"-->
    <!--          label="Любое время и дни недели"-->
    <!--          class="ap-step4__radio-item ap-step4__radio"-->
    <!--        />-->

    <!--        <ApRadio-->
    <!--          id="aas3"-->
    <!--          name="radio4"-->
    <!--          value="Любые дни недели"-->
    <!--          label="Любые дни недели с"-->
    <!--          class="ap-step4__radio"-->
    <!--        />-->

    <!--        <ApRadio-->
    <!--          id="aas4"-->
    <!--          name="radio4"-->
    <!--          value="Выбранные дни"-->
    <!--          label="Выбранные дни"-->
    <!--          class="ap-step4__radio"-->
    <!--        />-->
    <!--      </div>-->

    <!--      <ApButton-->
    <!--        v-if="selItem !== ''"-->
    <!--        name="red"-->
    <!--        @click.native="$emit('next')"-->
    <!--      >-->
    <!--        Продолжить-->
    <!--      </ApButton>-->
    <!--    </div>-->
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
