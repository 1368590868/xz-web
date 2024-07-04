// plugins/vue-awesome-swiper.js
import { defineNuxtPlugin } from '#app'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineNuxtPlugin((nuxtApp) => {
  // 防止插件被多次应用
  if (!nuxtApp.vueApp._isSwiperPluginRegistered) {
    nuxtApp.vueApp.use(VueAwesomeSwiper)
    nuxtApp.vueApp._isSwiperPluginRegistered = true
  }
})
