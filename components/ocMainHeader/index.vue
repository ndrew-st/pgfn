<template>
  <div class="header">
    <div
      v-if="!showForm"
      class="header__main-container"
    >
      <div class="header__container">
        <nuxt-link
          to="/"
          class="header__logo-link"
        >
          <img
            src="/main-logo.svg"
            width="120"
            height="36"
            alt="Логотип"
            class="header__logo"
          >
        </nuxt-link>

        <div
          ref="searchContainer"
          tabindex="0"
          class="header__find-container find-header"
          @blur.capture="touched = false"
        >
          <form
            class="find-header__form"
            @submit.prevent="handlerSubmit"
          >
            <SeachInput @input="handlerSearch" />
            <button class="find-header__submit">
              <Icon
                name="find"
                class="find-header__submit--icon"
              />
              <span class="find-header__submit--text">Поиск</span>
            </button>
          </form>

          <transition name="fade">
            <div
              v-if="touched"
              class="find-header__result-container header-result"
            >
              <ul
                v-if="result.length"
                class="header-result__list"
              >
                <li
                  v-for="item in result"
                  :key="item.id"
                  class="header-result__item"
                >
                  <button
                    type="button"
                    class="header-result__button"
                    @click="handlerSubmit(item.id)"
                  >
                    {{ item.content }}
                  </button>
                </li>
              </ul>
              <p
                v-else
                class="header-result__text"
              >
                <span class="header-result__text--bold">Ничего не найдено.</span>
                Попробуйте написать название по-другому или сократить запрос.
              </p>
            </div>
          </transition>
        </div>

        <ul class="header__list-link">
          <li class="header__list-item">
            <nuxt-link
              class="header__link"
              to="/housing"
            >
              Жильё
            </nuxt-link>
          </li>
          <li class="header__list-item">
            <nuxt-link
              class="header__link"
              to="/services"
            >
              Услуги
            </nuxt-link>
          </li>
        </ul>

        <ul class="header__controls header-controls">
          <li
            tabindex="0"
            class="header-controls__item"
            @blur.capture="show = false"
          >
            <button
              type="button"
              class="header-controls__button"
              @click.prevent="show = !show"
            >
              Добавить
            </button>
            <transition name="fade">
              <ul
                v-if="list.length && show"
                class="header-controls__select-list header-add"
              >
                <li
                  v-for="item in list"
                  :key="item.id"
                  class="header-add__item"
                >
                  <button
                    type="button"
                    class="header-add__button"
                    @click="addObject(item.id)"
                  >
                    {{ item.content }}
                  </button>
                </li>
              </ul>
            </transition>
          </li>
          <li class="header-controls__item">
            <nuxt-link
              to="/sign-in"
              class="header-controls__link"
            >
              Войти
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <ul class="header__mobile-controls mobile-controls">
      <li class="mobile-controls__item">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          to="/search"
          class="mobile-controls__button"
        >
          <Icon
            :class="{ 'active-icon': isActive }"
            class="mobile-controls__button--icon"
            name="find"
          />
          <a
            :href="href"
            :class="{ 'active-link': isActive }"
            class="mobile-controls__button--link"
          >Поиск</a>
        </nuxt-link>
      </li>
      <li class="mobile-controls__item">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          to="/bookmarks"
          class="mobile-controls__button"
        >
          <Icon
            :class="{ 'active-icon': isActive }"
            class="mobile-controls__button--icon icon-heart"
            name="heart"
          />
          <a
            :href="href"
            :class="{ 'active-link': isActive }"
            class="mobile-controls__button--link"
          >Закладки</a>
        </nuxt-link>
      </li>
      <li class="mobile-controls__item">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          to="/menu"
          class="mobile-controls__button"
        >
          <Icon
            :class="{ 'active-icon': isActive }"
            class="mobile-controls__button--icon icon-bag"
            name="bag"
          />
          <a
            :href="href"
            :class="{ 'active-link': isActive }"
            class="mobile-controls__button--link"
          >Меню</a>
        </nuxt-link>
      </li>
      <li class="mobile-controls__item">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          to="/add-object"
          class="mobile-controls__button"
        >
          <Icon
            :class="{ 'active-icon': isActive }"
            class="mobile-controls__button--icon"
            name="add"
          />
          <a
            :href="href"
            :class="{ 'active-link': isActive }"
            class="mobile-controls__button--link"
          >Добавить</a>
        </nuxt-link>
      </li>
      <li class="mobile-controls__item">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          to="/sign-in"
          class="mobile-controls__button"
        >
          <Icon
            :class="{ 'active-icon': isActive }"
            class="mobile-controls__button--icon"
            name="user"
          />
          <a
            :href="href"
            :class="{ 'active-link': isActive }"
            class="mobile-controls__button--link"
          >Вход</a>
        </nuxt-link>
      </li>
    </ul>

    <transition name="fade">
      <!-- <Form v-if="showForm && selectResult.length"/> -->
      <Form
        v-if="showForm"
        @closeModalMenu="closeModalMenu"
      />
    </transition>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
