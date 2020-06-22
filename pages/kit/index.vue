<template>
  <div>
    <h1>OcButton</h1>

    <p>name: "" (empty)</p>

    <OcButton>
      Название кнопки
    </OcButton>

    <p>name: border</p>

    <OcButton name="border">
      Название кнопки
    </OcButton>

    <p>name: carousel</p>

    <OcButton name="carousel">
      Название кнопки
    </OcButton>
    <p>name: counter</p>

    <OcButton name="counter">
      Название кнопки
    </OcButton>

    <p>name: filter</p>

    <OcButton name="filter">
      Название кнопки
    </OcButton>

    <p>name: filter-old</p>

    <OcButton name="filter-old">
      Название кнопки
    </OcButton>

    <p>name: geo</p>

    <OcButton name="geo">
      Название кнопки
    </OcButton>

    <p>name: list</p>

    <OcButton name="list">
      Название кнопки
    </OcButton>

    <p>name: most</p>

    <OcButton name="most">
      Название кнопки
    </OcButton>

    <p>name: pagination</p>

    <OcButton name="pagination">
      Название кнопки
    </OcButton>

    <p>name: search</p>

    <OcButton name="search">
      Название кнопки
    </OcButton>

    <p>name: transparent</p>

    <OcButton name="transparent">
      Название кнопки
    </OcButton>

    <h1>ocInput</h1>

    <p>kind: "" (empty)</p>

    <OcInput />

    <p>kind: checkbox-filter</p>

    <OcInput
      kind="checkbox-filter"
      type="checkbox"
    />

    <p>kind: checkbox</p>

    <OcInput
      kind="checkbox"
      type="checkbox"
    />

    <p>kind: checkbox-filter</p>

    <OcInput
      kind="checkbox-filter"
      type="checkbox"
    />

    <p>kind: circle-radio</p>

    <OcInput
      v-model="circleRadioCurrent"
      type="radio"
      icon="circle-radio"
      icon-position="left"
      name="tariff"
      kind="circle-radio"
      check-value="Значение1"
      label="Лэйбл значения 1"
      add-desc="Описание 1"
    />

    <OcInput
      v-model="circleRadioCurrent"
      type="radio"
      icon="circle-radio"
      icon-position="left"
      name="tariff"
      kind="circle-radio"
      check-value="Значение2"
      label="Лэйбл значения 2"
      add-desc="Описание 2"
    />

    <OcInput
      v-model="circleRadioCurrent"
      type="radio"
      icon="circle-radio"
      icon-position="left"
      name="tariff"
      kind="circle-radio"
      check-value="Значение3"
      label="Лэйбл значения 3 (без add-desc)"
    />

    <OcInput
      v-model="circleRadioCurrent"
      type="radio"
      icon="circle-radio"
      icon-position="left"
      name="tariff"
      kind="circle-radio"
      check-value="Значение4"
      label="Лэйбл значения 4 (с ошибкой)"
      error="потрачено"
    />

    <p>kind: date</p>

    <OcInput kind="date" />

    <p>kind: group-radio</p>

    <OcInput
      kind="group-radio"
      type="radio"
    />

    <p>kind: search-radio</p>

    <OcInput
      kind="search-radio"
      type="radio"
    />

    <p>kind: search</p>

    <OcInput kind="search" />

    <p>kind: toggle</p>

    <OcInput kind="toggle" />

    <button @click="createUser()">
      Создать юзера Василия
    </button>

    <button @click="loginVasya()">
      Зайти под Василием
    </button>
  </div>
</template>

<script src="./index.js" />
