<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <NavbarView/>
  

  <div class="mt-5">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Anasayfa</h2>
    <!-- <HelloWorld msg="Welcome to home Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '../components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavbarView
  }
}
</script>
