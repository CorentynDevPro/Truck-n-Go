<script setup lang="ts">
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
</script>

<template>
  <div id="app">
    <img alt="Vue logo" class="logo vue" src="./assets/logo.png"/>
    <img alt="Vite logo" class="logo" src="/vite.svg"/>
    <LanguageSwitcher/>
    <h1>Vite + Vue 3 + TypeScript + i18n</h1>
    <p class="read-the-docs">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
