<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

  <!-- <nav>
      <router-link :to="{name:'dashboard'}">Dashboard</router-link> |
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'excel'}">Excel</router-link>
  </nav> -->

  <NavbarView/>
  

  <div class="mt-5">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Anasayfa</h2>
    <!-- <HelloWorld msg="Welcome to home Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavbarView from '../components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavbarView
  }
}
</script>
