<template>
  <div class="housing-content">
    <!-- Жильё -->
    <GroupCard
      v-if="apartments && apartments.length"
      to="/housing/supply"
      :count="apartments.length"
      :auto-width="true"
      class="housing-content__group-card"
      :items="apartments"
      :tabs="apartments.tabs"
      title="Жильё"
      name="apartments"
    >
      <OcCard
        v-for="(item, index) in apartments"
        :key="item._id"
        kind="most"
        :item="item"
        type="housing"
        :is-liked="isLiked(index, 'apartments')"
        @setLike="handlerLike(index, 'apartments')"
      />
    </GroupCard>

    <!-- Спрос -->
    <GroupCard
      v-if="request && request.length"
      to="/housing/demand"
      :count="request.length"
      :auto-width="true"
      class="housing-content__group-card"
      :items="request"
      :tabs="request.tabs"
      title="Спрос жилья"
      name="request"
    >
      <OcCard
        v-for="(item, index) in request"
        :key="item._id"
        kind="maps"
        :item="item"
        :is-liked="isLiked(index, 'apartments')"
        @setLike="handlerLike(index, 'apartments')"
      />
    </GroupCard>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
