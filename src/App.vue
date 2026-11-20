<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="container py-4" style="max-width: 600px">
    <router-view />
  </main>
</template>
