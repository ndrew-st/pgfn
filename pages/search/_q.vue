<template>
  <div class="search-page">
    <div class="search-page__container">
      <!-- v-if="result.length" -->
      <div class="search-page__show-container">
        <div
          class="search-page__title-container"
        >
          <h2 class="search-page__title">
            Результат по запросу «{{ query }}»
          </h2>
          <span class="search-page__count-result">244</span>
        </div>

        <FilterBlock
          class="search-page__filter"
          @changeTab="changeTab"
        />

        <!-- <div class="search-page__content search-content">
          <ul
            class="search-content__list">
            <li
              v-for="card in result"
              :key="card.id"
              class="search-content__item">
              {{ card }}
            </li>
          </ul>
        </div> -->
      </div>

      <!-- <div
        class="search-page__content search-page__content--empty">
        <h2 class="search-page__content--title">Ничего не найдено</h2>
        <p class="search-page__content--text">Попробуйте написать название по-другому или сократить запрос.</p>
      </div> -->

      <!-- v-if="result.length >= 16" -->
      <OcPagination
        :current="currentPage"
        :total="totalPhotos"
        :per-page="perPage"
        class="search-page__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
