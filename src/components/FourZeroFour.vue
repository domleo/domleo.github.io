<template>
  <div class="FourZeroFour">
    <v-container>
      <h2>404</h2>
      <p>
        Nothing here. Click <router-link to="/">here</router-link> to get back to the main page
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FourZeroFour'
}
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
    margin-top: 25px;
  }
</style>
