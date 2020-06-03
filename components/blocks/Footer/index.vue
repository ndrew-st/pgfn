<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__menu footer-menu">
        <ul class="footer-menu__types">
          <li
            v-for="type in menu"
            :key="type.title"
            class="footer-menu__type footer-menu-type"
          >
            <h3 class="footer-menu-type__title">
              {{ type.title }}
            </h3>
            <ul class="footer-menu-type__list">
              <li
                v-for="item in type.children"
                :key="item.title"
                class="footer-menu-type__item"
              >
                <nuxt-link
                  :to="item.url"
                  class="footer-menu-type__link"
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer__contacts footer-contacts">
        <a
          href="tel:+78006000322"
          class="footer-contacts__phone"
        >8 800 600-03-22</a>
        <ul class="footer-contacts__social-list">
          <li
            v-for="soc in social"
            :key="soc.title"
            class="footer-contacts__social"
          >
            <a
              :href="soc.url"
              target="_blank"
              class="footer-contacts__social-link"
            >
              <img
                :src="soc.src"
                :alt="soc.title"
                width="32"
                height="32"
                class="footer-contacts__social-img"
              >
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__pay footer-pay">
        <h3 class="footer-pay__title">
          Оплата онлайн
        </h3>
        <ul class="footer-pay__list">
          <li
            v-for="pay in payments"
            :key="pay.title"
            class="footer-pay__item"
          >
            <img
              :src="pay.src"
              :alt="pay.title"
              :width="pay.width"
              :height="pay.height"
              class="footer-pay__image"
            >
          </li>
        </ul>
      </div>
    </div>
    <p class="footer__author">
      © 2020 Personal.Guide Все права защищены
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
