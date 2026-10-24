<script setup>
import { news, pillars, programs, stats } from '../data'
import { asset, WHATSAPP } from '../utils'
import DotField from '../components/DotField.vue'
import SectionDivider from '../components/SectionDivider.vue'
import JoinCta from '../components/JoinCta.vue'

const heart = 'M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C5.51545 2.99926 8.09315 2.56029 10.2605 3.44044L6.34315 7.35843L7.75736 8.77264L12 4.53L11.9872 4.51617C11.9918 4.52028 11.9964 4.5244 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z'
const arrow = 'M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'
const check = 'M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z'
const cardClass = "relative z-10 mt-0 block h-full w-full overflow-hidden rounded-lg rounded-tr-[26px] bg-surface px-4 pt-5 pb-4.5 shadow-[inset_0_0_0_1px] shadow-gray-200 transition-all duration-[180ms] ease-in-out before:absolute before:top-0 before:right-0 before:z-3 before:h-7.5 before:w-7.5 before:translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-gray-50 before:shadow-[0_1px_0_0] before:shadow-gray-200 before:transition-all before:duration-[180ms] before:ease-in-out before:content-[''] after:absolute after:top-0 after:right-0 after:z-2 after:size-7 after:translate-x-2 after:-translate-y-2 after:rounded-bl-lg after:border after:bg-gray-50 after:shadow-xs after:transition-all after:duration-[180ms] after:ease-in-out after:content-[''] hover:rounded-tr-[45px] hover:before:h-12.5 hover:before:w-12.5 hover:after:h-10.5 hover:after:w-10.5 hover:after:shadow-lg hover:after:shadow-black/5"

function armStyle(index) {
  const delay = `-${index * 8}s`
  return {
    animation: `spin 40s linear infinite`,
    animationDelay: delay,
    transformOrigin: 'calc(50% + 140px) 50%',
    left: 'calc(50% - 156px)',
    top: 'calc(50% - 16px)',
    width: '32px',
    height: '32px',
  }
}
function counterStyle(index) {
  return {
    animation: 'spin 40s linear infinite reverse',
    animationDelay: `-${index * 8}s`,
  }
}
</script>

