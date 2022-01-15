<template>
  <div>
    <!--            <link rel="stylesheet" href="public/src/assets/css/nicepage.css" media="screen">-->
    <!--            <link rel="stylesheet" href="/src/assets/css/Copy-of-Home.css" media="screen">-->

    <!-- Starting hamburger menu-->
    <div style="position:relative">
      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <div class="wrap">
        <span class="cormen" style="padding-top:20px;z-index:1">
        <label name="hamburger menu" for="cormid">Click to open menu</label>
        <input id="cormid" type="checkbox">
        <ul>
          <div style=" display: inline-block; width:90%;">
<span id='close' style="float:right;cursor:pointer;font-size: 21px;margin-right: -15px;" ref="close"
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


  <!--            <li><a href="#">Search Jobs</a></li>-->
  <!--            <li><a href="#">Saved Jobs</a></li>-->
  <!--            <li>MAILBOX</li>-->
  <!--            <li><a href="#">Inbox</a></li>-->
  <!--            <li><a href="#">Outbox</a></li>-->
      </div>
        </ul>
    </span>
      </div>
      <!-- start of website content -->
      <div style="margin-top: 15%;width: 100%; ">
        <ul style="display: grid;grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); ">
          <li v-for="products in filteredProducts" :key="products.id"
              style="width: 80%;display: inline; ;margin:0px">
            <v-img :src="products.image" alt="" contain height="60vh" width="auto"></v-img>
            <div  class="card frosted-card text-white" style="text-align: center">
              <div class="card-body">
              <h4>
                <a style="color:black"> {{ products.model }} </a>
              </h4>

<!--              <div class="u-align-left u-product-control u-product-price u-product-price-1">-->
<!--                <div class="u-price-wrapper u-spacing-10">-->
<!--                  <div class="u-hide-price u-old-price">$12</div>-->
                  <div class="u-price" style="font-size: 1.25rem; text-align: center !important; color:orangered" >${{
                      products.price
                    }}
                  </div>
<!--                </div>-->
<!--              </div>-->



              <a>
                <router-link :to="{path: '/showDetail',query:{id:products.id}}">
                  See Details
                </router-link>
              </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- end for item 1        -->

      <!--        <div class="item">2</div>-->
      <!--        <div class="item">3</div>-->
      <!--        <div class="item">4</div>-->

    </div>
    <div>
      <footer data-v-abb9de30="" data-v-fae5bece="" id="sec-b4e8"
              class="u-align-center u-clearfix u-footer u-grey-80 u-footer">
        <div data-v-abb9de30="" data-v-fae5bece=""
             class="u-align-left-xs u-clearfix u-sheet u-valign-bottom u-sheet-1"></div>
        <section data-v-abb9de30="" data-v-fae5bece="" class="u-backlink u-clearfix u-grey-80"><a data-v-abb9de30=""
                                                                                                  data-v-fae5bece=""

                                                                                                  target="_blank"
                                                                                                  class="u-link"><span
            data-v-abb9de30="" data-v-fae5bece="">Website Templates</span></a>
          <p data-v-abb9de30="" data-v-fae5bece="" class="u-text"><span data-v-abb9de30=""
                                                                        data-v-fae5bece="">created with</span></p><a
              data-v-abb9de30="" data-v-fae5bece="" href="" target="_blank" class="u-link"><span data-v-abb9de30=""
                                                                                                 data-v-fae5bece="">Website Builder Software</span></a>.

        </section>
      </footer>
    </div>
  </div>
  <!--End of   Hamburger  menu-->

</template>

<script>
import logitems from "../../public/src/assets/phones.json";
import deepdash from "deepdash";
import flatMap from "lodash-es";


