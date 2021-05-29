<template>
  <Header></Header>
  <PatientThree></PatientThree>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Emergency from '../components/Emergency.vue'
import PatientThree from '../components/PatientThree.vue'

export default {
  name: 'Patient3',
  components: {
    Header,
    Emergency,
    PatientThree,
    LatestNews,
    Footer,
  }
}
</script>

<style scoped>
.latest {
  margin-top:4em;
}
</style>