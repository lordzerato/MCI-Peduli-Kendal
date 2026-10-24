<script setup>
import { address, contact } from '../data'
import { WHATSAPP } from '../utils'
import JoinCta from '../components/JoinCta.vue'
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Kontak</p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl">Kontak Kami</h1>
    <p class="mt-4 max-w-2xl text-lg text-gray-700">Kami siap membantu Anda dengan pertanyaan atau informasi lebih lanjut. Hubungi kami melalui email, telepon, atau media sosial.</p>

    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <section class="rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
        <h2 class="font-semibold text-gray-900">Jam Operasional</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="row in contact.hours" :key="row.day" class="flex items-center justify-between gap-4 border-b border-gray-100 pb-3 text-sm last:border-0">
            <span class="text-gray-700">{{ row.day }}</span>
            <span class="font-medium text-gray-900">{{ row.time }}</span>
          </li>
        </ul>
      </section>
      <section class="space-y-4 rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
        <div>
          <h2 class="font-semibold text-gray-900">Alamat</h2>
          <a :href="address.href" target="_blank" rel="noopener" class="mt-2 block text-gray-700 hover:text-primary">{{ address.text }}</a>
        </div>
        <div>
          <h2 class="font-semibold text-gray-900">WhatsApp</h2>
          <a :href="WHATSAPP" target="_blank" rel="noopener" class="mt-2 block text-gray-700 hover:text-primary">{{ contact.phone }}</a>
        </div>
        <div>
          <h2 class="font-semibold text-gray-900">Email</h2>
          <a :href="`mailto:${contact.email}`" class="mt-2 block text-gray-700 hover:text-primary">{{ contact.email }}</a>
        </div>
      </section>
    </div>
  </main>
  <JoinCta />
</template>
