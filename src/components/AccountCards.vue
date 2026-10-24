<script setup>
import { ref } from 'vue'
import { donationGroups } from '../data'
import { asset } from '../utils'

const copied = ref('')

async function copy(number) {
  try {
    await navigator.clipboard.writeText(number)
    copied.value = number
    setTimeout(() => {
      if (copied.value === number) copied.value = ''
    }, 1600)
  } catch {
    copied.value = ''
  }
}
</script>

<template>
  <div class="space-y-10">
    <section class="rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
      <div class="flex items-center gap-4">
        <img :src="asset('images/qris.svg')" alt="QRIS" class="h-10 w-20 sm:h-12 sm:w-24" />
        <div>
          <h3 class="text-lg font-semibold text-gray-900">QRIS</h3>
          <p class="text-sm text-gray-600">Scan QR Code untuk donasi</p>
        </div>
      </div>
      <img :src="asset('images/qris-kendal.jpg')" alt="QRIS MCI Peduli Kendal" class="mt-6 w-full max-w-sm rounded-md" />
    </section>

    <section v-for="group in donationGroups" :key="group.title" class="space-y-4">
      <h3 class="text-xl font-semibold tracking-tight text-gray-900">{{ group.title }}</h3>
      <div class="grid gap-4">
        <article
          v-for="[bank, logo, number] in group.accounts"
          :key="group.title + number"
          class="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-linear-to-br from-surface to-gray-50 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex items-center gap-4">
            <img :src="asset(`images/${logo}`)" :alt="bank" class="h-10 w-20 object-contain sm:h-12 sm:w-24" />
            <div>
              <p class="font-medium text-gray-900">{{ bank }}</p>
              <p class="font-mono text-lg tracking-wide text-gray-800">{{ number }}</p>
              <p class="text-sm text-gray-600">a.n. MCI Peduli Kendal</p>
            </div>
          </div>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-surface px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
            @click="copy(number)"
          >
            {{ copied === number ? 'Tersalin' : 'Salin' }}
          </button>
        </article>
      </div>
    </section>
  </div>
</template>
