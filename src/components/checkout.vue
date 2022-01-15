<template>
  <!--  <div>-->

  <!--    <div ref="card" ></div>-->
  <!--&lt;!&ndash;    <button v-on:click="purchase">Purchase</button>&ndash;&gt;-->
  <!--  </div>-->

  <div>
    <stripe-element-card
        ref="elementRef"
        :pk="publishableKey"
        :hidePostalCode="true"
        @token="tokenCreated"
    />
    <button @click="submit">Generate token</button>
    <div>
      <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="v => loading = v"
      />
      <button @click="submit" >Pay now!</button>
    </div>

  </div>
</template>


<script>

import {StripeElementCard} from '@vue-stripe/vue-stripe';
import {StripeCheckout} from '@vue-stripe/vue-stripe';
import axios from "axios";
// import Checkout from "../components/checkout";
import {loadStripe} from "@stripe/stripe-js";


export default {

  data() {
    this.publishableKey = `pk_test_51JxFORIzUJ8Yj6LrjVZG3GdxozlwMMPph4oy4izqxp4J1hhS2bBPmfpk9zRKDOKsyEE9u3upoRyBBQIdZP1msoG700CXyDqmyJ`;

    // Create an instance of the card Element

    return {
      token: null,
      loading: false,
      payment_method_types: ['card'],
      lineItems: [
        {
          price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
          name: 'Buy Now',
          // images: ['image.jpg'],
          amount: 100 + '00',
          currency: 'usd',

        },
      ],
      mode: "payment",
      successURL: 'http://localhost:8080/success?session_id={CHECKOUT_SESSION_ID}',
      cancelURL: 'http://localhost:8080/failure',
    };
  },
  //# Set your secret key. Remember to switch to your live secret key in production.
// stripe:loadStripe(),
//   elements:stripe.elements(),
  components: {
    StripeElementCard, StripeCheckout
  },
  methods: {
    submit() {
      // this will trigger the process
      this.$refs.checkoutRef.redirectToCheckout();
      // this.$refs.elementRef.submit();
    },
    tokenCreated(token) {
      let self = this;
      alert(token);
      console.log(token);
      // this.stripeTokenHandler(token);
    },

    // stripeTokenHandler(token) {
    //   var form = document.getElementById('payment-form');
    //   var hiddenInput = document.createElement('input');
    //   hiddenInput.setAttribute('type', 'hidden');
    //   hiddenInput.setAttribute('name', 'stripeToken');
    //   hiddenInput.setAttribute('value', token.id);
    //   form.appendChild(hiddenInput);
    //   // Submit the form
    //   form.submit();
    // },
    //
    // async checkout() {
    //   let params = {
    //     payment_method_types: ['card'],
    //     line_items: [
    //       {
    //         name: 'Buy Now',
    //         images: ['image.jpg'],
    //         amount: 100 + '00',
    //         currency: 'usd',
    //         quantity: 1,
    //       },
    //     ],
    //     mode: 'payment',
    //     success_url: `${process.env.URL}/success`,
    //     cancel_url: window.location.href,
    //   };
    //
    //   try {
    //     const {data} = await axios.post(`${process.env.API_BASE_URL}/stripe/session`, params, {
    //       'Content-type': 'application/json',
    //       Accept: 'application/json',
    //     });
    //     this.stripeSession = data.data;
    //     const stripe = await loadStripe('pk_test_51JxFORIzUJ8Yj6LrjVZG3GdxozlwMMPph4oy4izqxp4J1hhS2bBPmfpk9zRKDOKsyEE9u3upoRyBBQIdZP1msoG700CXyDqmyJ');
    //     await stripe.redirectToCheckout({sessionId: this.stripeSession});
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
};
</script>

<style scoped>

</style>
//https://vuestripe.com/stripe-checkout/one-time-payment/
//https://marcusthesmith.medium.com/integrating-with-stripe-background-cf77c3a5a41#0820
//https://marcusthesmith.medium.com/integrating-with-stripe-server-basics-54a928a7c13b