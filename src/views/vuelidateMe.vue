<template>
  <div id="app" class="card">
    <form @submit.prevent="submitForm" action="" method="post">
      <div class="container mt-5">
        <div class="row text-center">
          <div>
            <h2 class="card-header">Simple Registration</h2>
            <label for="name">Name (english)&nbsp;&nbsp; الاسم (انكليزي)</label>
            <input
                type="text"
                class="form-control"
                id="name"
                placeholder="name"
                v-model="form.firstName"
                style="text-align: center"
            />

            <div
                v-bind:class="{ error: $v.form.firstName.$error }"
                v-if="!$v.form.firstName.required"
                style="color: brown"
            >
              Field is required
            </div>
            <div
                v-bind:class="{ error: $v.form.firstName.minLength.$error }"
                v-if="!$v.form.firstName.minLength"
                style="color: brown"
            >
              Name must have at least
              {{ $v.form.firstName.$params.minLength.min }} letters.
            </div>
            <div
                v-bind:class="{ error: $v.form.firstName.$error }"
                v-if="!$v.form.firstName.onlyText"
                style="color: brown"
            >
              Name must be no numeric, no symbols, english only.
            </div>

            <!--**********************************firstNameArab***********************************-->
            <label for="name">Name (arabic)&nbsp;&nbsp; الاسم (عربي)</label>
            <input
                type="text"
                class="form-control"
                id="nameArab"
                placeholder="name"
                v-model="form.firstNameArab"
                style="text-align: center"
            />

            <div
                v-bind:class="{ error: $v.form.firstNameArab.$error }"
                v-if="!$v.form.firstNameArab.required"
                style="color: brown"
            >
              Field is required
            </div>
            <div
                v-bind:class="{ error: $v.form.firstNameArab.minLength.$error }"
                v-if="!$v.form.firstNameArab.minLength"
                style="color: brown"
            >
              Name must have at least
              {{ $v.form.firstNameArab.$params.minLength.min }} letters.
            </div>
            <div
                v-bind:class="{ error: $v.form.firstNameArab.$error }"
                v-if="!$v.form.firstNameArab.onlyText"
                style="color: brown"
            >
              Name must be no numeric, no symbols, arabic only.
            </div>
            <!--**********************************lastName*******************************-->
            <label for="family">Family name</label>
            <input
                type="text"
                class="form-control"
                id="family"
                placeholder="Family"
                v-model="form.lastName"
            />
            <div
                v-bind:class="{ error: $v.form.lastName.$error }"
                v-if="!$v.form.lastName.required"
                style="color: brown"
            >
              Field is required
            </div>
            <!--**********************************email***********************************-->
            <label for="exampleInputEmail1">Email address</label>
            <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="form.emailAdd"
            />

            <div
                v-bind:class="{ error: $v.form.emailAdd.$error }"
                v-if="!$v.form.emailAdd.required"
                style="color: brown"
            >
              email is required.
            </div>

            <div
                v-bind:class="{ error: $v.form.emailAdd.$error }"
                v-if="!$v.form.emailAdd.email"
                style="color: brown"
            >
              email is wrong.
            </div>
            <!--**********************************phone***********************************-->
            <label for="exampleInputPhone">Phone Number</label>
            <input
                type="tel"
                class="form-control"
                id="exampleInputPhone"
                aria-describedby="emailHelp"
                placeholder="Enter Phone, example: 90-892-4258"
                v-model="form.phoneNum"
            />

            <div
                v-bind:class="{ error: $v.form.emailAdd.$error }"
                v-if="!$v.form.phoneNum.onlyNumb"
                style="color: brown"
            >
              Phone numbers must be 10 digits or less.
            </div>
            <!--**********************************password***********************************-->
            <!--            <label for="exampleInputPassword1">Password</label>-->
            <!--            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">-->
            <!--**********************************gender***********************************-->
            <br />
<!--            <ToggleCheckBoxes></ToggleCheckBoxes>-->
            <!--**********************************birth date***********************************-->
