<script setup>
import { address, contact, socials } from '../data'

const footerLinks = [
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Kontak', to: '/kontak' },
  // { label: 'Cabang', to: '/cabang' },
  { label: 'Rekening Donasi', to: '/rekening' },
  // { label: 'Berita', href: 'https://berita.mualafcenterindonesia.or.id' },
]
import { asset, WHATSAPP } from '../utils'
</script>

<template>
  <div class="px-4 xl:px-0">
    <footer id="footer" class="relative mx-auto flex max-w-6xl flex-wrap pt-4">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute inset-y-0 -my-20 w-px">
          <svg class="h-full w-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="0" y2="100%" class="stroke-gray-300" stroke-width="2" stroke-dasharray="3 3" /></svg>
        </div>
        <div class="absolute inset-y-0 right-0 -my-20 w-px">
          <svg class="h-full w-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="0" y2="100%" class="stroke-gray-300" stroke-width="2" stroke-dasharray="3 3" /></svg>
        </div>
      </div>

      <div class="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
        <RouterLink to="/" class="flex items-center font-medium text-gray-700 select-none sm:text-sm" aria-label="MCI Peduli Kendal Logo (go home)">
          <img :src="asset('logo-kendal.png')" alt="" class="ml-2 size-28 object-contain sm:size-32" />
        </RouterLink>
        <div>
          <div class="mt-4 mr-2 flex items-center">
            <a
              v-for="item in socials"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener"
              :aria-label="item.label"
              class="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
            >
              <svg viewBox="0 0 24 24" class="size-5" fill="currentColor" aria-hidden="true"><path :d="item.path" fill-rule="evenodd" /></svg>
            </a>
          </div>
          <div class="mt-3 ml-2 text-sm text-gray-700 lg:mt-0 lg:inline">© 2026 MCI Peduli Kendal.</div>
        </div>
      </div>

      <div class="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
        <h3 class="mb-4 font-medium text-gray-900 sm:text-sm">Yayasan</h3>
        <ul class="space-y-4">
          <li v-for="link in footerLinks" :key="link.label" class="text-sm">
            <a
              v-if="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >{{ link.label }}</a>
            <RouterLink
              v-else
              :to="link.to"
              class="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="mt-10 w-full max-w-sm pl-2 lg:mt-0 lg:w-auto lg:pl-0">
        <h3 class="mb-4 font-medium text-gray-900 sm:text-sm">Hubungi Kami</h3>
        <div class="space-y-4 text-sm">
          <div class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 size-5 shrink-0 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
            <div class="text-gray-600">
              <p class="font-medium text-gray-900">Alamat</p>
              <a :href="address.href" target="_blank" rel="noopener" class="mt-1 hover:text-gray-900">{{ address.text }}</a>
            </div>
          </div>
          <div class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 size-5 shrink-0 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
            <div class="text-gray-600">
              <p class="font-medium text-gray-900">WhatsApp</p>
              <a :href="WHATSAPP" target="_blank" rel="noopener" class="mt-1 hover:text-gray-900">{{ contact.phone }}</a>
            </div>
          </div>
          <div class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 size-5 shrink-0 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
            <div class="text-gray-600">
              <p class="font-medium text-gray-900">Email</p>
              <a :href="`mailto:${contact.email}`" class="mt-1 hover:text-gray-900">{{ contact.email }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-primary w-full overflow-hidden pt-16">
        <div class="marquee-track flex w-max gap-8 pb-1 text-4xl font-bold tracking-[-0.02em] whitespace-nowrap md:text-7xl md:leading-20" style="animation: marquee 36s linear infinite">
          <span v-for="n in 8" :key="`a-${n}`">Mualaf Center Indonesia Peduli Kendal</span>
        </div>
        <div class="marquee-track flex w-max gap-8 text-4xl font-bold tracking-[-0.02em] whitespace-nowrap md:text-7xl md:leading-20" style="animation: marquee 52s linear infinite">
          <span v-for="n in 8" :key="`b-${n}`">Mualaf Center Indonesia Peduli Kendal</span>
        </div>
      </div>
    </footer>
  </div>
</template>
