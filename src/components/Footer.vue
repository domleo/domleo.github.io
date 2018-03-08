<template>
  <div id='footer'>
  <!--v-footer id="footer" class="blue-grey lighten-5"-->
    <v-layout row wrap align-left>
      <!--v-flex xs12 md4-->
        <div class="white--text ml-3">
          Made by Domenico Leopardi
          <v-layout justify-space-between>
            <router-link to='/'>Home</router-link>
            <router-link to='/aboutme'>About Me</router-link>
            <router-link to='/projects'>Projects</router-link>
            <router-link to='/blog'>Blog</router-link>
            <router-link to='/contactme'>Contact me</router-link>
            <!--a href="/" class="body-2">Home</a-->
            <!--a href="/aboutme" class="body-2">About Me</a-->
            <!--a href="/projects" class="body-2">Projects</a-->
            <!--a href="/blog" class="body-2">Blog</a-->
            <!--a href="https://www.github.com/domleo" class="body-2">Github</a-->
            <!--a href="/contact" class="body-2">Contact me</a-->
          </v-layout>
        </div>
      <!--/v-flex-->
    </v-layout>
  <!--/v-footer-->
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
#footer {
  z-index: 98;
  margin: 0;
  height: 42;
  div {
    color: #2B3940;
  }
  svg {
    color: black;
  }
}
</style>
