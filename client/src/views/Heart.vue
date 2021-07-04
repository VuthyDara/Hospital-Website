<template>
  <Header></Header>
  <Hearts></Hearts>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Hearts from '../components/Heart.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Heart',
  components: {
    Header,
    Hearts,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
