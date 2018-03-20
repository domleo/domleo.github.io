<template>
  <div class="homepage">
    <v-container>
      <v-avatar size="250px">
        <img class="img-circle elevation-7 mb-1" src="../assets/logo.png">
      </v-avatar>
      <h1>Hi, I am Domenico Leopardi.</h1>
      <h2>Welcome to my personal website!</h2>
      <v-spacer/>
      <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 text-xs-right>
      <p/>
      <p/>
      <p>
        I taught myself C when I was sixteen and have been experimenting with computer programming ever since.
        This led me to complete a DEC in micro systems at Vanier College, where I had to program 8088 microprocessors in
        C and Assembly. I then continue my studies in Software Engineering. I also have lots of experience
        working with multiple programming languages that work together for the same purpose, but most of it was
        C++. I usually work in Windows, but in the last year, I have worked a lot in Linux environments as well.
      </p>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to my Personal Website!'
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 25px;
 }
h1, h2, p {
  font-weight: normal;
  color: #f8f8f8;
  text-align: left;
}
h2 {
  text-align: right;
}
</style>
