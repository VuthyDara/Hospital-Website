<template>
  <Header></Header>
  <Womans></Womans>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Womans from '../components/Woman.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Woman',
  components: {
    Header,
    Womans,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
