<template>
  <Header></Header>
  <AllTips class="tip"></AllTips>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import AllTips from '../components/AllTips.vue'

export default {
  name: 'Alltips-page',
  components: {
    Header,
    AllTips,
    LatestNews,
    Footer,
  }
}
</script>

<style scoped>
.tip {
  margin-top: 2em;
}
.latest {
  margin-top:4em;
}
</style>