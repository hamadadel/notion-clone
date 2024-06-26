<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from './AuthLayout.vue'
import DashboardLayout from './DashboardLayout.vue'

export default {
  name: 'AppLayout',
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
      // return () => import('../layouts/' + layout + '.vue')
    }
  },
  components: {
    DefaultLayout,
    AuthLayout,
    DashboardLayout
  }
}
</script>
