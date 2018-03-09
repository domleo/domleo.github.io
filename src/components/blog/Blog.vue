<template>
  <div class="blog">
      <v-content>
        <v-container>
          <v-layout row wrap align-center>
            <v-flex>
              <p>
                I've created this blog to showcase computer projects I have or am working on.
                These projects will cover just about anything that is technology I happen to be interested in.
                Anything from building desktop computers with elaborate water cooling systems, installing/confguring linux, arduino creations and C/C++ or python programs.
                I'll try to explain how I did it along the way.
                Enjoy!
              </p>
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
p {
  color: #ffffff;
}
</style>
