<template>
  <Header></Header>
  <Patient1></Patient1>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Emergency from '../components/Emergency.vue'
import Patient1 from '../components/Patient1.vue'

export default {
  name: 'Patient1',
  components: {
    Header,
    Emergency,
    Patient1,
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