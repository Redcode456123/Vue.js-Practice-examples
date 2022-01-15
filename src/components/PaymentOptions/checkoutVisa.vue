<template>
  <div>
    <form id="payment-form">
      <section class="row payment-form" style="max-width: unset;margin:unset">

        <h5 class="#e0e0e0 grey lighten-4">
          <!--        Payment Method-->
          <!--        <span class="right" v-text="'$'+amount"></span>-->
        </h5>

        <div class="error red center-align white-text" style="color: red">
          {{ stripeValidationError }}
        </div>

        <div class="col s12 card-element" ref="card-number">
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
          <button class="btn col s12 btn btn-primary" @click.prevent="placeOrderButtonPressed" :disabled="this.disabled" hidden="hidden"
          >
            PlaceOrder
          </button>
        </div>

      </section>
      <!--    <p>{{ this.total }}</p>-->
      <!--    <p>{{ this.emailAdd }}</p>-->
      <!--    <p>{{ this.name }}</p>-->
      <!--    &lt;!&ndash;    <p>{{ JSON.stringify(this.address) }}</p>&ndash;&gt;-->
<!--          <p>{{!invalid}}</p>-->
    </form>
    <p>4000056655665556</p>
<!--    <p>{{ this.firstNameCredit }}</p>-->
  </div>
</template>

<script>

import axios from "axios";
// import * as Stripe from "stripe";


export default {
  props: {
    address: Object,
    emailAdd: String,
    name1: String,
    total: Number,
    phone: String,
    invalid:Boolean,
  },

  emailAdd: "",
  // name: "ckeckoutVisa",
//4242424242424242


  data() {
    return {
      disabled: true,
      amount: "500",
      email: this.emailAdd,
      cardElementContainer: "",

      card: {
        number: document.getElementById('card-number-element') != null ? document.getElementById('card-number-element').value : "",
        cvc: document.getElementById('card-cvc-element') != null ? document.getElementById('card-cvc-element').value : "",
        expiry: document.getElementById('card-expiry-element') != null ? document.getElementById('card-expiry-element').value : "",
        // exp_month: '01',
        // exp_year: '2022',
        // cvc: cardCVC,
        // address_state: 'US',
        // address_zip: '98251',
      },
      "object": "charge",
      description: 'Example charge',
      // source: token,
      stripeValidationError: '',

      // address: {
      //   country: "US",
      //   line1: '123 Something Lane',//means street
      //   city: 'San Francisco',
      //   state: 'CA',
      //   postal_code: '94607' //means zip
      // },
      // address: this.address,
      stripe: null,

      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,

      valid1: "",
      valid2: "",
      valid3: "",
      valid4: "",
      firstNameCredit: this.name1,
    }
  },

  mounted() {

    this.amount = this.$store.getters.getTotalToPay * 100;
    this.stripe = Stripe("pk_test_51JxFORIzUJ8Yj6LrjVZG3GdxozlwMMPph4oy4izqxp4J1hhS2bBPmfpk9zRKDOKsyEE9u3upoRyBBQIdZP1msoG700CXyDqmyJ")
    this.createAndMountFormElements();
    // this.cardElementNmber = document.querySelector('#card-number-element');
    // this.cardElementEmptyNmber = this.cardElementNmber.classList.contains('StripeElement--empty');
    // this.cardElementCvc = document.querySelector('#card-cvc-element');
    // this.cardElementEmptyCvc = this.cardElementCvc.classList.contains('StripeElement--empty');
    // this.cardElementExpiry = document.querySelector('#card-expiry-element');
    // this.cardElementEmptyExpiry= this.cardElementExpiry.classList.contains('StripeElement--empty');

    // let charge_id = Array(19).fill(0).map(x => Math.random().toString(36).charAt(2)).join('');//19 chars long

  },


  watch: {
    combined(value) {
      if (value) {
        this.disabled = false // passed validation
      } else {
        this.disabled = true
      }
    },


  },
  computed: {
    combined() {

      if (this.valid1 === "") this.valid1 = false;
      if (this.valid2 === "") this.valid2 = false;
      if (this.valid3 === "") this.valid3 = false;
      if (this.name1 === "") {
        this.valid4 = false
      } else {
        this.valid4 = true
      }
      this.$emit('variable', this.valid1 && this.valid2 && this.valid3 && this.valid4 && !this.invalid)
      return this.valid1 && this.valid2 && this.valid3 && this.valid4 && !this.invalid
    }
  },
  methods: {

    placeOrderButtonPressed() {
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      this.stripe.createToken(this.cardNumberElement).then(result => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
          this.$forceUpdate()

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
                  this.$router.push({path: `./order-complete?charge_id=${charge.id}`})
                  this.$emit('sendEmail');
                }
              });
        }
      });
    },

    createAndMountFormElements() {
      const vm = this;
      var elements = this.stripe.elements();


      this.cardNumberElement = elements.create("cardNumber", {showIcon: true,});
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement = elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement = elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");

      // this.cardNumberElement.addEventListener('change', function (event) {
      //   vm.toggleError(event);
      //   vm.cardNumberError = ''
      //   vm.card.number = event.complete ? true : false
      // });

      vm.cardNumberElement.addEventListener("change", function (event) {
        vm.setValidationError(event);
        vm.card.number = event.complete ? true : false
        vm.valid1 = vm.card.number;
      }),
          // this.cardNumberElement.on("blur", this.setValidationError);
          // this.cardExpiryElement.addEventListener("blur", function(event) {
          //   this.setValidationError(event);
          //   vm.card.expiry = event.complete ? true : false
          //   alert(vm.card.expiry)
          //
          // }),
          vm.cardExpiryElement.addEventListener("change", function (event) {
            vm.setValidationError(event);
            vm.card.expiry = event.complete ? true : false
            vm.valid2 = vm.card.expiry;
            // this.cardCvcElement.on("blur", this.setValidationError);
          })
      //
      vm.cardCvcElement.addEventListener("change", function (event) {
        vm.setValidationError(event);
        vm.card.cvc = event.complete ? true : false
        vm.valid3 = vm.card.cvc
      })
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