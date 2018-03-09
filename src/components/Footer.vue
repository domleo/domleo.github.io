<template>
  <div id='page-footer'>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :router="true"
        ripple>
        {{ link.name }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-right white--text>
        &copy;2018 — <strong>Domenico Leopardi</strong>&nbsp;&nbsp;
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Page-Footer',
  data: () => ({
    links: [ {name: 'Home', url: '/'},
      {name: 'About Me', url: '/aboutme'},
      {name: 'Blog', url: '/blog'},
      {name: 'Contact', url: '/contact'} ]
  })
}
</script>

<style lang="scss" scoped>

</style>
