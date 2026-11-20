<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'

const router = useRouter()
const name = ref('')
const duration = ref('')
const error = ref('')

async function addWorkout() {
  error.value = ''
  try {
    await api.post('/workouts/addWorkout', { name: name.value, duration: duration.value })
    router.push('/workouts')
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to add workout'
  }
}
</script>

<template>
  <form class="card shadow-sm p-4" @submit.prevent="addWorkout">
    <h2 class="h4 mb-3">Add Workout</h2>
    <input v-model="name" class="form-control mb-3" placeholder="Workout name" required />
    <input v-model="duration" class="form-control mb-3" placeholder="Duration (e.g. 30 mins)" required />
    <div v-if="error" class="alert alert-danger py-2">{{ error }}</div>
    <div class="d-flex gap-2">
      <button class="btn btn-primary flex-grow-1">Add</button>
      <router-link class="btn btn-outline-secondary" to="/workouts">Cancel</router-link>
    </div>
  </form>
</template>
