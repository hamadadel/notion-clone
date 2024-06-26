<template>
  <app-layout>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <router-view />
  </app-layout>
</template>
<script>
export default {
  name: 'App'
}
</script>
