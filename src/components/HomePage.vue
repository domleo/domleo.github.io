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
        A little about myself...
      </p>
      <p>
        I have always been a very interested in electronics and computers. I taught myself how to build computers and program
        in C when I was sixteen and have been experimenting with computer programming ever since.
        This led me to complete a DEC in micro systems at Vanier College, where I had to program 8088 microprocessors in
        C and Assembly that worked in real time. I then continue my studies in Software Engineering at Ecole de Technologie
        Superieure. There I learned how to make graphical user interfaces applications for desktop or mobile, multi-threaded
        programs and distributed systems. I also learned how to establish a software developement lifecycle for any software
        product.
      </p>
      <p>
        Most of my experience was been with C++, but I am use to picking new languages very quickly. Thus, I have lots of
        experience working with multiple programming languages, that work together for the same application. I have worked
        with Java in the past (especially during school projects) and I've been learning Javascript on my
        own time. I usually work in Windows, but I have to issues working in Linux or OSX environments as well.
      </p>
      <h2>Programming Languages</h2>
      <p>
        C++, C, Java, SQL, Javascript, Python, Bash
      </p>
      <h2>Tools</h2>
      <p>
        Visual Studio, Eclipse, Git, GitLab, SVN, Windows, Linux, OSX
      </p>
      <h2>Libraries and Frameworks</h2>
      <p>
        Boost, Qt, WxWidgets, Arduino, Unreal Engine 4, VueJS, NodeJS
      </p>
      <h2>Concepts</h2>
      <p>
        Design Pattens, Multi-threaded, Distributed Systems, Software Developoment lifecycle
      </p>
      <h2>Spoken Languages</h2>
      <p>
        English Written and Spoken - Fluent Native
      </p>
      <p>
        French Written and Spoken - Fluent Native
      </p>
      <h2>Education</h2>
      <p>
        BAC - Software Engineering - ETS (In Progess, but nearly done)
      </p>
      <p>
        DEC - Digital Systems - Vanier College
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
p {
  font-size: 110%;
}
</style>
