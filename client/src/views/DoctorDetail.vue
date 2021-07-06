<template>
  <Header></Header>
  <Doctordetail></Doctordetail>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Doctordetail from '../components/Doctor-detail.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'ContactPage',
  components: {
    Header,
    Doctordetail,
    LatestNews,
    Footer
  }
}
</script>

<style scoped>
.emergency {
  height: 250px;
  display: block;
  margin-bottom: -20px;
}

.contact {
  margin-bottom: 50px;
}
</style>