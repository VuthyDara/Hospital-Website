<template>
  <Header></Header>
  <Stomachs></Stomachs>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Stomachs from '../components/Stomach.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Stomach',
  components: {
    Header,
    Stomachs,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
