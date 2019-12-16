<template>
  <div
    v-if="active"
    class="main-menu"
  >
    <div
      v-if="bigger"
      class="main-menu__list"
    >
      <template
        v-for="(item, index) of menuItems"
      >
        <div
          v-if="item.type == 'separator'"
          :key="index"
          class="main-menu__list-separator"
        ></div>

        <router-link
          v-else
          :key="index"
          class="main-menu__item"
          :to="item.link"
        >
          <div class="main-menu__item_icon-wrapper">
            <OcIcon
              class="main-menu__item_icon"
              :type="item.icon.type"
              :outline="item.icon.outline"
              :icon="item.icon.icon"
            />
          </div>

          <div class="main-menu__item_title">
            {{ item.title }}
          </div>
        </router-link>
      </template>
    </div>

    <div
      v-if="smaller"
      class="main-menu__list main-menu__list_small"
    >
      <router-link
          v-for="(item, index) of menuItems"
          :key="index"
          class="main-menu__item"
          :to="item.link"
        >
          <div class="main-menu__item_icon-wrapper">
            <OcIcon
              class="main-menu__item_icon"
              :type="item.icon.type"
              :outline="item.icon.outline"
              :icon="item.icon.icon"
            />
          </div>

          <div class="main-menu__item_title">
            {{ item.title }}
          </div>
        </router-link>
    </div>

    <div
      v-if="bigger"
      class="main-menu__footer"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuType: {
      type: String,
      default: 'full'
    },
    active: {
      type: Boolean,
      default: true
    },
    menuItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    smaller () {
      return this.menuType === 'small'
    },
    bigger () {
      return this.menuType === 'full'
    }
  }
}
</script>

<style lang="stylus" src="./index.styl"></style>
