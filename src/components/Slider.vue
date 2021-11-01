<template>
                    <div class='back'>
                      <img src='../../public/video/4115230_cancel_close_delete_icon.svg' class='close_tag' v-on:click='routeHome'/>
                        <swiper :options="swiperOptions" class='swiper' ref='mySwiper' id='swiper'> 
                          <swiper-slide  v-for='(video, index) in videos' :key='index'><video-player :options='video' class="video-player-box container" /></swiper-slide>
                        </swiper>
                     
                    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { videoPlayer } from 'vue-video-player'
import axios from 'axios';

export default {
  name: 'Slider',
  components: {
    videoPlayer,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
      return {
                swiperOptions: {
                  direction: 'vertical',
        },
          loading: true,
          videosFirstColumn: [],
          videosSecondColumn: [],
          videosThirdColumn: [],
                  fullscreen: false,
        teleport: false,
        firstColumnIndex: null,
        secondColumnIndex: null,
        thirdColumnIndex: null,
        pageId: 1,
        videos: [],
        lastScrollPosition: 0,
        scrollDown: false,
        scrollUp: false

      }
  },
  watch: {
    scrollDown: (newScrollDown, oldScrollDown) => {
      console.log(oldScrollDown, newScrollDown)
    }
  },
  created() {
      this.getDataFromApi()
      window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
},
  methods: {
    handleScroll(){
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    }
    // Here we determine whether we need to show or hide the navbar
    this.scrollDown = currentScrollPosition < this.lastScrollPosition
    // Set the current scroll position as the last scroll position
    this.lastScrollPosition = currentScrollPosition
    },
      routeHome(){
        this.$router.push('/')
      },
      getDataFromApi() {
                        let uri = `https://titstok.ru/wp-json/wp/v2/media?page=${this.pageId}&per_page=100`
          axios.get(uri)
          .then(response => {
              const data = response.data.map((item) => {
                return {
          muted: true,
          loop: true,
          autoplay: true,
          controls: false,
          sources: [{
            src: item.source_url
          }],
        }
              })
              this.videos = [{
          muted: true,
          loop: true,
          autoplay: true,
          controls: false,
          sources: [{
            src: this.$route.query.imgUrl
          }],
        }, ...data]
              console.log(this.videos)

              this.pageId += 1
          })
          
          .catch(error => {
              this.loading = false
              console.log(error)
          })
            this.loading = false
      },
      splitArrayIntoChunksOfLen:function(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }
        return chunks;
        },
        
  onScroll() {
   var usersHeading = this.$refs["users"];
   if (usersHeading) {
      var marginTopUsers = usersHeading.getBoundingClientRect().bottom;
      var innerHeight = window.innerHeight;
        console.log(marginTopUsers, innerHeight)
      if ((marginTopUsers - innerHeight) < -50) { 
          console.log('hi')                
          this.getDataFromApi()
      }                               
   }  
}  
  },
}

</script>

<style>
body{
  background: black !important;
}
.container{
  background: black;
  display: flex;
  justify-content: center;
  max-width: 800px !important;
  max-height: 800px;
}
.back{
  overflow: hidden;
  background: black !important;
}
.swiper {
  max-height: 800px;
  height: 100%;
  overflow: hidden;
  width: 100%;
  display: 'flex';
  align-items: center;
  justify-content: center;
}
  .swiper-slide {
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: $white;
  }
.close_tag{
  height: 50px;
  width: 50px;
  color: white;
  fill: white;
  background: white;
  border-radius: 5px;
  cursor: pointer;
}
.swiper video{
  min-height: 400px;
  min-width: 400px;
  max-width: 800px;
  max-height: 800px;
}

</style>