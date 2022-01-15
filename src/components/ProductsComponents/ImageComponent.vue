<template>
  <div class="u-container-layout u-similar-container u-container-layout-1">
<!--    <div v-for="n in Object.keys(products[0]).length" :key="n">-->
      <div v-for="products in filteredProducts" :key="products">

      <img alt="" :src="products.image" data-image-width="510" data-image-height="340"
           class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-image u-image-default u-product-control u-image-1">
      <div
          class="u-align-center u-container-style u-expanded-width-xs u-group u-opacity u-opacity-70 u-palette-5-light-2 u-group-1">
        <div class="u-container-layout u-container-layout-2">
          <h4 data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0"
              data-animation-direction="Up" class="u-product-control u-text u-text-1 animated fadeInUp-played"
              style="will-change: transform, opacity; animation-duration: 1000ms;">
            <a href="#" class="u-product-title-link"> {{ products.model }} </a>
          </h4>
          <div class="u-align-left u-product-control u-product-price u-product-price-1">
            <div class="u-price-wrapper u-spacing-10">
              <div class="u-hide-price u-old-price">$12</div>
              <div class="u-price" style="font-size: 1.25rem; font-weight: 700;">{{ products.price }}</div>
            </div>
          </div>
          <a href="#"
             class="u-align-center-xs u-border-active-none u-border-hover-none u-btn u-btn-rectangle u-button-style u-none u-product-control u-text-palette-1-base u-btn-1">Add
            to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ImageComponent",
  props:['filteredProducts'],
data(){
    return{
      items:[

      ]
    }
},

  computed: {
    ...mapState({
      products: (state) => state.products,

    }),
  }
}
</script>

<style scoped>
.u-palette-5-light-2, .u-body.u-palette-5-light-2, .u-container-style.u-palette-5-light-2:before, .u-container-layout.u-palette-5-light-2:before, .u-table-alt-palette-5-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: unset;
}
</style>