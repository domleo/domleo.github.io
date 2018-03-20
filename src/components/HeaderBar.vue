<template>
  <div id="header-bar">
    <v-toolbar transparent class="grey darken-3" flat height="65px">
      <v-toolbar-title>
        <router-link class="title" to="/">Domenico Leopardi</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn icon slot="activator" dark>
          <icon class="fas fa-bars" name="bars" scale="5"></icon>
        </v-btn>
        <v-list>
          <v-list-tile color="white" v-for="link in links" :key="link.name" :to="link.url" :router="true">
            <v-list-tile-title color="white">{{ link.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Headerbar',
  data: () => ({
    links: [ {name: 'Home', url: '/'},
      {name: 'CV', url: '/cv'},
      {name: 'Blog', url: '/blog'},
      {name: 'Contact', url: '/contact'} ]
  })
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
.fa-bars {
  color: white;
}
svg {
  vertical-align: bottom;
  color: white;
  height: 25px;
  width: 25px;
}
a {
  color: white;
  padding: 5px;
}
.primary--text {
    color: white !important;
}
.fa {
  padding: 5px;
  font-size: 40px;
  height: 40px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
</style>