<!--            <label for="datepicker">Date of birth</label>-->
<!--            <date-picker-->
<!--                :config="options2"-->
<!--                :value="form.birth"-->
<!--                v-model="form.birth"-->
<!--                id="datepicker"-->
<!--            ></date-picker>-->
            <div
                v-bind:class="{ error: $v.form.birth.$error }"
                v-if="!$v.form.birth.required"
                style="color: brown"
            >
              Birth date required.
            </div>
            <!--******************************************************************************-->
            <br />
            <button
                class="btn btn-secondary"
                type="submit"
                :disabled="$v.form.$invalid"
            >
              Submit
            </button>
            <br /><br />
            <div></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";

import {
  required,
  minLength,
  between,
  helpers,
} from "vuelidate/lib/validators";
import email from "vuelidate/lib/validators/email";


export default {
  name: "App",
  data() {
    return {
      options2: {
        useCurrent: false,
        format: "DD/MMMM/YYYY",
      },
      value: {
        datepicker: "12/7/2001",
      },
      form: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        phoneNum: "",
        birth: "",
        firstNameArab: "",
      },
    };
  },
  validations: {
    form: {
      //***************
      firstName: {
        required: required,
        minLength: minLength(2),
        onlyText(firstName) {
          return /(^$)|(^[a-zA-z]+([\s][a-zA-Z]+)*$)/.test(firstName); // checks for english letters and allow null at the beginning, allow space between 2 words
        },
      },
      //***************
      firstNameArab: {
        required: required,
        minLength: minLength(2),
        onlyText(firstNameArab) {
          return /(^$)|(^[ء-ي]+([\s][ء-ي]+)*$)/.test(firstNameArab); // checks for arabic letters and allow null at the beginning, allow space between 2 words, allow arabic letters only
        },
      },
      //***************
      lastName: {
        required,
        onlyText(lastName) {
          return /^[a-zA-z]+([\s][a-zA-Z]+)*$/g.test(lastName); // checks for a-z
          //https://stackoverflow.com/questions/9289451/regular-expression-for-alphabets-with-spaces
        },
        // between:between(12,40)
      },
      //***************
      phoneNum: {
        required,
        onlyNumb(lastName) {
          return /^\D?(\d{2}|\d{3})\D?\D?(\d{3})\D?(\d{4}|\d{3})$/g.test(
              lastName
          ); // checks for a-z
          //https://stackoverflow.com/questions/9289451/regular-expression-for-alphabets-with-spaces
        },
        // between:between(12,40)
      },
      //***************
      emailAdd: {
        required: required,
        email: email,
      },
      //***************
      birth: {
        required: required,
        // email: email
      },
    },
  },

  watch: {
    // transform first letter into capital
    form: {
      handler() {
        this.form.firstName =
            this.form.firstName.charAt(0).toUpperCase() +
            this.form.firstName.slice(1);
        this.form.lastName =
            this.form.lastName.charAt(0).toUpperCase() +
            this.form.lastName.slice(1);
        // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
      },
      deep: true,
    },
  },

  mounted() {
    this.$v.$touch();
  },

  methods: {
    submitForm() {
      // if(this.$v.firstName.$invalid)
      if (this.$v.form.$invalid === false) {
        alert("valid");
      } else {
        alert("invalid");
      }
    },
  },

  components: {
    // DateBirth,
    // ToggleCheckBoxes,
  },
};
</script>
<style>
#app {
  width: 50vw;
  position: relative;
  margin: 0 auto;

  display: block;
  flex-flow: column wrap;
  /*align-items: center;*/
}

label {
  color: #527cc8;
}

input {
  text-align: center;
}

#app {
  /*position: relative; !*this is important otherwise you will get Error: datetimepicker component should be placed within a non-static positioned*!*/
}
</style>
<!--https://jsfiddle.net/gregpeden/hmcLdc5a/-->
<!--https://blog.logrocket.com/form-validation-in-vue-with-vuelidate/-->

