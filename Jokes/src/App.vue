<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/jokes">Favorite Jokes</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

</style>
