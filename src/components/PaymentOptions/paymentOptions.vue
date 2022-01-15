<template>
<div style="background-color: #2A6496">


  <div id="main_content" >

    <li class="selected" id="page1" onclick="change_tab(this.id);">Page1</li>
    <li class="notselected" id="page2" onclick="change_tab(this.id);">Page2</li>
    <li class="notselected" id="page3" onclick="change_tab(this.id);">Page3</li>

    <div class="col-50" style="background-color: white">
    <div class='hidden_desc' id="page1_desc">
<!--        <h3>Payment</h3>-->
        <label >Accepted Cards</label>
<!--        <ToggleCheckBoxes></ToggleCheckBoxes>-->
        <div class="icon-container">
          <i class="fa fa-cc-visa" style="color:navy;margin:1px"></i>
          <i class="fa fa-cc-amex" style="color:blue;margin:1px"></i>
          <i class="fa fa-cc-mastercard" style="color:red;margin:1px"></i>
          <i class="fa fa-cc-discover" style="color:orange;margin:1px"></i>
        </div>
        <label for="cname">Name on Card</label>
        <input type="text" id="cname1" name="cardname" placeholder="John More Doe">
        <label for="ccnum">Credit card number</label>
        <input type="text" id="ccnum1" name="cardnumber" placeholder="1111-2222-3333-4444">
        <label for="expmonth">Exp Month</label>
        <input type="text" id="expmonth1" name="expmonth" placeholder="September">
<!--        <div class="row">-->
          <div class="col-50">
            <label for="expyear">Exp Year</label>
            <input type="text" id="expyear1" name="expyear" placeholder="2018">
          </div>
          <div class="col-50">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv1" name="cvv" placeholder="352">
          </div>
<!--        </div>-->
      </div>
    </div>

    <div class='hidden_desc' id="page2_desc">
      <h2>Page 2</h2>
      Hello this is Page 2 description and this is just a sample text .This is the demo of Multiple Tab In Single Page Using JavaScript and CSS.
    </div>

    <div class='hidden_desc' id="page3_desc">
      <h2>Page 3</h2>
      Hello this is Page 3 description and this is just a sample text .This is the demo of Multiple Tab In Single Page Using JavaScript and CSS.
      Hello this is Page 3 description and this is just a sample text .This is the demo of Multiple Tab In Single Page Using JavaScript and CSS.
    </div>

    <div class="col-50" style="background-color: white">
    <div id="page_content">
        <!--        <h3>Payment</h3>-->
        <label >Accepted Cards</label>
        <!--        <ToggleCheckBoxes></ToggleCheckBoxes>-->
        <div class="icon-container">
          <i class="fa fa-cc-visa" style="color:navy;margin:1px"></i>
          <i class="fa fa-cc-amex" style="color:blue;margin:1px"></i>
          <i class="fa fa-cc-mastercard" style="color:red;margin:1px"></i>
          <i class="fa fa-cc-discover" style="color:orange;margin:1px"></i>
        </div>
        <label for="cname">Name on Card</label>
        <input type="text" id="cname" name="cardname" placeholder="John More Doe">
        <label for="ccnum">Credit card number</label>
        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
        <label for="expmonth">Exp Month</label>
        <input type="text" id="expmonth" name="expmonth" placeholder="September"  >
<!--        <div class="row">-->
          <div class="col-50">
            <label for="expyear">Exp Year</label>
            <input type="text" id="expyear" name="expyear" placeholder="2018">
          </div>
          <div class="col-50">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352">
          </div>
<!--        </div>-->
      </div>
    </div>

    <script type="application/javascript">
      function change_tab(id)
      {
        document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
        document.getElementById("page1").className="notselected";
        document.getElementById("page2").className="notselected";
        document.getElementById("page3").className="notselected";
        document.getElementById(id).className="selected";
      }
    </script>

  </div>


  </div>
</template>

<script>
import ToggleCheckBoxes from "../ToggleCheckBoxes";

export default {
  name: "paymentOptions",
  data() {
    return {}
  },
  component: {
    ToggleCheckBoxes
  },
}

</script>

<style scoped>
body
{
  background-color:#2E3B0B;
  margin:0px auto;
  padding:0px;
  font-family:helvetica;
  /*height:300px;*/
}
h1
{
  text-align:center;
  font-size:35px;
  margin-top:60px;
  color:#BEF781;
}
h1 p
{
  text-align:center;
  margin:0px;
  font-size:18px;
  text-decoration:underline;
  color:white;
}
#main_content
{
  margin-top:50px;
  width:500px;
  /*margin-left:250px;*/
}
#main_content li
{
  display:inline;
  list-style-type:none;
  background-color:#688A08;
  padding:10px;
  border-radius:5px 5px 0px 0px;
  color:#292A0A;
  font-weight:bold;
  cursor:pointer;
}
#main_content li.notselected
{
  background-color:#688A08;
  color:#292A0A;
}
#main_content li.selected
{
  background-color:#D0F5A9;
  color:#292A0A;
}
#main_content .hidden_desc
{
  display:none;
  visibility:hidden;
}
#main_content #page_content
{
  /*position: absolute;*/
  /*width: fit-content;*/
  background-color:#D0F5A9;
  padding:10px;
  margin-top:9px;
  border-radius:0px 5px 5px 5px;
  color:#2E2E2E;
  line-height: 1.6em;
  word-spacing:4px;
}

.icon-container {
  /*margin-bottom: 20px;*/
  /*padding: 7px 0;*/
  /*font-size: 24px;*/
}


</style>