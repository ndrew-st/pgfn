<template>
  <div class="direction-page">
    <Full
      :title="header.title"
      :description="header.description"
      :background="header.background"
    />

    <FilterBlock />

    <!-- Направление -->
    <GroupCard
      v-show="direction && direction.items.length"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.count"
      title="Популярные направления"
      @changeTab="handlerTab('direction', $event)"
    >
      <ocCard
        v-for="(item, index) in direction.items"
        :key="item.name + item.address"
        kind="direction"
        :item="item"
        :is-liked="isLiked(index, 'direction')"
        @setLike="handlerLike(index, 'direction')"
      />
    </GroupCard>

    <!-- Жильё -->
    <GroupCard
      :count="apartments.count"
      :auto-width="true"
      :items="apartments.items"
      :tabs="apartments.tabs"
      title="Жильё"
      @changeTab="handlerTab('apartments', $event)"
    >
      <ocCard
        v-for="(item, index) in apartments.items"
        :key="item.name + item.address"
        kind="most"
        :item="item"
        type="housing"
        :is-liked="isLiked(index, 'apartments')"
        @setLike="handlerLike(index, 'apartments')"
      />
    </GroupCard>

    <SubscribeEmail class="direction-page__subscribe" />

    <!-- Услуги -->
    <GroupCard
      v-if="!isEmptyObj(services)"
      :count="services.count"
      :auto-width="true"
      :items="services.items"
      :tabs="services.tabs"
      title="Услуги"
      @changeTab="handlerTab('services', $event)"
    >
      <ocCard
        v-for="(item, index) in services.items"
        :key="item.name + item.address"
        kind="most"
        :item="item"
        type="services"
        :is-liked="isLiked(index, 'services')"
        @setLike="handlerLike(index, 'services')"
      />
    </GroupCard>

    <Description />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
