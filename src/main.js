import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // PrimeVue temasını içe aktarın
import 'primevue/resources/primevue.min.css'; // PrimeVue stil dosyasını içe aktarın
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import 'primeicons/primeicons.css';
import Menubar from 'primevue/menubar';
import Listbox from 'primevue/listbox';
import Calendar from 'primevue/calendar';




import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


const app = createApp(App);

const apiUrl = "http://localhost:8095/api/v1/";
//const apiUrl = "http://13.53.84.126:3000/";
app.provide('apiUrl', apiUrl);

app.use(PrimeVue);
app.use(router)
app.use(ToastService);



app.component('Calendar', Calendar)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.component('Menubar', Menubar)
app.component('Toast', Toast);
app.component('Listbox', Listbox);


app.mount('#app')
