<template>
  <div>

    <section class="row payment-form">

      <h5 class="#e0e0e0 grey lighten-4">
        Payment Method
        <span class="right">${{ amount }}</span>
      </h5>

      <div class="error red center-align white-text">
        {{ stripeValidationError }}
      </div>

      <div class="col s12 card-element">
        <label>Card Number</label>
        <div id="card-number-element" class="input-value">

        </div>
      </div>

      <div class="col s6 card-element">
        <label>Expiry Date</label>
        <div id="card-expiry-element"></div>
      </div>

      <div class="col s6 card-element">
        <label>CVC</label>
        <div id="card-cvc-element"></div>
      </div>

      <div class="col s12 place-order-button-block">
        <button class="btn col s12 #e91e63 pink" @click="placeOrderButtonPressed">PlaceOrder</button>
      </div>

    </section>

  </div>
</template>

<script>

export default {
  name: "creditCard",
//4242424242424242
  data() {

    return {
      card: {
        cvc: '',
        number: '',
        expiry: '',
      },
      "object": "charge",
      description: 'Example charge',
      // source: token,
      stripeValidationError: "",
      amount: 25,
      name: "naim",
      email: "naim.rach@gmail.com",
      "address_city": "New York",
      "address_country": "USA",
      "billing_details": {

        "address": {
          "city": "Hammana",
          "country": "Lebanon",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null,
          "balance_transaction": "txn_3JxFV8IzUJ8Yj6Lr0Uki3jjN",
        },
        // "email": null,

        "phone": null,
        currency: 'usd',
        //elements
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
        stripe: null,

        cardNumberElement: null,
        cardExpiryElement: null,
        cardCVCElement: null,
      }
    }
  },
  mounted() {
    this.stripe = Stripe("pk_test_51JxFORIzUJ8Yj6LrjVZG3GdxozlwMMPph4oy4izqxp4J1hhS2bBPmfpk9zRKDOKsyEE9u3upoRyBBQIdZP1msoG700CXyDqmyJ")
    this.createAndMountFormElements()
  },
  methods: {

    placeOrderButtonPressed() {
      this.stripe.createToken(this.cardNumberElement).then(result => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
          alert(this.stripeValidationError)
        } else {
          var stripeObject = {
            amount: this.amount,
            source: result.token
          }

          // this.saveDataToFireStore(stripeObject)
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