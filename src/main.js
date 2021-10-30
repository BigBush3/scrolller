import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import router from './router'

Vue.use(VueVideoPlayer,
  /* {
options: global default options,
events: global videojs events
} */
)

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
