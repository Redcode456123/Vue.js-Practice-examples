<template>
  <div>
    <section class="row payment-form" style="max-width: unset;margin:unset;margin-top:200px">

      <h5 class="#e0e0e0 grey lighten-4">
        <!--        Payment Method-->
        <!--        <span class="right" v-text="'$'+amount"></span>-->
      </h5>

      <div class="error red center-align white-text" style="color: red">
        {{stripeValidationError }}
      </div>

      <div class="col s12 card-element">
        <label style="margin-bottom: 10px;">Card Number</label><br>
        <div class="row">
          <div id="card-number-element" style="width: 100%;position:absolute;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;">
          </div>
        </div>

      </div>

      <div class="col s6 card-element" style=";margin-left:8px">
        <label style="margin-bottom: 10px;">Expiry Date</label>
        <div class="row">
          <div id="card-expiry-element" style=";width:100%;position:absolute;

    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;"></div>
        </div>
      </div>


      <div class="col s6 card-element">
        <label style="margin-bottom: 22px;">CVC</label>
        <div id="card-cvc-element" style="width: 100%;
    margin-bottom: 30px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;"></div>
      </div>

      <div class="col s12 place-order-button-block">
        <button class="btn col s12 btn btn-primary" @click="placeOrderButtonPressed">PlaceOrder</button>
      </div>

    </section>
<!--    <p>{{this.total }}</p>-->
<!--    <p>{{ this.emailAdd }}</p>-->
<!--    <p>{{ this.name }}</p>-->
    <!--    <p>{{ JSON.stringify(this.address) }}</p>-->
    <p>naim</p>
  </div>
</template>

<script>

import axios from "axios";

export default {
  // props: {
  //   // address: Object,
  //   emailAdd: String,
  //   name: String,
  //   total: Number,
  // },

  emailAdd: "",
  name: "ckeckoutVisa",
//4242424242424242


  data() {

    return {
      loading: false,
      amount: "500",
      name: "naim",
      email: "naim.rach@gmail.com",
      // card: {
      //   number: document.getElementById('card-number-element') != null ? document.getElementById('card-number-element').value : "",
      //   cvc: document.getElementById('card-cvc-element') != null ? document.getElementById('card-cvc-element').value : "",
      //   // expiry: document.getElementById('card-expiry-element') != null ? document.getElementById('card-expiry-element').value : "",
      //   exp_month: '01',
      //   exp_year: '2022',
      //   // cvc: cardCVC,
      //   address_state: 'US',
      //   address_zip: '98251',
      // },
      "object": "charge",
      description: 'Example charge',
      // source: token,
      stripeValidationError: '',

      // name: this.name,
      // email: this.email,
      // address: this.address,
      // "shipping": {
        address: {
          country: "US",
          street: '123 Something Lane',//means street
          city: 'San Francisco',
          state: 'CA',
          postal_code: '94607' //means zip
        },
      // },
      //elements
      // cardExpiry: '02/22',
      // cardCvc: '123',
      stripe: null,

      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,

    }
  },
  mounted() {

    this.amount = this.$store.getters.getTotalToPay;
    this.stripe = Stripe("pk_test_51JxFORIzUJ8Yj6LrjVZG3GdxozlwMMPph4oy4izqxp4J1hhS2bBPmfpk9zRKDOKsyEE9u3upoRyBBQIdZP1msoG700CXyDqmyJ")
    this.createAndMountFormElements();
    // let charge_id = Array(19).fill(0).map(x => Math.random().toString(36).charAt(2)).join('');//19 chars long

  },


  methods: {

    placeOrderButtonPressed() {
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      this.stripe.createToken(this.cardNumberElement).then(result => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
        } else {

          var charge = {
            name: this.name,
            email: this.email,
            address: this.address,
            amount: this.amount,
            token: result.token.id,

            source: 'tok_visa',//result.token,
          }//4242424242424242
          axios.post(`http://localhost:3000/charge`, charge)
              .then((res) => {
                // this.orderDetails = res.data.charge;
                var error = res.data.error;
                var charge = res.data.charge;
                if (error) {
                  this.stripeValidationError = (JSON.stringify(error.decline_code));
                  // alert(error)
                  console.error(error);
                } else {
                  this.$router.push({path: `order-complete/${charge.id}`})
                }
              });

        }
      });
    },

    createAndMountFormElements() {
      var elements = this.stripe.elements();

      this.cardNumberElement = elements.create("cardNumber");
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement = elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement = elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");

      this.cardNumberElement.on("change", this.setValidationError);
      this.cardExpiryElement.on("change", this.setValidationError);
      this.cardCvcElement.on("change", this.setValidationError);

    },
    reset() {
      this.clearElementInputs()
      this.clearCardErrors()
    },


    clearElementInputs() {
      this.cardCvc.clear()
      this.cardExpiry.clear()
      this.cardNumber.clear()
    },
    clearCardErrors() {
      this.stripeError = ''
      this.cardCvcError = ''
      this.cardExpiryError = ''
      this.cardNumberError = ''
    },


    setValidationError(event) {
      this.stripeValidationError = event.error ? event.error.message : "";
    },
  }
}
</script>

<style scoped>
.payment-form {
  max-width: 400px;
  /*margin: 20px auto;*/
  margin: 170px auto;
  border: 1px solid #ececec;
}

.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}

.card-element {
  margin-top: 5px;
}

#card-number-element,
#card-expiry-element,
#card-cvc-element {
  background: white;
  padding: 5px;
  border: 1px solid #ececec;
}

.place-order-button-block {
  margin: 10px 0;
}
</style>
//https://github.com/softauthor/vue-stripe-elements-cloud-functions/blob/master/start/src/components/Checkout.vue
//https://softauthor.com/vue-stripe-elements-firebase-build-a-checkout-form/#download-starter-vue-project

//https://codepen.io/ebucis/pen/gWGgXE