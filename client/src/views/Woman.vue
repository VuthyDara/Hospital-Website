<template>
  <Header></Header>
  <Woman></Woman>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Woman from '../components/Woman.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Woman',
  components: {
    Header,
    Woman,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
