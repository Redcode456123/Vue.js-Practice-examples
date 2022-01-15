<template>
  <div id="products">
    <!--    <link rel="stylesheet" href="public/src/assets/css/nicepage.css" media="screen">-->
    <!--    <link rel="stylesheet" href="/src/assets/css/Copy-of-Home.css" media="screen">-->
    <!--        <link rel="stylesheet" href="/src/assets/css/style.css" media="screen">-->
    <!--    <link rel="stylesheet" href="/src/assets/css/Copy-of-Home.css" media="screen">-->
    <!--    <p>copyyyyy</p>-->
    <!-- Starting hamburger menu-->

    <div style="position:relative">
      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <div class="wrap">
    <span class="cormen" style="padding-top:20px">
        <label name="hamburger menu" for="cormid">Click to open menu</label>
        <input id="cormid" type="checkbox">
        <ul>
          <div style=" display: inline-block; width:90%;">
<span id='close' style="float:right;cursor:pointer;font-size: 21px;margin-right: -171px;"
      onclick='(this.parentNode.parentNode.parentNode.firstChild).click()'>x</span>
<p style="color:black;float:left">Filter</p>
      </div>
<div class="form-check">

      <li style="color: #0f0f0f"><input type="text" class="form-control" id="search" name="optradio" value=""
                                        v-model="search" placeholder="Search"
                                        style="margin-top: 1px;    width: 112px;"/></li>

            <li style="color:black"><input type="radio" class="form-check-input" id="radio1" name="optradio"
                                           value="all" @change="filterProduct" checked="checked"
                                           v-model="checkedNames" style="margin-top: 1px">All</li>

            <li style="color:black"><input type="radio" class="form-check-input" id="radio2" name="optradio"
                                           value="Samsung" @change="filterProduct"
                                           v-model="checkedNames" style="margin-top: 1px"/>Samsung</li>

            <li style="color: #0f0f0f"><input type="radio" class="form-check-input" id="radio3" name="optradio"
                                              value="IPhone" @change="filterProduct"
                                              v-model="checkedNames" style="margin-top: 1px"/>IPhone</li>

              <li style="color: #0f0f0f"><input type="radio" class="form-check-input" id="radio4" name="optradio"
                                                value="miscellanous" @change="filterProduct"
                                                v-model="checkedNames" style="margin-top: 1px"/>Miscellanous</li>

                <li style="color: #0f0f0f"><input type="radio" class="form-check-input" id="radio5" name="optradio"
                                                  value="otherBrands" @change="filterProduct"
                                                  v-model="checkedNames" style="margin-top: 1px"/>Other brands</li>


            <li><a href="#">Search Jobs</a></li>
  <!--            <li><a href="#">Saved Jobs</a></li>-->
  <!--            <li>MAILBOX</li>-->
  <!--            <li><a href="#">Inbox</a></li>-->
  <!--            <li><a href="#">Outbox</a></li>-->
      </div>
        </ul>
    </span>
      </div>

      <!-- start of website content -->
      <div style="position:absolute;z-index:-1;padding-left:10%">
        <section class="u-align-center u-clearfix u-section-1" id="sec-4fe4">
          <div
              class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
            <!--products--><!--products_options_json--><!--{"type":"Recent","source":"","tags":"","count":""}-->
            <!--/products_options_json-->

            <div
                class="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-grid u-pagination-center u-products u-products-1">
              <div class="u-repeater u-repeater-1">
                <!--product_item-->
                <div v-for="products in filteredProducts" :key="products">
                  <div
                      class="u-align-center-lg u-align-center-sm u-align-center-xl u-align-center-xs u-container-style u-products-item u-repeater-item">

                    <div class="u-container-layout u-similar-container u-container-layout-1">
                      <!--    <div v-for="n in Object.keys(products[0]).length" :key="n">-->

                      <v-img :src="products.image" alt="" contain height="50vh" width="auto"
                             class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-image u-image-default u-product-control u-image-1"></v-img>

                      <!--                      <img alt="" :src="products.image" data-image-width="510" data-image-height="340"-->
                      <!--      class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-image u-image-default u-product-control u-image-1">-->
                      <div
                          class="u-align-center u-container-style u-expanded-width-xs u-group u-opacity u-opacity-70 u-palette-5-light-2 u-group-1">
                        <div class="u-container-layout u-container-layout-2">
                          <h4 data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0"
                              data-animation-direction="Up"
                              class="u-product-control u-text u-text-1 animated fadeInUp-played"
                              style="will-change: transform, opacity; animation-duration: 1000ms;">
                            <a href="#" class="u-product-title-link"> {{ products.model }} </a>
                          </h4>
                          <div class="u-align-left u-product-control u-product-price u-product-price-1">
                            <div class="u-price-wrapper u-spacing-10">
                              <div class="u-hide-price u-old-price">$12</div>
                              <div class="u-price" style="font-size: 1.25rem; font-weight: 700;">${{
                                  products.price
                                }}
                              </div>
                            </div>
                          </div>
                          <a class="u-align-center-xs u-border-active-none u-border-hover-none u-btn u-btn-rectangle u-button-style u-none u-product-control u-text-palette-1-base u-btn-1">
                            <router-link :to="{path: '/showDetail',query:{id:products.id}}">
                              Add
                              to Cart
                            </router-link>
                          </a>
                        </div>
                      </div>
                      <!--/product_item--><!--product_item-->

                    </div><!--/product_item-->
                  </div>
                </div>

                <!--                end div   looping   -->
              </div>
              <!--              finished first repeater of product items-->
              <div class="u-list-control"></div>
            </div><!--/products--><!--products--><!--products_options_json-->
            <!--{"type":"Recent","source":"","tags":"","count":""}--><!--/products_options_json-->
            <div
                class="u-expanded-width-md u-expanded-width-sm u-layout-grid u-pagination-center u-products u-products-2">
              <!--              <div class="u-repeater u-repeater-2">&lt;!&ndash;product_item&ndash;&gt;-->
              <!--                <div-->
              <!--                    class="u-align-center-lg u-align-center-sm u-align-center-xl u-align-center-xs u-container-style u-products-item u-repeater-item">-->
              <!--                  <ImageComponent2></ImageComponent2>-->
              <!--                </div>&lt;!&ndash;/product_item&ndash;&gt;&lt;!&ndash;product_item&ndash;&gt;-->
              <!--                <div-->
              <!--                    class="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-container-style u-products-item u-repeater-item">-->
              <!--                  <ImageComponent2></ImageComponent2>-->
              <!--                </div>&lt;!&ndash;/product_item&ndash;&gt;&lt;!&ndash;product_item&ndash;&gt;-->
              <!--              </div>-->
              <div class="u-list-control"></div>
            </div><!--/products-->
          </div>
        </section>
        <footer class="u-align-center u-clearfix u-footer u-grey-20 u-footer">
          <div class="u-align-left-xs u-clearfix u-sheet u-valign-bottom u-sheet-1"></div>
          <section class="u-backlink u-clearfix u-grey-80"><a
              href="https://nicepage.com/website-templates"
              target="_blank" class="u-link"><span
          >Website Templates</span></a>
            <p class="u-text"><span>created with</span></p><a
                href="" target="_blank"
                class="u-link"><span
            >Website Builder Software</span></a>.
          </section>
        </footer>
      </div>

    </div>
    <!--End of   Hamburger  menu-->

    <div>

    </div>


  </div>

