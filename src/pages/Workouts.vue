<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import WorkoutItem from '../components/WorkoutItem.vue'

const workouts = ref([])
const error = ref('')
const loading = ref(true)

async function getWorkouts() {
  try {
    const res = await api.get('/workouts/getMyWorkouts')
    workouts.value = res.data.workouts
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to load workouts'
  } finally {
    loading.value = false
  }
}

async function completeWorkout(id) {
  try {
    await api.patch(`/workouts/completeWorkoutStatus/${id}`)
    getWorkouts()
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to update workout'
  }
}

async function deleteWorkout(id) {
  try {
    await api.delete(`/workouts/deleteWorkout/${id}`)
    getWorkouts()
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to delete workout'
  }
}

onMounted(getWorkouts)
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="h4 mb-0">My Workouts</h2>
      <router-link class="btn btn-primary btn-sm" to="/addWorkouts">+ Add Workout</router-link>
    </div>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary"></div>
    </div>
    <p v-else-if="!workouts.length" class="text-muted text-center">No workouts yet.</p>

    <div class="list-group shadow-sm">
      <WorkoutItem
        v-for="w in workouts"
        :key="w._id"
        :workout="w"
        @complete="completeWorkout"
        @delete="deleteWorkout"
      />
    </div>
  </div>
</template>
