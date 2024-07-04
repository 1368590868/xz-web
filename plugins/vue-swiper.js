
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Import Swiper styles
import 'swiper/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper)
})