</template>

<script>
import logitems from "../../../untitled1-vueproj-todelete/public/src/assets/phones.json"
import {mapState} from "vuex";
import ImageComponent from "../components/ProductsComponents/ImageComponent";
import ImageComponent2 from "../components/ProductsComponents/ImageComponent2";
import deepdash from "deepdash";
import lodash from "lodash-es";

export default {
  name: "Products",
  // props:['filteredProducts'],
  data() {
    return {
      logs: logitems,
      checkedNames: 'all',
      filteredProducts: [],
      requestedProducts: [],
      search: "",
      queryString: ""
    }
  },


  created() {
    const _ = deepdash(lodash);

    this.requestedProducts = _.flatMap(this.$store.getters.getAllProducts, ({
                                                                              newComing,
                                                                              onSale,
                                                                              ...item
                                                                            }) => newComing || onSale || [item]);

    this.filteredProducts = this.requestedProducts;

    this.queryString = this.$route.query.type;
    if (this.queryString === "Samsung") {
      this.checkedNames = "Samsung";
      this.filterProduct()
    } else if (this.queryString === "Iphone") {
      this.checkedNames = "IPhone";
      this.filterProduct()
    } else if (this.queryString === "miscellanous") {
      this.checkedNames = "miscellanous";
      this.filterProduct()
    } else if (this.queryString === "otherBrands") {
      this.checkedNames = "otherBrands";
      this.filterProduct()
    }
  },
  components: {ImageComponent2},
  computed: {},
  watch: {

    search: function (val) {
      this.checkedNames = "all";
      this.filteredProducts = this.requestedProducts.filter((l) => ([val].some(y => l.model.toLowerCase().includes(y.toLowerCase()))));
    },
  },

  methods: {
    filterProduct() {
      // const _ = deepdash(lodash);
      if (this.checkedNames === "all") {
        this.filteredProducts = this.requestedProducts;
      } else if (this.checkedNames === "miscellanous") {
        this.filteredProducts = this.requestedProducts.filter((l) => (['Power Bank', 'ear chargers'].some(y => l.model.includes(y))));
        return this.filteredProducts;
      } else if (this.checkedNames === "Samsung") { //for samsung and iphone
        this.filteredProducts = this.requestedProducts.filter((l) => l.model.toLowerCase().includes('samsung'));
        return this.filteredProducts;
      } else if (this.checkedNames === "IPhone") {
        this.filteredProducts = this.requestedProducts.filter((l) => l.model.toLowerCase().includes('iphone'));
      } else {
        this.filteredProducts = this.requestedProducts.filter((l) => (['Samsung', 'IPhone', 'Power Bank', 'ear'].every(y => !l.model.toLowerCase().includes(y.toLowerCase()))));
      }

    }
  },
}
</script>

