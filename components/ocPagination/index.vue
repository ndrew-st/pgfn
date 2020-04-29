<template>
  <div class="pagination">
    <div class="pagination__left">
      <!-- v-if="hasPrev()" -->
        <a
          @click.prevent="changePage(prevPage)"
          href="#">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 7L2 7"
              stroke="#272528"
              stroke-linecap="round"/>
            <path
              d="M8 13L2 7L8 1"
              stroke="#272528"
              stroke-linecap="round"/>
          </svg>
        </a>
      </div>
      <div class="pagination__mid">
        <ul>
          <li v-if="hasFirst()"><a
            @click.prevent="changePage(1)"
            href="#">1</a></li>
          <li v-if="hasFirst()">...</li>
          <li
            v-for="page in pages"
            :key="page">
            <a
              @click.prevent="changePage(page)"
              :class="{ current: current == page }"
              href="#">
              {{ page }}
            </a>
          </li>
          <li v-if="hasLast()">...</li>
          <li v-if="hasLast()"><a
            @click.prevent="changePage(totalPages)"
            href="#">{{ totalPages }}</a></li>
        </ul>
      </div>
      <div class="pagination__right">
        <!--  v-if="hasNext()" -->
        <a
          @click.prevent="changePage(nextPage)"
          href="#">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 7L2 7"
              stroke="#272528"
              stroke-linecap="round"/>
            <path
              d="M8 13L2 7L8 1"
              stroke="#272528"
              stroke-linecap="round"/>
          </svg>
        </a>
      </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
