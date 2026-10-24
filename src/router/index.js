import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TentangView from '../views/TentangView.vue'
import KontakView from '../views/KontakView.vue'
import CabangView from '../views/CabangView.vue'
import RekeningView from '../views/RekeningView.vue'
import DonasiView from '../views/DonasiView.vue'
import SyahadatView from '../views/SyahadatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Mualaf Center Indonesia Peduli Kendal' } },
    { path: '/tentang', name: 'tentang', component: TentangView, meta: { title: 'Tentang Kami | Mualaf Center Indonesia Peduli Kendal' } },
    { path: '/kontak', name: 'kontak', component: KontakView, meta: { title: 'Kontak Kami | Mualaf Center Indonesia Peduli Kendal' } },
    // { path: '/cabang', name: 'cabang', component: CabangView, meta: { title: 'Pengurus/Relawan Daerah | Mualaf Center Indonesia Peduli Kendal' } },
    { path: '/rekening', name: 'rekening', component: RekeningView, meta: { title: 'Rekening Donasi | Mualaf Center Indonesia Peduli Kendal' } },
    { path: '/donasi', name: 'donasi', component: DonasiView, meta: { title: 'Donasi | Mualaf Center Indonesia Peduli Kendal' } },
    { path: '/syahadat', name: 'syahadat', component: SyahadatView, meta: { title: 'Syahadat | Mualaf Center Indonesia Peduli Kendal' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Mualaf Center Indonesia Peduli Kendal'
})

export default router
