<template>
  <div class="h-20 bg-white flex items-center justify-between">
    <div>
      <the-logo />
      <router-link class="" to="/">Home</router-link>
      <router-link class="" to="/">Home</router-link>
      <router-link class="" to="/">Home</router-link>
    </div>
    <nav>
      <router-link class="" to="/login">Login</router-link>
      <router-link class="" to="/dashboard">Try Notion free</router-link>
    </nav>
  </div>
</template>
<script>
import TheLogo from '@/components/TheLogo.vue'
export default {
  name: 'TheNav',
  components: {
    TheLogo
  }
}
</script>
