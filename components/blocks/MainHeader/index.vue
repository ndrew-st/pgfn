<template>
  <div class="header">
    <div
      v-if="!showForm"
      class="header__main-container"
    >
      <div class="header__container">
        <OcLink
          to="/"
          name="header-user"
          class="header__logo-link"
        >
          <OcImg
            src="/main-logo.svg"
            alt="Логотип"
            class="header__logo"
          />
        </OcLink>

        <div class="header__geo header-geo">
          <OcDropDown>
            <template #button="{ show }">
              <OcButton
                slot="button"
                :active="show"
                name="geo"
                icon="geo"
              >
                {{ geoSearch }}
              </OcButton>
            </template>

            <SearchPanel
              slot="body"
              class="header-geo__content"
            />
          </OcDropDown>
        </div>

        <div
          ref="searchContainer"
          class="header__find-container find-header"
        >
          <form
            class="find-header__form"
            @submit.prevent="handlerSubmit"
          >
            <OcInput
              v-model="search"
              icon="find"
              kind="search"
              class="find-header__input"
              icon-position="left"
              placeholder="Например отели с бассейном"
              @focusin="focused = true"
              @focusout="focused = false"
            />

            <OcButton
              class="find-header__submit"
              type="submit"
              :active="focused"
              name="search"
              icon="find"
            >
              Поиск
            </OcButton>
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
                  <OcButton
                    name="list"
                    @click="handlerClickResult(item.title)"
                  >
                    {{ item.title }}
                  </OcButton>
                </li>
              </ul>
              <p
                v-else-if="error"
                class="header-result__text"
              >
                <span class="header-result__text--bold">Ошибка поиска.</span>
                Повторите запрос или обратитесь к администратору.
              </p>
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
          <li class="header-controls__item">
            <OcDropDown>
              <OcButton
                slot="button"
                shape="oval"
              >
                Добавить
              </OcButton>
              <transition
                slot="body"
                name="fade"
              >
                <ul
                  v-if="list.length"
                  class="header-controls__select-list header-add"
                >
                  <li
                    v-for="item in list"
                    :key="item.id"
                    class="header-add__item"
                  >
                    <OcButton
                      name="list"
                      @click="goTo(item.url)"
                    >
                      {{ item.content }}
                    </OcButton>
                  </li>
                </ul>
              </transition>
            </OcDropDown>
          </li>
          <li class="header-controls__item">
            <OcLink
              to="/sign-in"
              name="header-user"
              icon="user"
            >
              Войти
            </OcLink>
            <!--            <nuxt-link-->
            <!--              v-else-->
            <!--              to="/profile"-->
            <!--              class="header-controls__link"-->
            <!--            >-->
            <!--            </nuxt-link>-->
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
        <OcLink
          :to="item.link"
          name="mobile-links"
          :icon="item.icon"
        >
          {{ item.title }}
        </OcLink>
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
