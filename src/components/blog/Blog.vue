<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <v-app dark>
      <v-content>
        <v-container>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <div class="text-xs-center">
                <v-avatar size="125px">
                  <img class="img-circle elevation-7 mb-1" src="../../assets/logo.png">
                </v-avatar>
                <div class="headline">Domenico <span style="font-weight:bold">Leopardi</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">Descriptions can go here...</div>
                <v-layout justify-space-between>
                  <a href="/" class="body-2">Home</a>
                  <a href="javascript:;" class="body-2">About</a>
                  <a href="https://www.github.com/domleo" class="body-2">Github</a>
                  <a href="javascript:;" class="body-2">Other</a>
                </v-layout>
              </div>
            </v-flex>
            <v-flex xs12 md5 offset-md2>
              <div v-for="post in posts" :key="post.title">
                <v-card class="my-3" hover>
                  <v-card-media class="white--text" height="170px" :src="post.imgUrl">
                    <v-container fill-height fluid>
                      <v-layout>
                        <v-flex xs12 align-end d-flex>
                          <span class="headline"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-text>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn icon class="red--text">
                      <v-icon medium>fa-reddit</v-icon>
                    </v-btn>
                    <v-btn icon class="light-blue--text">
                      <v-icon medium>fa-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                      <v-icon medium>fa-facebook</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat class="blue--text">Read More</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!--v-footer class="secondary" app>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> and <a class="white--text" href="https://github.com/vwxyzjn" target="_blank">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer-->
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      title: 'Your Logo',
      posts: [
        {
          title: 'Post 1',
          content: 'Context 1.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
        },
        {
          title: 'Post 2',
          content: 'Context 2.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        },
        {
          title: 'Post 3',
          content: 'Context 3.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
