<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

  <NavbarView msg="NavBar Component" />

  <Toast />

  <div class="">
    <div class="row mt-5 mx-5 order-1">
      <!-- Authentication Part -->
      <div class="data-info col-12 mt-5 mb-5 rounded-3" style="max-height: 450px;">
        <div class="mt-3 pb-3 ">
          <label for="input-token"><span class="pi pi-key"></span>Token</label><br>
          <textarea type="text" class="form-control mt-3 mx-auto w-100" id="input-token" v-model="token"
            placeholder="Token Girişi" style="max-height: 150px;"></textarea>
        </div>
        <div class="mt-3 col-center">
          <label for="request_date" class="col-12" style="font-family: Helvetica, Arial, sans-serif;"><span
              class="pi pi-calendar mb-2"></span>Tarih</label><br>
          <input type="month" class="form-control w-100" placeholder="Tarih" v-model="date" onfocus="this.showPicker()"
            dateFormat="mm/yy">

       </div>
        <div class="mt-4 pb-2">
          <Button @click="getExcelFile" class="rounded-2" type="submit" label="İndir" style="height: 45px;" />
          <Button @click="getExcelFile" class="rounded-2 mx-2" type="submit" label="Görüntüle" style="height: 45px;" />
        </div>
      </div>

      <!-- Content Part -->
      <div class=" col-12 bg-secondary rounded-3">
        <!-- Filter Part -->
        <div class="row justify-content-end">
          <!-- Filter Input Area  -->
          <div class="col-9">
            <input class="rounded-2 pt-1 pb-1 px-3 p-1" type="text" style="width: 100%; margin-top: 5px;"
              placeholder="Arama Yapın">
          </div>
          <div class="col-3 justify-content-end mt-1">
            <!-- Adding data to Sql -->
            <Button @click="addToSql()" class="rounded-2" type="submit" label="Filtre" style="height: 40px;" />
            <Button @click="addToSql()" class="rounded-2 mx-2 bg-white text-black" type="submit" label="Pdf Aktarım" style="height: 40px;" />
          </div>
        </div>

        <!-- Form Data Part -->
        <div class="content-part rounded-3 table-responsive mt-md-2 mt-3 mb-3" style="height:450px;">
          <table class="table table-striped">
            <caption></caption>
            <tbody>
              <tr v-for="(row, index) in responseList" :key="index">
                <td v-if="index === 0" class="sticky-row bg-info">#</td>
                <td v-else>{{ row["id"] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);"></td>
                <td v-else>{{ row["pos_banka_vkn"] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ row["pos_banka_adi"]
                }}</td>
                <td v-else>{{ row["pos_banka_adi"] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info"
                  style="font-size: 14px; background-color: rgb(40, 200, 240);">{{
                    row["pos_uye_sirket"] }}</td>
                <td v-else style="font-size: 14px;">{{ row["pos_uye_sirket"] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ row["toplam"]
                }}</td>
                <td v-else>{{ row["toplam"] }}</td>
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
    getExcelFile() {
      if (this.token === undefined || this.token === '' || this.date === undefined) {
        this.showError('Token veya Tarih Bilgisi Eksik');
        return 0;
      }

      console.log("Date : " + this.date.substring(0,4) + " " + this.date.substring(5,7));


      const excel_request_data = {
        "date": this.date,
        "token": this.token
      };

      // fetch(this.apiUrl + '/excel/getfile', {
      fetch(this.apiUrl +  "gibpos/getfile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify(excel_request_data)
      })
      .then(response => response.blob())
        .then(blob => {
          const fileReader = new FileReader();

          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');

          
          const month = this.date.substring(0,4);
          const year = this.date.substring(5,7);
          link.href = url;
          link.download = month + '-' + year + '-gib.xlsx'; // Dosya adı 06-2023-gib.xlsx           link.click();


          fileReader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const data = new Uint8Array(arrayBuffer);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            this.responseList = jsonData;

            //console.log("Length : " + this.excelData.length);
            //localStorage.setItem('excelData', JSON.stringify(this.excelData));

          };
          fileReader.readAsArrayBuffer(blob);
          URL.revokeObjectURL(url);

        })
        .catch(error => {
          console.error('Excel dosyasi indirme hatasi:', error);
        });

          // saving into localstorage if needed
          // localStorage.setItem('excelData', JSON.stringify(this.excelData));
  },
  mounted() {
    try {
      const storedData = localStorage.getItem('excelData');
      if (storedData) {
        this.excelData = JSON.parse(storedData);
        //console.log("mounted " + this.excelData);
      }
    } catch (error) {
      console.log("mounted error");
    }
  },
  created() {
  }
}

}


</script>


<script setup>
import { ref } from "vue";
import { inject } from 'vue';
import { useToast } from "primevue/usetoast";

var excelData = ref()

var responseList = ref()


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
  toast.add({ severity: 'success', summary: 'Başarılı', detail: message, life: 3000 });
};

const showInfo = (message) => {
  toast.add({ severity: 'info', summary: 'Bilgi', detail: message, life: 3000 });
};

const showWarn = (message) => {
  toast.add({ severity: 'warn', summary: 'Uyarı', detail: message, life: 3000 });
};

const showError = (message) => {
  toast.add({ severity: 'error', summary: 'Hata', detail: message, life: 3000 });
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