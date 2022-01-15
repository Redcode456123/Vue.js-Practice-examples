<template>
  <div id="app">
    <div class="container">
      <div class="row text-center">
        <div>

          <date-picker
              name="date"
              v-model="date"
              :config="options"
          ></date-picker>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// import fontawesome from "@fortawesome/fontawesome";
// import {fas} from "@fortawesome/free-solid-svg-icons";
// fontawesome.library.add(fas);

import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
export default {
  props: { //think about it as import from parent component.
    value: String,
  },

  name: "dateTimePicker",
  data() {
    return {
      date: "",
      options: {
        format: "DD/MM/YYYY h:m:s a",
        useCurrent: false,
        showClear: true,
        showClose: true,
        defaultDate: new Date().setDate(new Date().getDate()+1),
        minDate:new Date()+1,
        maxDate:new Date().setDate(new Date().getDate()+1),
        daysOfWeekDisabled  : [0,6],
        icons: {
          time: "fa fa-clock-o",
          date: "fa fa-calendar",
          up: "fa fa-arrow-up",
          down: "fa fa-arrow-down",
          previous: "fa fa-chevron-left",
          next: "fa fa-chevron-right",
          today: "fa fa-clock-o",
          close: "fa fa-close",
        },
      },
    };
  },
}
</script>

<style scoped>
.container.mt-5 > div > div > input[name="date"] {
  width: 500px;
  display: inline-flex;
}

#app {
  position: relative; /*this is important otherwise you will get Error: datetimepicker component should be placed within a non-static positioned*/
}
</style>