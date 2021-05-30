<template>
  <Header></Header>
  <Contact class="contact"></Contact>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Contact from '../components/Contact.vue'


export default {
  name: 'ContactPage',
  components: {
    Header,
    Contact,
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