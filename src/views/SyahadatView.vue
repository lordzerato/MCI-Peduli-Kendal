<script setup>
import { reactive, ref } from 'vue'
import { syahadatDocs } from '../data'
import { openWhatsapp } from '../utils'
import JoinCta from '../components/JoinCta.vue'

const statements = [
  'Saya bermaksud mengucapkan dua kalimat syahadat sebagai tanda memeluk agama Islam, serta akan menjalankan syariat agama Islam dengan sebaik-baiknya.',
  'Saya memeluk agama Islam dengan sadar dan tulus, tanpa tekanan dari pihak mana pun.',
  'Saya bersedia mengikuti program pembinaan setelah ikrar syahadat.',
]

const form = reactive({
  nama: '',
  kelamin: '',
  warga: '',
  tempat: '',
  tanggalLahir: '',
  alamat: '',
  telepon: '',
  pekerjaan: '',
  agama: '',
  alasan: '',
  tanggalRencana: '',
})
const sent = ref(false)

function submit() {
  const text = [
    'Assalamualaikum Wr. Wb.',
    '',
    'Pendaftaran syahadat:',
    `Nama: ${form.nama}`,
    `Jenis Kelamin: ${form.kelamin}`,
    `Kewarganegaraan: ${form.warga}`,
    `Tempat Lahir: ${form.tempat}`,
    `Tanggal Lahir: ${form.tanggalLahir}`,
    `Alamat: ${form.alamat}`,
    `Nomor Telepon: ${form.telepon}`,
    `Pekerjaan: ${form.pekerjaan}`,
    `Agama Saat Ini: ${form.agama}`,
    `Alasan Masuk Agama Islam: ${form.alasan}`,
    `Tanggal Rencana Syahadat: ${form.tanggalRencana}`,
  ].join('\n')
  openWhatsapp(text)
  sent.value = true
}
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pt-40 xl:px-0">
    <p class="text-lg font-semibold tracking-tight text-gold">Ikrar</p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl">Syahadat</h1>
    <h2 class="mt-8 text-2xl font-semibold tracking-tight text-gray-900">Persyaratan Masuk Islam</h2>
    <div class="mt-4 grid gap-4 md:grid-cols-2">
      <article v-for="(items, label) in syahadatDocs" :key="label" class="rounded-2xl border border-gray-200 bg-surface p-5 shadow-sm">
        <h3 class="font-semibold text-primary">{{ label }}</h3>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <section class="mt-10 rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm">
      <p class="font-medium text-gray-900">Saya menyatakan dengan sebenar-benarnya bahwa:</p>
      <ul class="mt-3 list-disc space-y-2 pl-5 text-gray-700">
        <li v-for="item in statements" :key="item">{{ item }}</li>
      </ul>
    </section>

    <form class="mt-8 grid gap-4 rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm md:grid-cols-2" @submit.prevent="submit">
      <p class="font-semibold text-gray-900 md:col-span-2">Berikut data saya:</p>
      <label class="block text-sm font-medium text-gray-900">Nama *<input v-model="form.nama" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Jenis Kelamin *
        <select v-model="form.kelamin" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="" disabled>Pilih jenis kelamin</option>
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>
      </label>
      <label class="block text-sm font-medium text-gray-900">Kewarganegaraan *
        <select v-model="form.warga" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="" disabled>Pilih kewarganegaraan</option>
          <option>WNI</option>
          <option>WNA</option>
        </select>
      </label>
      <label class="block text-sm font-medium text-gray-900">Tempat Lahir *<input v-model="form.tempat" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Tanggal Lahir *<input v-model="form.tanggalLahir" required type="date" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900 md:col-span-2">Alamat Lengkap Tempat Tinggal *<input v-model="form.alamat" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Nomor Telepon *<input v-model="form.telepon" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Pekerjaan *<input v-model="form.pekerjaan" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Agama Saat Ini *<input v-model="form.agama" required class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900">Tanggal Rencana Syahadat *<input v-model="form.tanggalRencana" required type="date" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label class="block text-sm font-medium text-gray-900 md:col-span-2">Alasan Masuk Agama Islam *<textarea v-model="form.alasan" required rows="3" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea></label>
      <div class="md:col-span-2">
        <button type="submit" class="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-white hover:brightness-95">Kirim</button>
        <p v-if="sent" class="mt-3 text-sm text-gray-600">Data dibuka di WhatsApp. Tim MCI Peduli Kendal akan melanjutkan proses dari sana.</p>
      </div>
    </form>
  </main>
  <JoinCta />
</template>
