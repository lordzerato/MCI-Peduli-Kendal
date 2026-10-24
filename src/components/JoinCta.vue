<script setup>
import { asset, WHATSAPP } from '../utils'
</script>

<template>
  <div class="mt-20 mb-40 px-4 xl:px-0">
    <section class="mx-auto max-w-6xl">
      <div class="grid items-center gap-8 lg:grid-cols-6">
        <div class="lg:col-span-2">
          <h2 id="cta-title" class="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Bergabunglah bersama kami untuk membantu para mualaf
          </h2>
          <p class="mt-3 mb-8 text-base text-gray-600">
            Donasi Anda sangat berarti bagi para mualaf yang sedang belajar Islam. Dengan donasi Anda, kami dapat terus memberikan bimbingan dan pendampingan kepada para mualaf agar mereka dapat menjadi Muslim yang berakidah kuat dan berakhlak mulia.
          </p>
          <div class="flex flex-wrap gap-4">
            <RouterLink to="/donasi" class="inline-flex items-center justify-center rounded-sm border border-transparent bg-primary px-3 py-2 text-center font-medium whitespace-nowrap text-white shadow-xs">Bergabung</RouterLink>
            <a :href="WHATSAPP" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-surface px-3 py-2 text-center font-medium whitespace-nowrap text-gray-900 shadow-xs hover:bg-gray-50">Konsultasi</a>
          </div>
        </div>
        <div class="relative isolate rounded-xl sm:h-full lg:col-span-4">
          <img :src="asset('images/foto-bersama.webp')" alt="" class="absolute inset-0 -z-10 rounded-2xl blur-xl" />
          <img :src="asset('images/foto-bersama.webp')" alt="Foto anggota MCI Peduli Kendal" class="relative z-10 w-full rounded-2xl" />
        </div>
      </div>
    </section>
  </div>
</template>
