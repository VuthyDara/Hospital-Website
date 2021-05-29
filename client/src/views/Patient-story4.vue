<template>
  <Header></Header>
  <PatientFour></PatientFour>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Emergency from '../components/Emergency.vue'
import PatientFour from '../components/PatientFour.vue'

export default {
  name: 'Patient4',
  components: {
    Header,
    Emergency,
    PatientFour,
    LatestNews,
    Footer,
    PatientFour,
  }
}
</script>

<style scoped>
.latest {
  margin-top:4em;
}
</style>