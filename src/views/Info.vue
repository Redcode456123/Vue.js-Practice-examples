<template>
  <form ref="form" @submit.prevent="sendEmail" enctype="multipart/form-data" name="message" method="post">

    <div ref="div" style="padding-top: 8px">
      <div class="row">
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


        <div class="col-75">
          <div class="container">
            <!--          <form action="/action_page.php">-->
            <form>
              <div class="myclass" style="margin-top:-10% !important">
                <div class="row">
                  <div class="col-50">
                    <h3>Billing Address <i v-bind:class="this.completed" v-bind:style="this.colorCompleted"></i></h3>
                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                    <input type="text" class="form-control" id="fname" placeholder="name" v-model="firstName"
                           style="text-align: center"/>
                    <!-------------------------------------------------- Started Name Field------------------------------------------------->
                    <div>
                      <div
                          v-bind:class="{ error: $v.firstName.$error }"
                          v-if="!$v.firstName.required"
                          style="color: brown;text-align: center;    margin-top: -5%;"
                      >
                        <p>Field is required</p>
                      </div>
                      <div
                          v-bind:class="{ error: $v.firstName.minLength.$error }"
                          v-if="!$v.firstName.minLength"
                          style="color: brown;    margin-top: -5%;"
                      >
                        Name must have at least
                        {{ $v.firstName.$params.minLength.min }} letters.
                      </div>
                      <div
                          v-bind:class="{ error: $v.firstName.$error }"
                          v-if="!$v.firstName.onlyText"
                          style="color: brown"
                      >
                        Name must be no numeric, no symbols, english only.
                      </div>
                    </div>
                    <!-------------------------------------------------- Finished Name Field------------------------------------------------->


                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" v-model="emailAdd">
                    <!-------------------------------------------------- Started Email verification------------------------------------------------->
                    <div>
                      <div
                          v-bind:class="{ error: $v.emailAdd.$error }"
                          v-if="!$v.emailAdd.required"
                          style="color: brown;    margin-top: -5%;text-align: center"
                      >
                        Email is required
                      </div>
                      <div
                          v-bind:class="{ error: $v.emailAdd.$error }"
                          v-if="!$v.emailAdd.email"
                          style="color: brown;text-align: center"
                      >
                        Email is wrong.
                      </div>
                    </div>
                    <!-------------------------------------------------- Finished Email Field------------------------------------------------->

                    <label for="phone"><i class="fa fa-phone"></i> Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="71-1444444" v-model="phoneNum">
                    <div
                        v-bind:class="{ error: $v.phoneNum.$error }"
                        v-if="!$v.phoneNum.onlyNumb"
                        style="color: brown;text-align: center"
                    >
                      Phone numbers must be 10 digits or less.
                    </div>


                    <!-------------------------------------------------- Finished Phone Field------------------------------------------------->

                    <label for="adr"><i class="fa fa-address-card-o"></i> Address-Street-Floor</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" v-model="address.line1">
                    <div
                        v-bind:class="{ error: $v.address.line1.$error }"
                        v-if="!$v.address.line1.required"
                        style="color: brown;text-align: center"
                    >
                      Address required
                    </div>

                    <label for="city"><i class="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="New York" v-model="address.city">
                    <div
                        v-bind:class="{ error: $v.address.city.$error }"
                        v-if="!$v.address.city.required"
                        style="color: brown;text-align: center"
                    >
                      City required
                    </div>
                    <div class="row">
                      <div class="col-50">
                        <label for="state">Governorates</label>
                        <select class="solid" id="state"
                                style=" border: #818080 solid;  width: 100%;  margin-bottom: 20px;    padding: 12px;    border: 1px solid #ccc;    border-radius: 3px;"
                                ref="selectedGovernorateref"
                                :v-model="selectedGovernorate" @change="onChangeGovernorate($event)">
                          <option>Akkar</option>
                          <option>Baalbek-Hermel</option>
                          <option>Beirut</option>
                          <option>Beqaa</option>
                          <option>Keserwan-Jbeil</option>
                          <option>Mount Lebanon</option>
                          <option>Nabatieh</option>
                          <option>North</option>
                          <option>South</option>
                        </select>
                        <!--                      <input type="text" id="state" name="state" placeholder="NY">-->
                      </div>
                      <div class="col-50">
                        <label for="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="10001" v-model="address.postal_code">
                      </div>
                    </div>
                  </div>
                  <!--Starting payment-->


                  <div class="col-50" style="top:100px" data-html2canvas-ignore>
                    <h3>Payment <i v-bind:class="this.paymentCompleted" v-bind:style="colorCompleted2"></i></h3>
                    <b-card no-body>
                      <b-tabs card>
                        <b-tab title="Credit Card" active>
                          <b-card-text>
                            <p>Credit card+Delivery:</p>
                            <label for="fname">Accepted Cards</label>

                            <div class="icon-container">
                              <i class="fa fa-cc-visa" style="color:navy;margin:1px"></i>
                              <i class="fa fa-cc-amex" style="color:blue;margin:1px"></i>
                              <i class="fa fa-cc-mastercard" style="color:red;margin:1px"></i>
                              <i class="fa fa-cc-discover" style="color:orange;margin:1px"></i>
                            </div>
                            <label for="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe"
                                   v-model="firstNameCredit" @keypress="isLetter($event)">

                            <checkoutVisa :address="address" :emailAdd="emailAdd" :name1="firstNameCredit"
                                          :invalid="this.$v.$invalid" :total="total" :phone="phoneNum"
                                          ref="childComponentRef" @sendEmail.prevent="sendEmail"
                                          @variable="handleInitiated($event)"></checkoutVisa>

                            <input class="form-check-input" type="checkbox"
                                   id="flexCheckDefault1" ref="flexCheckDefault1"
                                   v-on:change="clickedCashOnDelivery($event)">
                            <label class="form-check-label" for="flexCheckDefault1">
                              I confirm the delivery option with the fees involved. (check to show the rate).<br>
                              If unchecked means you will pick up the items by yourself.
                              <p style="font-size: 9px;color:darkred"> *Please note that credit card fees will be added
                                to your total , that in addition to any fees that your bank will deduct.Please check the
                                cart above.</p>
                            </label>
                            <!--                          <checkoutVisa :name="this.firstNameCredit"-->
                            <!--                                        :total=" $store.getters.getTotalToPay + deliveryChargeValue"></checkoutVisa>-->

                            <!--                          <label for="expmonth">Exp Month</label>-->
                            <!--                          <input type="text" id="expmonth" name="expmonth" placeholder="September">-->
                            <div class="row">
                              <div class="col-50">

                              </div>
                              <div class="col-50">

                              </div>
                              <!--                            <checkout></checkout>-->
                              <!--                            <button class="btn btn-primary">Submit</button>-->
                            </div>
                          </b-card-text>

                        </b-tab>


                        <b-tab title="Delivery" >
                          <b-card-text>
                            Cash On Delivery:
                            <br>
                            <br> Please check this option if you want items delivered to your address.
                            <br><br>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="deliveryCheckBox"
                                     id="deliverySelected"
                                     ref="deliverySelected" v-on:change="clickedCashOnDelivery($event);">
                              <label class="form-check-label" for="deliverySelected">
                                I confirm the delivery option with the fees involved. (check to show the rate).
                              </label>
                              <div class="form-floating">
                              <textarea class="form-control" placeholder="Leave a comment here"
                                        id="floatingTextarea" v-model="note"></textarea>
                                <label for="floatingTextarea" style="color: #667888">Leave a note</label>
                              </div>
                            </div>
                          </b-card-text>
                        </b-tab>

                        <b-tab title="Pickup">
                          <b-card-text>
                            Pickup/Cash on pickup:
                            <br><br>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="flexCheckDefault2"
                                     ref="flexCheckDefault2" value="flexCheckDefault2" v-on:change="completed2($event)"
                              >
                              <label class="form-check-label" for="flexCheckDefault2">
                                I confirm the pickup by maximum tomorrow*.
                                <DateTimePicker></DateTimePicker>
                                <p style="font-size: 9px;color:darkred"> *Please note that 2 or more missing pickups
                                  will
                                  put the user on blacklist for future pickups.</p>
                              </label>
                            </div>
                          </b-card-text>
                        </b-tab>

                      </b-tabs>
                    </b-card>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
              </label>
              <!--            <input type="submit" value="Finish Order/Confirm" class="btn" :disabled="$v.$invalid">-->
              <p style="color: brown;text-align: center">
                {{ this.onLine ? "" : "Please check your internet connection" }}</p>
              <input type="submit" value="Finish Order/Confirm" class="btn" :disabled="this.disableSubmit"
                     v-on:click.prevent="submitOptions">

            </form>
          </div>
        </div>

        <div class="col-25">
          <div class="container">
            <h4><a href="CartDetails">Cart </a><span class="price" style="color:black"><i
                class="fa fa-shopping-cart"></i> <b>{{
                this.$store.getters.getTotalItemsInCart
              }}</b></span>
            </h4>
            <div v-for="(item,index) in this.$store.getters.getMyCart" :key="index">
              <p><a style="font-size: 14px">{{ item.model }}</a> <span
                  class="price">({{ item.quantity }}x) ${{ item.price }}</span></p>
            </div>
            <!--          <p><a href="#">Product 2</a> <span class="price">$5</span></p>-->
            <!--          <p><a href="#">Product 3</a> <span class="price">$8</span></p>-->
            <!--          <p><a href="#">Product 4</a> <span class="price">$2</span></p>-->
            <hr>
            <p v-show="this.show" style="color:darkred;"> Delivery<span class="price">+  $ {{
                deliveryChargeValue
              }}</span>
            </p>
            <p v-show="this.showCreditCardFee" style="color:darkred;"> Credit Card Fees<span class="price">+  $ {{
                creditCardFees
              }}</span>
            </p>
            <p>Total <span class="price" style="color:black"><b>
            $ {{ total.toFixed(2) }}
          </b></span></p>
          </div>

          <p style="text-align: center">Charge ID: {{ this.charge_iddd }}</p>
        </div>

      </div>
      <div class="myfooter" style="padding-top: 10px">
        <footer data-v-fae5bece="" id="sec-b4e8" class="u-align-center u-clearfix u-footer u-grey-80 u-footer">
          <div data-v-fae5bece="" class="u-align-left-xs u-clearfix u-sheet u-valign-bottom u-sheet-1"></div>
          <section data-v-fae5bece="" class="u-backlink u-clearfix u-grey-80"><a data-v-fae5bece=""
                                                                                 href="https://nicepage.com/website-templates"
                                                                                 target="_blank" class="u-link"><span
              data-v-fae5bece="">Website Templates</span></a>
            <p data-v-fae5bece="" class="u-text"><span data-v-fae5bece="">created with</span></p><a data-v-fae5bece=""
                                                                                                    href=""
                                                                                                    target="_blank"
                                                                                                    class="u-link"><span
                data-v-fae5bece="">Website Builder Software</span></a>.
          </section>

        </footer>

      </div>

      <script src="https://smtpjs.com/v3/smtp.js" type="application/javascript"></script>
    </div>
  </form>

