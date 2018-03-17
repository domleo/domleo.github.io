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
        <v-tooltip top>
          <a slot="activator" href="mailto:domenico.leopardi@gmail.com">
            <icon class="fa fa-envelope" name="envelope" scale="10"></icon>
          </a>
          <span>Click to send me an email</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://github.com/domleo/">
            <icon class="fa fa-github" name="github" scale="10"></icon>
          </a>
          <span>Click to view profile on GitHub</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://www.linkedin.com/in/domenicoleopardi">
            <icon class="fa fa-linkedin" name="linkedin" scale="10"></icon>
          </a>
          <span>Click to view profile on Linkedin</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://www.youtube.com/user/AnOtherLeopardi">
            <icon class="fa fa-youtube" name="youtube" scale="10"></icon>
          </a>
          <span>Click to view profile on Youtube</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://plus.google.com/+DomenicoLeopardi">
            <icon class="fa fa-google-plus" name="google-plus" scale="10"></icon>
          </a>
          <span>Click to view profile on Google+</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://twitter.com/SnowLeopard789">
            <icon class="fa fa-twitter" name="twitter" scale="10"></icon>
          </a>
          <span>Click to view profile on Twiiter</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://www.facebook.com/domenico.leopardi">
            <icon class="fa fa-facebook" name="facebook" scale="10"/>
          </a>
          <span>Click to view profile on Facebook</span>
        </v-tooltip>
        <v-tooltip top>
          <a slot="activator" href="https://www.instagram.com/snowleopard_dom">
            <icon class="fa fa-instagram" name="instagram" scale="10"></icon>
          </a>
          <span>Click to view profile on Intragram</span>
        </v-tooltip>
        <!--a v-tooltip:top="{ html: 'Click to view profile on Instagram' }" href="https://www.workhoppers.com/fr/workhopper/45010/domenico" target="_blank">
          <icon name="workhoppers" scale="10"></icon>
        </a-->
      </v-flex>
      <v-flex xs12 px-3 py-3 sm6 md6 lg6 xl6 order-1 text-xs-left>
        <v-tooltip top>
          <v-card :flat=true slot="activator">
            <a href="https://www.codewars.com/users/domleo/completed">
              <img src="https://www.codewars.com/users/domleo/badges/small"/>
            </a>
          </v-card>
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
  background: #000000;
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
