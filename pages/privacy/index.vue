<template>
  <div class="privacy">
    <div class="privacy__container">
      <div class="privacy__content">
        <div class="privacy__header">
          <h2 class="privacy__title">
            Положение об обработке персональных данных
          </h2>
        </div>

        <div class="privacy__item">
          <h3 class="privacy__item-title">
            Общие положения
          </h3>
          <ul class="privacy__list">
            <li
              v-for="(item, index) in main.list"
              :key="index"
              class="privacy__unit item-privacy"
            >
              <template v-if="_isObject(item)">
                <span class="item-privacy__title">{{ item.title }}</span>
                <ul class="item-privacy__list">
                  <li
                    v-for="(it, index) in item.desc"
                    :key="index"
                    class="item-privacy__item"
                  >
                    {{ it }}
                  </li>
                </ul>
              </template>
              <template v-else>
                {{ item }}
              </template>
            </li>
          </ul>
        </div>

        <div class="privacy__item">
          <h3 class="privacy__item-title">
            Получение персональных данных
          </h3>

          <ul class="privacy__list">
            <li
              v-for="(item, index) in personal"
              :key="index"
              class="privacy__unit item-privacy"
            >
              <template v-if="_isObject(item)">
                <span class="item-privacy__title">{{ item.title }}</span>
                <ul class="item-privacy__list">
                  <li
                    v-for="(it, index) in item.desc"
                    :key="index"
                    class="item-privacy__item"
                  >
                    {{ it }}
                  </li>
                </ul>
                <p class="item-privacy__additional">
                  {{ item.addContent }}
                </p>
              </template>
              <template v-else>
                {{ item }}
              </template>
            </li>
          </ul>
        </div>

        <div class="privacy__item">
          <h3 class="privacy__item-title">
            Правила и порядок обработки персональных данных
          </h3>

          <p class="privacy__unit">
            {{ rules }}
          </p>
        </div>

        <div class="privacy__item">
          <h3 class="privacy__item-title">
            Прочие положения
          </h3>

          <ul class="privacy__list">
            <li
              v-for="(item, index) in another"
              :key="index"
              class="privacy__unit item-privacy"
            >
              <template v-if="_isObject(item)">
                <span class="item-privacy__title">{{ item.title }}</span>
                <ul class="item-privacy__list">
                  <li
                    v-for="(it, idx) in item.desc"
                    :key="idx"
                    class="item-privacy__item"
                  >
                    {{ it }}
                  </li>
                </ul>
                <p class="item-privacy__additional">
                  {{ item.addContent }}
                </p>
              </template>
              <template v-else>
                {{ item }}
              </template>
            </li>
          </ul>
        </div>

        <!--        <div class="privacy__footer">-->
        <!--          <p class="privacy__footer&#45;&#45;desc">-->
        <!--            Последнее обновление:-->
        <!--          </p>-->
        <!--          {{ months }} назад-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
