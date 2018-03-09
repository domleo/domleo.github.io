<template>
  <div id="app">
    <v-app dark>
      <div class="main-container">
        <v-content>
          <router-view/>
        </v-content>
      </div >
      <page-footer/>
    </v-app>
  </div>
</template>

<script>
import PageFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    PageFooter
  }
}
</script>

<style>
#app {
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
  min-height: calc(100vh - 109px);
  transform: translateZ(0);
}
</style>
