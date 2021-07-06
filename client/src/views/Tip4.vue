<template>
  <Header></Header>
  <TipFour></TipFour>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import TipFour from '../components/TipFour.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Tip4',
  components: {
    Header,
    TipFour,
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