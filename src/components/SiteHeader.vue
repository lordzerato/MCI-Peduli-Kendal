<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '../data'
import { asset } from '../utils'

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <header
    class="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border px-3 py-3 transition duration-300"
    :class="open
      ? 'border-gray-200 bg-surface shadow-2xl shadow-black/5'
      : scrolled
        ? 'border-gray-200/50 bg-surface/80 shadow-2xl shadow-black/5 backdrop-blur-sm'
        : 'border-transparent bg-surface/0'"
  >
    <div class="w-full">
      <div class="relative flex items-center justify-between">
        <RouterLink to="/" class="shrink-0" aria-label="MCI Peduli Kendal Logo">
          <img :src="asset('logo-kendal.png')" alt="MCI Peduli Kendal" class="size-20 object-contain sm:size-15" />
        </RouterLink>

        <nav class="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" aria-label="Utama">
          <div class="flex items-center gap-6 text-center font-medium xl:gap-10">
            <template v-for="link in navLinks" :key="link.label">
              <a
                v-if="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="px-2 py-1 text-gray-900"
              >{{ link.label }}</a>
              <RouterLink v-else :to="link.to" class="px-2 py-1 whitespace-nowrap text-gray-900">
                {{ link.label }}
              </RouterLink>
            </template>
          </div>
        </nav>

        <div class="flex items-center gap-3">
          <RouterLink
            to="/syahadat"
            class="hidden h-10 items-center justify-center rounded-sm border border-gray-300 bg-surface px-3 py-2 text-center text-sm font-semibold whitespace-nowrap text-gray-900 shadow-xs hover:bg-gray-50 lg:inline-flex"
          >Syahadat</RouterLink>
          <RouterLink
            to="/donasi"
            class="hidden h-10 items-center justify-center rounded-sm border border-transparent bg-primary px-3 py-2 text-center text-sm font-semibold whitespace-nowrap text-white shadow-xs hover:brightness-95 lg:inline-flex"
          >Donasi</RouterLink>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-surface p-1.5 text-gray-900 shadow-xs hover:bg-gray-50 lg:hidden"
            :aria-expanded="open"
            aria-label="Open Navigation Menu"
            @click="open = !open"
          >
            <svg v-if="!open" viewBox="0 0 24 24" class="size-6" fill="currentColor" aria-hidden="true">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="size-6" fill="currentColor" aria-hidden="true">
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
            </svg>
          </button>
        </div>
      </div>

      <nav v-show="open" class="mt-6 flex flex-col gap-6 text-lg lg:hidden" aria-label="Menu mobile">
        <ul class="space-y-4 font-medium">
          <li v-for="link in navLinks" :key="`m-${link.label}`">
            <a v-if="link.href" :href="link.href" target="_blank" rel="noopener" class="block text-gray-900" @click="open = false">{{ link.label }}</a>
            <RouterLink v-else :to="link.to" class="block text-gray-900" @click="open = false">{{ link.label }}</RouterLink>
          </li>
        </ul>
        <RouterLink to="/donasi" class="inline-flex items-center justify-center rounded-sm border border-transparent bg-primary px-3 py-2 text-center font-medium text-white" @click="open = false">Donasi</RouterLink>
        <RouterLink to="/syahadat" class="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-surface px-3 py-2 text-center font-medium text-gray-900" @click="open = false">Syahadat</RouterLink>
      </nav>
    </div>
  </header>
</template>
