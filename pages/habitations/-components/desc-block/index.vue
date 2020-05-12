<template>
  <div class="desc-block">
    <div class="left-col">
      <p class="h1">
        {{ info.desc1 }}
      </p>

      <p class="desc2">
        {{ info.desc2 }}
      </p>

      <p class="more">
        Читать далее
      </p>
    </div>

    <div class="name-icon">
      {{ info.initials }}
      <div
        v-if="info.online"
        class="online-status"
      />
    </div>

    <div class="right-col">
      <div class="flex">
        <p class="name">
          {{ info.owner }}
        </p>

        <p class="last-seen">
          {{ info.lastSeen }}
        </p>
      </div>

      <p class="owner-status">
        {{ info.ownerStatus }}
      </p>

      <div class="flex mt24">
        <span>Языки: </span>

        <span class="languages"> {{ info.languages }}</span>
      </div>

      <p class="reg-date">
        {{ info.regDate }}
      </p>

      <button
        class="connect"
        @click="connect()"
      >
        Связаться
      </button>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js"/>
