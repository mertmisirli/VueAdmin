<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

  <NavbarView msg="NavBar Component" />

  <Toast />

  <!-- <h3 class="mt-3 title">Excel Operations</h3> -->


  <div class="">
    <div class="row mt-5 mx-5 order-1">
      <!-- Authentication Part -->
      <div class="data-info col-12 mt-5 mb-5 rounded-3" style="max-height: 450px;">
        <div class="mt-3 pb-3 ">
          <label for="input-token"><span class="pi pi-key"></span>Token</label><br>
          <!-- <InputText id="input-token" v-model="token" placeholder="Enter token" class="mt-2" /> -->
          <textarea type="text" class="form-control mt-3 mx-auto w-100" id="input-token" v-model="token"
            placeholder="Token Girişi" style="max-height: 150px;"></textarea>
        </div>
        <div class="mt-3 col-center">
          <label for="request_date" class="col-12" style="font-family: Helvetica, Arial, sans-serif;"><span
              class="pi pi-calendar mb-2"></span>Tarih</label><br>
          <input type="month" class="form-control w-100" placeholder="Tarih" v-model="date" onfocus="this.showPicker()"
            dateFormat="mm/yy">

          <!-- <Calendar class="mt-2 col-12" view="month" v-model="date" :locale="localeSettings" dateFormat="mm/yy"
            id="request-date" style="max-width: 450px;" placeholder="Tarih Seçin" /> -->
        </div>
        <div class="mt-4 pb-2">
          <Button @click="getExcelFile" class="rounded-2" type="submit" label="İndir" style="height: 45px;" />
        </div>
      </div>

      <!-- Content Part -->
      <div class=" col-12 bg-secondary rounded-3">
        <!-- Filter Part -->
        <div class="row justify-content-end">
          <!-- Filter Input Area  -->
          <div class="col-9">
            <input class="rounded-2 pt-1 pb-1 px-3 p-1" type="text " style="width: 100%; margin-top: 5px;"
              placeholder="Arama Yapın">
          </div>
          <div class="col-3 justify-content-end">
            <!-- Adding data to Sql -->
            <Button @click="addToSql()" class="rounded-2" type="submit" label="Filtre" style="height: 40px;" />
          </div>
        </div>

        <!-- Form Data Part -->
        <div class="content-part rounded-3 table-responsive mt-md-2 mt-3 mb-3" style="height:450px;">
          <table class="table table-striped">
            <caption></caption>
            <tbody>
              <tr v-for="(user, index) in excelData" :key="index">
                <td v-if="index === 0" class="sticky-row bg-info">#</td>
                <td v-else>{{ index }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[0]
                }}</td>
                <td v-else>{{ user[0] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[1]
                }}</td>
                <td v-else>{{ user[1] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info"
                  style="font-size: 14px; background-color: rgb(40, 200, 240);">{{
                    user[2] }}</td>
                <td v-else style="font-size: 14px;">{{ user[2] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[3]
                }}</td>
                <td v-else>{{ user[3] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div class="row mt-5 mx-5 m-4 order-1">

      <!-- İşlem Geçmişi -->
      <div class="col-12 col-md-3 mb-4 bg-secondary rounded-4 table-responsive" style="height: 510px;">
        <div class="card h-md-100 mt-2 rounded-5 ">
          <p class="mt-2">İşlem Geçmişi</p>
        </div>
        <!-- History -->
        <ul style="list-style-type: none; max-height: 600px;" class="mt-4 card mx-auto">
          <li>
            <div class="row mb-1">
              <div class="col-3 bg-success">Icon</div>
              <div class="col-9 bg-warning">İcerik</div>
            </div>
          </li>
          <li>
            <div class="row mb-1">
              <div class="col-3 bg-success">Icon</div>
              <div class="col-9 bg-warning">İcerik</div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="col-3 bg-success">Icon</div>
              <div class="col-9 bg-warning">Dosya Veritabanından Çekildi</div>
            </div>
          </li>
          <li>
            <span></span>Hatalı Token
          </li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>Veritabanına Kayıt Edildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>Veritabanına Kayıt Edildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>Veritabanına Kayıt Edildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>
          <li><span></span>Veritabanına Kayıt Edildi</li>
          <li><span></span>23/06 İndirildi</li>
          <li><span></span>Dosya Veritabanından Çekildi</li>



        </ul>
      </div>


      <div class="col-1">

      </div>

      <!-- İndirme Geçmişi -->
      <div class="col-12 col-md-8  bg-secondary rounded-4" style="height: 510px;">
        <div class="download-history-title">
          <p class="card h-md-100 mt-2 rounded-5">İndirme Geçmişi</p>
        </div>
        <div class="content-part rounded-3 table-responsive mt-md-2 mt-3 mb-3" style="height:450px;">
          <table class="table table-striped">

          </table>
        </div>
        <div class="download-history-list">

        </div>
      </div>
    </div>
  </div>


  <!-- Example Dashboard Template  -->
  <!-- https://preview.themeforest.net/item/metronic-responsive-admin-dashboard-template/full_screen_preview/4021469?_ga=2.165255103.1015261567.1687434573-213871109.1687241792 -->


  <Footer />
</template>

<script>
import * as XLSX from 'xlsx';
import NavbarView from '../components/NavBar.vue'
import Calendar from 'primevue/calendar';

try {
  if (this.excelData.length === 0) {
    const storedData = localStorage.getItem('excelData');
    if (storedData) {
      this.excelData = JSON.parse(storedData);
    }
  }
} catch (error) {

}

export default {
  name: 'ExcelView',
  components: {
    NavbarView,
    Calendar
  },
  data() {
    return {
      students: [
        // {id:1, name:'Varol', not:55},
        // {id:2, name:'Ali', not:75},
        // {id:3, name:'Mehmet', not:85},
      ],
      localeSettings: {
        monthNames: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık'
        ],
        monthNamesShort: [
          'Oca',
          'Şub',
          'Mar',
          'Nis',
          'May',
          'Haz',
          'Tem',
          'Ağu',
          'Eyl',
          'Eki',
          'Kas',
          'Ara'
        ]
      }

    }
  },
  methods: {
    handleFileSelect(event) {
      this.columns = []
      const file = event.target.files[0];
      if (file.name != null) {
        console.log(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });

          const worksheet = workbook.Sheets[workbook.SheetNames[0]];

          excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          console.log(excelData.length);

          // Getting Selected Column Values
          // for (let index = 0; index < excelData.length; index++) {
          //   const element = excelData[index];
          //   // console.log(element.length);
          //   console.log(element[7] + " " + element[9]);
          //   this.columns.push({ name: element[2], value: element[3] });

          // }
          const columnNames = excelData[0]; // İlk satırı kolon isimleri olarak kabul edelim

          for (let index = 0; index < columnNames.length; index++) {
            const columnName = columnNames[index];
            this.columns.push({ name: columnName, value: columnName });
          }
        }

        reader.readAsArrayBuffer(file);
      }
    },
    getExcelFile() {
      if (this.token === undefined || this.token === '' || this.date === undefined) {
        this.showError('Token or Date Can Not Be Empty ');
        return 0;
      }

      console.log("Date : " + this.date);
      responseList = [];

      const excel_request_data = {
        "token": this.token,
        "date": this.date
      };

      // fetch(this.apiUrl + '/excel/getfile', {
      fetch("http://localhost:8060/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(excel_request_data)
      })
        .then(response => response.json())
        .then(json => {

          console.log(json)
          count = 0

          json.forEach(element => {

            responseList.add({
              "id": count + 1,
              "pos_banka_vkn": element.pos_bank_vkn,
              "pos_banka_adi": element.pos_bank_name,
              "toplam": element.sum
            });

            count++;

            console.log("Id : " + element.id + " customerName : " + element.customerName + " customerPassword : " + element.customerPassword);
          });


          // saving into localstorage if needed
          // localStorage.setItem('excelData', JSON.stringify(this.excelData));
        })
    }
  },
  mounted() {
    try {
      const storedData = localStorage.getItem('excelData');
      if (storedData) {
        this.excelData = JSON.parse(storedData);
        console.log("mounted " + this.excelData);
      }
    } catch (error) {
      console.log("mounted error");
    }
  },
  created() {
  }
}