</template>

<script>

import {
  required,
  minLength,
  between,
  helpers,
  // email,
} from "vuelidate/lib/validators";
import email from "vuelidate/lib/validators/email";

import checkoutVisa from "../components/PaymentOptions/checkoutVisa";


import html2canvas from 'html2canvas';
import DateTimePicker from "../components/dateTimePicker";

export default {
  // setup: () => ({ v2: useVuelidate() }),

  name: "Info",
  data() {
    return {
      paymentCompleted: "fa fa-times-circle",
      creditCardFees: 0,
      onLine: navigator.onLine,
      showBackOnline: false,
      note: '',
      disableSubmit: true,
      creditCardFilled: false,
      selectedGovernorate: 'Akkar',
      deliveryChargeValue: 0,
      paymentType: "",
      // total: this.$store.getters.getTotalToPay + this.deliveryChargeValue,
      show: false,
      showCreditCardFee: false,
      charge_iddd: '',
      //***************************************************************

      cardBrand: null,
      firstNameCredit: "",
      // form: {
      firstName: "naim ra",
      emailAdd: "naim.ra@gmail.com",
      phoneNum: "905-7865432",
      // address: "",
      // city: "",
      address: {
        country: "US",
        line1: '123 Something Lane',//means street
        city: 'San Francisco',
        state: this.selectedGovernorate,
        postal_code: '987654' //means zip
      },
      // },
    };
  },
  // components: {Checkout}, //ToggleCheckBoxes
  validations: {

    emailAdd: {
      required: required,
      email: email,
    },
    //******************************************************
    firstNameCredit: {
      // required: required,
      // minLength: minLength(2),
      // onlyText(firstName) {
      //   return /(^$)|(^[a-zA-z]+([\s][a-zA-Z]+)*$)/.test(firstName); // checks for english letters and allow null at the beginning, allow space between 2 words
      // },
    },

    //***************
    firstName: {
      required: required,
      minLength: minLength(2),
      onlyText(firstName) {
        return /(^$)|(^[a-zA-z]+([\s][a-zA-Z]+)*$)/.test(firstName); // checks for english letters and allow null at the beginning, allow space between 2 words
      },
    },
    //***************
    phoneNum: {
      required: required,
      onlyNumb(phoneNumb) {
        return /^\D?(\d{2}|\d{3})\D?\D?(\d{3})\D?(\d{4}|\d{3})$/g.test(
            phoneNumb
        ); // checks for a-z
      },
    },
    //***************
    address: {
      required: required,
      city: {
        required: required,
      },
      line1: {
        required: required,
      },
    },
    //***************


  },


  computed: {

    total() {
      return (parseFloat(this.$store.getters.getTotalToPay) + parseFloat(this.deliveryChargeValue) + parseFloat(this.creditCardFees));
    },
    completed: function () {
      return this.$v.$invalid === false ? "fa fa-check-circle" : "fa fa-times-circle"
    },
    colorCompleted: function () {
      return this.$v.$invalid === false ? "color:green;" : "color:red";
    },
    colorCompleted2: function () {
      this.isValidSubmit()
      return this.paymentCompleted === "fa fa-check-circle" ? "color:green;" : "color:red";
    },


  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false; //when connected to router but dosent mean you have internet connection
        }, 1000);
      }
      this.onLine === false ? this.disableSubmit = true : null;
    },
    creditCardFilled() {
      this.completed2(null)
    }


  },
  mounted() {
    window.addEventListener('online', () => {
      this.onLine = true
    });
    window.addEventListener('offline', () => {
      this.onLine = false
    });
    this.charge_iddd = this.randomString(11)
  },

  methods: {

    completed2: function ($event) {

      if ($event === null) { //from watch
        if (this.creditCardFilled === true) {
          this.paymentCompleted = "fa fa-check-circle"
          return true
        }
      } else if (this.creditCardFilled === true) {
        this.paymentCompleted = "fa fa-check-circle"
        return true
      } else {
        if ($(event.target).is(":checked") === true) { //if cashondelivery or pickup is checked or creditcard checkbox is checked
          if (($event.target.id === 'flexCheckDefault2') || ($event.target.id === "deliverySelected")) {  //pickup or cash on delivery
            this.paymentCompleted = "fa fa-check-circle"
            return true
          } else {
            this.paymentCompleted = this.creditCardFilled === true ? "fa fa-check-circle" : "fa fa-times-circle";
            if (this.paymentCompleted === "fa fa-check-circle") {
              return true
            } else {
              return false
            }
          }
        } else { //nothing is checked
          this.paymentCompleted = "fa fa-times-circle"
          return false
        }
      }
      this.paymentCompleted = "fa fa-times-circle"
      return false
    },

    submitOptions() { //on clicking submit
      let conStatus = false;
      // alert(conStatus===false)
      fetch('https://google.com', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors',
      }).then((result) => {

        // this.onLine = true
        // alert(result)
        console.log(result)
        conStatus = true
      }).catch(e => {
        // console.error(e)
        // this.onLine = false

        conStatus = false
      })
      // alert(conStatus)
      if (conStatus === false) //
        if (this.creditCardFilled === true) { //credit card completed
          this.$refs.childComponentRef.placeOrderButtonPressed();//press button on child component
        } else { // for cash on delivery and pickup
          this.sendEmail();
        }
    }
    ,

    randomString(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
    ,


    async sendEmail() {
      let el = this.$refs.form;
      let message = "";
      Email.send({
        Host: "smtp.mailtrap.io",
        Username: "762ba49a205fd4",
        Password: "22dc0b0d50b802",
        To: 'naim.rach@gmail.com',
        From: "052e1701eb-e929c8@inbox.mailtrap.io",
        Subject: "Megacell purchase confirmation:  " + `${this.charge_iddd}`,
        Body: "<html><p>Hi " + `${this.firstName}` + ",</p>Congratulations! Your order for Megacell will be shipped out within 1-2 business days. support@megacell.com. " +
            "<p>Payment method: " + `${this.paymentType}` + " </p>" +
            "<p>Note: " + `${this.note}` + " </p>" +
            "<p>Order Date: " + `${new Date().getDate()}/${new Date().toLocaleString('en-us', {month: 'long'})}/${new Date().getFullYear()}` + " </p>" +
            "<p>Pickup Date: " + `${$("input[name='date']").val()}` + " </p>" +
            "<p>We sent you a confirmation email for your records. Thanks so much!</p></html>",
        Attachments: [
          {
            name: "smtp.png", //the file name that will be named in the attachment
            data: (await html2canvas(el)).toDataURL() //save a screenshot to send to email
          }]
      }).then(
          message => alert(message)//receive message from SMTP server
      )
      await this.$router.push({path: `./order-complete?charge_id=${this.charge_iddd}`})
    }
    ,

    // async sendEmail() {
    //    let el = this.$refs.form;
    //    this.output = (await html2canvas(el)).toDataURL();
    //
    //
    //    var templateParams = {
    //      to_name: 'xyz',
    //      from_name: 'abc',
    //      message_html:this.output
    //    };
    //
    //    emailjs.send('service_cyx4clb', 'template_9bwsrwq', templateParams,'user_qqtrTGGnXez9mRvdDjoC4')
    //
    //
    //    // emailjs.send('service_cyx4clb', 'template_9bwsrwq', this.$refs.form,
    //    //     'user_qqtrTGGnXez9mRvdDjoC4', {
    //    //       name: "this.firstNameCredit",
    //    //       email: "laravel_test123@outlook.com", //send from
    //    //       message: "this.message",
    //    //     })
    //        .then((result) => {
    //          console.log('SUCCESS!', result.text);
    //        }, (error) => {
    //          console.log('FAILED...', error.text);
    //        });
    //  },


    isValidSubmit() {
      this.disableSubmit = false
      if ((this.$v.$invalid === true) || this.onLine === false) {//address not completed or no internet
        this.disableSubmit = true //disable submit button
      } else { //address completed and there is internet connection
        if (this.creditCardFilled === true) { //credit card completed
          this.disableSubmit = false //enable submit button
          this.paymentType = "credit card"
          this.creditCardFees = (((this.total * 2.9) / 100) + 0.30).toFixed(2)
          this.showCreditCardFee = true
          // alert("ca")
          // return
        } else { //credit card incomplete
          this.disableSubmit = true
          this.creditCardFees = 0
          this.showCreditCardFee = false
        }
        if ($('input#flexCheckDefault2').prop('checked') || ($('input#deliverySelected').prop('checked'))) { //pickup or delivery are checked
          this.disableSubmit = false//enable submit button
          this.firstNameCredit = ""
        }
      }
    },

    handleInitiated(val) { //received from child component
      this.creditCardFilled = val  //return true or false
      this.isValidSubmit()
    },

    onChangeGovernorate(event) {

      this.selectedGovernorate = event.target.value;
      // alert(this.selectedGovernorate)
      if (($('input#flexCheckDefault1').prop('checked') === false) && ($('input#deliverySelected').prop('checked') === false)) {
        this.deliveryChargeValue = 0;
        return
      }
      // alert("invoked")
      if (event.target.value === "Akkar") {
        this.deliveryChargeValue = 25;

      } else if (event.target.value === "Baalbek-Hermel") {
        this.deliveryChargeValue = 15;
      } else if (event.target.value === "Beirut") {
        this.deliveryChargeValue = 65;
      } else if (event.target.value === "Keserwan-Jbeil") {
        this.deliveryChargeValue = 60;
      } else if (event.target.value === "Mount Lebanon") {
        this.deliveryChargeValue = 80;
      } else if (event.target.value === "Nabatieh") {
        this.deliveryChargeValue = 64;
      } else if (event.target.value === "North") {
        this.deliveryChargeValue = 35;
      } else if (event.target.value === "Beqaa") {
        this.deliveryChargeValue = 105;
      } else {
        this.deliveryChargeValue = 65;
      }
    }
    ,
    //  ****************************************


    clickedCashOnDelivery: function ($event) {
      // let targetValue =$event.target.value;
      // $event.target.value = 0 ||$event.target.value === "" ? (targetValue=0) : (targetValue = $event.target.value)

      $('input.form-check-input').on('change', function () { //toggle between 3 checkboxes
        $('input.form-check-input').not(this).prop('checked', false);
      });
      // alert("ppp" + $event.target.id)

      if (($('input#flexCheckDefault1').prop('checked')) || ($('input#deliverySelected').prop('checked'))) {
        const EVENTS = {
          name: 'my-event1',
          callback: () => console.log('event1'),
          target: {value: this.selectedGovernorate}
        };
        this.onChangeGovernorate(EVENTS)
        this.show = true //show delivery charge
      } else { //when no box is checked or pickup is checked
        // if ($('input#flexCheckDefault2').prop('checked')) {
        //   alert("httttttt")
        this.show = false
        this.deliveryChargeValue = 0;
        // }
      }
      // $event = null
      this.completed2($event)
    }
    ,
//********************************************************
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z\s]*$/.test(char)) return true;
      else e.preventDefault();
    }
  }
  ,
  components: {
    DateTimePicker,
    checkoutVisa
  }
  ,
}
</script>
<style scoped>

* {
  box-sizing: border-box;
}

form > div > div:nth-of-type(2) {
  background-color: #2A6496;
}


.row {
  margin-top: 10% !important;
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  /*padding: 5px 20px 15px 20px;*/
  /*border: 1px solid lightgrey;*/
  /*border-radius: 3px;*/
}

.col-75 > .container {
  margin-top: auto;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }

  .col-25 {
    margin-bottom: 20px;
  }

  @media (min-width: 600px) {
    /*for desktop*/
    .myclass {
      margin-top: -10% !important;
    }
  }

  @media (max-width: 767px) {
    /*for mobile*/
    .container {
      margin-top: 20%;
    }
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    position: relative
  }

  .myfooter {
    /*bottom:0px;*/
    /*position:absolute;*/
  }

  /*.fa.fa-check-circle{*/
  /*  color:green !important;*/
  /*}*/
  /*.fa-times-circle:before{*/
  /*  color:red !important*/
  /*}*/


}
</style>