<template>
  <div class="ap-step5">
    <p class="add-placement__h mb12">
      Желаемые особенности дома и территории
    </p>

    <p class="hab-request__you-can">
      Эти пункты не обязательны к заполнению, но помогут сделать заявку более точной
    </p>

    <CheckboxesList
      title-block="Специальная особенность"
      :list="specials"
      store="request"
      :red-star="false"
      class="add-placement__mt48"
    />

    <CheckboxesList
      title-block="Парковка"
      :list="parking"
      store="request"
      :red-star="false"
      class="add-placement__mt48"
    />

    <ApFolding
      caption="указать Больше особенностей"
      class="ap-step5__folding-block"
    >
      <CheckboxesList
        title-block="Этаж"
        :list="floors"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Лифты"
        :list="elevators"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Дворовая территория"
        :list="yardArea"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Материал дома/таунхауса"
        :list="material"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <p class="add-placement__p">
        Год постройки дома
      </p>

      <span class="mr8">От</span>

      <ApInput
        v-model="yearOfBuildStart"
        class="req-step5__input-year"
        type="number"
      />

      <span class="req-step5__span-year">год</span>

      <span class="req-step5__span-to">До</span>

      <ApInput
        v-model="yearOfBuildEnd"
        class="req-step5__input-year"
        type="number"
      />

      <span class="req-step5__span-year">год</span>
    </ApFolding>

    <ApButton
      name="red"
      @click.native="next"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
