<template>
  <div class="apartments-page">
    <div class="apartments-page__container">
      <div class="apartments-page__title-container">
        <h1 class="apartments-page__title">
          Жильё
        </h1>
        <span class="apartments-page__count">200</span>
      </div>
      <Filters
        class="apartments-page__filters"
      />
      <div class="apartments-page__content" />
      <!--      <ul class="apartments-page__list">-->
      <!--        <li-->
      <!--          v-for="item in result.items"-->
      <!--          :key="item.id"-->
      <!--          class="apartments-page__item"-->
      <!--        >-->
      <!--          <ocCardItem-->
      <!--            type="housing"-->
      <!--            :item="item"-->
      <!--            :is-liked="false"-->
      <!--            @setLike="handlerLike(item.id, 'apartments')"-->
      <!--          />-->
      <!--        </li>-->
      <!--      </ul>-->
      <ocPaginate
        :current="currentPage"
        :total="items.length"
        :per-page="perPage"
        class="apartments-page__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
