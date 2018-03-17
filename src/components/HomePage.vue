<template>
  <div class="homepage">
    <v-container>
      <v-avatar size="250px">
        <img class="img-circle elevation-7 mb-1" src="../assets/logo.png">
      </v-avatar>
      <h1>Hi, I am Domenico Leopardi.</h1>
      <h2>Welcome to my personal website!</h2>
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
h1, h2 {
  font-weight: normal;
  color: #f8f8f8;
  text-align: left;
}
h2 {
  text-align: right;
}
</style>
