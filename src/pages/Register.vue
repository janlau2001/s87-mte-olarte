<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'
import AuthForm from '../components/AuthForm.vue'

const router = useRouter()
const error = ref('')

async function register(email, password) {
  error.value = ''
  if (password.length < 8) {
    error.value = 'Password must be at least 8 characters'
    return
  }

  try {
    await api.post('/users/register', { email, password })
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.error || 'Registration failed'
  }
}
</script>

<template>
  <AuthForm
    title="Register"
    button-text="Register"
    link-text="Have an account? Login"
    link-to="/login"
    :error="error"
    @submit="register"
  />
</template>
