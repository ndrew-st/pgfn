<template>
  <div class="desc-block">
    <Description
      class="left-col"
      :title="title"
      :description="description.content"
    />

    <div
      v-if="user"
      class="right-col"
    >
      <div class="desc-block-row">
        <div class="name-icon">
          {{ info.initials }}
          <div
            v-if="info.online"
            class="online-status"
          />
        </div>

        <div
          class="right-col"
        >
          <div class="flex">
            <p class="name">
              {{ user.name }}
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
        </div>
      </div>

      <OcButton
        name="most"
        class="connect"
        @click="connect()"
      >
        Связаться
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
