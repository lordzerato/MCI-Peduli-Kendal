<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
  <WhatsAppFloat />
</template>
