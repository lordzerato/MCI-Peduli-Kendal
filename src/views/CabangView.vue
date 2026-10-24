<script setup>
import { branches } from '../data'
import { waMe } from '../utils'
import JoinCta from '../components/JoinCta.vue'
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Cabang</p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl">Cabang Kami</h1>
    <div class="mt-4 max-w-3xl space-y-4 text-gray-700">
      <p>Mualaf Center Indonesia Peduli Kendal (MCI Peduli Kendal) adalah sebuah lembaga independen yang berbadan hukum yayasan yang didirikan pada tahun 2014, memiliki tujuan untuk membantu, mendampingi, dan membina para mualaf dalam proses menjadi seorang muslim yang baik.</p>
      <p>Salah satu upaya ikhtiar yang dilakukan MCI Peduli Kendal adalah dengan mendirikan Kepengurusan Wilayah (tingkat Provinsi) dan Kepengurusan Daerah (tingkat Kota/Kabupaten). Saat ini, MCI Peduli Kendal memiliki cabang di beberapa provinsi di Indonesia.</p>
      <p>Berikut ini daftar kontak Pengurus dan Relawan Mualaf Center Indonesia Peduli Kendal yang bisa dihubungi di beberapa wilayah (Provinsi) dan daerah (Kota/Kabupaten).</p>
    </div>

    <div class="mt-10 space-y-8">
      <section v-for="branch in branches" :key="branch.province" class="rounded-2xl border border-gray-200 bg-surface p-5 shadow-sm sm:p-6">
        <h2 class="text-xl font-semibold text-gray-900">{{ branch.province }}</h2>
        <div class="mt-4 space-y-6">
          <div v-for="area in branch.areas" :key="branch.province + area.name">
            <h3 class="text-sm font-semibold tracking-tight text-gold">{{ area.name }}</h3>
            <div class="mt-2 overflow-x-auto">
              <table class="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr class="border-b border-gray-200 text-gray-500">
                    <th class="py-2 pr-4 font-medium">Nama</th>
                    <th class="py-2 font-medium">Nomor Ponsel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="[name, phone] in area.people" :key="name + phone" class="border-b border-gray-100 last:border-0">
                    <td class="py-2.5 pr-4 text-gray-900">{{ name }}</td>
                    <td class="py-2.5">
                      <a :href="waMe(phone)" target="_blank" rel="noopener" class="text-gray-700 hover:text-primary">{{ phone }}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <JoinCta />
</template>
