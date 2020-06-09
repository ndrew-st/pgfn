<template>
  <div>
    <div class="flex">
      <div>
        <OcInput
          v-model="password"
          kind="most"
          class="pass"
          type="password"
          placeholder="Пароль"
          :error="error.length"
          @input="change"
          @keyup.enter="next()"
        />

        <p
          v-if="error !== ''"
          class="red-p"
        >
          {{ error }}
        </p>
      </div>

      <button
        class="btn"
        :class="{ active: password.length > 5, sp: error !== '' }"
        @click="next"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
