<template>
  <div class="container">
    <div class="container__intro">
      Эти пункты не обязательны к заполнению, но помогут сделать заявку более точной
    </div>

    <div class="container__dropdown">
      <OcDropDown>
        <OcButton
          slot="button"
          name="border"
          class="container__button"
        >
          <p class="container__button--text">
            {{ buttonText }}
            <span class="container__button--required">*</span>
          </p>
        </OcButton>

        <OcSelectList
          slot="body"
          :content="list"
          class="container__content"
          @input="change"
        />
      </OcDropDown>
    </div>

    <FromTo
      title="Площадь жилья"
      label-from="от"
      type="number"
      class="container__from-to"
      label-to="до"
      measure="m&sup3;"
      @input="changeInput"
    />

    <ul class="container__list">
      <li
        v-for="item in content"
        :key="item.groupName"
        class="container__item"
      >
        <CheckList
          :content="item"
          type="radio"
          kind="circle-radio"
          @input="select"
        />
      </li>
    </ul>

    <div class="container__mb">
      <Select
        v-model="selectVal"
        label="label"
        name="label-group-name"
        :list="numbers"
      />
    </div>

    <div class="container__mb">
      <CountBed />
    </div>

    <div class="container__mb">
      <TitleMore>
        content
      </TitleMore>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
