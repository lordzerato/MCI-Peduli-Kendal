<script setup>
import { leaders, legal, missions, stats, vision } from '../data'
import { asset } from '../utils'
import JoinCta from '../components/JoinCta.vue'
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 pb-8 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Tentang Kami</p>
    <h1 class="mt-2 max-w-4xl text-4xl font-semibold tracking-tighter text-balance text-gray-900 md:text-5xl">Mualaf Center Indonesia Peduli Kendal</h1>
    <p class="mt-4 max-w-3xl text-lg text-gray-700">
      Mualaf Center Indonesia Peduli Kendal adalah lembaga yang bergerak di bidang pembinaan dan pendampingan mualaf di Indonesia. Kami berkomitmen untuk memberikan layanan terbaik kepada para mualaf dalam proses integrasi mereka ke dalam masyarakat Muslim Indonesia.
    </p>

    <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="item in stats" :key="item.label" class="rounded-xl border border-gray-200 bg-surface px-4 py-6 text-center shadow-sm">
        <div class="text-3xl font-bold text-gray-900">{{ item.value }}</div>
        <div class="mt-1 text-sm text-gray-600">{{ item.label }}</div>
      </div>
    </div>

    <section class="mt-16 grid gap-6 md:grid-cols-2">
      <article class="rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
        <h2 class="text-sm font-semibold tracking-tight text-gold">Visi</h2>
        <p class="mt-3 text-lg leading-relaxed text-gray-800">{{ vision }}</p>
      </article>
      <article class="rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
        <h2 class="text-sm font-semibold tracking-tight text-gold">Misi</h2>
        <ol class="mt-3 list-decimal space-y-3 pl-5 text-gray-700">
          <li v-for="item in missions" :key="item">{{ item }}</li>
        </ol>
      </article>
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-semibold tracking-tighter text-gray-900">Legalitas</h2>
      <dl class="mt-6 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-surface">
        <div v-for="[label, value] in legal" :key="label" class="grid gap-1 px-5 py-4 sm:grid-cols-3">
          <dt class="text-sm font-medium text-gray-500">{{ label }}</dt>
          <dd class="text-gray-900 sm:col-span-2">{{ value }}</dd>
        </div>
      </dl>
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-semibold tracking-tighter text-gray-900">Struktur Organisasi</h2>
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <article v-for="[name, role, photo] in leaders" :key="name" class="overflow-hidden rounded-2xl border border-gray-200 bg-surface shadow-sm">
          <img :src="asset(`images/pengurus/${photo}`)" :alt="name" class="aspect-[3/4] w-full object-cover object-top" />
          <div class="p-3">
            <h3 class="font-medium text-gray-900">{{ name }}</h3>
            <p class="text-sm text-gray-600">{{ role }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
  <JoinCta />
</template>
