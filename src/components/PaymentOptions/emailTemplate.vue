<template>
  <div id="content" style="padding-top: 5%">
    <div class="card">
      <div class="row">
        <div class="col-md-8 cart">
          <div class="title">
            <div class="row">
              <div class="col">

              </div>

            </div>
          </div>

          <div class="row border-top border-bottom" style="padding-top:8%">
            <h4><b>Shopping Cart</b></h4>

            <div class="col align-self-center text-right text-muted">{{ myCart.length }} models</div>

            <transition-group name="slide-fade">
              <div class="row main align-items-center" v-for="(itemRequested,index) in myCart" :key="index+0">

                <div class="col-2">
                  <img class="img-fluid" :src="itemRequested.image"
                       @click="$router.push({path: '/showDetail',query:{id:itemRequested.id}})" style="cursor: pointer">
                </div>

                <div class="col">
                  <div class="row text-muted">{{ itemRequested.model }}</div>
                  <!--                <div class="row">Cotton T-shirt</div>-->
                </div>

                <div class="col">
                  <a
                      href="#"
                      class="border">{{
                      itemRequested.quantity
                    }} </a>
                </div>
                <div class="col">
                  $ {{ (parseInt(itemRequested.quantity)) * (parseInt(itemRequested.price)) }}
                </div>


              </div>
            </transition-group>

          </div>
          <!--      -->
          <!--            <button class="btn" @click="$store.commit('resetCart')">clear Cart</button>-->
          <!--            <button class="btn" @click="$router.push({path: '/products'})">continue shopping</button>-->
          <!--          </div>-->
        </div>
        <!--        <cartcomponent></cartcomponent>-->
        <div class="col-md-4 summary" style="padding-top: 5%">
          <div>
            <h5><b>Summary</b></h5>
          </div>
          <hr>
          <div class="row">
            <div class="col" style="padding-left:50%;">{{ this.$store.getters.getTotalItemsInCart }} ITEMS</div>
            <!--            <div class="col text-right">&euro; 132.00</div>-->
          </div>
          <form>
            <p>Customer Name</p>
            <input id="name" disabled>
            <p>Payment method</p>
            <select>
              <option class="text-muted" disabled>Will be calculated on checkout</option>
            </select>
            <p>Charge ID</p>
            <input id="code" disabled>
          </form>
          <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
            <div class="col">TOTAL PRICE</div>
            <div class="col text-right">$ {{ $store.getters.getTotalToPay }}</div>
          </div>
          <button class="btn">
            Status:
          </button>
        </div>
      </div>
    </div>
    <footer data-v-fae5bece="" id="sec-b4e8" class="u-align-center u-clearfix u-footer u-grey-80 u-footer">
      <div data-v-fae5bece="" class="u-align-left-xs u-clearfix u-sheet u-valign-bottom u-sheet-1"></div>
      <section data-v-fae5bece="" class="u-backlink u-clearfix u-grey-80"><a data-v-fae5bece=""
                                                                             href="https://nicepage.com/website-templates"
                                                                             target="_blank" class="u-link"><span
          data-v-fae5bece="">Website Templates</span></a>
        <p data-v-fae5bece="" class="u-text"><span data-v-fae5bece="">created with</span></p><a data-v-fae5bece=""
                                                                                                href="" target="_blank"
                                                                                                class="u-link"><span
            data-v-fae5bece="">Website Builder Software</span></a>.
      </section>
    </footer>
  </div>


</template>

<script>

export default {
  name: "Cart",

  data() {
    return {};
  },

  computed: {
    myCart: function () {
      return this.$store.getters.getMyCart;
    },
    disableCheckout: function () {
      return this.myCart.length > 0 ? false : true;
    },

  },


  methods: {
    delete(index) {
      this.result.splice(index, 1);
    },

  },

}
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}


body {
  /*width: 80%;*/
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: block;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold
}

.title {
  margin-bottom: 5vh
}

.card {
  margin: auto;
  /*max-width: 950px;*/
  /*width: 90%;*/
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent
}

@media (max-width: 767px) {
  .card {
    margin: 3vh auto
  }
}

.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem
}

@media (max-width: 767px) {
  .cart {
    padding: 4vh;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem
  }
}

.summary {
  background-color: #ddd;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(65, 65, 65)
}

@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem
  }
}

.summary .col-2 {
  padding: 0
}

.summary .col-10 {
  padding: 0
}

.row {
  margin: 0
}

.title b {
  font-size: 1.5rem
}

.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%
}

.col-2,
.col {
  padding: 0 1vh
}

a {
  padding: 0 1vh
}

.close {
  margin-left: auto;
  font-size: 0.7rem
}

img {
  width: 3.5rem
}

.back-to-shop {
  margin-top: 4.5rem
}

h5 {
  margin-top: 4vh
}

hr {
  margin-top: 1.25rem
}

form {
  padding: 2vh 0
}

select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247)
}

input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247)
}

input:focus::-webkit-input-placeholder {
  color: transparent
}

.btn {
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0
}

.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none
}

.btn:hover {
  color: white
}

a {
  color: black
}

a:hover {
  color: black;
  text-decoration: none
}

#code {
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center
}

.border-bottom.border-top.row > .align-items-center.main.row {
  text-align: center !important;
}

.back-to-shop {
  text-align: center;
}

.back-to-shop span {
  margin: 5px;
}

.back-to-shop > .btn {
  width: unset;
  margin: 5px;
  /*margin-left: 10%;*/
}

@media (max-width: 400px) {
  .border-bottom.border-top.row > h4 {
    text-align: center;
    background-color: #ddd;
  }
}
div#Navbar{
position:absolute
}

</style>