<template>
<div>
<router-view></router-view>
</div>
</template>

<script>

import axios from 'axios';
import { api as fullscreen } from 'vue-fullscreen'

export default {
  name: 'App',
  components: {
  },
  data() {
      return {
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
        videos: []

      }
  },
  created() {
      this.getDataFromApi()
  },
  methods: {
      getDataFromApi() {
                        let uri = 'https://mainbro.ru/wp-json/wp/v2/media?per_page=' + this.pageId
          axios.get(uri)
          .then(response => {
              
              this.videos = response.data
              const data = this.splitArrayIntoChunksOfLen(response.data, 3)
              
              this.videosFirstColumn = [...this.videosFirstColumn, ...data[0]]
              this.videosSecondColumn = [...this.videosSecondColumn, ...data[3], ...data[1]]
              this.videosThirdColumn = [...this.videosThirdColumn, ...data[2]]
              this.pageId += 1
            console.log(response.data)
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
        clickVideo:function(id){
             fullscreen.toggle(this.$refs[`video${id}`], {
                teleport: this.teleport,
                callback: (isFullScreen) => {
                    this.fullscreen = isFullScreen
                }
            }) 
        },
        toggle () {
        this.fullscreen = !this.fullscreen
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
  mounted() {
    this.$nextTick(function() {
        window.addEventListener('scroll', this.onScroll);
        this.onScroll(); // needed for initial loading on page
    });        
},
beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
}
}
</script>

<style>

.textOnVideo{
    position: absolute;
    bottom: 0;
    font-size: 21px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
video {
    background-image: url(../public/video/Rolling-1s-200px.gif);
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: center;
}
</style>

