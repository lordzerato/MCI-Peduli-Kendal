<script setup>
import AccountCards from '../components/AccountCards.vue'
import JoinCta from '../components/JoinCta.vue'
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Donasi</p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl">Rekening Donasi</h1>
    <p class="mt-4 max-w-2xl text-lg text-gray-700">Transfer melalui rekening kesayangan Anda. Kami menerima donasi melalui berbagai bank dan dompet digital.</p>
    <div class="mt-10">
      <AccountCards />
    </div>
  </main>
  <JoinCta />
</template>
