<template>
  <div
    class="full-block"
    :style="{ 'background-image': `url(${background})` }"
  >
    <!-- <img
      :src="background"
      :width="2400"
      :height="1600"
      class="full-block__bg-image"
      :alt="title"
    > -->

    <div class="full-block__container">
      <h2 class="full-block__title">
        {{ title }}
      </h2>

      <div
        class="full-block__description"
        v-html="description"
      />
      <!--      <FeaturePlace-->
      <!--        class="full-block__features"-->
      <!--        :temperature="features.temp"-->
      <!--        :water-temperature="features.waterTemp"-->
      <!--        :count="features.current"-->
      <!--      />-->

      <div
        v-if="description2 !== ''"
        class="full-block__description2"
      >
        {{ description2 }}
      </div>

      <div
        v-if="buttons !== ''"
        class="full-block__buttons"
      >
        <button
          v-if="buttons === 'rent'"
          class="full-block__rent-in"
          @click="$router.push('/add-request')"
        >
          Снять жильё
        </button>

        <button
          v-if="buttons === 'rent'"
          class="full-block__rent-out"
          @click="$router.push('/add-placement')"
        >
          Сдать жильё
        </button>

        <!-- <button
          v-if="buttons === 'request'"
          class="full-block__add-request"
          @click="$store.commit('popup/showPopup', 'addRequest')"
        >
          Подать заявку
        </button> -->

        <div
          v-if="buttons === 'request'"
          class="full-block__buttons"
        >
          <button
            class="full-block__rent-in full-block__catalog-btn"
            @click="$router.push('/housing/supply')"
          >
            Каталог жилья
          </button>

          <OcButton
            name="most"
            color="red"
            class="full-block__add-btn"
            @click="$router.push('/add-request')"
          >
            Разместить заявку
          </OcButton>
        </div>

        <div
          v-if="buttons === 'catalog'"
          class="full-block__buttons"
        >
          <button
            class="full-block__rent-in full-block__catalog-btn"
            @click="$router.push('/housing/demand')"
          >
            Каталог заявок
          </button>

          <OcButton
            name="most"
            color="red"
            class="full-block__add-btn"
            @click="$router.push('/add-placement')"
          >
            Добавить объект
          </OcButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
