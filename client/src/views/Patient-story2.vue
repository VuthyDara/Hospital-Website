<template>
  <Header></Header>
  <Patient2></Patient2>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Emergency from '../components/Emergency.vue'
import Patient2 from '../components/Patient2.vue'

export default {
  name: 'Patient2',
  components: {
    Header,
    Emergency,
    Patient2,
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