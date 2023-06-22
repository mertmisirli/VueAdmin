<!-- Bayi İşlemleri için Buton Altına devam eden butonlar -->
<!-- Token Ekleme Alanı Yatay Tablonun Üstüne-->
<!-- Tarih Gün Seçimi Kaldır -->
<!-- Uzak Bilgisayar Docker Configure Ayarları -->
<!-- Veritabanı Entity Ayarları -->
<!-- Geçmiş Dönem Belgeler Log ve Kayıt edilsin ve Tekrar Gib Bağlanma ihtiyac Yok -->
<!-- Filtre İşlemleri || Banka Ad || Toplam Değer Sıralama -->


<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

  <NavbarView msg="NavBar Component" />

  <Toast />

  <!-- <h3 class="mt-3 title">Excel Operations</h3> -->

  
  <div class="">
    <div class="row mt-5 m-4 order-1 ">
      <!-- Authentication Part -->
      <div class="data-info col-12 col-md-2 mt-5 mb-2 p-2 rounded-3" style="max-height: 450px;">
        <div class="mt-3 pb-3 ">
          <label for="input-token"><span class="pi pi-key"></span>Token</label><br>
          <!-- <InputText id="input-token" v-model="token" placeholder="Enter token" class="mt-2" /> -->
          <textarea type="text" class="form-control mt-3 mx-auto w-100" id="input-token" v-model="token" placeholder="Token Girişi"
            style="max-height: 150px;"></textarea>
        </div>
        <div class="mt-3 col-center">
          <label for="request_date" class="col-12" style="font-family: Helvetica, Arial, sans-serif;"><span
              class="pi pi-calendar mb-2"></span>Tarih</label><br>
              <input type="date" class="form-control w-100" placeholder="Tarih" v-model="date" onfocus="this.showPicker()" dateFormat="dd/mm/yy" >

              <!-- <Calendar class="mt-2 col-12" v-model="date" :locale="localeSettings" dateFormat="dd/mm/yy"
            id="request-date" style="max-width: 450px;" placeholder="Tarih Seçin" /> -->
        </div>
        <div class="mt-4 pb-2">
          <Button @click="getExcelFile" class="rounded-2" type="submit" label="İndir" style="height: 45px;" />
        </div>
      </div>

      <!-- Space -->
      <div class="col-12 col-md-1 my-2 my-md-0" style="height: 50px; ">
      </div>

      <!-- Content Part -->
      <div class=" col-12 col-md-9 ml-4 ">
        <div class="row justify-content-end">
          <div class="col-10">
            <input class="rounded-2 pt-1 pb-1 px-3 p-1" type="text " style="width: 100%; margin-top: 5px;" placeholder="Arama Yapın" >
          </div>
          <div class="col-2 justify-content-end">
            <!-- Adding data to Sql -->
            <Button @click="addToSql()" class="rounded-2" type="submit" label="Filtre" style="height: 40px;" />
          </div>
        </div>
        <div class="content-part rounded-3 table-responsive mt-md-2 mt-3" style="height:450px;">
          <table class="table table-striped">
            <caption></caption>
            <tbody>
              <tr v-for="(user, index) in excelData" :key="index">
                <td v-if="index === 0" class="sticky-row bg-info" >#</td>
                <td v-else>{{ index }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[0] }}</td>
                <td v-else>{{ user[0] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[1] }}</td>
                <td v-else>{{ user[1] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="font-size: 14px; background-color: rgb(40, 200, 240);">{{
                  user[2] }}</td>
                <td v-else style="font-size: 14px;">{{ user[2] }}</td>

                <td v-if="index === 0" class="sticky-row bg-info" style="background-color: rgb(40, 200, 240);">{{ user[3] }}</td>
                <td v-else>{{ user[3] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div class="row mt-5 m-4 order-1 ">
      <div class="col-12 col-md-4 mb-4 bg-warning">
        <div class="card h-md-100 mt-2">
          <p class="mt-2">İşlem Geçmişi</p>
        </div>
        <ul style="list-style-type: none;" class="mt-5 card">
            <li><span></span>İndirildi</li>
            <li><span></span>Hatalı Token</li>
            <li><span></span>23/06 İndirildi</li>
            <li><span></span>Dosya Veritabanından Çekildi</li>
            <li><span></span>Veritabanına Kayıt Edildi</li>
          </ul>
      </div>
      <div class="col-12 col-md-7 bg-danger" style="height: 450px;">
        <p class="bg-white">İndirme Geçmişi</p>
      </div>
    </div>
  </div>


  <!-- Example Dashboard Template  -->
  <!-- https://preview.themeforest.net/item/metronic-responsive-admin-dashboard-template/full_screen_preview/4021469?_ga=2.165255103.1015261567.1687434573-213871109.1687241792 -->






  <div class="mt-5">
    <!-- <div id="excel-btn">
      <button>Get All Data</button>
      <button>Export Excel</button>
      <button>Import Excel</button>
      <button>Show History</button>
      <button>Delete File</button>
    </div> -->

    <!-- <div class="btn-groups mt-5">
      <span><Button label="Get All Data" raised severity="info" icon="pi pi-check" size="small"/></span>
      <span><Button label="Import Excel" @click="handleFileSelect()" raised severity="success" icon="pi pi-upload" size="small"/></span>
      <span><Button label="Export Excel" raised severity="warning" icon="pi pi-file-export" size="small"/></span>
      <span><Button label="Show History" plain text raised icon="pi pi-history" size="small"/></span>
      <span><Button label="Delete File" raised severity="danger" icon="pi pi-trash" size="small"/></span>
    </div> -->

    <!-- Getting Excel File From the User-->
    <!-- <div class="m-5">
      <label for="formFile" class="form-label">Dosya Seçin</label>
      <input class="form-control" type="file" id="formFile" accept=".xlsx, .xls" @change="handleFileSelect">
    </div> -->

    <!-- Show Columns of Selected Excel File -->
    <!-- <div>
      <h4>File Content</h4>

      <div class="row mt-5 mb-5">
        <div class="col-3">
          <p>Columns</p>
          <Listbox v-model="selectedCity" :options="columns" multiple filter optionLabel="name"
            class="w-full md:w-14rem m-2" />
        </div>

        <div class="col-8">
          Content
        </div>
      </div>


    </div> -->


    <!-- <div v-for="student in students" :key="student.id">
      <router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>
    </div> -->
  </div>
  <Footer/>
</template>

<script>
import * as XLSX from 'xlsx';
import NavbarView from '../components/NavBar.vue'
import Calendar from 'primevue/calendar';
import Footer from '../components/Footer.vue'
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
        this.showError('Token veya Tarih Geçersiz');
        return 0;
      }

      console.log(this.date);

      const fullDate = this.date.toString();
      const year  = fullDate.substr(0,4);
      const month = fullDate.substr(5,2);
      const day   = fullDate.substr(8,2)
      //const year  = this.date.getFullYear()
      console.log(day + '-' + month + '-' + year);

      const excel_request_data = {
        "token": this.token,
        "date":  day + '-' + month + '-' + year
      };

      fetch(this.apiUrl + 'excel/getfile', {
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

          link.href = url;
          link.download = month + '-' + year + '-gib.xlsx'; // Dosya adını istediğin şekilde değiştirebilirsin
          link.click();

          // Bellekten URL'yi temizle


          fileReader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const data = new Uint8Array(arrayBuffer);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            this.excelData = jsonData;

            for (let index = 0; index < this.excelData.length; index++) {
              const element = this.excelData[index][2];
              //console.log(element);

            }

            console.log("Length : " + this.excelData.length);
            localStorage.setItem('excelData', JSON.stringify(this.excelData));

            this.showSuccess(month + "/" + year + '-gib.xlsx' + ' Dosyası İndirildi')

          };
          fileReader.readAsArrayBuffer(blob);
          URL.revokeObjectURL(url);

        })
        .catch(error => {
          console.error('Excel dosyasi indirme hatasi:', error);
        });
    },
    addToSql() {

    }
  },
  mounted() {
    try {
      const storedData = localStorage.getItem('excelData');
      if (storedData) {
        this.excelData = JSON.parse(storedData);
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

var excelData = ref()

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