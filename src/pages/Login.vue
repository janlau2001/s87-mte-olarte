<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'
import { useGlobalStore } from '../stores/global'
import AuthForm from '../components/AuthForm.vue'

const store = useGlobalStore()
const router = useRouter()
const error = ref('')

async function login(email, password) {
  error.value = ''
  try {
    const res = await api.post('/users/login', { email, password })
    store.setToken(res.data.access)
    router.push('/workouts')
  } catch (err) {
    error.value = err.response?.data?.error || 'Login failed'
  }
}
</script>

<template>
  <AuthForm
    title="Login"
    button-text="Login"
    link-text="No account? Register"
    link-to="/register"
    :error="error"
    @submit="login"
  />
</template>
