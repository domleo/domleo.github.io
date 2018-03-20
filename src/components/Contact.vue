<template>
    <div class="homepage">
        <v-container>
            <h1>Contact</h1>
            <p>
              The best way to contact me is via e-mail at <a href="mailto:domenico.leopardi@gmail.com">domenico.leopardi@gmail.com</a>.
            </p>
            <p>
                If you prefer to speak to me instead, you may call or leave a message at: <a href="tel:1-514-799-5699"> 1-514-799-5699 </a>
            </p>
            <p>
                Or you may e-mail your coordinates and what time I may reach you at. I will get back to you as soon as I can.
            </p>
            <h2>Hope to hear from you soon!</h2>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'Contact'
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
a {
  color: #f8f8f8;
}
</style>
