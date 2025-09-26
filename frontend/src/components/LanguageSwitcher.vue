<template>
  <select v-model="$i18n.locale">
    <option value="en">🇬🇧English</option>
    <option value="fr">🇫🇷Français</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
  name: "LanguageSwitcher",
} );
</script>

<style scoped>

</style>
