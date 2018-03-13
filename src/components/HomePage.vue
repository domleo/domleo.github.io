<template>
  <div class="homepage">
    <v-container>
      <v-avatar size="250px">
        <img class="img-circle elevation-7 mb-1" src="../assets/logo.png">
      </v-avatar>
      <h1>{{ msg }}</h1>
      <a v-tooltip:top="{ html: 'Click to view profile on CodeWars' }" href="https://www.codewars.com/users/domleo" target="_blank">
        <img src="https://www.codewars.com/users/domleo/badges/micro"/>
      </a>
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
}
</style>
