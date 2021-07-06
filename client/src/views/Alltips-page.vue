<template>
  <Header></Header>
  <AllTip class="tip"></AllTip>
  <LatestNews class="latest"></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Alltip from '../components/AllTip.vue'

export default {
  name: 'Alltips',
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