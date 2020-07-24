<template>
  <div class="direction-page">
    <Full
      :title="header.title"
      :description="header.description"
      :background="header.background"
      buttons="rent"
    />

    <!-- <FilterBlock /> -->

    <!-- Направление -->
    <!--    <GroupCard-->
    <!--      v-if="direction"-->
    <!--      :tabs="direction.tabs"-->
    <!--      :items="direction.items"-->
    <!--      :count="direction.count"-->
    <!--      name="direction"-->
    <!--      title="Популярные направления"-->
    <!--    >-->
    <!--      <OcCard-->
    <!--        v-for="(item, index) in direction.items"-->
    <!--        :key="item.name + item.address"-->
    <!--        kind="direction"-->
    <!--        :item="item"-->
    <!--        :is-liked="isLiked(index, 'direction')"-->
    <!--        @setLike="handlerLike(index, 'direction')"-->
    <!--      />-->
    <!--    </GroupCard>-->

    <!-- Жильё -->
    <GroupCard
      v-if="apartments && apartments.length"
      to="/housing/supply"
      :count="apartments.length"
      :auto-width="true"
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

    <Full
      title="Разместите заявку на аренду жилья"
      description="Сообщите желаемое расположение, тип жилья, число спальных мест, период аренды, укажите справедливую цену и получайте предложения от арендодателей."
      background="http://31.31.198.184/plesk-site-preview/test.personal.guide/https/31.31.198.184/apart-01.jpg"
      buttons="request"
      @showRequest="showRequest"
    />

    <!-- Спрос -->
    <GroupCard
      v-if="request && request.length"
      to="/housing/demand"
      :count="request.length"
      :auto-width="true"
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

    <Full
      title="Зарабатывайте на аренде жилья"
      description="Сдавайте своё жильё без размещения объявления и договаривайтесь о цене лично с каждым арендатором."
      background="http://31.31.198.184/plesk-site-preview/test.personal.guide/https/31.31.198.184/111.png"
      buttons="catalog"
    />

    <SubscribeEmail class="direction-page__subscribe" />

    <!-- Услуги -->
    <!--    <GroupCard-->
    <!--      v-if="!isEmptyObj(services)"-->
    <!--      :count="services.count"-->
    <!--      :auto-width="true"-->
    <!--      :items="services.items"-->
    <!--      :tabs="services.tabs"-->
    <!--      title="Услуги"-->
    <!--      name="services"-->
    <!--    >-->
    <!--      <OcCard-->
    <!--        v-for="(item, index) in services.items"-->
    <!--        :key="item.name + item.address"-->
    <!--        kind="most"-->
    <!--        :item="item"-->
    <!--        type="services"-->
    <!--        :is-liked="isLiked(index, 'services')"-->
    <!--        @setLike="handlerLike(index, 'services')"-->
    <!--      />-->
    <!--    </GroupCard>-->

    <Description
      v-if="description"
      class="direction-page__description"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
