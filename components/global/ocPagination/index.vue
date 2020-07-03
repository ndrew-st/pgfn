<template>
  <div class="pagination">
    <div class="pagination__left">
      <OcButton
        name="pagination"
        icon="pagination"
        add-class="prev"
        :disabled="!hasPrev()"
        @click="changePage(prevPage)"
      >
        prev
      </OcButton>
    </div>

    <div class="pagination__mid">
      <ul>
        <li v-if="hasFirst()">
          <a
            href="#"
            @click.prevent="changePage(1)"
          >1</a>
        </li>
        <li v-if="hasFirst()">
          ...
        </li>
        <li
          v-for="page in pages"
          :key="page"
        >
          <a
            :class="{ current: current === page }"
            href="#"
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </li>
        <li v-if="hasLast()">
          ...
        </li>
        <li v-if="hasLast()">
          <a
            href="#"
            @click.prevent="changePage(totalPages)"
          >{{ totalPages }}</a>
        </li>
      </ul>
    </div>

    <div class="pagination__right">
      <OcButton
        name="pagination"
        icon="pagination"
        add-class="next"
        :disabled="!hasNext()"
        @click="changePage(nextPage)"
      >
        next
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
