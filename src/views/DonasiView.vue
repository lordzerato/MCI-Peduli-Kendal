<script setup>
import { reactive, ref } from 'vue'
import AccountCards from '../components/AccountCards.vue'
import { openWhatsapp } from '../utils'

const kinds = ['Infaq/Sedekah', 'Zakat', 'Wakaf', 'Kemanusiaan/Bencana/Peduli Palestina']
const form = reactive({
  nama: '',
  alamat: '',
  jenis: '',
  jumlah: '',
  keterangan: '',
})
const sent = ref(false)

function submit() {
  const text = [
    'Assalamualaikum Wr. Wb.',
    '',
    'Saya ingin berdonasi:',
    `Nama: ${form.nama}`,
    `Alamat: ${form.alamat || '-'}`,
    `Jenis Donasi: ${form.jenis}`,
    `Jumlah Donasi: ${form.jumlah}`,
    `Keterangan: ${form.keterangan || '-'}`,
  ].join('\n')
  openWhatsapp(text)
  sent.value = true
}
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 pb-24 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Dukungan</p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl">Donasi</h1>
    <p class="mt-4 max-w-2xl text-lg text-gray-700">Silakan masukkan informasi donasi Anda di bawah ini.</p>

    <form class="mt-8 max-w-2xl space-y-4 rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm" @submit.prevent="submit">
      <label class="block text-sm font-medium text-gray-900">
        Nama <span class="text-primary">*</span>
        <input v-model="form.nama" required class="mt-1 w-full rounded-md border border-gray-300 bg-surface px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
      <label class="block text-sm font-medium text-gray-900">
        Alamat
        <input v-model="form.alamat" class="mt-1 w-full rounded-md border border-gray-300 bg-surface px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
      <label class="block text-sm font-medium text-gray-900">
        Jenis Donasi <span class="text-primary">*</span>
        <select v-model="form.jenis" required class="mt-1 w-full rounded-md border border-gray-300 bg-surface px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="" disabled>Pilih jenis donasi</option>
          <option v-for="kind in kinds" :key="kind" :value="kind">{{ kind }}</option>
        </select>
      </label>
      <label class="block text-sm font-medium text-gray-900">
        Jumlah Donasi <span class="text-primary">*</span>
        <input v-model="form.jumlah" required inputmode="numeric" class="mt-1 w-full rounded-md border border-gray-300 bg-surface px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
      <label class="block text-sm font-medium text-gray-900">
        Keterangan Donasi
        <textarea v-model="form.keterangan" rows="3" class="mt-1 w-full rounded-md border border-gray-300 bg-surface px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
      </label>
      <button type="submit" class="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-white hover:brightness-95">Kirim</button>
      <p v-if="sent" class="text-sm text-gray-600">Data donasi dibuka di WhatsApp agar tim MCI Peduli Kendal bisa menindaklanjuti. Transfer tetap dilakukan ke rekening di bawah.</p>
    </form>

    <section class="mt-16">
      <h2 class="text-3xl font-semibold tracking-tighter text-gray-900">Rekening Donasi</h2>
      <p class="mt-3 max-w-2xl text-gray-700">Transfer melalui rekening kesayangan Anda. Kami menerima donasi melalui berbagai bank dan dompet digital.</p>
      <div class="mt-8">
        <AccountCards />
      </div>
    </section>
  </main>
</template>
