<template>
  <div id='page-footer'>
  <v-footer height="auto" class="grey darken-3">
    <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 py-3 text-xs-center white--text>
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
      </v-flex>
      <v-flex xs12 py-3 px-3 text-xs-left white--text>
        <a v-tooltip:top="{ html: 'Click to send me an email' }" href="mailto:domenico.leopardi@gmail.com" target="_blank">
          <icon class="fa fa-envelope" name="envelope" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view profile on GitHub' }" href="https://github.com/domleo/" target="_blank">
          <icon class="fa fa-github" name="github" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view profile on Linkedin' }" href="https://www.linkedin.com/in/domenicoleopardi" target="_blank">
          <icon class="fa fa-linkedin" name="linkedin" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view my Youtube page' }" href="https://www.youtube.com/user/AnOtherLeopardi" target="_blank">
          <icon class="fa fa-youtube" name="youtube" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view my profile on Google+' }" href="https://plus.google.com/+DomenicoLeopardi" target="_blank">
          <icon class="fa fa-google-plus" name="google-plus" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view my Tweetwe page' }" href="https://twitter.com/SnowLeopard789" target="_blank">
          <icon class="fa fa-twitter" name="twitter" scale="10"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Click to view profile on Facebook' }" href="https://www.facebook.com/domenico.leopardi" target="_blank">
          <icon class="fa fa-facebook" name="facebook" scale="10"/>
        </a>
        <a v-tooltip:top="{ html: 'Click to view profile on Instagram' }" href="https://www.instagram.com/snowleopard_dom" target="_blank">
          <icon class="fa fa-instagram" name="instagram" scale="10"></icon>
        </a>
        <!--a v-tooltip:top="{ html: 'Click to view profile on Instagram' }" href="https://www.workhoppers.com/fr/workhopper/45010/domenico" target="_blank">
          <icon name="workhoppers" scale="10"></icon>
        </a-->
      </v-flex>
      <v-flex xs12 py-1 sm6 md6 lg6 xl6 order-1 text-xs-center>
        <v-tooltip top>
          <v-avatar :tile=true slot="activator">
            <a href="https://www.codewars.com/users/domleo/completed">
              <img src="https://www.codewars.com/users/domleo/badges/small"/>
            </a>
          </v-avatar>
          <span>View my profile on CodeWars</span>
        </v-tooltip>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6 order-2 text-xs-right>
        <v-card-text>&copy;{{ new Date().getFullYear() }} — <strong>Domenico Leopardi</strong></v-card-text>
      </v-flex>
    </v-layout>
    </v-container>
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
a {
  padding: 5px;
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
.fa:hover {
  opacity: 0.7;
}
.fa-envelope {
  border-radius: 25%;
  background: #585858;
}
.fa-github {
  background: #585858;
}
.fa-linkedin {
  border-radius: 25%;
  background: #007bb5;
}
.fa-youtube {
  border-radius: 25%;
  background: #bb0000;
}
.fa-google-plus {
  background: #dd4b39;
}
.fa-twitter {
  background: #55ACEE;
}
.fa-facebook {
  background: #3B5998;
}
.fa-instagram {
  border-radius: 25%;
  background: #517fa4;
}
</style>
