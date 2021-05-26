<template>
  <Header></Header>
  <Patient></Patient>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Emergency from '../components/Emergency.vue'
import Patient from '../components/Patient.vue'

export default {
  name: 'Patients-story',
  components: {
    Header,
    Emergency,
    Patient,
    LatestNews,
    Footer,
    Patient
  }
}
</script>

<style scoped>
.latest {
  margin-top:4em;
}
</style>