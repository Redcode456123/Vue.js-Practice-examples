<template>
  <swiper class="swiper" :options="swiperOption" style="max-height:350px">
    <swiper-slide :key="i" v-for="(item, i) in  $store.state.newComing">


      <v-img :src="item.image" alt="" contain height="42vh" width="auto"
             @click="$router.push({path: '/showDetail',query:{id:item.id}})" style="/* From https://css.glass */
background: rgba(85, 71, 71, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(85, 71, 71, 0.3);">
        <v-btn color="pink" dark small absolute top right fab style="margin-top: 30%">New
          <!--          <v-icon @click="$router.push({path: '/showDetail',query:{id:item.id}})" style="font-size: 12px;"></v-icon>-->
        </v-btn>
        <span class="badge badge-dark" style="background-color: #df3e12">${{ item.price }}</span>
      </v-img>
      <p>{{ item.model }}</p>
    </swiper-slide>


    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import logs from "../../../../untitled1-vueproj-todelete/public/src/assets/phones.json";

import {UrlResolver} from "src/main.js";

let logs = UrlResolver.resolve('./src/assets/phones.json', '');

export default {
  name: 'NewComing',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      logitems: logs,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    // carouselItems() {
    //   let carousel = []
    //   this.logitems.forEach((item) => {
    //         let hits = item.newComing
    //         if (hits === undefined) {
    //           return
    //         }
    //         // alert(JSON.stringify(hits))
    //         carousel.push(
    //             hits
    //         )
    //       }
    //   )
    //   return carousel[0];
    // }
  },
}
</script>

<style lang="scss" scoped>
//@import './base.scss';
.badge-dark {
  float: right
}

</style>