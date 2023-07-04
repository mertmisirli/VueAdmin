
<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <Toast />
    <div class="container login-part p-5 mb-5 rounded-5 text-center">
        <h2 class="text-info" style="font-family: Poppins-Bold;">Login Panel</h2>
        <div class="row mt-5">
            <div class="col-md-4 d-none d-md-flex justify-content-center align-items-center login-img">
                <img src="../assets/30032020090831.png" class="img-fluid" alt="Yurtici Cargo" width="800" height="400">
            </div>

            <div class="col-md-2">

            </div>

            <div
                class="col-12 col-md-5 col-xs-10 mt-5 mb-5 user-info rounded-3 d-flex align-items-center justify-content-center">
                <form @submit.prevent="login">
                    <div>
                        <label for="username"><span class="pi pi-user"></span>Username</label><br>
                        <InputText class="rounded-4 p-3 mt-2 w-100" placeholder="Type your username" type="text"
                            id="username" v-model="username" required="true" />
                    </div>
                    <div class="mt-4">
                        <label for="password"><span class="pi pi-unlock"></span>Password</label><br>
                        <InputText class="rounded-4 p-3 mt-2 w-100" placeholder="Type your password" type="password"
                            id="password" v-model="password" required="true" />
                    </div>
                    <div class="d-grid gap-2 mt-5">
                        <Button class="rounded-2" type="submit" label="Login" severity="success" id="submit-btn"></Button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { ref } from "vue";


const checked = ref(false);

export default {
    data() {
        return {
            isAuthenticated: '',
            username: '',
            password: ''
        };
    },
    methods: {
        login() {

            const formData = {
                "email": this.username,
                "password": this.password
            };

            console.log("Form Data : " + JSON.stringify(formData));

            fetch(("http://localhost:8095/api/v1/auth/authenticate"), {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(json => {
                    
                    console.log("Access Token : " + json["access_token"]);
            
                    if(json["access_token"] != null){
                        this.$router.push({ name: 'home' });
                    }else {
                    // If fails to login logs error message 
                    }
                })
                .catch(error => {
                    this.showError('Yanlış Email veya Şifre')
                })
        },

        logout() {
            localStorage.removeItem('token');
            this.isAuthenticated = false;

        }
    },

    created() {
        const token = localStorage.getItem('token');
        if (token) {
            this.isAuthenticated = true;
        }
    }
};
</script>

<script setup>
import { useToast } from "primevue/usetoast";

import { inject } from 'vue';
const apiUrl = inject('apiUrl');

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
#submit-btn {
    height: 45px;
}

.user-info {
    background-color: rgba(231, 226, 226, 0.737);
    box-shadow: 3px 7px 13px 6px #888888;
    height: 450px;
    align-items: center;
    flex-direction: column;
}

.login-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--italic);
    background-color: rgba(237, 236, 236, 0.851);
    margin-top: 50px;
}

form div {
    margin: 15px;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form label {
    width: 120px;
}

button {
    color: p-button-primary;
    background-color: p-button-primary;
}


.vertical-line {
    border-left: 0.5px solid black;
    height: 600px;
    /* Çizginin yüksekliğini istediğiniz değere ayarlayın */
    margin: 0 auto;
}

@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }

    .login-part img {
        display: none;
    }
}
</style>
