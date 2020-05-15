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
            alt="Логотип"
            class="header__logo"
          >
        </nuxt-link>

        <div class="header__geo header-geo">
          <OcDropDown>
            <template #button="{ show }">
              <button
                slot="button"
                type="button"
                class="header-geo__toggle"
                :class="{ 'active-geo-button': show }"
              >
                <OcIcon
                  class="header-geo__toggle--icon"
                  name="geo"
                />
                <span class="header-geo__toggle--text">{{ geoSearch }}</span>
              </button>
            </template>
            <OcSearchPanel
              slot="body"
              class="header-geo__content"
            />
          </OcDropDown>
        </div>

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
            <SearchInput
              side-icon="left"
              placeholder="Например отели с бассейном"
              @focus="focused = true"
              @blur="focused = false"
              @input="handlerSearch"
            />
            <button
              class="find-header__submit"
              :class="{ 'active-search-button': focused }"
            >
              <OcIcon
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
      <li
        v-for="item in mobileLinks"
        :key="item.title"
        class="mobile-controls__item"
      >
        <nuxt-link
          v-slot="{ href, route, navigate, isActive }"
          :to="item.link"
          class="mobile-controls__button"
        >
          <span>
            <OcIcon
              :class="[{ 'active-icon': isActive }, item.iconClass]"
              class="mobile-controls__button--icon"
              :name="item.icon"
            />
            <a
              :href="href"
              :class="{ 'active-link': isActive }"
              class="mobile-controls__button--link"
            >{{ item.title }}</a>
          </span>
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
