<template>
  <div class="h-screen max-w-screen-xl bg-blue-300 mx-auto">
    <the-nav />
    <slot />
  </div>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheNav
  }
}
</script>
