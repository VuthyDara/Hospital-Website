<template>
  <Header></Header>
  <TipTwo></TipTwo>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import TipTwo from '../components/TipTwo.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Tip2',
  components: {
    Header,
    TipTwo,
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