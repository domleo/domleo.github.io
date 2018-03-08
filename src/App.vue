<template>
  <div id="app">
    <v-app dark>
      <!--img src="./assets/logo.png"-->
      <v-avatar size="125px">
        <img class="img-circle elevation-7 mb-1" src="./assets/logo.png">
      </v-avatar>
      <div class="main-container">
        <v-content>
          <router-view></router-view>
        </v-content>
      </div >
      <footer></footer>
    </v-app>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  overflow: hidden;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
.main-container {
  min-height: calc(100vh - 109px);
  transform: translateZ(0);
}
</style>
