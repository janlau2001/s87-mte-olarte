<script setup>
defineProps({ workout: Object })
defineEmits(['complete', 'delete'])
</script>

<template>
  <div class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <h6 class="mb-1">
        {{ workout.name }}
        <span
          class="badge ms-1"
          :class="workout.status === 'completed' ? 'bg-success' : 'bg-warning text-dark'"
        >{{ workout.status }}</span>
      </h6>
      <small class="text-muted">
        {{ workout.duration }} · {{ new Date(workout.dateAdded).toLocaleDateString() }}
      </small>
    </div>
    <div class="btn-group btn-group-sm">
      <button
        v-if="workout.status !== 'completed'"
        class="btn btn-outline-success"
        @click="$emit('complete', workout._id)"
      >Complete</button>
      <button class="btn btn-outline-danger" @click="$emit('delete', workout._id)">Delete</button>
    </div>
  </div>
</template>
