<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

  <NavbarView msg="NavBar Component" />

  <Toast />

  <h3 class="mt-3 title">Excel Operations</h3>
  <div class="row mt-5 m-4 ">
    <!-- Authentication Part -->
      <div class="data-info col-12 col-md-2 mb-2 p-2 rounded-3">
        <div class="mt-3 pb-3 ">
          <label for="input-token"><span class="pi pi-key"></span>Token Adres</label><br>
          <!-- <InputText id="input-token" v-model="token" placeholder="Enter token" class="mt-2" /> -->
          <input type="text" class="form-control col-12 mt-3 mx-auto" id="input-token" v-model="token" placeholder="Enter Token"
            style="max-width: 450px;">
        </div>
        <div class="mt-3">
          <label for="request_date" class="col-12"><span class="pi pi-calendar"></span>Tarih Seçim</label><br>
          <Calendar class="mt-2 col-12 mx-auto" v-model="date" dateFormat="mm/yy" id="request-date" style="max-width: 450px;" placeholder="Enter Date"/>

        </div>
        <div class="mt-4 pb-2">
          <Button @click="getExcelFile" class="" type="submit" label="İndir" style="height: 45px;" />
        </div>
      </div>

    <div class="col-1">
    </div>
    <!-- Content Part -->
    <div class="content-part col-12 col-md-9 ml-4 rounded-3 ">
      
      <h3 class="mt-3">Excel Content Part</h3>

      <div class="table-responsive mt-4">
        <table class="table table-striped">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">pos_banka_vkn</th>
              <th scope="col">pos_uye_isyeri</th>
              <th scope="col">pos_banka_adi</th>
              <th scope="col">toplam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>



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
    <div class="m-5">
      <label for="formFile" class="form-label">Dosya Seçin</label>
      <input class="form-control" type="file" id="formFile" accept=".xlsx, .xls" @change="handleFileSelect">
    </div>

    <!-- Show Columns of Selected Excel File -->
    <div>
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


    </div>


    <!-- <div v-for="student in students" :key="student.id">
      <router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>
    </div> -->
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
import NavbarView from '../components/NavBar.vue'

export default {
  name: 'ExcelView',
  components: {
    NavbarView
  },
  data() {
    return {
      students: [
        // {id:1, name:'Varol', not:55},
        // {id:2, name:'Ali', not:75},
        // {id:3, name:'Mehmet', not:85},
      ],

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

          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

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
        this.showError('Token or Date Can Not Be Empty ')
        return 0;
      }
      const excel_request_data = {
        "token": this.token,
        "date": this.date
      }

      console.log("Json Data Token : " + excel_request_data.token + " Date : " + excel_request_data.date);
      console.log("Butona Tiklandi ve Api Url : " + this.apiUrl);
      console.log("Selected Date : " + this.date);

      fetch(this.apiUrl + '/excel/getfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(excel_request_data)
      })
        .then(response => response.blob())
        .then(blob => {
          // Blob'u indir
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = this.date + '_gib.xlsx'; // Dosya adını istediğin şekilde değiştirebilirsin
          link.click();

          // Bellekten URL'yi temizle
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Excel dosyasi indirme hatasi:', error);
        });


      // fetch((this.apiUrl + '/excel/getfile'), {
      //   method : 'POST',
      //   headers : {

      //   }, 
      //   body : JSON.stringify()

      // })


      // fetch('http://13.53.84.126:3000/login', {
      //               method: 'POST',
      //               headers: {
      //                   'Content-Type': 'application/json'
      //               },
      //               body: JSON.stringify(formData)
      //           })
      //               .then(response => response.json())
      //               .then(data => {
      //                   console.log(data);
      //                   // İşlemler devam ediyor...
      //               })
      //               .catch(error => {
      //                   console.log(error);
      //               });

    }
  }
}


</script>


<script setup>
import { ref } from "vue";
import { inject } from 'vue';
import { useToast } from "primevue/usetoast";

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
}



.table-cols ul li {}

.table-cols ul {}
</style>