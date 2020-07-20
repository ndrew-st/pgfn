<template>
  <div class="req-step3">
    <p class="add-placement__h mb12">
      Нужные удобства в жилье
    </p>

    <p class="hab-request__you-can">
      Эти пункты не обязательны к заполнению, но помогут сделать заявку более точной
    </p>

    <CheckboxesList
      title-block="Мебель"
      :red-star="false"
      :list="listFur"
      class="req-step3__furniture"
    />

    <CheckboxesList
      title-block="Ванная и душевая"
      :red-star="false"
      :list="listInternet"
      class="req-step3__furniture"
    />

    <CheckboxesList
      title-block="Особые удобства"
      :red-star="false"
      :list="specials"
      class="mt36"
    />

    <ApFolding
      caption="указать Больше удобств"
      class="req-step3__folding-block"
    >
      <CheckboxesList
        title-block="Климатконтроль"
        :list="climate"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Тип отделки"
        :list="interior"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Комнаты"
        :list="rooms"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Технические удобства"
        :list="facilities"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Посуда"
        :list="dishes"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Средства гигиены"
        :list="hygiene"
        :red-star="false"
        class="add-placement__mt48 req-step3__pb80"
      />
    </ApFolding>

    <ApButton
      name="red"
      @click.native="$emit('next')"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
