<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  buttonText: String,
  linkText: String,
  linkTo: String,
  error: String,
})
const emit = defineEmits(['submit'])

const email = ref('')
const password = ref('')
</script>

<template>
  <form class="card shadow-sm p-4" @submit.prevent="emit('submit', email, password)">
    <h2 class="h4 mb-3">{{ title }}</h2>
    <input v-model="email" class="form-control mb-3" type="email" placeholder="Email" required />
    <input v-model="password" class="form-control mb-3" type="password" placeholder="Password" required />
    <div v-if="error" class="alert alert-danger py-2">{{ error }}</div>
    <button class="btn btn-primary w-100 mb-3">{{ buttonText }}</button>
    <router-link class="text-center" :to="linkTo">{{ linkText }}</router-link>
  </form>
</template>
