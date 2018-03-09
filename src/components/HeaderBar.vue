<template>
  <div id="header-bar">
    <v-toolbar transparent class="grey darken-3">
      <v-toolbar-title><router-link class="title" to="/">Domenico Leopardi</router-link></v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Headerbar'
}
</script>

<style lang="scss" scoped>
.toolbar {
  z-index: 100;
}
.title {
  color: white;
  text-decoration: none;
}
</style>