<template>
  <main class="relative mx-auto flex flex-col">
    <div class="px-4 pt-40 sm:pt-56">
      <section aria-label="hero" class="relative flex flex-col items-center justify-center">
        <!-- <a
          :href="news.href"
          target="_blank"
          rel="noopener"
          class="mx-auto inline-flex max-w-full items-center gap-3 rounded-full bg-surface/80 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 shadow-lg ring-1 ring-black/10 backdrop-blur-[1px] transition-colors hover:bg-primary/5 sm:text-sm"
        >
          <span class="shrink-0 truncate rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">Berita</span>
          <span class="flex min-w-0 items-center gap-1 truncate">
            <span class="truncate">{{ news.title }}</span>
            <svg viewBox="0 0 24 24" class="size-4 shrink-0 text-gray-700" fill="currentColor" aria-hidden="true"><path :d="arrow" /></svg>
          </span>
        </a> -->

        <h1 class="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-7xl sm:leading-[1.05] lg:text-8xl lg:leading-[5.5rem]">
          <span>Mualaf</span> <span>Center</span> <span>Indonesia</span> <span>Peduli</span> <span>Kendal</span>
        </h1>
        <p class="mt-5 max-w-5xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          MCI Peduli Kendal adalah lembaga yang bergerak di bidang pembinaan dan pendampingan mualaf di Indonesia.
          Kami berkomitmen untuk memberikan layanan terbaik kepada para mualaf dalam proses integrasi mereka ke dalam masyarakat Muslim Indonesia.
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/donasi"
            class="inline-flex cursor-pointer items-center justify-center gap-1 rounded-md border-b-[1.5px] border-primary bg-primary px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 hover:shadow-[0_10px_24px_rgba(40,156,81,0.35)]"
          >
            Support Kami
            <svg viewBox="0 0 24 24" class="size-5" fill="currentColor" aria-hidden="true"><path :d="heart" /></svg>
          </RouterLink>
          <RouterLink
            to="/tentang"
            class="inline-flex cursor-pointer items-center justify-center gap-1 rounded-md border border-gray-300 bg-transparent px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-50 hover:shadow-md"
          >
            Lihat Selengkapnya
            <svg viewBox="0 0 24 24" class="size-5" fill="currentColor" aria-hidden="true"><path :d="arrow" /></svg>
          </RouterLink>
        </div>

        <div class="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden select-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]">
          <div class="h-[36rem] w-full max-w-[1500px]">
            <DotField />
          </div>
        </div>
      </section>
    </div>

    <div class="mt-28 px-4 sm:mt-52 xl:px-0">
      <section class="relative mx-auto w-full max-w-6xl overflow-hidden">
        <h2 id="program" class="relative scroll-mt-24 text-lg font-semibold tracking-tight text-gold">Program MCI Peduli Kendal</h2>
        <p class="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Program yang kami jalankan untuk mendukung mualaf di Indonesia
        </p>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in programs" :key="item.title" class="relative">
            <article :class="cardClass">
              <div class="relative flex items-center gap-2">
                <div class="absolute -left-4 h-5 w-0.75 rounded-r-sm bg-primary"></div>
                <svg viewBox="0 0 24 24" class="size-5 shrink-0 text-primary" fill="currentColor" aria-hidden="true"><path :d="item.icon" /></svg>
                <h3 class="font-medium text-gray-900">{{ item.title }}</h3>
              </div>
              <p class="mt-2 text-gray-600 sm:text-sm">{{ item.body }}</p>
            </article>
          </div>
        </div>
      </section>
    </div>

    <SectionDivider />

    <div class="px-4 xl:px-0">
      <section id="features" class="relative mx-auto max-w-6xl scroll-mt-24">
        <div class="pointer-events-none absolute inset-0 select-none">
          <div v-for="line in ['left-0', 'right-0', 'left-1/2', 'left-1/4 hidden sm:block', 'left-3/4 hidden sm:block']" :key="line" class="absolute inset-y-0 -z-10 -my-20 w-px" :class="line">
            <svg class="h-full w-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="0" y2="100%" class="stroke-gray-300" stroke-width="2" stroke-dasharray="3 3" /></svg>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
          <div class="my-auto px-2 md:col-span-2">
            <h2 class="relative text-lg font-semibold tracking-tight text-gold">
              <span class="absolute top-1 -left-2 h-5 w-0.75 rounded-r-sm bg-primary"></span>
              Kegiatan MCI Peduli Kendal
            </h2>
            <p class="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">Membangun melalui kegiatan yang bermakna</p>
            <p class="mt-4 text-balance text-gray-700">
              Kami berkomitmen untuk mengembangkan masyarakat Muslim melalui lima pilar utama: Syahadat, Pembinaan, Pemberdayaan, Dakwah, dan Kemanusiaan. Setiap kegiatan dirancang untuk memberdayakan mualaf dan memperkuat nilai-nilai Islam dalam kehidupan sehari-hari.
            </p>
          </div>
          <div class="relative flex min-h-[22rem] items-center justify-center overflow-hidden md:col-span-2">
            <div class="pointer-events-none relative flex h-[312px] w-[312px] items-center justify-center select-none">
              <div class="absolute size-[280px] animate-pulse rounded-full border border-gray-300 bg-gray-500/5"></div>
              <div
                v-for="(label, index) in pillars"
                :key="label"
                class="orbit-arm absolute flex items-center justify-center"
                :style="armStyle(index)"
              >
                <div class="orbit-counter flex h-full w-full items-center justify-center" :style="counterStyle(index)">
                  <div class="relative flex items-center justify-center">
                    <div class="absolute size-10 rounded-full bg-surface/50 shadow-lg ring-1 ring-black/5"></div>
                    <div class="absolute -top-5 left-4 whitespace-nowrap">
                      <div class="flex gap-1">
                        <span class="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
                          <svg viewBox="0 0 24 24" class="size-3 text-white" fill="currentColor" aria-hidden="true"><path :d="check" /></svg>
                        </span>
                        <span class="rounded-r-full bg-surface/50 py-0.5 pr-1.5 pl-1 text-xs text-gray-800 ring-1 ring-gray-200">{{ label }}</span>
                      </div>
                    </div>
                    <div class="absolute size-10 animate-ping rounded-full ring-1 ring-primary/50" :style="{ animationDuration: '7s', animationDelay: `${index * 1.2}s` }"></div>
                  </div>
                </div>
              </div>
              <div class="relative flex h-48 w-48 items-center justify-center">
                <div class="rounded-full p-1 ring-1 ring-black/10">
                  <div class="relative z-10 flex size-28 items-center justify-center rounded-full bg-night shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.35),0_7px_10px_0_rgba(0,0,0,0.35)] ring-1 ring-gold/40">
                    <img :src="asset('logo-kendal.png')" alt="MCI Peduli Kendal" class="size-24 object-contain" />
                  </div>
                  <div class="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-primary to-transparent blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <SectionDivider />

    <!-- <div class="px-4 xl:px-0">
      <section class="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-6 py-4 shadow-2xl shadow-black/50 sm:px-16 md:px-28">
        <div class="absolute top-0 left-0 z-10 h-full w-10 backdrop-blur-[2px] sm:w-14">
          <svg class="h-full w-full text-white/20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag-left" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-left)" />
          </svg>
        </div>
        <div class="absolute top-0 right-0 z-10 h-full w-10 backdrop-blur-[2px] sm:w-14">
          <svg class="h-full w-full text-white/20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag-right" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-right)" />
          </svg>
        </div>
        <p class="pt-12 text-base font-semibold tracking-tight text-gold sm:pt-20 sm:text-lg">Video</p>
        <h2 class="mt-6 max-w-3xl text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl">Mualaf Center Indonesia Peduli Kendal</h2>
        <p class="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
          Mendengarkan langsung dari Ketua Umum MCI Peduli Kendal tentang visi dan misi organisasi dalam membimbing para mualaf di Indonesia.
        </p>
        <div class="relative mt-12 mb-10 aspect-video w-full max-w-4xl sm:mb-16 md:mt-20">
          <iframe
            class="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/Dn1yFcHON9s"
            title="Mualaf Center Indonesia Peduli Kendal"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div> -->

    <div class="px-4 xl:px-0">
      <section class="py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl">
          <h2 class="mb-10 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">Statistik</h2>
          <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
            <article
              v-for="item in stats"
              :key="item.label"
              class="group relative rounded-xl border border-gray-200 bg-linear-to-br from-surface to-gray-50 py-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div class="flex flex-col items-center px-6 py-8">
                <div class="mb-4 rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <svg viewBox="0 0 24 24" class="size-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
                </div>
                <div class="text-2xl font-bold md:text-3xl lg:text-4xl">{{ item.value }}</div>
                <div class="mt-3 text-center text-sm font-medium text-gray-600 md:text-base">{{ item.label }}</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>

    <JoinCta />
  </main>
</template>
