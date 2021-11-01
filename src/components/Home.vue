<template>
  <div id="root" data-scroll-container>

            <div class="app--desktop">
                <div
                    aria-label="Sidebar Content Overlay"
                    class="fixed top-0 bottom-0 left-0 right-0 z-20 transition duration-300 bg-gray-900 bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer opacity-0 pointer-events-none"
                ></div>
                <nav aria-label="Sidebar" class="menu fixed top-0 bottom-0 left-0 z-30 bg-gray-900 w-96 transition duration-300 transform-gpu -translate-x-96">
                    <div class="flex flex-col items-center w-full h-full py-0-safe">
                        <a class="h-20 my-10" href="/" rel="">
                            <svg viewBox="0 0 2891.85 869.89" class="svg-logo">
                                <title>Scrolller logo</title>
                                <text transform="translate(16.01 749.31)">s</text>
                                <text transform="translate(406.86 749.63)">c</text>
                                <text transform="translate(804.31 749.48)">r</text>
                                <text transform="translate(1156.24 748.84)">o</text>
                                <path d="M1914.13,690.47V610.38h106V756.52a13.93,13.93,0,0,1-13.91,14h-78.17a13.93,13.93,0,0,1-13.92-14Z"></path>
                                <path d="M1914.13,171.63V105.57a13.93,13.93,0,0,1,13.92-13.94h78.17a13.93,13.93,0,0,1,13.91,13.94V593.15h-106Z"></path>
                                <path d="M1791.09,690.63V440.33h106V756.68a13.94,13.94,0,0,1-13.92,14H1805a13.93,13.93,0,0,1-13.91-14Z"></path>
                                <path d="M1791.09,171.78v-66a13.93,13.93,0,0,1,13.91-14h78.17a13.93,13.93,0,0,1,13.92,14V423.25h-106Z"></path>
                                <path d="M1668,690.63V268.89h106V756.68a13.93,13.93,0,0,1-13.91,14H1682a13.94,13.94,0,0,1-13.92-14Z"></path>
                                <path d="M1668,171.78v-66a13.93,13.93,0,0,1,13.92-14h78.17a13.93,13.93,0,0,1,13.91,14V251.78H1668Z"></path>
                                <text transform="translate(2100.43 751.32)">e</text>
                                <text transform="translate(2553.79 750.86)">r</text>
                            </svg>
                        </a>
                    </div>
                </nav>
                <div class="burger fixed top-0 right-0 z-20 px-5 lg:left-0 lg:right-auto pt-3-safe">
                    <div aria-label="Sidebar Toggle" class="flex bg-gray-800 rounded-full cursor-pointer bg-opacity-70 transform-gpu transition-transform duration-300 false">
                        <div
                            class="hamburger-react"
                            role="button"
                            tabindex="0"
                            style="cursor: pointer; height: 48px; position: relative; transition: all 0.5s cubic-bezier(0, 0, 0, 1) 0s; user-select: none; width: 48px; outline: none;"
                        >
                            <div style="background: currentcolor; height: 2px; left: 12px; position: absolute; border-radius: 9em; width: 25px; top: 15px; transition: all 0.5s cubic-bezier(0, 0, 0, 1) 0s;"></div>
                            <div style="background: currentcolor; height: 2px; left: 12px; position: absolute; border-radius: 9em; width: 25px; top: 23px; transition: all 0.5s cubic-bezier(0, 0, 0, 1) 0s;"></div>
                            <div style="background: currentcolor; height: 2px; left: 12px; position: absolute; border-radius: 9em; width: 25px; top: 31px; transition: all 0.5s cubic-bezier(0, 0, 0, 1) 0s;"></div>
                        </div>
                    </div>
                </div>
                <div class="fixed bottom-0 right-0 z-10 px-5 space-y-5 transition-transform duration-300 transform pb-3-safe lg:left-0 lg:right-auto">
                    <div aria-label="Show Auto Scroll" class="flex p-3 bg-gray-800 rounded-full cursor-pointer bg-opacity-70 transition-colors duration-200 false">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="256" cy="272" r="16"></circle>
                            <path
                                d="M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z"
                            ></path>
                        </svg>
                    </div>
                    <div aria-label="Toggle NSFW" class="flex p-3 bg-gray-800 rounded-full cursor-pointer bg-opacity-70 transition-colors duration-200 false">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 360 360" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" style="color: red;">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 220px; font-weight: bold;">18+</text>
                        </svg>
                    </div>
                </div>
                <div class="app-page">
                    <div class="safe-area">
                        <div style="margin-bottom: 3rem;">
                            <div class="logo-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2891.85 869.89" class="svg-logo">
                                    <title>Scrolller logo</title>
                                    <text transform="translate(16.01 749.31)">s</text>
                                    <text transform="translate(406.86 749.63)">c</text>
                                    <text transform="translate(804.31 749.48)">r</text>
                                    <text transform="translate(1156.24 748.84)">o</text>
                                    <path d="M1914.13,690.47V610.38h106V756.52a13.93,13.93,0,0,1-13.91,14h-78.17a13.93,13.93,0,0,1-13.92-14Z"></path>
                                    <path d="M1914.13,171.63V105.57a13.93,13.93,0,0,1,13.92-13.94h78.17a13.93,13.93,0,0,1,13.91,13.94V593.15h-106Z"></path>
                                    <path d="M1791.09,690.63V440.33h106V756.68a13.94,13.94,0,0,1-13.92,14H1805a13.93,13.93,0,0,1-13.91-14Z"></path>
                                    <path d="M1791.09,171.78v-66a13.93,13.93,0,0,1,13.91-14h78.17a13.93,13.93,0,0,1,13.92,14V423.25h-106Z"></path>
                                    <path d="M1668,690.63V268.89h106V756.68a13.93,13.93,0,0,1-13.91,14H1682a13.94,13.94,0,0,1-13.92-14Z"></path>
                                    <path d="M1668,171.78v-66a13.93,13.93,0,0,1,13.92-14h78.17a13.93,13.93,0,0,1,13.91,14V251.78H1668Z"></path>
                                    <text transform="translate(2100.43 751.32)">e</text>
                                    <text transform="translate(2553.79 750.86)">r</text>
                                </svg>
                            </div>
                            <div class="filter-buttons filter-buttons--big-font">
                                <button class="filter-buttons__button">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="filter-buttons__icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M416 64H96a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V128a64.07 64.07 0 00-64-64zm-80 64a48 48 0 11-48 48 48.05 48.05 0 0148-48zM96 416a32 32 0 01-32-32v-67.63l94.84-84.3a48.06 48.06 0 0165.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 01-32 32H217.63l121.42-121.42a47.72 47.72 0 0161.64-.16L448 333.84z"
                                        ></path>
                                    </svg>
                                    Photos
                                </button>
                                <button class="filter-buttons__button filter-buttons__button--gifs">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="filter-buttons__icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M436 80H76a44.05 44.05 0 00-44 44v264a44.05 44.05 0 0044 44h360a44.05 44.05 0 0044-44V124a44.05 44.05 0 00-44-44zM112 388a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm241.68 124H158.32a16 16 0 010-32h195.36a16 16 0 110 32zM448 388a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12z"
                                        ></path>
                                    </svg>
                                    Videos
                                </button>
                                <a class="filter-buttons__button" href="/discover">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="filter-buttons__icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"
                                        ></path>
                                    </svg>
                                    Search
                                </a>
                                <button class="filter-buttons__button filter-buttons__button--active">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="filter-buttons__icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M392 80H232a56.06 56.06 0 00-56 56v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zM80 240a16 16 0 000 32h96v-32z"
                                        ></path>
                                    </svg>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div><main class="gallery-view"> 
                        <div class="vertical-view" ref='users'>
                            <div class="vertical-view__columns">
                                <div class="vertical-view__column vertical-view__column1" ><div class='vertical-view__item' v-on:click='routeToVideo(item.source_url)'  v-for="(item, index) in videosFirstColumn" :key='item.id'>  <transition name="fade"><h1 v-show='firstColumnIndex === index' class='textOnVideo'>{{item.title.rendered}}</h1></transition><video poster='../../public/video/Rolling-1s-200px.gif' preload='auto' @mouseover="firstColumnIndex = index" @mouseleave="firstColumnIndex = null" :src='item.source_url' autoplay muted loop @click='clickVideo(item.id)' :ref="'video' + item.id"/></div></div>
                                <div class="vertical-view__column vertical-view__column2"><div class='vertical-view__item'  v-on:click='routeToVideo(item.source_url)' v-for="(item, index) in videosSecondColumn" :key='item.id'>  <transition name="fade"><h1 v-show='secondColumnIndex === index' class='textOnVideo'>{{item.title.rendered}}</h1></transition><video poster='../../public/video/Rolling-1s-200px.gif' preload='auto' @mouseover="secondColumnIndex = index" @mouseleave="secondColumnIndex = null" :src='item.source_url' autoplay muted loop @click='clickVideo(item.id)' :ref="'video' + item.id"/></div></div>
                                <div class="vertical-view__column vertical-view__column3"><div class='vertical-view__item'  v-on:click='routeToVideo(item.source_url)' v-for="(item, index) in videosThirdColumn" :key='item.id'>  <transition name="fade"><h1 v-show='thirdColumnIndex === index' class='textOnVideo'>{{item.title.rendered}}</h1></transition><video poster='../../public/video/Rolling-1s-200px.gif' preload='auto' @mouseover="thirdColumnIndex = index" @mouseleave="thirdColumnIndex = null" :src='item.source_url' autoplay muted loop @click='clickVideo(item.id)' :ref="'video' + item.id"/></div></div>
                            </div>
                        </div>
                    </main>
                </div>
                <div class="measure-viewport measure-viewport--entire-viewport"></div>
                <div class="measure-viewport measure-viewport--only-visible"></div>
            </div>

        </div>

</template>

<script>

import axios from 'axios';
import { api as fullscreen } from 'vue-fullscreen'

export default {
  name: 'Home',
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
      routeToVideo(url){
          this.$router.push({path: '/videos',
          query: {imgUrl: url}})
      },
      getDataFromApi() {
                        let uri = `https://titstok.ru/wp-json/wp/v2/media?page=${this.pageId}&per_page=9`
          axios.get(uri)
          .then(response => {
              this.videos = response.data
              const data = this.splitArrayIntoChunksOfLen(response.data, 3)
              console.log(data)
              this.videosFirstColumn = [...this.videosFirstColumn, ...data[0]]
              this.videosSecondColumn = [...this.videosSecondColumn, ...data[1]]
              this.videosThirdColumn = [...this.videosThirdColumn, ...data[2]]
              if (this.pageId === 2){
                  this.pageId = 1
              } else {
                  this.pageId += 1
              }
              
                
          })
          
          .catch(error => {
              this.loading = false
              console.log(error.message, 'sdflksjdf')
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