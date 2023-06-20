<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

    <div class="container login-part p-5 rounded-5 text-center">
        <h2 class="fw-bold">Login Panel</h2>
        <div class="row mt-5">
            <div class="col-3 d-flex justify-content-center align-items-center mt-5">
                <img src="../assets/30032020090831.png" class="img-fluid" alt="Yurtici Cargo" width="800" height="600">
            </div>

            <div class="col-3">

            </div>
            <div class="col-6 user-info rounded-3 d-flex align-items-center justify-content-center">
                <form @submit.prevent="login">
                    <div>
                        <label for="username"><span class="pi pi-user"></span>Username</label><br>
                        <InputText class="rounded-5 p-3" placeholder="Type your username" type="text" id="username"
                            v-model="username" required="true" />
                    </div>
                    <div>
                        <label for="password"><span class="pi pi-unlock"></span>Password</label><br>
                        <InputText class="rounded-5 p-3" placeholder="Type your password" type="password" id="password"
                            v-model="password" required="true" />
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <Button type="submit" label="Login" severity="success" id="submit-btn"></Button>
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
            username: '',
            password: ''
        };
    },
    methods: {
        login() {

            const formData = {
                "username": this.username,
                "password": this.password
            };

            console.log("Username : " + this.username);
            console.log("Password : " + this.password);

            // Checking username and password 
            if (this.username === 'admin' && this.password === 'password') {
                // Redirects to dashboard if authentication is successful

                this.$router.push({ name: 'home' });

                // axios.post('http://13.53.84.126:3000/login', formData)
                //     .then(response => {
                //         console.log(response.data);
                //         this.$router.push({ name: 'dashboard' });
                //         console.log("Başarili Giris")
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     })
                fetch('http://13.53.84.126:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        // İşlemler devam ediyor...
                    })
                    .catch(error => {
                        console.log(error);
                    });

                console.log("Başarili Giris")

            } else {
                // If fails to login logs error message 
                console.log('Giriş başarısız!');
            }
        }
    }
};
</script>

<style>
#submit-btn {
    height: 45px;
}

.user-info {
    background-color: rgba(231, 226, 226, 0.737);
    box-shadow: 5px 10px #888888;
    height: 450px;
    align-items: center;
    flex-direction: column;
}

.login-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--italic);
    background-color: rgba(236, 233, 233, 0.825);
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
</style>
