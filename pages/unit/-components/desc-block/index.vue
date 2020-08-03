<template>
  <div class="desc-block">
    <client-only>
      <div class="desc-block__container">
        <Description
          class="left-col"
          :title="title"
          :description="description.content"
        />
        <div
          v-if="typeOfTenant && typeOfTenant.length"
          class="desc-block__rental-source rental-source"
        >
          <h3 class="rental-source__title">
            Источник аренды
          </h3>

          <div class="rental-source__content rental-content">
            <p class="rental-source__title">
              Собственник/арендодатель:&nbsp;
            </p>

            <ul class="rental-content__list">
              <li
                v-for="(item, index) in owner"
                :key="item"
                class="rental-content__item"
              >
                {{ constTenant[item] }}
                <span v-if="index < owner.length - 1">
                  ,&nbsp;
                </span>
                <span v-else>
                  .&nbsp;
                </span>
              </li>
            </ul>
          </div>

          <div class="rental-source__content rental-content">
            <p class="rental-source__title">
              Посредник:&nbsp;
            </p>

            <ul class="rental-content__list">
              <li
                v-for="(item, index) in mediator"
                :key="item"
                class="rental-content__item"
              >
                {{ constTenant[item] }}
                <span v-if="index < mediator.length - 1">
                  ,&nbsp;
                </span>
                <span v-else>
                  .&nbsp;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

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

          <div class="right-col right-col-name">
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
        >
          Связаться
        </OcButton>
      </div>
    </client-only>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
