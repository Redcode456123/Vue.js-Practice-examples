<template>
  <div id="ProductItem">

    <body>
    <div class="container">
      <div class="row">
        <h2 class="base" data-ui-id="page-title-wrapper" itemprop="name" style="text-align: center">
        </h2>
        <div class="col-md-8 offset-md-2">
          <div class="row" id="gradient" style="padding-top: 10%">
            <p style="text-align: center">
              {{ JSON.stringify(this.itemRequested.model).replace(/['"]+/g, '') }}</p>
            <div class="col-md-4">

              <img :src="`${(JSON.stringify(this.itemRequested.image).substr(1,this.itemRequested.image.length ))}`"
                   class="img-fluid">

              <!--              <img src="http://www.prepbootstrap.com/Content/images/shared/misc/s7e.png" class="img-fluid">-->
              <button class="btn btn-primary"
                      style="display:block;margin-left:auto;margin-right: auto;width: 50%;margin-top: 30px"
                      v-on:click="$store.dispatch('addProductToCart', {itemRequested});">Add to cart
<!--                      v-on:click="$store.commit('addToCart', {itemRequested});">Add to cart-->
<!--                "$store.dispatch('addProductToCart', {itemRequested});"-->
              </button>
              <p style="text-align: center;"> ${{ JSON.stringify(this.itemRequested.price).replace(/['"]+/g, '') }}</p>
            </div>
            <div class="col-md-8" id="overview">
              <div class="row">
                <div class="col-xs-6 col-md-6">
                  <ul class="pb-product-details-ul">
                    <li><span class="fa fa-calendar">&nbsp;Released 2016, March</span></li>
                    <li><span class="fa fa-phone">&nbsp;157g, 7.7mm thickness</span></li>
                    <li><span class="fa fa-bluetooth-b">&nbsp;Android OS, v6.0, up to 7.0</span></li>
                    <li><span class="fa fa-microchip">&nbsp;32/64/128GB Storage</span></li>
                  </ul>
                </div>
                <div class="col-xs-3 col-md-3 text-xs-center" id="hits">
                  <span class="fa fa-bar-chart">&nbsp;24%</span>
                  <p>22,010,155 HITS</p>
                </div>
                <div class="col-xs-3 col-md-3 text-xs-center" id="fan">
                  <a href="#"><span class="fa fa-heart">&nbsp;1904</span></a>
                  <p>BECOME A FAN</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-3 col-md-3 pb-product-details-fa">
                  <span class="fa fa-mobile fa-lg"></span>
                  <h3><strong>5.5"</strong></h3>
                  <p>1440x2560 pixels</p>
                </div>
                <div class="col-xs-3 col-md-3 pb-product-details-fa">
                  <span class="fa fa-camera fa-lg"></span>
                  <h3><strong>12 MP</strong></h3>
                  <p>2160p</p>
                </div>
                <div class="col-xs-3 col-md-3 pb-product-details-fa">
                  <span class="fa fa-microchip fa-lg"></span>
                  <h3><strong>4GB RAM</strong></h3>
                  <p>Exynos 8890</p>
                </div>
                <div class="col-xs-3 col-md-3 pb-product-details-fa">
                  <span class="fa fa-battery-4 fa-lg"></span>
                  <h3><strong>3600mAH</strong></h3>
                  <p>Li-ion</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="tabs_div">
              <p>Specifications :</p>
              <ul>

              </ul>
              <div>
                <table class="table">
                  <tbody>
                  <tr>
                    <td class="success">Physical size:</td>
                    <td>5.5 inches</td>
                  </tr>
                  <tr>
                    <td class="success">Resolution:</td>
                    <td>1440x2560 pixels</td>
                  </tr>
                  <tr>
                    <td class="success">Pixel density:</td>
                    <td>534 dpi</td>
                  </tr>
                  <tr>
                    <td class="success">Technology:</td>
                    <td>Super AMOLED</td>
                  </tr>
                  <tr>
                    <td class="success">Screen-to-body-ratio:</td>
                    <td>76.09%</td>
                  </tr>
                  <tr>
                    <td class="success">Features:</td>
                    <td>Scratch-resistant glass (Corning Gorilla Glass 4), Light sensor, Proximity sensor</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="table">
                  <tbody>
                  <tr>
                    <td class="success">Camera:</td>
                    <td>12 megapixels</td>
                  </tr>
                  <tr>
                    <td class="success">Flash:</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td class="success">Aperture size:</td>
                    <td>F1.7</td>
                  </tr>
                  <tr>
                    <td class="success">Camera sensor size:</td>
                    <td>1/2.5"</td>
                  </tr>
                  <tr>
                    <td class="success">Pixel size:</td>
                    <td>1.4 um</td>
                  </tr>
                  <tr>
                    <td class="success">Hardware Features:</td>
                    <td>Optical image stabilization, Autofocus (Phase detection)</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="table">
                  <tbody>
                  <tr>
                    <td class="success">System chip:</td>
                    <td>Qualcomm Snapdragon 820 MSM8996</td>
                  </tr>
                  <tr>
                    <td class="success">Processor:</td>
                    <td>Quad-core, 2200 MHz, Kryo, 64-bit</td>
                  </tr>
                  <tr>
                    <td class="success">GPU:</td>
                    <td>Adreno 530</td>
                  </tr>
                  <tr>
                    <td class="success">System memory:</td>
                    <td>4GB memory</td>
                  </tr>
                  <tr>
                    <td class="success">Built-in storage:</td>
                    <td>32GB</td>
                  </tr>
                  <tr>
                    <td class="success">Storage Expansion:</td>
                    <td>microSD, microSDHC, microSDXC up to 200 GB</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="table">
                  <tbody>
                  <tr>
                    <td class="success">Capacity:</td>
                    <td>3600mah</td>
                  </tr>
                  <tr>
                    <td class="success">Type:</td>
                    <td>Not user replaceable, Li - Ion</td>
                  </tr>
                  <tr>
                    <td class="success">Wireless charging:</td>
                    <td>Optional</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="table">
                  <tbody>
                  <tr>
                    <td class="success">Sensors:</td>
                    <td>Accelerometer, Gyroscope, Compass, Hall, Barometer</td>
                  </tr>
                  <tr>
                    <td class="success">Notifications:</td>
                    <td>Haptic feedback, Music ringtones (MP3), Polyphonic ringtones, Vibration, Flight mode, Silent
                      mode, Speakerphone
                    </td>
                  </tr>
                  <tr>
                    <td class="success">Other:</td>
                    <td>Voice dialing, Voice commands, Voice recording, TTY/TDD</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- you need to include the shieldui css and js assets in order for the charts to work -->


    <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-b4e8">
      <div class="u-align-left-xs u-clearfix u-sheet u-valign-bottom u-sheet-1"></div>
      <section class="u-backlink u-clearfix u-grey-80">
        <a class="u-link" href="https://nicepage.com/website-templates" target="_blank">
          <span>Website Templates</span>
        </a>
        <p class="u-text">
          <span>created with</span>
        </p>
        <a class="u-link" href="" target="_blank">
          <span>Website Builder Software</span>
        </a>.
      </section>
    </footer>


    </body>
  </div>
</template>

<script>


export default {
  data() {
    return {
      itemRequested: "",
    }
  },
  name: "ProductItem",
// props:['products'],

  created: function () {
    this.itemRequested = this.$store.getters['getProductRequestedById'](this.$route.query.id);
  },
}

</script>

<style scoped>

div#gradient {
  padding-top: 18% !important;
}

p:not(.u-text-variant) {
  margin-bottom: 19px;
}

.col-md-4 > p {
  text-align: center;
  margin-top: 0px;
}

/*p[data-v-5da3a358]:not(.u-text-variant) {*/
/*  margin-top: 12px;*/
/*  margin-bottom: 0px;*/
/*}*/

.pb-product-details-ul {
  list-style-type: none;
  padding-left: 0;
  color: black;
}

.pb-product-details-ul > li {
  padding-bottom: 5px;
  font-size: 15px;
}

#gradient {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#feffff+0,ddf1f9+31,a0d8ef+62 */
  background: #feffff; /* Old browsers */
  background: -moz-linear-gradient(left, #feffff 0%, #ddf1f9 31%, #a0d8ef 62%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #feffff 0%, #ddf1f9 31%, #a0d8ef 62%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #feffff 0%, #ddf1f9 31%, #a0d8ef 62%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#feffff', endColorstr='#a0d8ef', GradientType=1); /* IE6-9 */
  border: 1px solid #f2f2f2;
  padding: 20px;
}

#hits {
  border-right: 1px solid white;
  border-left: 1px solid white;
  vertical-align: middle;
  padding-top: 15px;
  font-size: 17px;
  color: white;
}

#fan {
  vertical-align: middle;
  padding-top: 15px;
  font-size: 17px;
  color: white;
}

.pb-product-details-fa > span {
  padding-top: 20px;
}

</style>