export default {

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
  mounted() {


    // alert(this.queryString)
    const _ = deepdash(flatMap);
    this.requestedProducts = (_.flatMap(this.logs, ({
                                                      newComing,
                                                      onSale,
                                                      ...item
                                                    }) => newComing || onSale || [item]));
    // alert("calling from mounted: " + this.$store.getters.getAllProducts)

    this.filteredProducts = this.requestedProducts;
    this.queryString = this.$route.query.type;
// alert(this.queryString==="")
    if (this.queryString !== "") {
      if (this.queryString === "Samsung") {
        this.checkedNames = "Samsung";
        this.filteredProducts = this.requestedProducts.filter((l) => l.model.toLowerCase().includes('iphone'));
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
    }
  },
  components: {},
  watch: {

    search: function (val) {
      this.checkedNames = "all";
      this.filteredProducts = this.requestedProducts.filter((l) => ([val].some(y => l.model.toLowerCase().includes(y.toLowerCase()))));
      // let element = document.querySelector('#close');
      // element.click()
    },
  },

  methods: {
    filterProduct() {

      if (this.checkedNames === "all") {
        this.filteredProducts = this.requestedProducts
        this.$refs.close.click()
      } else if (this.checkedNames === "miscellanous") {
        this.filteredProducts = this.requestedProducts.filter((l) => (['Power Bank', 'ear chargers'].some(y => l.model.includes(y))));
        this.$refs.close.click()
      } else if (this.checkedNames === "Samsung") { //for samsung and iphone
        this.filteredProducts = this.requestedProducts.filter((l) => l.model.toLowerCase().includes('samsung'));
        this.$refs.close.click()
      } else if (this.checkedNames === "IPhone") {
        this.filteredProducts = this.requestedProducts.filter((l) => l.model.toLowerCase().includes('iphone'));
        this.$refs.close.click()
      } else {
        this.filteredProducts = this.requestedProducts.filter((l) => (['Samsung', 'IPhone', 'Power Bank', 'ear'].every(y => !l.model.toLowerCase().includes(y.toLowerCase()))));
        this.$refs.close.click()
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

.animated.fadeInUp-played.u-product-control {
  color: rgb(122, 79, 79);
  mix-blend-mode: difference;
  font-size: 3.0vh;
}


body {
  font-family: "Alegreya Sans", sans-serif;
  font-size: 1.3rem;
  color: #666;

}

div.images {
  display: flex;
  flex-flow: column;
}

div.images div.row {
  display: flex;
  flex-flow: row;
  margin: 122px;
}

div.images img {
  width: 200px;
  height: 200px;
}


h1 {
  font-weight: lighter;
  color: #999;
}

/*div.u-expanded-width-md.u-expanded-width-sm.u-layout-grid.u-pagination-center.u-products.u-products-2{*/
/*  !*grid-template-columns: calc(40% - 10.5px) calc(60% - 10.5px);*!*/
/*  background-color: #560636 !important;*/
/*}*/

.item {
  width: 50%
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  padding-top: 15%
}

@media (max-width: 575px) {
  div#app > div:nth-of-type(2) > div > div[data-v-7177119e]:nth-of-type(2) {
    margin-left: 20%;
    padding-left: unset !important;
    margin-top: 20%;
    padding-top: 33px;
  }
}

.container > div {
  flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
  /*demo*/
  box-shadow: 0 0 0 1px black;
  margin-bottom: 10px;
}


/*.u-section-1 .u-image-6, .u-section-1 .u-image-8 {*/
/*  margin: 29px 13px 0 auto;*/
/*}*/

/*.u-container-layout u-container-layout{*/
/*  margin-left:25%;*/
/*  background-color: #2b542c;*/
/*}*/

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
}

.u-blog:not(.u-repeater) .u-repeater, .u-list:not(.u-repeater) .u-repeater, .u-products:not(.u-repeater) .u-repeater {
  flex: 1;
}

@media (max-width: 575px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: calc(50% - 10.5px) calc(50% - 10.5px);
    grid-gap: 21px 21px;
    min-height: 649px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
    grid-auto-columns: 100%;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-repeater-1 {
    grid-auto-columns: calc(100% - 0px);
  }
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
  /*styling only, below*/
  /*padding: 1rem 1rem 0 1rem;*/
  background-color: #f9f6f6;
  opacity: 80%;
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

.cormen ul li a {
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
    top: 150px;
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


  /*.section-1.u-repeater-1{*/
  /*  margin-top: 0px !important;*/
  /*  padding-top:0px;*/
  /*  background-color: aliceblue;*/
  html {
    max-height: 0px !important;
  }


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

.frosted-card {
  background-color: rgba(169, 134, 134, 0.05);
  overflow: hidden;
}

.frosted-card:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: inset 0 0 1000px rgba(0,0,0,.5);
  filter: blur(40px);
}

.frosted-card h3 {
  font-weight: 100 !important;
  text-shadow: 1px 0px 1px rgba(0,0,0,.15);
  text-align: center;
}

.frosted-card p {
  font-weight:100;
  text-shadow: 1px 0px 1px rgba(0,0,0,.15);
  font-size: .875rem;
  text-align: center;
}


</style>
//https://namers.com/#/