</script>


<script setup>
import { ref } from "vue";
import { inject } from 'vue';
import { useToast } from "primevue/usetoast";

var eleman = ref()
var excelData = ref()
eleman = "deger"




const date = ref();
const token = ref();

const apiUrl = inject('apiUrl');
console.log(apiUrl);

const selectedCity = ref();
const columns = ref([
  {}
]);

const toast = useToast();

const showSuccess = (message) => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
};

const showInfo = (message) => {
  toast.add({ severity: 'info', summary: 'Info Message', detail: message, life: 3000 });
};

const showWarn = (message) => {
  toast.add({ severity: 'warn', summary: 'Warn Message', detail: message, life: 3000 });
};

const showError = (message) => {
  toast.add({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
};

</script>

<style>
.btn-groups Button {
  margin-left: 15px;
  height: 40px;
}

#excel-btn {
  text-align: center;
}

#excel-btn button {
  margin-left: 15px;
  color: p-button-primary;
}

.data-info {
  box-shadow: 3px 7px 13px 6px #888888;
  background-color: rgba(231, 226, 226, 0.737);
}

.content-part {
  background-color: rgba(237, 236, 236, 0.851);
  box-shadow: 2px 2px 5px 0px #888888
}

.sticky-row {
  position: sticky;
  top: 0;
  background-color: #e2b87d;
  /* İstediğiniz arka plan rengini burada belirtebilirsiniz */
  font-weight: bold;
  color: red;
}





.table-cols ul li {}

.table-cols ul {}
</style>