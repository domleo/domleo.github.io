<template>
  <div id="app">
    <v-app dark>
      <header-bar/>
        <v-content>
          <div class="main-container">
            <router-view/>
          </div>
        </v-content>
      <page-footer/>
    </v-app>
  </div>
</template>

<script>
import PageFooter from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'App',
  components: {
    PageFooter,
    HeaderBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main-container {
  min-height: calc(100vh - 109px);
  transform: translateZ(0);
}
</style>
