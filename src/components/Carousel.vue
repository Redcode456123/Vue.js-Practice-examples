<template>
  <swiper class="swiper" :options="swiperOption">

    <swiper-slide :key="i" v-for="(item, i) in  $store.state.onSale">
      <!--    <img width="50%" :src="item.path" alt="" />-->
      <!--      <v-card-title primary-title style="height: 100px; position: relative">-->

      <v-img :src="item.path" alt="" contain height="80%" width="auto"
             @click="$router.push({path: '/showDetail',query:{id:item.id}})" style="/* From https://css.glass */
background: rgba(85, 71, 71, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(85, 71, 71, 0.3);">
        <v-btn color="pink" dark small absolute top right fab style="margin-top: 30%;color:orangered">${{item.price}}
<!--          <v-icon @click.native="$router.push({path: '/showDetail',query:{id:item.id}})">jjjjjjjj</v-icon>-->
        </v-btn>
      </v-img>

      <p style="bottom: 5px">techno</p>
      <span class="badge bg-dark"></span>
      <!--      </v-card-title>-->
      <!--      <v-btn color="primary">-->
      <!--        Primary-->
      <!--      </v-btn>-->
    </swiper-slide>

    <!--    <swiper-slide style="background-image: url('https://media.istockphoto.com/photos/new-ios-14-screen-iphone-apples-next-operating-system-for-its-to-be-picture-id1270790424?k=20&m=1270790424&s=612x612&w=0&h=p_1DGqUriFPLKnt1KNbtRwdxJkB0ozkCQ3zE6KZOde8=');  ">Slide 2</swiper-slide>-->
    <!--    <swiper-slide>Slide 3</swiper-slide>-->
    <!--    <swiper-slide>Slide 4</swiper-slide>-->
    <!--    <swiper-slide>Slide 5</swiper-slide>-->
    <!--    <swiper-slide>Slide 6</swiper-slide>-->
    <!--    <swiper-slide>Slide 7</swiper-slide>-->
    <!--    <swiper-slide>Slide 8</swiper-slide>-->
    <!--    <swiper-slide>Slide 9</swiper-slide>-->
    <!--    <swiper-slide>Slide 10</swiper-slide>-->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import {UrlResolver} from "../main";
// import logs from "../../../untitled1-vueproj-todelete/public/src/assets/phones.json";
let logs=UrlResolver.resolve('public/src/assets/phones.json', '');

//https://github.surmon.me/vue-awesome-swiper/
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import swiper from "swiper";
// Vue.use(VueAwesomeSwiper);
// import style
//https://codesandbox.io/s/vue-awesome-swiper-vvbk8?file=/src/components/mySwiper.vue:121-155
export default {

  // name: 'swiper-example-free-mode',
  // title: 'Free mode / No fixed positions',
  components: {
    Swiper,
    SwiperSlide,
    // VueAwesomeSwiper
  },

  data() {

    return {
      logitems: logs,

      // imgArr: [
      //   {
      //     id: 1,
      //     path: "https://media.istockphoto.com/photos/new-ios-14-screen-iphone-apples-next-operating-system-for-its-to-be-picture-id1270790424?k=20&m=1270790424&s=612x612&w=0&h=p_1DGqUriFPLKnt1KNbtRwdxJkB0ozkCQ3zE6KZOde8="
      //   },
      //   {
      //     id: 2,
      //     path: "https://d316acfc88wber.cloudfront.net/global/phones/camon16premier/1.png"
      //   },
      //   {
      //     id: 3,
      //     path: "https://fdn.gsmarena.com/imgroot/reviews/20/samsung-galaxy-s20-plus/lifestyle/-1024w2/gsmarena_002.jpg"
      //   },
      //   {
      //     id: 3,
      //     path: "https://www.phonefinity.net/wp-content/uploads/camon-17-blue.jpg"
      //   },
      //   {
      //     id: 4,
      //     path:
      //         "https://i0.wp.com/www.3ptechies.com/wp-content/uploads/2019/10/Tecno-Spark-4.png?fit=640%2C640&ssl=1"
      //   },
      //   {
      //     id: 5,
      //     path:
      //         "data:image/jpeg;base64,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"
      //   }
      // ],


      swiperOption: {
        // mode:'horizontal',
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        autoplayDisableOnInteraction: true,

        // calculateHeight:true,
        followFinger: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,

        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      },
    }
  },
  computed: {
    carouselItems() {
      let carousel = []
      this.logitems.forEach((item) => {
            let hits = item.carousel
            if (hits === undefined) {
              return
            }
            // alert(JSON.stringify(hits))
            carousel.push(
                hits
            )
          }
      )
      return carousel[0];
    }
  },


};

</script>


<style lang="scss" scoped>
@media (min-width: 461px) {
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 20px;
  }
}

</style>