<style scoped>
/* Vertical Menu*/
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*.u-expanded-width-md.u-expanded-width-sm.u-expanded-width-xs.u-layout-grid.u-pagination-center.u-products.u-products-1 {*/
/*  margin-top: 4em;*/
/*}*/

/*h1 {*/
/*  font-weight: lighter;*/
/*  color: #999;*/
/*}*/

/*body {*/
/*  max-height: unset;*/
/*  z-index: -100;*/
/*}*/

/*v-image v-responsive {*/
/*  margin: 15px;*/
/*  background-position: center bottom;*/
/*}*/

/*!*div.u-expanded-width-md.u-expanded-width-sm.u-layout-grid.u-pagination-center.u-products.u-products-2{*!*/
/*!*  !*grid-template-columns: calc(40% - 10.5px) calc(60% - 10.5px);*!*!*/
/*!*  background-color: #560636 !important;*!*/
/*!*}*!*/
/*.u-body.u-palette-5-light-2, .u-container-layout.u-palette-5-light-2:before, .u-container-style.u-palette-5-light-2:before, .u-palette-5-light-2, .u-table-alt-palette-5-light-2 tr:nth-child(even) {*/
/*  color: #111;*/
/*  background-color: #e0e5eb;*/
/*  margin: 2px;*/
/*}*/

/*.u-section-1 .u-image-6, .u-section-1 .u-image-8 {*/
/*  padding-top: 80px;*/
/*}*/

/*.u-align-center-sm u-align-center-xs u-clearfix u-gradient u-header u-sticky u-sticky-3a3f u-header {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  width: 100%;*/
/*  !*  to keep navbar position fixed*!*/
/*}*/

/*.u-container-layout.u-container-layout-2 {*/
/*  !*  all the prices label*!*/

/*}*/

/*!*.u-container-layout u-container-layout{*!*/
/*!*  margin-left:25%;*!*/
/*!*  background-color: #2b542c;*!*/
/*!*}*!*/
/*@media (max-width: 575px) {*/
/*  .u-repeater.u-repeater-1 { !*that will adjust the height of items if there are few of them so we wont have blanks*!*/
/*    min-height: auto !important;*/
/*    margin-left: -3%;*/
/*  }*/
/*}*/

.u-repeater.u-repeater-1 { /*that will adjust the height of items if there are few of them so we wont have blanks*/
  min-height: auto !important;
  margin-left: 18%;
  /*background-color: #1b6d86;*/
}

.u-section-1 .u-repeater-2 {
  margin-left: 15% !important;
}

@media (max-width: 575px) {
  div#app > div:nth-of-type(2) > div > div:nth-of-type(2) {
    margin: 0;
    padding-left: unset !important;
  }
}


@media (max-width: 575px) {
  .u-section-1 .u-image-6, .u-section-1 .u-image-8 {
    margin-top: 0 !important;
    margin-left: -13px !important;
  }

  /*[class='v-image v-responsive u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-image u-image-default u-product-control u-image-1 theme--light']{*/
  /*    margin-left: 1px;*/
  /*    height: 14vh;*/
  /*  }*/
}

