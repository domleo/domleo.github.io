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
        <a v-tooltip:top="{ html: 'Click to send me an email' }" href="mailto:domenico.leopardi@gmail.com" target="_blank">
          <icon name="envelope" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view profile on GitHub' }" href="https://github.com/domleo/" target="_blank">
          <icon name="github" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view profile on Linkedin' }" href="https://www.linkedin.com/in/domenicoleopardi" target="_blank">
          <icon name="linkedin" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view my Youtube page' }" href="https://www.youtube.com/user/AnOtherLeopardi" target="_blank">
          <icon name="youtube" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view my profile on Google+' }" href="https://plus.google.com/+DomenicoLeopardi" target="_blank">
          <icon name="google-plus" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view my Tweetwe page' }" href="https://twitter.com/SnowLeopard789" target="_blank">
          <icon name="twitter" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view profile on Facebook' }" href="https://www.facebook.com/domenico.leopardi" target="_blank">
          <icon name="facebook" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <a v-tooltip:top="{ html: 'Click to view profile on Instagram' }" href="https://www.instagram.com/snowleopard_dom" target="_blank">
          <icon name="instagram" scale="10"></icon>
        </a>
        &nbsp;&nbsp;
        <!--a v-tooltip:top="{ html: 'Click to view profile on Instagram' }" href="https://www.workhoppers.com/fr/workhopper/45010/domenico" target="_blank">
          <icon name="workhoppers" scale="10"></icon>
        </a-->
        &nbsp;&nbsp;
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
svg {
    vertical-align: bottom;
    color: white;
    height: 25px;
    width: 25px;
  }
</style>
