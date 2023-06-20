<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

  <div>
    <!-- <nav>
      <router-link :to="{name:'dashboard'}">Dashboard</router-link> |
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'excel'}">Excel</router-link>
    </nav> -->

    <NavbarView/>

    <div class="mt-3">
      <p>Dashboard Page</p>
    </div>

     <!-- <div>
      <span @click="anasayfa">Anasayfa</span>
      <span @click="geri">Geri</span>
      <span @click="ileri">İleri</span>
    </div> -->
  </div>
  <router-view/>
</template>

<script>
  import NavbarView from '../components/NavBar.vue'

  export default {
    components: {
      NavbarView
    },

    methods: {
      anasayfa(){
        this.$router.push({name:'dashboard'})
      },
      geri(){
        this.$router.go(-1)
      },
      ileri(){
        this.$router.go(1)
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 5px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
span{
  padding: 5px 5px;
  cursor: pointer;
}
</style>