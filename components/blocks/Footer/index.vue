<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__menu footer-menu">
          <ul class="footer-menu__types">
            <li
              v-for="(type, index) in menu"
              :key="type.title"
              class="footer-menu__type footer-menu-type"
            >
              <p
                v-if="index === 0"
                class="footer__logo footer-logo"
              >
                <nuxt-link
                  to="/"
                  class="footer-logo__link"
                >
                  <img
                    src="/main-logo.svg"
                    width="186"
                    height="32"
                    alt="Логотип"
                    class="footer-logo__link--img"
                  >
                </nuxt-link>
              </p>

              <h3
                v-if="index !== 0"
                class="footer-menu-type__title"
              >
                {{ type.title }}
              </h3>

              <ul class="footer-menu-type__list">
                <li
                  v-for="item in type.children"
                  :key="item.title"
                  class="footer-menu-type__item"
                >
                  <OcLink
                    :to="item.url"
                    name="most"
                    class="footer-menu-type__link"
                  >
                    {{ item.title }}
                  </OcLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- <div>
              <h2 class="subscribe__title">
                Подписка на новости портала
              </h2>

              <form
                class="subscribe__form subscribe-form"
                @submit.prevent="handlerSubmit"
              >
                <OcInput
                  v-model="email"
                  type="email"
                  kind="most"
                  name="subsc"
                  required
                  class="subscribe-form__input"
                  placeholder="Ваш электронный адрес"
                />
                <OcButton
                  name="most"
                  color="red"
                  type="submit"
                  add-class="subs"
                  icon="arrow"
                >
                  Отправить
                </OcButton>
              </form>
            </div> -->

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
              <OcImg
                :src="pay.src"
                :alt="pay.title"
                :width="pay.width"
                :height="pay.height"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__author footer-author">
        <p class="footer-author__desc">
          © 2020 Personal.Guide
        </p>
        <ul class="footer-author__list">
          <li class="footer-author__item">
            <OcLink
              to="/privacy"
              name="footer"
            >
              Конфиденциальность
            </OcLink>
          </li>
          <li class="footer-author__item">
            <OcLink
              to="/"
              name="footer"
            >
              Условия
            </OcLink>
          </li>
          <li class="footer-author__item">
            <OcLink
              to="/"
              name="footer"
            >
              Карта сайта
            </OcLink>
          </li>
        </ul>
      </div>
      <div class="footer__contacts footer-contacts">
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
              <OcImg
                :src="soc.src"
                :alt="soc.title"
                :width="32"
                :height="32"
                class="footer-contacts__social-img"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
