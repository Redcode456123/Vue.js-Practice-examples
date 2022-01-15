<template>
  <div id="app" class="container">

    <div class="table-responsive">
      <table class="table align-items-center table-flush" id="example">
        <thead class="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Level</th>
          <th scope="col">Code</th>
          <th scope="col">Last Updated</th>
          <th scope="col">Programs</th>
        </tr>
        </thead>
        <!--all the data are coming from js function -->

        <tfoot>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Level</th>
          <th scope="col">Code</th>
          <th scope="col">Last Updated</th>
          <th scope="col">Programs</th>
        </tr>
        </tfoot>
      </table>
    </div>

  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from "jquery";

export default {
  name: "datatableJson",

  created() {
    this.getData()
  },
  computed: {
    models() {
      return (this.all_users.map((l) => JSON.stringify(l.onSale)));
    }
  },

  methods: {
    getData: async function () {
      // IMPORTANT : disable cors policy in chrome for this to work ;https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
      let self = this

      function getParagraphs(htmlString) {

        const div = document.createElement("div");
        div.insertAdjacentHTML("beforeend", htmlString);

        return Array.from(div.querySelectorAll("select"))
            //   .filter(p => p.textContent !== "") // because of the lonely </p> at the end - optional
            .map(p => (p.innerText)).map(e => e.split(','));
      }


      fetch("./public/src/assets/phones.json") //file name is "data.json"
          .then(response => response.json())          //REMARK:  use it only if the root parent is json
          .then(response => {
            self.all_users = response.onSale;
            $('#example').DataTable({
                  data: self.all_users,
                  columns: [
                    {data: "id"},
                    {data: "level"},
                    {data: "code"},
                    {data: "lastUpdated"},
                    {
                      //https://jsfiddle.net/annoyingmouse/kt82jqsf/
                      data: function (data, r) { // to populate the regular rows from json file
                        var times = (data.programs); //for :organisationUnits/{var}/programs(array)
                        var option = "";
                        var ddl = "<select size='1' id='row-1-division' name='row-1-division'>";
                        $.each(times, function (k, v) {
                          option += "<option value=" + v.id + ">" + v.id + "</option>,";
                        })
                        ddl = ddl + option + '</select>';
                        return ddl;
                      },
                    }
                  ],
                  initComplete: function () {
                    this.api().columns([1, 4]).every(function (d) { //show only second and fifth filter columns; d is the indexes of the columns that have filters
                          var column = this;
                          //
                          var select = $("<select><option></option></select>");// the first element to be empty in filter column
                          var items = [];
                          var x;
                          var count = 0;
                          //     alert(JSON.stringify(column.data()));
                          for (x in column.data()) { //items in columns 1 and columns 4
                            if (isNaN(x) === false)
                              count = count + 1;
                          }
                          for (let c = 0; c < count; c++) {
                            if (isNaN(column.data()[c]) === true) {   //this is the column that includes array data, adjust it to your needs
                              items.push(getParagraphs(column.data()[c].replace(/,[^,]*$/, ""))); //strip options tag then add to array, remove last comma
                            } else {
                              items.push(column.data()[c]);
                            }
                          } // end loop
                          items = items.join(',');//join all the arrays separated by comma into one ;
                          items = items.split(',');
                          items = [...new Set(items)];
                          // alert(items);
                          // var json = (Object.assign({}, [...new Set(items)])); //converted my array into json


                          // json = Array.from(new Set(Array.prototype.concat(...items)));//join arrays into one and then remove duplicates
                          // json = [...new Set(json)];
                          // alert(json);
//******************************************************************
                          select.appendTo($(column.footer()).empty())
                              .on('change', function () {
                                var val = $(this).val();// $(this) is the changing dropdown
                                column.search(val).draw()
                              });
//****************************************************************
                          column.data().unique().sort().each(function (s, j) { //to put elements in the dropdown filter
                            $.each(items, function (k, v) {
                              select.append($('<option value=' + v + '>' + v + '</option>'));
                              items = null;
                            });
                          });
                        }
                    );
                  },
                }
            )
          }).catch(function (error) {
        // this.loading = false
        console.log(error.response + " error");
      })
    },
  },
}
</script>

<style scoped>

</style>