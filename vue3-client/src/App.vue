<template>
  <app-layout>
    <nav>
      <router-link class="text-blue-500" to="/">Home</router-link>
      <router-link class="text-blue-500" to="/login">Login</router-link>
      <router-link class="text-blue-500" to="/dashboard">Dashboard</router-link>
    </nav>
    <router-view />
  </app-layout>
</template>
<script>
export default {
  name: 'App'
}
</script>
