<template>
    <div class="group-cart">
        <div class="group-cart__title-container">
            <h2 class="group-cart__title">
                {{ title }}
            </h2>
            <span class="group-cart__count-articles">2445</span>
        </div>

        <div class="group-cart__checkboxes group-checkbox">
            <ul class="group-checkbox__list">
                <li
                    v-for="tab in tabs"
                    :key="tab.name"
                    class="group-checkbox__item">
                    <input
                        :id="tab.name"
                        @change="$emit('changeTab', tab.url)"
                        :value="tab.url"
                        v-model="tabSelect"
                        type="radio"
                        class="visually-hidden">
                    <label
                        :for="tab.name"
                        :class="{ checked: tabSelect === tab.url }"
                        class="group-checkbox__label">{{ tab.name }}</label>
                </li>
            </ul>
        </div>

        <div class="group-cart__slider-container">
            <ocCarousel
                :column="4"
                :items="items"
                :nav="true">
                <slot/>
            </ocCarousel>
        </div>
    </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"></style>