.content {

  float: left;
  width: 80%;
  padding-left: 1rem;
}

.cormen input[type="checkbox"],
.cormen label {
  display: none;
}

.cormen {
  /*not really necessary, only used to position the menu on desktop, use your own preferred method */
  display: inline-block;
  width: 20%;
  float: left;
}

.cormen input[type="checkbox"] {
  display: none;
}

.cormen ul {
  list-style-type: none;
  width: 100%;
  margin: 0;
  margin-top: 10px !important;
  /*styling only, below*/
  padding: 1rem 12rem 0 1rem;
  background-color: #f9f6f6;
  opacity: 90%;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.cormen ul li {
  /*styling only, below*/
  padding-bottom: 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}

.cormen ul li input {
  display: block;
  /*styling only, below*/
  text-decoration: none;
  color: #151212;
  font-size: 1.3rem;
  text-transform: initial;
  text-decoration: none;
}

.cormen ul li a::before {
  content: ">";
  margin-right: 0.5rem;
}

.cormen ul li a:hover {
  /*styling only, below*/
  text-decoration: none;
}

.useropts {
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

span.details {
  order: 3;
  flex-grow: 1;
}

span.photo {
  order: 2;
}

span.cvs {
  order: 1;
  flex-grow: 1;
  text-align: right;
}

.v-image__image--contain {
  height: 2vh
}

.userphoto {
  background-color: #fff;
  border-radius: 50%;
  background-image: url("//aupairireland.ie//svg/brand-jobseeker.svg");
  height: 120px;
  width: 120px;
  background-size: 85px;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #fff;
}

@media (max-width: 1500px) {
  span.cormen input[type="checkbox"]:not(:checked) + ul .useropts {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.5rem;
  }

  span.cormen input[type="checkbox"]:not(:checked) + ul .useropts span {
    padding: 0 0.5rem;
  }

  span.cormen input[type="checkbox"]:not(:checked) + ul span.details {
    order: 3;
    flex-grow: 1;
  }

  span.cormen input[type="checkbox"]:not(:checked) + ul span.photo {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  span.cormen input[type="checkbox"]:not(:checked) + ul span.cvs {
    order: 2;
    flex-grow: 1;
    text-align: right;
  }
}

@media (max-width: 1100px) {
  span.cormen input[type="checkbox"]:not(:checked) + ul span.cvs div,
  span.cormen input[type="checkbox"]:not(:checked) + ul span.details div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 400px) {
  span.cormen input[type="checkbox"]:checked + ul .useropts {
    flex-wrap: wrap;
  }

  span.cormen input[type="checkbox"]:checked + ul span.photo {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  span.cormen input[type="checkbox"]:checked + ul span.details {
    order: 3;
    flex-grow: 1;
  }

  span.cormen input[type="checkbox"]:checked + ul span.cvs div,
  span.cormen input[type="checkbox"]:checked + ul span.details div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .cormen {
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    /*styling only below, used to position the hamburger, 'width' will change depending on the 'left' value*/
    top: 110px;
    left: 18px;
    width: calc(100% - 58px);
    /*add a max width if you don't want it spanning the page*/
    max-width: 200px;
  }

  .cormen label {
    display: flex;
    width: 60px;
    height: 60px;
    position: relative;
    text-indent: 999px;
    font-size: 0;
    color: transparent;
    overflow: hidden;
    border-radius: 50%;
    background-color: #878933;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .cormen label::before {
    content: url("//aupairireland.ie/svg/icon-hamburger-white.svg");
    display: inline-block;
    width: 60px;
    height: 60px;
    position: absolute;
    /*top: 0;*/
    left: 0;
    text-indent: 0;
    overflow: visible;
    font-size: 22px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .cormen ul {
    display: none;
    list-type: none;
    min-width: 100%;
    border-radius: 1rem;
  }

  span.cormen input[type="checkbox"]:checked + ul {
    display: block;
    animation-name: fadein;
    animation-duration: 350ms;
  }

  input#search {
    /*padding: 0.375rem 4.75rem !important;*/
    width: 112px !important;
  }


  /*  @media (max-width:360 px){*/
  /*.u-align-center:not.u-container-layout u-similar-container u-container-layout-5{*/
  /*  left:-2;max-width:200px;*/
  /*}*/
  /*}*/
  /*    @media (max-width:360 px){*/
  /*  .u-header.u-sticky {*/
  /*    position: fixed  ;*/
  /*  }*/
  /*}*/
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


}


/* End Vertical Menu*/
</style>