<script setup>
import { useRouter } from 'vue-router'
import { useGlobalStore } from '../stores/global'

const store = useGlobalStore()
const router = useRouter()

function logout() {
  store.logout()
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand bg-dark navbar-dark">
    <div class="container">
      <span class="navbar-brand fw-bold">Fitness Tracker</span>
      <div class="navbar-nav ms-auto align-items-center">
        <template v-if="store.isLoggedIn">
          <router-link class="nav-link" to="/workouts">Workouts</router-link>
          <router-link class="nav-link" to="/addWorkouts">Add Workout</router-link>
          <button class="btn btn-outline-light btn-sm ms-2" @click="logout">Logout</button>
        </template>
        <template v-else>
          <router-link class="nav-link" to="/login">Login</router-link>
          <router-link class="nav-link" to="/register">Register</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>
